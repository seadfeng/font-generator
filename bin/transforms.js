const fs = require('fs');
const path = require('path');

const sourceDir = path.join(process.cwd(), 'src', 'transforms');
const outputFile = path.join(process.cwd(), 'src', 'transforms.ts');

let transforms = {};

fs.readdirSync(sourceDir).forEach(file => {
  if (path.extname(file) === '.json') {
    const filePath = path.join(sourceDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(content);

    const key = Object.keys(json)[0];
    transforms[key] = json[key];
  }
});

const tsCode = `
// This file is auto-generated. Do not edit manually.
export const transforms = ${JSON.stringify(transforms, null, 2)};
`;

fs.writeFileSync(outputFile, tsCode);

console.log(`Transforms have been merged and written to ${outputFile}`);