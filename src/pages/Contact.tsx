import { SEO } from "@/components/seo/SEO";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { useRef, useState } from "react";
import { contactSchema } from "@/lib/validations";
import { toast } from "sonner";

const Contact = () => {
  const [trap, setTrap] = useState("");
  const started = useRef(Date.now());
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    
    // Security checks: honeypot and time-based validation
    if (trap || Date.now() - started.current < 2000) {
      toast.error("Please try again");
      return;
    }
    
    // Validate form data
    const formData = {
      name: data.get("name") as string,
      email: data.get("email") as string,
      message: data.get("message") as string,
    };
    
    const validationResult = contactSchema.safeParse(formData);
    if (!validationResult.success) {
      toast.error("Please check your input and try again");
      return;
    }
    
    const body = `Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`;
    window.location.href = `mailto:${siteConfig.adminEmail}?subject=Contact from promotions.vinofyx.com&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <SEO title="Contact — vinofyx Promotions" description="Contact vinofyx Promotions for support, partnerships, and inquiries." path="/contact" />
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
            <p className="text-sm text-muted-foreground mt-2">vinofyx HQ, 123 Business Ave, City</p>
            <div className="mt-4 aspect-video rounded-md overflow-hidden border">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent("123 Business Ave, City")}&output=embed`}
                title="vinofyx HQ Map"
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
