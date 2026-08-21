import { sequelize, User, CharacterVampire } from './src/models';
import { Op } from 'sequelize';
async function run() {
  await sequelize.authenticate();
  const realUser = await User.findOne({ where: { email: { [Op.ne]: 'system@liragames.com.br' } } });
  if (realUser) {
    await CharacterVampire.update({ userId: realUser.id }, { where: { isNpc: true, name: { [Op.like]: 'Mestre %' } } });
    console.log('Transferred characters to real user:', realUser.email);
  }
  process.exit(0);
}
run();
