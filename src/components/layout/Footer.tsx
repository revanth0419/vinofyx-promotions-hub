import { Link } from "react-router-dom";
export const Footer = () => {
  return <footer className="border-t mt-16">
      <div className="container py-8 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold">Vinofyx Promotions</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Promote your business and discover the best local deals.
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm">
          
          <Link to="/promotions">Promotions</Link>
          <Link to="/list-your-business">List Your Business</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/admin">Admin</Link>
        </nav>
        <div className="text-sm text-muted-foreground flex items-end">
          © {new Date().getFullYear()} VinoFyx. All rights reserved.
        </div>
      </div>
    </footer>;
};