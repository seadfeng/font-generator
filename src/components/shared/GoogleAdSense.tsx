"use client";

import { GoogleAdSense } from "next-google-adsense";

export function GoogleAdSenseClient() { 
  if(process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID){
    return <GoogleAdSense />
  }
  return null
}