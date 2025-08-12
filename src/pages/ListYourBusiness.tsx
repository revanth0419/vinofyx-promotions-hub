import { siteConfig } from "@/config/site";
import { SEO } from "@/components/seo/SEO";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ListYourBusiness = () => {
  const [detail, setDetail] = useState({ name: "", category: "", location: "", contact: "", website: "", description: "" });
  const [trap, setTrap] = useState("");

  const submitLocal = (e: React.FormEvent) => {
    e.preventDefault();
    if (trap) return; // honeypot
    const body = `
Business Name: ${detail.name}
Category: ${detail.category}
Location: ${detail.location}
Contact: ${detail.contact}
Website/Social: ${detail.website}
Description: ${detail.description}
`.trim();
    window.location.href = `mailto:${siteConfig.adminEmail}?subject=New Business Listing&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <SEO title="List Your Business — VinoFyx" description="Submit your business to VinoFyx Promotions. We'll review and publish your listing." path="/list-your-business" />
      <section className="container py-10">
        <h1 className="text-3xl font-bold mb-6">List Your Business</h1>
        {siteConfig.googleFormUrl ? (
          <div className="aspect-[3/4] md:aspect-video rounded-md overflow-hidden border">
            <iframe src={siteConfig.googleFormUrl} title="List Your Business Form" className="w-full h-full" />
          </div>
        ) : (
          <form onSubmit={submitLocal} className="grid gap-4 max-w-2xl">
            <Input placeholder="Business Name" required value={detail.name} onChange={(e) => setDetail({ ...detail, name: e.target.value })} />
            <Input placeholder="Category" required value={detail.category} onChange={(e) => setDetail({ ...detail, category: e.target.value })} />
            <Input placeholder="Location" required value={detail.location} onChange={(e) => setDetail({ ...detail, location: e.target.value })} />
            <Input placeholder="Contact (email or phone)" required value={detail.contact} onChange={(e) => setDetail({ ...detail, contact: e.target.value })} />
            <Input placeholder="Website/Social links" value={detail.website} onChange={(e) => setDetail({ ...detail, website: e.target.value })} />
            <Textarea placeholder="Short Description" required value={detail.description} onChange={(e) => setDetail({ ...detail, description: e.target.value })} />
            <input type="text" className="hidden" value={trap} onChange={(e) => setTrap(e.target.value)} aria-hidden tabIndex={-1} />
            <Button type="submit">Submit</Button>
            <p className="text-sm text-muted-foreground">Tip: To use Google Forms, set googleFormUrl in src/config/site.ts. We’ll add auto-sync once Supabase is connected.</p>
          </form>
        )}
      </section>
    </>
  );
};
export default ListYourBusiness;
