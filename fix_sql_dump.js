const fs = require('fs');
const path = require('path');

// 1. Read schema to get all model names
const prismaSchema = fs.readFileSync(path.join(__dirname, 'prisma/schema.prisma'), 'utf8');
const modelRegex = /model\s+([A-Za-z0-9_]+)\s*\{/g;
const models = [];
let match;
while ((match = modelRegex.exec(prismaSchema)) !== null) {
  models.push(match[1]);
}

// 2. Read the user's original SQL dump
const sqlPath = 'E:\\11_Games\\LiraRPG\\u328169675_xzrpg.sql';
if (!fs.existsSync(sqlPath)) {
  console.error("Could not find SQL file at", sqlPath);
  process.exit(1);
}
let sql = fs.readFileSync(sqlPath, 'utf8');

// 3. Replace lowercase table references `table_name` with `TableName`
for (const model of models) {
  const lower = model.toLowerCase();
  // We look for the exact table name surrounded by backticks
  const regex = new RegExp(`\\\`${lower}\\\``, 'g');
  sql = sql.replace(regex, `\`${model}\``);
}

// 4. Write the fixed SQL dump
const fixedSqlPath = 'E:\\11_Games\\LiraRPG\\u328169675_xzrpg_CORRIGIDO.sql';
fs.writeFileSync(fixedSqlPath, sql);
console.log('Fixed SQL file created successfully at:', fixedSqlPath);

// 5. Generate the DROP query for the user
const dropQuery = `SET FOREIGN_KEY_CHECKS = 0;\nDROP TABLE IF EXISTS ${models.map(m => `\`${m.toLowerCase()}\``).join(', ')};\nSET FOREIGN_KEY_CHECKS = 1;`;
console.log('\n--- DROP QUERY TO RUN IN PHPMYADMIN ---');
console.log(dropQuery);
console.log('---------------------------------------');
