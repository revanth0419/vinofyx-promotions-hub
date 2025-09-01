import { SEO } from "@/components/seo/SEO";

const About = () => {
  return (
    <>
      <SEO title="About Us — vinofyx Promotions" description="An exclusive platform by vinofyx Digital Marketing, dedicated to showcasing and promoting businesses across industries." path="/about" />
      <section className="container py-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
        
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p className="text-lg leading-relaxed mb-6">
            Welcome to Promotions by vinofyx, an exclusive platform by vinofyx Digital Marketing, dedicated to showcasing and promoting businesses across industries.
          </p>
          
          <p className="mb-6">
            In today's competitive digital landscape, visibility is everything. Many businesses struggle to stand out, even when they have great products or services to offer. That's where we step in. Promotions by vinofyx is designed to bridge the gap between businesses and their customers by creating meaningful online visibility, trust, and engagement.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Purpose</h2>
          <p className="mb-4">Our purpose is simple yet impactful:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Empower businesses with the right digital exposure.</li>
            <li>Connect brands with their target audience in innovative and effective ways.</li>
            <li>Promote growth and sustainability for entrepreneurs, startups, and established companies alike.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">What We Do</h2>
          <p className="mb-4">Through promotions.vinofyx.com, we:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Highlight businesses on a dedicated promotional platform.</li>
            <li>Showcase their stories, products, and services to a wider audience.</li>
            <li>Utilize digital marketing strategies like SEO, social media amplification, and storytelling to enhance reach.</li>
            <li>Create long-term visibility that helps businesses grow consistently.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Expertise:</strong> Backed by the experience and innovation of vinofyx Digital Marketing, a company focused on AI-driven strategies for business growth.</li>
            <li><strong>Credibility:</strong> We work to build authentic brand presence, not just temporary attention.</li>
            <li><strong>Community:</strong> Our platform thrives on building a network of businesses and customers, fostering collaboration and trust.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
          <p className="mb-6">
            To become a go-to digital promotions hub where businesses, regardless of size or sector, can find their spotlight and connect with the right audience.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="mb-6">
            To promote businesses with integrity, creativity, and strategy—helping them unlock opportunities and thrive in the digital era.
          </p>

          <p className="text-lg font-medium text-center mt-8 p-6 bg-muted/50 rounded-lg">
            At Promotions by vinofyx, we believe that when businesses grow, communities prosper. Together, let's create a digital presence that inspires trust, drives engagement, and fuels growth.
          </p>
        </div>
      </section>
    </>
  );
};
export default About;
