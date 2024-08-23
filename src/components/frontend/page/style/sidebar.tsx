import { Link } from "@/lib/i18n";
import { styleFonts, StyleKey } from "@/slugs";
import { ALargeSmallIcon, BoldIcon, FeatherIcon, ItalicIcon, StarsIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { ClassNameValue } from "tailwind-merge";

export const Sidebar =( )=>{   
  const t = useTranslations();
  const linkCls: ClassNameValue = "border w-full h-12 flex rounded-lg items-center gap-3 px-5 font-semibold mb-5";

  const i18nName=(slug: StyleKey)=>{
    switch(slug){ 
      case "bold-text":
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
      case "sans-serif":
        return "Sans Serif";
      case "serif":
        return "Serif";
      default:
        return null;
    }
  }

  const NavIcon=({slug}:{slug: StyleKey}): React.ReactNode =>{
    switch(slug){ 
      case "bold-text":
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
      default:
        return null;
    }
  }

  return(
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-x-3  md:flex-row">
        <Link href="/" className={linkCls}>
          <span>{t('frontend.style.sidebar.all')}</span> 
        </Link>
        { Object.entries(styleFonts).map(([slug]) =>{ 
          const name = i18nName(slug as StyleKey); 
          if(!name) return;
          return(
            <Link href={`/${slug}`} key={slug} className={linkCls}>
              <NavIcon slug={slug as StyleKey} />
              <span className="text-sm">{name}</span>
            </Link>
          )
        })}
      </div>
    </>
  )
} 
