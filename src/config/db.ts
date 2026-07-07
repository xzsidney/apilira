import { PrismaClient } from "@prisma/client";

let prismaInstance = new PrismaClient();

const handler = {
  get(target: any, prop: string | symbol) {
    const value = (prismaInstance as any)[prop];
    if (typeof value === 'function') {
      return value.bind(prismaInstance);
    }
    
    // For delegate objects like prisma.character
    if (value && typeof value === 'object') {
      return new Proxy(value, {
        get(delegateTarget: any, delegateProp: string | symbol) {
          const delegateValue = delegateTarget[delegateProp];
          if (typeof delegateValue === 'function') {
            return async (...args: any[]) => {
              try {
                return await delegateValue.apply(delegateTarget, args);
              } catch (error: any) {
                if (error.message && (error.message.includes('timer has gone away') || error.message.includes('Query engine exited'))) {
                  console.warn("Prisma engine panic detected. Recreating client...");
                  prismaInstance = new PrismaClient();
                  // Retry once
                  const newDelegate = (prismaInstance as any)[prop];
                  return await newDelegate[delegateProp].apply(newDelegate, args);
                }
                throw error;
              }
            };
          }
          return delegateValue;
        }
      });
    }
    return value;
  }
};

// Also export a reset function just in case
export const resetPrisma = () => {
  prismaInstance = new PrismaClient();
};

const prisma = new Proxy({}, handler) as PrismaClient;

export default prisma;
