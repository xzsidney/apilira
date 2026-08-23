const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('lirarpg', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.query("ALTER TABLE definition_missions_idle ADD COLUMN category VARCHAR(50) DEFAULT 'OPERATION';")
  .then(() => {
    console.log('Column category added successfully');
    process.exit(0);
  })
  .catch((e) => {
    console.error('Error:', e);
    process.exit(1);
  });
