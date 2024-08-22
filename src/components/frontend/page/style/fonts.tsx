"use client";
import Copy from "@/components/shared/copy";
import { FontKey, fonts } from "@/fonts";
import { HTMLAttributes } from "react";

export const Fonts =({
  className,
  content,
  currentFonts
}:{
  className?: HTMLAttributes<HTMLDivElement>["className"];
  currentFonts: Readonly<FontKey[]>;
  content: string;
})=> {
  return (
    <div className={className}>
      {currentFonts.map(key =>{
        return(
          <div key={key} className="mb-5 pb-4 border-b leading-8">
            <div className="mb-3 relative flex justify-between">
              <div>{content}</div>
              <Copy>{content}</Copy>
            </div>
            <div className="text-muted-foreground text-sm">{fonts[key]}</div>
          </div>
        )
      })}
    </div>
  );
}
