import { useParams } from "react-router-dom";
import { businesses } from "@/data/data";
import { SEO } from "@/components/seo/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const BusinessProfile = () => {
  const { id } = useParams();
  const b = businesses.find((x) => x.id === id);
  if (!b) return <section className="container py-10"><h1 className="text-2xl font-semibold">Business not found</h1></section>;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: b.name,
    url: `${siteConfig.baseUrl}/business/${b.id}`,
    address: b.address,
    image: b.image,
    telephone: b.phone,
    aggregateRating: b.rating ? { "@type": "AggregateRating", ratingValue: b.rating, reviewCount: 1 } : undefined
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : `${siteConfig.baseUrl}/business/${b.id}`;

  return (
    <>
      <SEO title={`${b.name} — ${b.category} in ${b.location}`} description={b.description} path={`/business/${b.id}`} jsonLd={jsonLd} />
      <section className="container py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <img src={b.image} alt={`${b.name} cover`} className="w-full h-64 object-cover rounded-md" loading="lazy" />
            <h1 className="text-3xl font-bold mt-4">{b.name}</h1>
            <div className="mt-2 flex items-center gap-3">
              <Badge variant="secondary">{b.category}</Badge>
              <span className="text-muted-foreground">{b.location}</span>
              {b.rating && <span className="text-muted-foreground">{b.rating.toFixed(1)}★</span>}
            </div>
            <p className="mt-4 text-muted-foreground">{b.description}</p>
            <div className="mt-6 flex gap-3">
              <Button asChild><a href={b.website} target="_blank" rel="noreferrer">Visit Website</a></Button>
              <Button variant="secondary" asChild><a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer">Share</a></Button>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-3">Location</h2>
              <div className="aspect-video rounded-md overflow-hidden border">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(b.address)}&output=embed`}
                  title={`Map to ${b.name}`}
                  loading="lazy"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          <aside className="space-y-4">
            <div className="border rounded-md p-4">
              <h3 className="font-semibold">Contact</h3>
              <p className="text-sm text-muted-foreground mt-2">{b.address}</p>
              <p className="text-sm mt-1"><a href={`tel:${b.phone}`}>{b.phone}</a></p>
              <p className="text-sm mt-1"><a href={`mailto:${b.email}`}>{b.email}</a></p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};
export default BusinessProfile;
