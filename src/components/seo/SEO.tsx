import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/config/site";

type Props = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  jsonLd?: Record<string, any>;
  canonical?: string;
};

export const SEO = ({ title, description, path = "", image, jsonLd, canonical }: Props) => {
  const url = canonical ?? (typeof window !== "undefined" ? `${window.location.origin}${path}` : `${siteConfig.baseUrl}${path}`);
  const img = image ?? siteConfig.ogImage;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {siteConfig.googleSiteVerification && (
        <meta name="google-site-verification" content={siteConfig.googleSiteVerification} />
      )}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta name="twitter:card" content="summary_large_image" />
      {siteConfig.twitterHandle && <meta name="twitter:site" content={siteConfig.twitterHandle} />}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
};
