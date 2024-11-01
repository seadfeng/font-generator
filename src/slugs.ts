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
  "cursive-font",
  "alternating",
] as const;
export type StyleKey = typeof styleKeys[number];

export const topicKeys = [
  "facebook",
  "twitter",
  "whatsapp",
  "handwriting"
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
    "bubble", "blackBubble", "fullwidth", "squared",
    "vaiLetterlike", "bamumLetterlike", "smallCherokeeLetterlike", "canadianAboriginalLetterlike1", "canadianAboriginalLetterlike2",
    "squaredNegative", "inverted", "mirrored", "rotatedLeft", "rotatedRight"
  ],
  "small-text": [
    "smallCaps", "superscript", "subscript", "sansItalic", "serifItalic"
  ],
  "bold-text": [
    "sansBold", "serifBold", "boldScript", "boldFraktur", "serifBoldItalic",
    "alternatingSansBold", "alternatingSansBoldItalic",
    "alternatingSerifBold", "alternatingSerifBoldItalic"
  ],
  "italic": [
    "sansItalic", "serifItalic", "serifBoldItalic", "sansBoldItalic",
    "alternatingSansBoldItalic", "alternatingSerifBoldItalic"
  ],
  "bold-italic": [
    "sansBoldItalic", "serifBoldItalic",
    "sansItalic", "serifItalic",
    "sansBold", "serifBold", "boldScript", "boldFraktur",
    "alternatingSansBoldItalic", "alternatingSerifBoldItalic"
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
    "bubble", "blackBubble", "alternatingBubble"
  ],
  "square-text": [
    "squared", "squaredNegative", "alternatingSquared", "block"
  ],
  "alternating": [
    "alternatingSerifBold",
    "alternatingSansBold",
    "alternatingBubble",
    "alternatingSquared",
    "alternatingBoldScript",
    "alternatingBoldFraktur",
    "alternatingSansBoldItalic",
    "alternatingSerifBoldItalic",
    "alternatingItalicBold",
    "alternatingCursiveScriptBold",
    "alternatingFraktur",
    "alternatingBold",
    "alternatingBlackBubbleSquared"
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
  handwriting: [
    "script", "boldScript", "subscript"
  ],
  facebook: [
    "fraktur",
    "boldFraktur",
    "sansSerif",
    "sansBold",
    "sansItalic",
    "sansBoldItalic",
    "serifBold",
    "serifItalic",
    "serifBoldItalic",
    "alternatingSerifBold",
    "alternatingSansBold",
    "alternatingBoldScript",
    "alternatingBoldFraktur",
    "alternatingSansBoldItalic",
    "alternatingSerifBoldItalic"
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
    "serifBoldItalic",
    "alternatingSerifBold",
    "alternatingSansBold",
    "alternatingBoldScript",
    "alternatingBoldFraktur",
    "alternatingSansBoldItalic",
    "alternatingSerifBoldItalic"
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
    "serifBoldItalic",
    "alternatingSerifBold",
    "alternatingSansBold",
    "alternatingBoldScript",
    "alternatingBoldFraktur",
    "alternatingSansBoldItalic",
    "alternatingSerifBoldItalic"
  ]
} 