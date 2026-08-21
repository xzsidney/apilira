import { sequelize, User } from './src/models';
async function run() {
  await sequelize.authenticate();
  const user = await User.findOne();
  console.log("Name:", user?.name, "Email:", user?.email, "ID:", user?.id);
  process.exit(0);
}
run();
