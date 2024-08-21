// 字体唯一索引 - 驼峰命名
const fontKeys = [
  "script",
  "superscript",
  "smallCaps",
  "monospace",
  "mathematicalItalic",
  "mathematicalBoldItalic",
  "mathematicalBold",
  "boldScript",
  "serif",
  "serifBold",
  "serifItalic",
  "serifBoldItalic",
  "circled",
  "circledNegative",
  "doubleStruck",
  "squared",
  "squaredNegative",
  "parenthesized",
  "sans",
  "sansBold",
  "sansItalic",
  "sansBoldItalic"
] as const;

export type FontKey = typeof fontKeys[number];

// Font Name
// 新增时先添加索引到fontKeys
export const fonts: Record<FontKey, string> = {
  script: "Script",
  superscript: "Super Script",
  smallCaps: "Small Caps",
  monospace: "Monospace",
  mathematicalItalic: "Mathematical Italic",
  mathematicalBoldItalic: "Mathematical Bold Italic",
  mathematicalBold: "Mathematical Bold",
  boldScript: "Bold Script",
  serif: "Serif",
  serifBold: "Serif Bold",
  serifItalic: "Serif Italic",
  serifBoldItalic: "Serif Bold Italic",
  doubleStruck: "Double Struck",
  circled: "Circled",
  circledNegative: "Circled Negative",
  squared: "Squared",
  squaredNegative: "Squared Negative",
  parenthesized: "Parenthesized",
  sans: "Sans",
  sansBold: "Sans Bold",
  sansItalic: "Sans Italic",
  sansBoldItalic: "Sans Bold Italic",
}