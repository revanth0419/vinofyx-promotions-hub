import { SEO } from "@/components/seo/SEO";

const Admin = () => {
  return (
    <>
      <SEO title="Admin — VinoFyx Promotions" description="Manage listings, promotions, and reviews." path="/admin" />
      <section className="container py-10">
        <h1 className="text-3xl font-bold mb-4">Admin</h1>
        <p className="text-muted-foreground">
          To enable approvals, editing, and moderation, please connect Supabase via the green button in the top right. We’ll wire up authentication and an admin dashboard next.
        </p>
      </section>
    </>
  );
};
export default Admin;
