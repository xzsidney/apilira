import sequelize from './src/config/db';
import { DefinitionLocation } from './src/models/index';

async function test() {
  try {
    const locations = await DefinitionLocation.findAll({
      where: { level: 2 },
      include: [{ model: DefinitionLocation, as: 'children' }]
    });
    console.log(JSON.stringify(locations.map(l => l.toJSON()), null, 2));
  } catch (error) {
    console.error("Error:", error);
  } finally {
    process.exit(0);
  }
}
test();
