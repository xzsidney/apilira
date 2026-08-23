const { Sequelize } = require('sequelize');
const sequelize = new Sequelize("u328169675_rpgnew", "u328169675_sidmax", "XZspl5127912", {
  host: "193.203.175.233",
  dialect: 'mysql',
  port: 3306,
  logging: false,
});
async function run() {
  try {
    await sequelize.query("ALTER TABLE character_active_missions MODIFY stepDurationMinutes FLOAT;");
    console.log("Allowed FLOAT on stepDurationMinutes");
  } catch(e) {
    console.error(e.message);
  }
  process.exit();
}
run();
