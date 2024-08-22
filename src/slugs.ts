import { FontKey } from "./fonts";

export const slugKeys = [
  "all",
  "normal",
  "cool",
  "fancy",
  "small",
  "bold",
  "italic",
  "bold-italic",
] as const;
export type SlugKey = typeof slugKeys[number];

export const slugFonts: Record<SlugKey, FontKey[]> = {
  "all": [],
  "normal": ["superscript"],
  "cool": ["script", "superscript", "circled", "circledNegative"],
  "fancy": ["script"],
  "small": ["superscript", "smallCaps", "script", "monospace"],
  "bold": ["boldScript", "mathematicalBold"],
  "italic": ["mathematicalItalic"],
  "bold-italic": ["mathematicalBoldItalic"]
}