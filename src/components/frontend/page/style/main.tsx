"use client";

import { Markdown } from "@/components/shared/markdown";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { styleFonts, StyleKey } from "@/slugs";
import { fontKeys } from "@/transforms";
import { useState } from "react";
import { Fonts } from "./fonts";
import { Sidebar } from "./sidebar";

export function StyleMain({
  markdownContents,
  style = "all" 
}: Readonly<{  
  markdownContents: Record<string, string | undefined>;
  style: StyleKey,
 
}>) {
  const { block1, block2 } = markdownContents; 
  const [content, setContent] = useState<string>("Hello My old Friend");   

  const onChange=(e: React.ChangeEvent<HTMLTextAreaElement>)=>{
    setContent(e.target.value);
  }

  const currentFonts = style === "all" ? fontKeys : styleFonts[style];

  return (
    <div className={cn("w-full leading-9 text-base")}> 
      {block1 && <Markdown classNames={{
        h1: "scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl mb-5",
        h2: "scroll-m-20 pb-2 text-2xl lg:text-3xl font-semibold tracking-tight mt-5 text-primary",
      }} content={block1} className="mt-10" />}   
      <Textarea defaultValue={content} className="rounded-md h-20 text-xl" onChange={(e) => onChange(e)}/>
      <div className="flex flex-col md:flex-row py-10 gap-10">
        <div className="md:w-[200px] flex-shrink-0">
          <Sidebar />
        </div>
        <div className="w-full rounded-lg dark:bg-secondary p-8 border">
          <Fonts currentFonts={currentFonts} className="mb-10" content={content} />
          {block2 && <Markdown content={block2} className="mt-10" />}   
        </div>
      </div>
    </div>
  );
}
