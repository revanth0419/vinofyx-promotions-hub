import { promotions, categories } from "@/data/data";
import { PromotionCard } from "@/components/PromotionCard";
import { SEO } from "@/components/seo/SEO";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMemo, useState } from "react";

const Promotions = () => {
  const [category, setCategory] = useState("");
  const [showExpired, setShowExpired] = useState(false);

  const list = useMemo(() => {
    const now = Date.now();
    return promotions
      .filter((p) => (!category || p.category === category))
      .filter((p) => showExpired || new Date(p.expiresAt).getTime() >= now)
      .sort((a, b) => new Date(a.expiresAt).getTime() - new Date(b.expiresAt).getTime());
  }, [category, showExpired]);

  return (
    <>
      <SEO title="Promotions — VinoFyx" description="Explore current offers, discounts, and events from local businesses." path="/promotions" />
      <section className="container py-10">
        <h1 className="text-3xl font-bold mb-6">Promotions</h1>
        <div className="flex items-center gap-3">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-56"><SelectValue placeholder="Filter by category" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Categories</SelectItem>
              {categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
          <label className="text-sm flex items-center gap-2">
            <input type="checkbox" checked={showExpired} onChange={(e) => setShowExpired(e.target.checked)} />
            Show expired
          </label>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {list.map((p) => <PromotionCard key={p.id} {...p} />)}
          {list.length === 0 && <p className="text-muted-foreground">No promotions found.</p>}
        </div>
      </section>
    </>
  );
};
export default Promotions;
