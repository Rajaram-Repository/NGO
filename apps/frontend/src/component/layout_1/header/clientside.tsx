"use client";

import dynamic from "next/dynamic";

// Dynamically import HeaderHome with no SSR
const HeaderHome = dynamic(() => import("./Header"), { ssr: false });

export default function ClientSideHeaderHome() {
  return <HeaderHome />;
}
