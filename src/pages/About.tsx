import { SEO } from "@/components/seo/SEO";

const About = () => {
  return (
    <>
      <SEO title="About Us — vinofyx Promotions" description="vinofyx helps businesses promote offers and reach customers with a modern, fast platform." path="/about" />
      <section className="container py-10">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-muted-foreground max-w-3xl">
          vinofyx Promotions is a platform built to connect local businesses with customers through timely promotions
          and compelling listings. Our mission is to make discovery effortless and growth accessible.
        </p>
      </section>
    </>
  );
};
export default About;
