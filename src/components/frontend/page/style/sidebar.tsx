import { Link } from "@/lib/i18n";
import { styleFonts, StyleKey } from "@/slugs";
import { ALargeSmallIcon, BoldIcon, FeatherIcon, ItalicIcon, StarsIcon, UnderlineIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { ClassNameValue } from "tailwind-merge";

export const Sidebar =( )=>{    
  let search = useSearchParams().toString();
  if(search) search = `?${search}`;
  
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
      case "underline":
        return t("frontend.slug.menu.underline"); 
      case "bubble-text":
        return t("frontend.slug.menu.bubble-text");
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
      case "underline":
        return <UnderlineIcon />; 
      default:
        return null;
    }
  } 

  return(
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-x-3  md:flex-row">
        <Link href={`/${search}`} className={linkCls}>
          <span>{t('frontend.style.sidebar.all')}</span> 
        </Link>
        { Object.entries(styleFonts).map(([slug]) =>{ 
          const name = i18nName(slug as StyleKey); 
          if(!name) return;
          return(
            <Link href={`/${slug}${search}`} key={slug} className={linkCls}>
              <NavIcon slug={slug as StyleKey} />
              <span className="text-sm">{name}</span>
            </Link>
          )
        })}
      </div>
    </>
  )
} 
