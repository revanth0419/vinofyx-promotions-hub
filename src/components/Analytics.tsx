import { useEffect } from "react";
import { siteConfig } from "@/config/site";
import { googleAnalyticsIdSchema } from "@/lib/validations";

export const Analytics = () => {
  useEffect(() => {
    const id = siteConfig.googleAnalyticsId;
    if (!id) return;
    
    // Validate Google Analytics ID format for security
    const validationResult = googleAnalyticsIdSchema.safeParse(id);
    if (!validationResult.success) {
      console.warn("Invalid Google Analytics ID format, skipping analytics initialization");
      return;
    }
    
    // Load Google Analytics script safely
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(s1);

    // Create analytics configuration safely without innerHTML
    const s2 = document.createElement("script");
    s2.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);} 
      gtag('js', new Date()); 
      gtag('config', '${id}');
    `;
    document.head.appendChild(s2);
  }, []);
  return null;
};
