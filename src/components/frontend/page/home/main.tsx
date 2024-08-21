"use client";

import { Markdown } from "@/components/shared/markdown";
import { Textarea } from "@/components/ui/textarea";
import { appConfig } from "@/config";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useState } from "react";
import z from "zod";

// Regular expression to validate a domain name
const domainRegex = /^(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?$/;

const FormValueSchema = z.object({
  domain: z.string().regex(domainRegex, "Invalid domain name")
}); 
type FormValues = z.infer<typeof FormValueSchema>;

export function Main({
  markdownContents
}: Readonly<{  
  markdownContents: Record<string, string | undefined>;
}>) {
  const { block1 } = markdownContents;
  const t = useTranslations();  
  const [content, setContent] = useState<string>("");  

  const textCls = "text-primary font-medium"; 

  const onChange=(e: React.ChangeEvent<HTMLTextAreaElement>)=>{
    console.log(e.target.value)
  }

  return (
    <div className={cn("w-full leading-9 text-base")}> 
      <h1 className="text-4xl mb-2 font-extrabold">{appConfig.appName}</h1>
      <p className={`${textCls} border-l-8 border-primary/60 pl-4 font-semibold`}>{t('frontend.home.h1')}</p>
      <h2 className="text-2xl flex items-center mt-10 mb-5 font-semibold">
        {t('frontend.home.sub_to_h1')} 
      </h2> 
      <Textarea defaultValue={content} className="rounded-md h-20 text-xl" onChange={(e) => onChange(e)}/>
      <div className="flex">

      </div>
      {block1 && <Markdown content={block1} className="mt-10" />}
      {/* <Faqs faqs={faqs} title={t('frontend.home.faq.title')} /> */}
    </div>
  );
}
