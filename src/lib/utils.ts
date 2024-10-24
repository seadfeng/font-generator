import { appConfig, LocaleType } from "@/config";
import { FontKey } from "@/transforms";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const getOrigin = ({ headers }: { headers: Headers }) => {
  const url = new URL(headers.get("x-request-url")!);
  return `${url.protocol}//${url.host}`;
}

export const getCanonical = ({ headers }: { headers: Headers }) => {
  const url = new URL(headers.get("x-request-url")!);
  return `${url.protocol}//${url.host}${url.pathname}`;
}

export const createAlternates = ({ headers }: { headers: Headers; }) => {
  let languages = {} as Record<LocaleType, string>;
  const linkStr = headers.get("Link")!;
  const links = linkStr.split(',');
  links.forEach(alternateStr => {
    const match = alternateStr.match(/<(.*)>;.*hreflang="(.*)"/);
    if (match && match[1]) {
      if (match[2] !== "x-default") {
        languages[match[2] as LocaleType] = match[1];
      } else {
        languages[appConfig.i18n.defaultLocale] = match[1];
      }
    }
  })

  return {
    canonical: getCanonical({ headers }),
    languages
  }
}

type appendChar = {
  char: string;
  oldChar?: string;
  fontKey: FontKey | "normal"
}

export const addUnderline = ({ char, fontKey }: appendChar) => {
  switch (fontKey) {
    case "smallCaps":
    case "boldScript":
    case "boldFraktur":
    case "superscript":
    case "doubleStruck":
    case "serifBoldItalic":
    case "serifBold":
    case "serifItalic":
    case "sansSerif":
    case "sansItalic":
    case "sansBoldItalic":
    case "sansBold":
    case "monospace":
    case "inverted":
    case "mirrored":
    case "script":
    case "subscript":
      return char + '\u0332';
    default:
      return char + '\u0332';
  }
}
export const addDoubleUnderline = ({ char, oldChar, fontKey }: appendChar) => {
  switch (fontKey) {
    case "smallCaps":
    case "boldScript":
    case "boldFraktur":
    case "superscript":
    case "doubleStruck":
    case "serifBoldItalic":
    case "serifBold":
    case "serifItalic":
    case "sansSerif":
    case "sansItalic":
    case "sansBoldItalic":
    case "sansBold":
    case "monospace":
    case "inverted":
    case "mirrored":
      return oldChar === " " ? char : char + '\u0333';
    default:
      return char;
  }
}

export const addStrikethrough = ({ char, fontKey }: appendChar) => {
  switch (fontKey) {
    case "smallCaps":
    case "boldScript":
    case "superscript":
    case "squaredNegative":
    case "doubleStruck":
    case "serifBoldItalic":
    case "serifBold":
    case "serifItalic":
    case "sansSerif":
    case "sansItalic":
    case "sansBoldItalic":
    case "sansBold":
    case "monospace":
    case "inverted":
    case "mirrored":
      return char + '\u0336';
    default:
      return char;
  }
}

export const addWavyUnderline = ({ char, oldChar, fontKey }: appendChar) => {
  switch (fontKey) {
    case "smallCaps":
    case "boldFraktur":
    case "boldScript":
    case "superscript":
    case "squaredNegative":
    case "doubleStruck":
    case "serifBoldItalic":
    case "serifBold":
    case "serifItalic":
    case "sansSerif":
    case "sansItalic":
    case "sansBoldItalic":
    case "sansBold":
    case "monospace":
    case "inverted":
    case "mirrored":
    case "subscript":
      return oldChar === " " ? char : char + '\u0330';
    default:
      return char;
  }
}