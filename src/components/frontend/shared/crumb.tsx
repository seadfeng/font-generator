import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { LocaleType } from "@/config";
import { Link } from "@/lib/i18n";
import { getStyleName } from "@/metadata";
import { StyleKey } from "@/slugs";
// import { Link } from "@/lib/i18n";
import { CrumbItem } from "@/types";


export function Crumb({
  items,
  className,
  params
}:{
  items: CrumbItem[];
  className?: string;
  params: Readonly<{ 
    locale: LocaleType;
    style?: StyleKey; 
  }>
}) {

  const Item = async ({item}:{item: CrumbItem})=>{ 
    let newName = item.name;
    if(item?.type === "style" && params.style){
      newName = await getStyleName({params}) 
    }
    return(
      <>
       <BreadcrumbSeparator/>  
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            {item.href ? <Link href={item.href}>{newName}</Link> : newName}
          </BreadcrumbLink>
        </BreadcrumbItem> 
      </>
    )
  }

  return(
  <Breadcrumb aria-label="breadcrumb" className={className}>
    <BreadcrumbList>
      <BreadcrumbItem> 
          <BreadcrumbLink href="/" aria-description="Home">Home</BreadcrumbLink>
      </BreadcrumbItem> 
      {
        items.map((item,index) => <Item key={index} item={item} /> )
      } 
    </BreadcrumbList>
  </Breadcrumb>

  ) 
}