import { FontKey } from "./transforms";

export const styleKeys = [
  "all",
  "cool",
  "fancy",
  "small-text",
  "bold-text",
  "italic",
  "bold-italic",
  "sans-serif",
  "serif",
  "underline",
  "bubble-text",
  "square-text",
  "cursive-font"
] as const;
export type StyleKey = typeof styleKeys[number];

export const topicKeys = [
  "facebook",
  "twitter",
  "whatsapp"
] as const;

export type TopicKey = typeof topicKeys[number];

export const styleFonts: Record<StyleKey, FontKey[]> = {
  "all": [], // keep it empty 
  "cursive-font": ["script", "boldScript", "subscript"],
  "fancy": [
    "script", "boldScript", "fraktur", "boldFraktur",
    "doubleStruck", "smallCaps"
  ],
  "cool": [
    "circled", "circledNegative", "fullwidth", "squared",
    "vaiLetterlike", "bamumLetterlike", "smallCherokeeLetterlike", "canadianAboriginalLetterlike1", "canadianAboriginalLetterlike2",
    "squaredNegative", "inverted", "mirrored", "rotatedLeft", "rotatedRight"
  ],
  "small-text": [
    "smallCaps", "superscript", "subscript", "sansItalic", "serifItalic"
  ],
  "bold-text": [
    "sansBold", "serifBold", "boldScript", "boldFraktur", "serifBoldItalic"
  ],
  "italic": [
    "sansItalic", "serifItalic", "serifBoldItalic", "sansBoldItalic"
  ],
  "bold-italic": [
    "sansBoldItalic", "serifBoldItalic",
    "sansItalic", "serifItalic",
    "sansBold", "serifBold", "boldScript", "boldFraktur"
  ],
  "underline": [
    "smallCaps",
    "boldScript",
    "superscript",
    "squaredNegative",
    "doubleStruck",
    "serifBoldItalic",
    "serifBold",
    "serifItalic",
    "sansSerif",
    "sansItalic",
    "sansBoldItalic",
    "sansBold",
    "monospace",
    "inverted",
    "mirrored",
    "boldFraktur",
    "subscript"
  ],
  "bubble-text": [
    "circled", "circledNegative"
  ],
  "square-text": [
    "squared", "squaredNegative"
  ],
  "sans-serif": [
    "sansSerif",
    "sansBold",
    "sansItalic",
    "sansBoldItalic"
  ],
  "serif": [
    "serifBold",
    "serifItalic",
    "serifBoldItalic"
  ]
};

export const topicFonts: Record<TopicKey, FontKey[]> = {
  facebook: [
    "fraktur",
    "boldFraktur",
    "sansSerif",
    "sansBold",
    "sansItalic",
    "sansBoldItalic",
    "serifBold",
    "serifItalic",
    "serifBoldItalic"
  ],
  twitter: [
    "fraktur",
    "boldFraktur",
    "sansSerif",
    "sansBold",
    "sansItalic",
    "sansBoldItalic",
    "serifBold",
    "serifItalic",
    "serifBoldItalic"
  ],
  whatsapp: [
    "fraktur",
    "boldFraktur",
    "sansSerif",
    "sansBold",
    "sansItalic",
    "sansBoldItalic",
    "serifBold",
    "serifItalic",
    "serifBoldItalic"
  ]
}
