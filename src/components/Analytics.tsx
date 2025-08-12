import { useEffect } from "react";
import { siteConfig } from "@/config/site";

export const Analytics = () => {
  useEffect(() => {
    const id = siteConfig.googleAnalyticsId;
    if (!id) return;
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(s1);

    const s2 = document.createElement("script");
    s2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);} 
      gtag('js', new Date()); gtag('config', '${id}');
    `;
    document.head.appendChild(s2);
  }, []);
  return null;
};
