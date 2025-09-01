import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Phone, Globe, Mail } from "lucide-react";
export const Footer = () => {
  return <footer className="border-t mt-16">
      <div className="container py-8 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold">vinofyx Promotions</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Promote your business and discover the best local deals.
          </p>
          <address className="text-sm text-muted-foreground mt-2 not-italic">
            H no: 2-3-405, Venkateshwara Colony, Macha, Bolarum, Secunderabad, Hyderabad, Telangana 500010
          </address>
          
          <div className="mt-4">
            <h4 className="font-medium text-sm mb-3">Follow Us</h4>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/promotionsvinofyx/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61579344001214" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.youtube.com/@PromotionsVinofyx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <nav className="flex flex-col gap-2 text-sm">
          <Link to="/promotions">Promotions</Link>
          <Link to="/list-your-business">List Your Business</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/admin">Admin</Link>
        </nav>
        <div>
          <h4 className="font-medium text-sm mb-3">Contact Details</h4>
          <div className="flex flex-col gap-2 text-sm">
            <a 
              href="tel:+919391934534" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 9391934534
            </a>
            <a 
              href="https://www.vinofyx.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Globe className="w-4 h-4" />
              www.vinofyx.com
            </a>
            <a 
              href="mailto:info@vinofyx.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              info@vinofyx.com
            </a>
          </div>
          <div className="text-sm text-muted-foreground mt-4">
            © {new Date().getFullYear()} vinofyx. All rights reserved.
          </div>
        </div>
      </div>
    </footer>;
};