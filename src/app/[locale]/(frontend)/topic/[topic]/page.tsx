 
 
import { TopicMain } from "@/components/frontend/page/topic/main";
import { LocaleType } from "@/config";
import { getComponentMarkdown } from "@/i18n";
import { getOrigin } from "@/lib/utils";
import { styleMetadata } from "@/metadata";
import { TopicKey } from "@/slugs";
import { headers } from "next/headers";

export const runtime = 'edge';

export { styleMetadata as generateMetadata };

export default async function  Style({
  params
}: Readonly<{ 
  params: { locale: LocaleType; topic: TopicKey; };
}>) {
  const { locale, topic } = params; 
  const headersList = headers(); 
  const origin = getOrigin({headers: headersList});

  // Load by key: public/data/generated/components-markdown.json
  const markdownContents = {
    block1: await getComponentMarkdown({
      locale, 
      componentPathName: `topic/${topic}/block1`,
      origin
    })
  } 
  const url = new URL(headersList.get('x-request-url')!); 
 
  return ( 
    <div className="px-8"> 
      <TopicMain markdownContents={markdownContents} topic={topic} text={url.searchParams.get("text")} />
    </div> 
  );
}
