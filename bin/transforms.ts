import fonts from "@/fonts";
import fs from 'fs';
import path from 'path';

const outputFile = path.join(process.cwd(), 'src', 'transforms.ts');

type FontMap = { [key: string]: string };
type TransformMap = { [key: string]: { [key: string]: string } };

const transforms: TransformMap = {};
const normalChars = fonts.normal as string;

Object.keys(fonts).forEach((fontKey) => {
  if (fontKey !== 'normal') {
    transforms[fontKey] = {};
    const currentChars = fonts[fontKey];
    Array.from(normalChars).map((char, index) => {
      transforms[fontKey][char] = Array.from(currentChars)[index]
    })
  }
});

const fontKeys = Object.keys(fonts).filter(key => key !== 'normal');

function toReadableFontName(key: string): string {
  return key
    .split(/(?=[A-Z])/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace(/Negative$/, ' Negative');
}

const fontsObject: FontMap = Object.fromEntries(
  fontKeys.map(key => [key, toReadableFontName(key)])
);

const tsCode = `
// This file is auto-generated. Do not edit manually.

export const transforms = ${JSON.stringify(transforms, null, 2)} as const;

export const fontKeys = ${JSON.stringify(fontKeys, null, 2)} as const;

export type FontKey = typeof fontKeys[number];

export const fonts: Record<FontKey, string> = ${JSON.stringify(fontsObject, null, 2)};
`;

fs.writeFileSync(outputFile, tsCode);

console.log(`Transforms have been generated and written to ${outputFile}`);