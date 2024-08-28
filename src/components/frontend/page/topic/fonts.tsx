"use client";
import Copy from "@/components/shared/copy";
import { Button } from "@/components/ui/button";
import { appConfig } from "@/config";
import { FontKey, fonts, transforms } from "@/transforms";
import { HTMLAttributes } from "react";
 
type TransformMap = { [key: string]: string };

export const Fonts = ({
  className,
  content,
  currentFonts, 
}: {
  className?: HTMLAttributes<HTMLDivElement>["className"];
  currentFonts: Readonly<FontKey[]>;
  content: string;   
}) => {  

  const FontItem = ({ fontKey }: { fontKey: FontKey }) => { 
    const chars = transforms[fontKey] as TransformMap;

    const transformAndAdjust = (text: string) => {
      return Array.from(text).map(char => {
        let newChar = chars[char] || char;  
        return newChar;
      }).join('');
    };

    const transformedContent = transformAndAdjust(content); 
    
    return (
      <div className="mb-5 pb-4 border-b leading-7 flex flex-col lg:flex-row lg:items-center justify-start gap-5">
        <div className="text-muted-foreground text-xs md:w-[200px] lg:w-[300px]">{fonts[fontKey]}</div>
        <div className="relative flex flex-col lg:flex-row lg:justify-between w-full lg:items-center gap-3">
          <div>{transformedContent}</div>
          <div className="flex items-center gap-3">
            <Copy className="text-sm h-8 rounded-lg">{transformedContent}</Copy>
            <Button className="h-8 rounded-lg" variant="outline"><a target="_blank" href={`https://x.com/intent/post?text=${encodeURIComponent(transformedContent)}&utm_source=${appConfig.appDomain}`}>Twitter</a></Button>
          </div>
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