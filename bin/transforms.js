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

    transforms = {
      ...transforms,
      ...json
    }
  }
});

const fontKeys = [
  "circled",
  "circledNegative",
  "doubleStruck",
  "fraktur",
  "frakturBold",
  "inverted",
  "mathematicalBold",
  "mathematicalItalic",
  "mathematicalBoldItalic",
  "mirrored",
  "monospace",
  "parenthesized",
  "sans",
  "sansBold",
  "sansItalic",
  "sansBoldItalic",
  "sansSerif",
  "sansSerifBold",
  "sansSerifItalic",
  "sansSerifBoldItalic",
  "script",
  "boldScript",
  "serif",
  "serifBold",
  "serifItalic",
  "serifBoldItalic",
  "smallCaps",
  "squared",
  "squaredNegative",
  "subscript",
  "superscript"
];

function toReadableFontName(key) {
  return key
    .split(/(?=[A-Z])/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace(/Negative$/, ' Negative');
}

const fonts = Object.fromEntries(
  fontKeys.map(key => [key, toReadableFontName(key)])
);

const tsCode = `
// This file is auto-generated. Do not edit manually.

export const transforms = ${JSON.stringify(transforms, null, 2)};

export const fontKeys = ${JSON.stringify(fontKeys, null, 2)} as const;

export type FontKey = typeof fontKeys[number];

export const fonts: Record<FontKey, string> = ${JSON.stringify(fonts, null, 2)};
`;

fs.writeFileSync(outputFile, tsCode);

console.log(`Transforms have been merged and written to ${outputFile}`);