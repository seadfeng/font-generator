 
import { StyleMain } from "@/components/frontend/page/style/main";
import { LocaleType } from "@/config";
import { getComponentMarkdown } from "@/i18n";
import { origin } from "@/lib/utils";
import { styleMetadata } from "@/metadata";
import { SlugKey } from "@/slugs";
import { headers } from "next/headers";

export const runtime = 'edge';

export { styleMetadata as generateMetadata };

export default async function  Style({
  params
}: Readonly<{ 
  params: { locale: LocaleType; style: SlugKey; };
}>) {
  const { locale, style } = params; 
   
  // Load by key: public/data/generated/components-markdown.json
  const markdownContents = {
    block1: await getComponentMarkdown({
      locale, 
      componentPathName: `style/${style}/block1`,
      origin: origin({headers: headers()})
    })
  }
 
  return (
    <div className="px-8 flex">
      <StyleMain markdownContents={markdownContents} style={style} />
    </div>
  );
}
