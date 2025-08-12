import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/listings", label: "Listings" },
  { to: "/promotions", label: "Promotions" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-semibold text-lg">
          VinoFyx Promotions
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `text-sm ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"} transition-colors`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <Button asChild>
            <Link to="/list-your-business">List Your Business</Link>
          </Button>
          <ThemeToggle />
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <Button asChild size="sm">
            <Link to="/list-your-business">List</Link>
          </Button>
          <ThemeToggle />
          <Button variant="ghost" size="icon" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t">
          <div className="container py-3 flex flex-col gap-3">
            {navItems.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-foreground">
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
