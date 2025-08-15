import heroImage from "@/assets/hero-vinofyx.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export const Hero = () => {
  return <section className="relative">
      <img src={heroImage} alt="Business promotions hero banner with vibrant gradient" className="w-full h-[48vh] md:h-[64vh] object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-background/20 to-transparent" />
      <div className="absolute inset-0">
        <div className="container h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Promote Your Business with Us
            </h1>
            <p className="mt-3 text-lg text-white">
              List your business, publish promotions, and reach more customers instantly.
            </p>
            <div className="mt-6 flex gap-3">
              <Button asChild>
                <a href="https://forms.gle/4UXJPG7JTzauKrDE8" target="_blank" rel="noopener noreferrer">List Your Business</a>
              </Button>
              <Button asChild variant="secondary">
                <Link to="/promotions">Explore Promotions</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};