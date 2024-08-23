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
    case "bold-text":
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
    case "small":
      title = t('frontend.style.small.meta.title');
      description = t('frontend.style.small.meta.description');
      break;
    case "bold-italic":
      title = t('frontend.style.bold-italic.meta.title');
      description = t('frontend.style.bold-italic.meta.description');
      break;
    case "sans-serif":
      title = t('frontend.style.sans-serif.meta.title');
      description = t('frontend.style.sans-serif.meta.description');
    case "serif":
      title = t('frontend.style.serif.meta.title');
      description = t('frontend.style.serif.meta.description');
    case "underline":
      title = t('frontend.style.underline.meta.title');
      description = t('frontend.style.underline.meta.description');
    case "bubble-text":
      title = t('frontend.style.bubble-text.meta.title');
      description = t('frontend.style.bubble-text.meta.description');
    case "square-text":
      title = t('frontend.style.square-text.meta.title');
      description = t('frontend.style.square-text.meta.description');
    default:
      title = "";
  }
  return {
    title,
    description
  };
}


export const getStyleName = async ({ params }: Readonly<{ params: { locale: LocaleType, style?: StyleKey } }>): Promise<string> => {
  const t = await getTranslations(params);
  const { style } = params;
  switch (style) {
    case "bold-text":
      return t('frontend.slug.menu.bold');
    case "cool":
      return t('frontend.slug.menu.cool');
    case "fancy":
      return t('frontend.slug.menu.fancy');
    case "italic":
      return t('frontend.slug.menu.italic');
    case "small":
      return t('frontend.slug.menu.small');
    case "bold-italic":
      return t('frontend.slug.menu.bold-italic');
    case "sans-serif":
      return "Sans Serif";
    case "serif":
      return "Serif";
    case "underline":
      return t("frontend.slug.menu.underline");
    case "bubble-text":
      return t("frontend.slug.menu.bubble-text");
    case "square-text":
      return t("frontend.slug.menu.square-text");
    default:
      return "";
  }
}

