"use client";
 
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import React, { ReactNode } from "react";
import { Button } from "../ui/button";

interface CopyProps {
  children: ReactNode;
  className?: string;
}

export default function Copy({ children, className }: CopyProps) {
  const t = useTranslations();
  const [copyOk, setCopyOk] = React.useState(false); 
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (typeof children === 'string') {
      navigator.clipboard.writeText(children);
      console.log('Copied!');

      setCopyOk(true);
      setTimeout(() => {
        setCopyOk(false);
      }, 1000);
    }
  };

  return (
    <Button variant="outline" className={cn(  "code-copy-btn cursor-pointer", className ?? "" )} onClick={handleClick}>
      {copyOk ?  t('frontend.shared.copyed') : t('frontend.shared.copy')}
    </Button>
  );
}
