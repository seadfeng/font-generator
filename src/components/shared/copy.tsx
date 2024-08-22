"use client";
 
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface CopyProps {
  children: ReactNode;
  className?: string;
}

export default function Copy({ children, className }: CopyProps) {
  const [copyOk, setCopyOk] = React.useState(false); 
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
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
    <div className={cn(  "code-copy-btn cursor-pointer", className ?? "" )} onClick={handleClick}>
      {copyOk ? "Copyed!" : "Copy"}
    </div>
  );
}
