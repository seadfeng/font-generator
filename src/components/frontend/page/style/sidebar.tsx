import { Link } from "@/lib/i18n";
import { slugFonts, SlugKey } from "@/slugs";
import { ALargeSmallIcon, BoldIcon, Circle, FeatherIcon, ItalicIcon, StarsIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { ClassNameValue } from "tailwind-merge";

export const Sidebar =( )=>{   
  const t = useTranslations();
  const linkCls: ClassNameValue = "border w-full h-12 flex rounded-lg items-center gap-3 px-5 font-semibold mb-5";

  const i18nName=(slug: SlugKey)=>{
    switch(slug){ 
      case "bold":
        return t("frontend.slug.menu.bold");
      case "fancy":
        return t("frontend.slug.menu.fancy");
      case "italic":
        return t("frontend.slug.menu.italic");
      case "cool":
        return t("frontend.slug.menu.cool");
      case "bold-italic":
        return t("frontend.slug.menu.bold-italic");
      case "small":
        return t("frontend.slug.menu.small");
      case "normal":
        return t("frontend.slug.menu.normal");
      default:
        return null;
    }
  }

  const NavIcon=({slug}:{slug: SlugKey}): React.ReactNode =>{
    switch(slug){ 
      case "bold":
        return <BoldIcon />;
      case "fancy":
        return <FeatherIcon />;
      case "italic":
        return <ItalicIcon />;
      case "cool":
        return <StarsIcon />;
      case "bold-italic":
        return <ItalicIcon strokeWidth={3}/>;
      case "small":
        return <ALargeSmallIcon />;
      case "normal":
        return <Circle />;
      default:
        return null;
    }
  }

  return(
    <>
      <Link href="" className={linkCls}>
        <span>{t('frontend.style.sidebar.all')}</span> 
      </Link>
      { Object.entries(slugFonts).map(([slug]) =>{ 
        const name = i18nName(slug as SlugKey); 
        if(!name) return;
        return(
          <Link href={slug} key={slug} className={linkCls}>
            <NavIcon slug={slug as SlugKey} />
            <span className="text-sm">{name}</span>
          </Link>
        )
      })}
    </>
  )
} 
