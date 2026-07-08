const fs = require('fs'); 
const files = ['attributeController.ts', 'skillController.ts', 'statusController.ts', 'powerController.ts', 'meritFlawController.ts', 'itemController.ts']; 
files.forEach(f => { 
    let content = fs.readFileSync('src/controllers/' + f, 'utf8'); 
    content = content.replace(/as: 'attribute'/g, "as: 'attributeDefinition'"); 
    content = content.replace(/as: 'skill'/g, "as: 'skillDefinition'"); 
    content = content.replace(/as: 'status'/g, "as: 'statusDefinition'"); 
    content = content.replace(/as: 'power'/g, "as: 'powerDefinition'"); 
    content = content.replace(/as: 'meritFlaw'/g, "as: 'meritFlawDefinition'"); 
    content = content.replace(/as: 'item'/g, "as: 'itemDefinition'"); 
    fs.writeFileSync('src/controllers/' + f, content); 
});
console.log("Done");
