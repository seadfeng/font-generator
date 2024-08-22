import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LocaleType } from "./config";
import { StyleKey } from "./slugs";


/**
 * Metadata for src/app/[locale]/(frontend)/[style]/page.tsx
 * 
 * @returns 
 */
export const styleMetadata = async ({ params }: { params: { locale: LocaleType, style: StyleKey } }): Promise<Metadata> => {
  const t = await getTranslations(params);
  const { style } = params;
  let title = "";
  let description = "";
  switch (style) {
    case "bold":
      title = t('frontend.style.bold.meta.title');
      description = t('frontend.style.bold.meta.description');
      break;
    case "cool":
      title = t('frontend.style.cool.meta.title');
      description = t('frontend.style.cool.meta.description');
      break;
    case "fancy":
      title = t('frontend.style.fancy.meta.title');
      description = t('frontend.style.fancy.meta.description');
      break;
    case "italic":
      title = t('frontend.style.italic.meta.title');
      description = t('frontend.style.italic.meta.description');
      break;
    case "normal":
      title = t('frontend.style.normal.meta.title');
      description = t('frontend.style.normal.meta.description');
      break;
    case "small":
      title = t('frontend.style.small.meta.title');
      description = t('frontend.style.small.meta.description');
      break;
    case "bold-italic":
      title = t('frontend.style.bold-italic.meta.title');
      description = t('frontend.style.bold-italic.meta.description');
      break;
    default:
      title = "";
  }
  return {
    title,
    description
  };
}