 
import { StyleMain } from "@/components/frontend/page/style/main";
import { Crumb } from "@/components/frontend/shared/crumb";
import { LocaleType } from "@/config";
import { getComponentMarkdown } from "@/i18n";
import { getOrigin } from "@/lib/utils";
import { styleMetadata } from "@/metadata";
import { StyleKey } from "@/slugs";
import { CrumbItem } from "@/types";
import { headers } from "next/headers";

export const runtime = 'edge';

export { styleMetadata as generateMetadata };

export default async function  Style({
  params
}: Readonly<{ 
  params: { locale: LocaleType; style: StyleKey; };
}>) {
  const { locale, style } = params; 
  const headersList = headers(); 
  const origin = getOrigin({headers: headersList});

  // Load by key: public/data/generated/components-markdown.json
  const markdownContents = {
    block1: await getComponentMarkdown({
      locale, 
      componentPathName: `style/${style}/block1`,
      origin
    })
  } 
  const url = new URL(headersList.get('x-request-url')!);
  const items: CrumbItem[] = [ 
    {
      name: style,
      type: "style",
      href: `/${style}`
    },
  ]
 
  return ( 
    <div className="px-8">
      <Crumb items={items} className="" params={params} /> 
      <StyleMain markdownContents={markdownContents} style={style} text={url.searchParams.get("text")} />
    </div> 
  );
}
