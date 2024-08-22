import { FontKey } from "./transforms";

export const styleKeys = [
  "all",
  "cool",
  "fancy",
  "small",
  "bold-text",
  "italic",
  "bold-italic",
] as const;
export type StyleKey = typeof styleKeys[number];

export const styleFonts: Record<StyleKey, FontKey[]> = {
  "all": [], // keep it empty 
  "fancy": [
    "script", "boldScript", "fraktur", "boldFraktur",
    "doubleStruck", "smallCaps"
  ],
  "cool": [
    "circled", "circledNegative", "fullwidth", "squared",
    "squaredNegative", "inverted", "mirrored", "rotatedLeft", "rotatedRight"
  ],

  "small": [
    "smallCaps", "superscript", "subscript"
  ],
  "bold-text": [
    "sansBold", "serifBold", "boldScript", "boldFraktur", "serifBoldItalic"
  ],
  "italic": [
    "sansItalic", "serifItalic", "serifBoldItalic", "sansBoldItalic"
  ],
  "bold-italic": [
    "sansBoldItalic", "serifBoldItalic"
  ]
};
