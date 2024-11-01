import fs from 'fs';
import path from 'path';
import { alternatingFontKeys, alternatingFonts, fonts, RenameFonts, superFonts } from "../src/fonts";
import { FontKey } from "../src/transforms";

const outputFile = path.join(process.cwd(), 'src', 'transforms.ts');

type FontMap = { [key: string]: string };
type TransformMap = Partial<Record<FontKey, Record<string, string>>>;

const transforms: TransformMap = {};
const normalChars = fonts.normal as string;

Object.keys(fonts).forEach((fontKey) => {
  // if (fontKey !== 'normal') {
  transforms[fontKey] = {};
  const currentChars = fonts[fontKey];
  Array.from(normalChars).map((char, index) => {
    transforms[fontKey][char] = Array.from(currentChars)[index]
  })
  if (fontKey in superFonts) {
    transforms[fontKey] = {
      ...transforms[fontKey],
      ...superFonts[fontKey]
    }
  }
  // }
});

Object.keys(alternatingFonts).forEach((fontKey) => {
  transforms[fontKey] = {};
});

const fontKeys = Object.keys(fonts).filter(key => key);

function toReadableFontName(key: string): string {
  if (key in RenameFonts) {
    return RenameFonts[key];
  } else {
    return key
      .split(/(?=[A-Z])/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }
}

const fontsObject: FontMap = Object.fromEntries(
  fontKeys.map(key => [key, toReadableFontName(key)])
);

const alternatingFontsObject: FontMap = Object.fromEntries(
  alternatingFontKeys.map(key => [key, toReadableFontName(key)])
);

const tsCode = `
// This file is auto-generated. Do not edit manually.
import type { AlternatingFontKey } from "../src/fonts.ts"

export const transforms = ${JSON.stringify(transforms, null, 2)} as const;

export const fontKeys = ${JSON.stringify(fontKeys, null, 2)} as const;

export type FontKey = typeof fontKeys[number] | AlternatingFontKey;

export const fonts: Record<FontKey, string> = ${JSON.stringify({ ...fontsObject, ...alternatingFontsObject, normal: "Serif" }, null, 2)};
`;

fs.writeFileSync(outputFile, tsCode);

console.log(`Transforms have been generated and written to ${outputFile}`);