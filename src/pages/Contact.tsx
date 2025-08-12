import { SEO } from "@/components/seo/SEO";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useRef, useState } from "react";

const Contact = () => {
  const [trap, setTrap] = useState("");
  const started = useRef(Date.now());
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    if (trap || Date.now() - started.current < 2000) return;
    const body = `Name: ${data.get("name")}
Email: ${data.get("email")}
Message: ${data.get("message")}`;
    window.location.href = `mailto:${siteConfig.adminEmail}?subject=Contact from promotions.vinofyx.com&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <SEO title="Contact — VinoFyx Promotions" description="Contact VinoFyx Promotions for support, partnerships, and inquiries." path="/contact" />
      <section className="container py-10">
        <h1 className="text-3xl font-bold mb-6">Contact</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <form onSubmit={onSubmit} className="grid gap-4">
            <Input name="name" placeholder="Your name" required />
            <Input name="email" type="email" placeholder="Email" required />
            <Textarea name="message" placeholder="Message" required />
            <input type="text" className="hidden" value={trap} onChange={(e) => setTrap(e.target.value)} aria-hidden tabIndex={-1} />
            <Button type="submit">Send</Button>
          </form>
          <div>
            <h2 className="font-semibold">Address</h2>
            <p className="text-sm text-muted-foreground mt-2">VinoFyx HQ, 123 Business Ave, City</p>
            <div className="mt-4 aspect-video rounded-md overflow-hidden border">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent("123 Business Ave, City")}&output=embed`}
                title="VinoFyx HQ Map"
                loading="lazy"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
