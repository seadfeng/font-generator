"use client";

import { Markdown } from "@/components/shared/markdown";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { topicFonts, TopicKey } from "@/slugs";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Fonts } from "./fonts";

export function TopicMain({
  markdownContents,
  topic,
  text,
}: Readonly<{  
  markdownContents: Record<string, string | undefined>;
  topic: TopicKey;
  text?: string | null;
}>) {
  const { block1, block2 } = markdownContents; 
  const [content, setContent] = useState<string>(text ? text : "Hello my old friend"); 
  const pathname = usePathname();  
  const router = useRouter();  

  const onChange=(e: React.ChangeEvent<HTMLTextAreaElement>)=>{
    setContent(e.target.value);
    router.replace(`${pathname}?text=${e.target.value}`);
  }

  const currentFonts = topicFonts[topic];

  return (
    <div className={cn("w-full leading-9 text-base")}> 
      {block1 && <Markdown className="mb-8" classNames={{
        h1: "scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl mb-5",
        h2: "scroll-m-20 pb-2 text-2xl lg:text-3xl font-semibold tracking-tight mt-5 text-primary",
        p: "text-sm",
        blockquote: "mb-6 mt-0 border-l-2 pl-6 italic"
      }} content={block1} />}   
      <Textarea defaultValue={content} className="rounded-md h-32 text-xl p-5" onChange={(e) => onChange(e)}/>
      <div className="flex flex-col py-10 gap-10"> 
        <div className="w-full rounded-lg dark:bg-secondary px-8 py-5 border">
          <Fonts currentFonts={currentFonts} className="mb-10" content={content} />
          {block2 && <Markdown content={block2} className="mt-10" />}   
        </div>
      </div>
    </div>
  );
}
