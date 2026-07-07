const fs = require('fs');
let content = fs.readFileSync('prisma/schema.prisma', 'utf8');
content = content.replace(/model\s+([A-Za-z0-9_]+)\s*\{([\s\S]*?)\}/g, (match, modelName, body) => {
  if (body.includes('@@map')) return match;
  const mapName = modelName.toLowerCase();
  // We need to inject @@map("mapName") right before the closing brace
  // Remove the closing brace from body if it's there (it shouldn't be, based on regex)
  return `model ${modelName} {${body}  @@map("${mapName}")\n}`;
});
fs.writeFileSync('prisma/schema.prisma', content);
console.log('Done!');
