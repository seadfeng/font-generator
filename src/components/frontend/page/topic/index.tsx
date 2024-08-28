"use client";

import { Markdown } from "@/components/shared/markdown";
import { Link } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { TopicLink } from "@/types";

export function TopicIndex({
  markdownContents, 
  topics
}: Readonly<{  
  markdownContents: Record<string, string | undefined>;  
  topics: TopicLink[]
}>) {
  const { block1 } = markdownContents;  
  return (
    <div className={cn("max-w-6xl leading-9 text-base mx-auto")}> 
      {block1 && <Markdown className="mb-8" classNames={{
        h1: "scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl mb-5",
        h2: "scroll-m-20 pb-2 text-2xl lg:text-3xl font-semibold tracking-tight mt-5 text-primary",
        p: "text-sm",
        blockquote: "mb-6 mt-0 border-l-2 pl-6 italic"
      }} content={block1} />}   
      <div className="flex flex-col py-10 gap-10"> 
        {topics.map(topic =>{
          return(
            <Link href={topic.href}>{topic.label}</Link>
          )
        })}
      </div>
    </div>
  );
}
