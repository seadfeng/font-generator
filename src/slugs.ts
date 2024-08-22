import { FontKey } from "./transforms";


export const styleKeys = [
  "all",
  "normal",
  "cool",
  "fancy",
  "small",
  "bold",
  "italic",
  "bold-italic",
] as const;
export type StyleKey = typeof styleKeys[number];

export const styleFonts: Record<StyleKey, FontKey[]> = {
  "all": [], // keep it empty
  "normal": ["sans", "serifBold", "monospace", "superscript"],
  "cool": [
    "circled", "circledNegative", "fullwidth", "squared",
    "squaredNegative", "inverted", "mirrored", "rotatedLeft", "rotatedRight"
  ],
  "fancy": [
    "script", "boldScript", "fraktur", "boldFraktur",
    "doubleStruck", "smallCaps"
  ],
  "small": [
    "smallCaps", "superscript", "subscript"
  ],
  "bold": [
    "sansBold", "serifBold", "boldScript", "boldFraktur", "serifBoldItalic"
  ],
  "italic": [
    "sansItalic", "serifItalic", "serifBoldItalic", "sansBoldItalic"
  ],
  "bold-italic": [
    "sansBoldItalic", "serifBoldItalic"
  ]
};
