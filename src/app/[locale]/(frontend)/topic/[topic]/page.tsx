 
 
import { TopicMain } from "@/components/frontend/page/topic/main";
import { Crumb } from "@/components/frontend/shared/crumb";
import { LocaleType } from "@/config";
import { getComponentMarkdown } from "@/i18n";
import { getOrigin } from "@/lib/utils";
import { getTopicName, topicMetadata } from "@/metadata";
import { TopicKey } from "@/slugs";
import { CrumbItem } from "@/types";
import { headers } from "next/headers";

export const runtime = 'edge';

export { topicMetadata as generateMetadata };

export default async function  Topic({
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

  const items: CrumbItem[] = [
    {
      name: "Topic",
      href:  `/topic`,
    },
    {
      name: await getTopicName({params}),
      href:  `/topic/${topic}`,
    }
  ]
 
  return ( 
    <div className="px-8"> 
      <Crumb items={items} params={params} className="mb-5" />
      <TopicMain markdownContents={markdownContents} topic={topic} text={url.searchParams.get("text")} />
    </div> 
  );
}
