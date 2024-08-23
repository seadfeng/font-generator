"use client";
import Copy from "@/components/shared/copy";
import { addDoubleUnderline, addStrikethrough, addUnderline, addWavyUnderline } from "@/lib/utils";
import { FontKey, fonts, transforms } from "@/transforms";
import { HTMLAttributes } from "react";
 
type TransformMap = { [key: string]: string };

export const Fonts = ({
  className,
  content,
  currentFonts,
  underline = false,
  strikethrough = false,
  doubleUnderline = false,
  wavyUnderline = false,
}: {
  className?: HTMLAttributes<HTMLDivElement>["className"];
  currentFonts: Readonly<FontKey[]>;
  content: string;
  underline?: boolean;
  strikethrough?: boolean;
  doubleUnderline?: boolean;
  wavyUnderline?: boolean;
  
}) => { 
  const FontItem = ({ fontKey }: { fontKey: FontKey }) => { 
    const chars = transforms[fontKey] as TransformMap;

    const transformAndAdjust = (text: string) => {
      return Array.from(text).map(char => {
        let newChar = chars[char] || char;
        if(underline) newChar = addUnderline({char: newChar, fontKey});
        if(strikethrough) newChar = addStrikethrough({char: newChar, fontKey});
        if(doubleUnderline) newChar = addDoubleUnderline({char: newChar, oldChar: char, fontKey});
        if(wavyUnderline) newChar = addWavyUnderline({char: newChar, oldChar: char, fontKey});
        return newChar;
      }).join('');
    };

    const transformedContent = transformAndAdjust(content); 
    
    return (
      <div className="mb-5 pb-4 border-b leading-7 flex flex-col md:flex-row md:items-center justify-start gap-5">
        <div className="text-muted-foreground text-sm md:w-[130px]">{fonts[fontKey]}</div>
        <div className="relative flex justify-between w-full items-center">
          <div>{transformedContent}</div>
          <Copy className="text-sm">{transformedContent}</Copy>
        </div>
      </div>
    );
  };
  
  return (
    <div className={className}>
      {currentFonts.map(key => <FontItem key={key} fontKey={key} />)}
    </div>
  );
};