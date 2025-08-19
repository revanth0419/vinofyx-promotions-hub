import { SEO } from "@/components/seo/SEO";
import { businesses, categories, locations } from "@/data/data";
import { BusinessCard } from "@/components/BusinessCard";
import { useSearchParams } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import { SearchFilters } from "@/components/SearchFilters";

const Listings = () => {
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState(params.get("q") ?? "");
  const [category, setCategory] = useState(params.get("category") ?? "");
  const [location, setLocation] = useState(params.get("location") ?? "");

  useEffect(() => {
    const p = new URLSearchParams();
    if (search) p.set("q", search);
    if (category) p.set("category", category);
    if (location) p.set("location", location);
    setParams(p, { replace: true });
  }, [search, category, location, setParams]);

  const filtered = useMemo(() => {
    return businesses.filter(b =>
      (!search || b.name.toLowerCase().includes(search.toLowerCase())) &&
      (!category || category === "all" || b.category === category) &&
      (!location || location === "all" || b.location === location)
    );
  }, [search, category, location]);

  return (
    <>
      <SEO
        title="Business Listings — vinofyx Promotions"
        description="Browse businesses by category and location. Find the right service or store near you."
        path="/listings"
      />
      <section className="container py-10">
        <h1 className="text-3xl font-bold mb-6">Business Listings</h1>
        <SearchFilters
          search={search}
          onSearch={setSearch}
          category={category}
          onCategory={setCategory}
          location={location}
          onLocation={setLocation}
          categories={categories}
          locations={locations}
        />
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {filtered.map((b) => <BusinessCard key={b.id} {...b} />)}
          {filtered.length === 0 && <p className="text-muted-foreground">No businesses found.</p>}
        </div>
      </section>
    </>
  );
};
export default Listings;
