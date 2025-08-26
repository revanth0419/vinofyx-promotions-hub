import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";
const navItems = [{
  to: "/",
  label: "Home"
}, {
  to: "/listings",
  label: "Listings"
}, {
  to: "/promotions",
  label: "Promotions"
}, {
  to: "/about",
  label: "About"
}, {
  to: "/contact",
  label: "Contact"
}, {
  to: "/privacy-policy",
  label: "Privacy Policy"
}];
export const Header = () => {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 font-semibold text-lg">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
            V
          </div>
          <span>vinofyx Promotions</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map(n => <NavLink key={n.to} to={n.to} className={({
          isActive
        }) => `text-sm ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"} transition-colors`}>
              {n.label}
            </NavLink>)}
          <Button asChild>
            <a href="https://forms.gle/4UXJPG7JTzauKrDE8" target="_blank" rel="noopener noreferrer">List Your Business</a>
          </Button>
          <ThemeToggle />
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <Button asChild size="sm">
            <a href="https://forms.gle/4UXJPG7JTzauKrDE8" target="_blank" rel="noopener noreferrer">List</a>
          </Button>
          <ThemeToggle />
          <Button variant="ghost" size="icon" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {open && <div className="md:hidden border-t">
          <div className="container py-3 flex flex-col gap-3">
            {navItems.map(n => <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-foreground">
                {n.label}
              </Link>)}
          </div>
        </div>}
    </header>;
};