import { SEO } from "@/components/seo/SEO";
import { Hero } from "@/components/Hero";
import { businesses, promotions, categories } from "@/data/data";
import { BusinessCard } from "@/components/BusinessCard";
import { PromotionCard } from "@/components/PromotionCard";
import { DynamicBusinessForm } from "@/components/DynamicBusinessForm";
import { HyderabadMap } from "@/components/HyderabadMap";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    navigate(`/listings?${params.toString()}`);
  };

  return (
    <>
      <SEO
        title="VinoFyx Promotions — Promote Your Business in Hyderabad"
        description="Discover local deals and list your business in Hyderabad on VinoFyx Promotions. Connect with customers across the City of Pearls."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "VinoFyx Promotions",
          "url": "https://promotions.vinofyx.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "addressCountry": "IN"
          }
        }}
      />
      <Hero />
      <section className="container py-10">
        <form onSubmit={onSearch} className="flex gap-2">
          <Input placeholder="Search businesses..." value={q} onChange={(e) => setQ(e.target.value)} />
          <Button type="submit">Search</Button>
        </form>
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((c) => (
            <Button key={c} variant="secondary" size="sm" asChild>
              <Link to={`/listings?category=${encodeURIComponent(c)}`}>{c}</Link>
            </Button>
          ))}
        </div>
      </section>
      <section className="container py-10">
        <h2 className="text-2xl font-semibold mb-4">Featured Businesses in Hyderabad</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {businesses.slice(0, 6).map((b) => (
            <BusinessCard key={b.id} {...b} />
          ))}
        </div>
      </section>
      <section className="container py-10">
        <HyderabadMap />
      </section>
      <section className="container py-10">
        <h2 className="text-2xl font-semibold mb-4">Latest Promotions</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {promotions.slice(0, 6).map((p) => (
            <PromotionCard key={p.id} {...p} />
          ))}
        </div>
        <div className="mt-6">
          <Button asChild variant="secondary">
            <Link to="/promotions">View all promotions</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Index;
