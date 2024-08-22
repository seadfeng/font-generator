 
import { StyleMain } from "@/components/frontend/page/style/main";
import { appConfig, LocaleType } from "@/config";
import { getComponentMarkdown } from "@/i18n";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { headers } from 'next/headers';
export const runtime = 'edge';

export async function generateMetadata({ params }:{ params: any }): Promise<Metadata> { 
  const t = await getTranslations(params); 
  return {
    title: {
      absolute: t('frontend.meta.default.title'),
      default: t('frontend.meta.default.title'),
      template: `${appConfig.appName}: %s`,
    },
    description: t('frontend.meta.default.description')
  };
}


export default async function  Home({
  params
}: Readonly<{ 
  params: { locale: string; };
}>) {
  const headersList = headers();
  const host = headersList.get('host') || appConfig.appDomain;
   
  const protocol = ['localhost','127.0.0.1'].includes(host.split(":")[0] )? 'http' : 'https';
  const origin = `${protocol}://${host}`;

  // Load by key: public/data/generated/components-markdown.json
  const markdownContents = {
    block1: await getComponentMarkdown({
      locale: params.locale as LocaleType, 
      componentPathName: "home/block1",
      origin
    })
  }
 
  return (
    <div className="px-8 flex">
      <StyleMain style="all" markdownContents={markdownContents} />
    </div>
  );
}
