import { Link } from "@/lib/i18n";
import { styleFonts, StyleKey } from "@/slugs";
import { ALargeSmallIcon, BoldIcon, CircleDot, FeatherIcon, ItalicIcon, SquareDot, StarsIcon, UnderlineIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";
import { ClassNameValue } from "tailwind-merge";

export const Sidebar =( )=>{   
  const pathname = usePathname(); 
  let search = useSearchParams().toString();
  if(search) search = `?${search}`;
  
  const t = useTranslations();

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
      case "small-text":
        return t("frontend.slug.menu.small"); 
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
        return null;
    }
  }

  const NavIcon=({slug}:{slug: StyleKey}): React.ReactNode =>{
    switch(slug){ 
      case "bold-text":
        return <BoldIcon size={18} />;
      case "fancy":
        return <FeatherIcon size={18}  />;
      case "italic":
        return <ItalicIcon size={18}  />;
      case "cool":
        return <StarsIcon size={18}  />;
      case "bold-italic":
        return <ItalicIcon size={18}  strokeWidth={3}/>;
      case "small-text":
        return <ALargeSmallIcon size={18}  />; 
      case "underline":
        return <UnderlineIcon size={18}  />; 
      case "bubble-text":
        return <CircleDot size={18}  />; 
      case "square-text":
        return <SquareDot size={18}  />; 
      default:
        return null;
    }
  } 
  const linkCls: ClassNameValue = " w-full  flex rounded-lg items-center gap-y-0 gap-x-3 pl-3 mb-1 font-semibold py-2 hover:bg-secondary";

  return(
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-x-3 md:flex-row">
        <Link href={`/${search}`} className={`${linkCls} ${pathname === `/` ? "bg-secondary" : ""}`}>
          <span>{t('frontend.style.sidebar.all')}</span> 
        </Link>
        { Object.entries(styleFonts).map(([slug]) =>{ 
          const name = i18nName(slug as StyleKey); 
          if(!name) return;
          return(
            <Link href={`/${slug}${search}`} key={slug} className={`${linkCls} ${pathname === `/${slug}` ? "bg-secondary" : ""}`}>
              <NavIcon slug={slug as StyleKey} />
              <span className="text-sm">{name}</span>
            </Link>
          )
        })}
      </div>
    </>
  )
} 
