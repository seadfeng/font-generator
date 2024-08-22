"use client";
import Copy from "@/components/shared/copy";
import { FontKey, fonts, transforms } from "@/transforms";
import { HTMLAttributes } from "react";
 
type TransformMap = { [key: string]: string };

export const Fonts = ({
  className,
  content,
  currentFonts
}: {
  className?: HTMLAttributes<HTMLDivElement>["className"];
  currentFonts: Readonly<FontKey[]>;
  content: string;
}) => { 
  const FontItem = ({ fontKey }: { fontKey: FontKey }) => { 
    const chars = transforms[fontKey] as TransformMap;

    // const adjustUnicode = (char: string) => {
    //   const code = char.charCodeAt(0); 
    //   if (code >= 0x2000 && code <= 0x2FFF) {
    //     return char + '\u034F\u0308';  
    //   }
    //   return char;
    // };

    const transformAndAdjust = (text: string) => {
      return text.split('').map(char => {
        return chars[char] || char;
        // const transformedChar = chars[char] || char;
        // return adjustUnicode(transformedChar); 
      }).join('');
    };

    const transformedContent = transformAndAdjust(content); 
    
    return (
      <div className="mb-5 pb-4 border-b leading-8">
        <div className="mb-3 relative flex justify-between">
          <div>{transformedContent}</div>
          <Copy>{transformedContent}</Copy>
        </div>
        <div className="text-muted-foreground text-sm">{fonts[fontKey]}</div>
      </div>
    );
  };
  
  return (
    <div className={className}>
      {currentFonts.map(key => <FontItem key={key} fontKey={key} />)}
    </div>
  );
};