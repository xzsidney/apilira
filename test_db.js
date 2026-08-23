const { Sequelize } = require('sequelize');
const sequelize = new Sequelize("u328169675_rpgnew", "u328169675_sidmax", "XZspl5127912", {
  host: "193.203.175.233",
  dialect: 'mysql',
  port: 3306,
  logging: false,
});

async function run() {
  try {
    const [results] = await sequelize.query("SELECT * FROM character_active_missions WHERE status='IN_PROGRESS';");
    console.log(results);
  } catch(e) {
    console.error(e.message);
  }
  process.exit();
}
run();
