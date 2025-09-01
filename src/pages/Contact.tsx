import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { Phone, Globe, Mail } from "lucide-react";
import { BackToTop } from "@/components/BackToTop";
const Contact = () => {
  return <>
      <SEO title="Contact — vinofyx Promotions" description="Contact vinofyx Promotions for support, partnerships, and inquiries." path="/contact" />
      <section className="container py-10">
        <h1 className="text-3xl font-bold mb-6">Contact</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-6">
              Have questions or need support? Contact us through our form.
            </p>
            <Button asChild className="w-fit">
              <a href="https://forms.gle/ux8KqDuRMLpBHgPL7" target="_blank" rel="noopener noreferrer">
                Contact Us
              </a>
            </Button>
          </div>
          <div>
            <h2 className="font-semibold">Address</h2>
            <p className="text-sm text-muted-foreground mt-2">H no: 2-3-405, Venkateshwara Colony, Macha, Bolarum, Secunderabad, Hyderabad, Telangana 500010</p>
            <div className="mt-4 aspect-video rounded-md overflow-hidden border">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.1550252142597!2d78.50877721487793!3d17.517408688011112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a57eaf46bb5%3A0x6b0d43b2e3f0a32a!2sVenkateshwara%20Colony%2C%20Macha%20Bolarum%2C%20Secunderabad%2C%20Telangana%20500010!5e0!3m2!1sen!2sin!4v1692700000000!5m2!1sen!2sin"
                width="100%" 
                height="300" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy"  
                referrerPolicy="no-referrer-when-downgrade"
                title="vinofyx HQ Map"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t">
          <h2 className="text-xl font-semibold mb-4">Business Contact Details</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <a 
              href="tel:+919391934534" 
              className="flex items-center gap-3 p-4 bg-card rounded-lg border hover:bg-muted/50 transition-colors group"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">+91 9391934534</p>
              </div>
            </a>
            
            <a 
              href="https://www.vinofyx.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-card rounded-lg border hover:bg-muted/50 transition-colors group"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Website</p>
                <p className="text-sm text-muted-foreground">www.vinofyx.com</p>
              </div>
            </a>
            
            <a 
              href="mailto:info@vinofyx.com" 
              className="flex items-center gap-3 p-4 bg-card rounded-lg border hover:bg-muted/50 transition-colors group"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">info@vinofyx.com</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <BackToTop />
    </>;
};
export default Contact;