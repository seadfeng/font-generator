"use client";

import { Markdown } from "@/components/shared/markdown";
import { Link } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { getTopicName } from "@/metadata";
import { topicKeys } from "@/slugs";

export function TopicMain({
  markdownContents, 
}: Readonly<{  
  markdownContents: Record<string, string | undefined>;  
}>) {
  const { block1 } = markdownContents;  
  return (
    <div className={cn("w-full leading-9 text-base")}> 
      {block1 && <Markdown className="mb-8" classNames={{
        h1: "scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl mb-5",
        h2: "scroll-m-20 pb-2 text-2xl lg:text-3xl font-semibold tracking-tight mt-5 text-primary",
        p: "text-sm",
        blockquote: "mb-6 mt-0 border-l-2 pl-6 italic"
      }} content={block1} />}   
      <div className="flex flex-col py-10 gap-10"> 
        {topicKeys.map(key =>{
          return(
            <Link href={`/topic/${key}`}>{getTopicName({params: {topic: key}})}</Link>
          )
        })}
      </div>
    </div>
  );
}
