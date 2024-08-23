"use client";
import Copy from "@/components/shared/copy";
import { Button } from "@/components/ui/button";
import { addDoubleUnderline, addStrikethrough, addUnderline, addWavyUnderline } from "@/lib/utils";
import { FontKey, fonts, transforms } from "@/transforms";
import { HTMLAttributes, useState } from "react";
 
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

  const [underline, setUnderline] = useState(false);
  const [strikethrough, setStrikethrough] = useState(false);
  const [doubleUnderline, setDoubleUnderline] = useState(false);
  const [wavyUnderline, setWavyUnderline] = useState(false);

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
  console.log("underline", underline)
  return (
    <div className={className}>
      <div className="flex pb-4 mb-5 border-b">
        <div className="flex gap-3">
          <Button aria-label="Underline" size="icon" data-underline={underline} variant="outline" onClick={()=> setUnderline(!underline) } 
            className="data-[underline='true']:font-extrabold data-[underline='true']:bg-primary/25 underline underline-offset-3 rounded-lg dark:border-white/10">
            {"U"} 
          </Button>
          <Button aria-label="Double Underline" size="icon" data-doubleUnderline={doubleUnderline} variant="outline" onClick={()=>  setDoubleUnderline(!doubleUnderline) } 
            className="data-[doubleUnderline='true']:font-extrabold data-[doubleUnderline='true']:bg-primary/25 rounded-lg dark:border-white/10">
            {"U" + '\u0333'} 
          </Button> 
          <Button aria-label="WavyUnderline" size="icon" data-wavyUnderline={wavyUnderline} variant="outline" onClick={()=>  setWavyUnderline(!wavyUnderline) } 
            className="data-[wavyUnderline='true']:font-extrabold data-[wavyUnderline='true']:bg-primary/25 rounded-lg dark:border-white/10">
            {"U" + '\u0330'} 
          </Button>
          <Button aria-label="Strikethrough" size="icon" data-strikethrough={strikethrough} variant="outline" onClick={()=>  setStrikethrough(!strikethrough) } 
            className="data-[strikethrough='true']:font-extrabold data-[strikethrough='true']:bg-primary/25 rounded-lg dark:border-white/10">
            {"U" + '\u0336'} 
          </Button>
        </div>
      </div>
      {currentFonts.map(key => <FontItem key={key} fontKey={key} />)}
    </div>
  );
};