import { appConfig } from "@/config";
import { FontKey } from "@/transforms";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const canonicalLink = (domain: string, pathname: string) => {
  const isProduction = process.env.NODE_ENV === 'production';
  return `${isProduction ? "https" : "http"}://${domain}${pathname}`;
}

export const getOrigin = ({ headers }: { headers: Headers }) => {
  const host = headers.get('host') || appConfig.appDomain;

  const protocol = ['localhost', '127.0.0.1'].includes(host.split(":")[0]) ? 'http' : 'https';
  return `${protocol}://${host}`;
}

type appendChar = {
  char: string;
  oldChar?: string;
  fontKey: FontKey
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