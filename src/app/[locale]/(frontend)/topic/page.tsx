 
 
import { TopicIndex } from "@/components/frontend/page/topic";
import { Crumb } from "@/components/frontend/shared/crumb";
import { LocaleType } from "@/config";
import { getComponentMarkdown } from "@/i18n";
import { getOrigin } from "@/lib/utils";
import { getTopicName, topicMetadata } from "@/metadata";
import { topicKeys } from "@/slugs";
import { CrumbItem, TopicLink } from "@/types";
import { headers } from "next/headers";

export const runtime = 'edge';

export { topicMetadata as generateMetadata };

export default async function  Index({
  params
}: Readonly<{ 
  params: { locale: LocaleType; };
}>) {
  const { locale } = params; 
  const headersList = headers(); 
  const origin = getOrigin({headers: headersList});

  const topics: TopicLink[] = [];

  {topicKeys.forEach( async key =>{
    topics.push({
      href: `/topic/${key}`,
      label: await getTopicName({params:{ topic: key }})
    })
  })}

  // Load by key: public/data/generated/components-markdown.json
  const markdownContents = {
    block1: await getComponentMarkdown({
      locale, 
      componentPathName: `topic/block1`,
      origin
    })
  }  
  const items: CrumbItem[] = [
    {
      name: "Topic",
      href:  `/topic`,
    }
  ]
  return ( 
    <div className="px-8"> 
      <Crumb items={items} params={params} className="max-w-6xl mx-auto mb-5" />
      <TopicIndex markdownContents={markdownContents} topics={topics}/>
    </div> 
  );
}
