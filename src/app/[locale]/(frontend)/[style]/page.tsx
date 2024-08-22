 
import { StyleMain } from "@/components/frontend/page/style/main";
import { LocaleType } from "@/config";
import { getComponentMarkdown } from "@/i18n";
import { SlugKey } from "@/slugs";

export const runtime = 'edge';

export default async function  Home({
  params
}: Readonly<{ 
  params: { locale: LocaleType; style: SlugKey; };
}>) {
  const { locale, style } = params;
  // Load by key: public/data/generated/components-markdown.json
  const markdownContents = {
    block1: await getComponentMarkdown({
      locale, 
      componentPathName: `style/${style}/block1`
    })
  }
 
  return (
    <div className="px-8 flex">
      <StyleMain markdownContents={markdownContents} style={style} />
    </div>
  );
}
