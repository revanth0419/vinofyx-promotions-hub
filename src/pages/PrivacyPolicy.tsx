import { SEO } from "@/components/seo/SEO";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for vinofyx Promotions - Learn how we protect and handle your personal data."
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
          
          <div className="bg-card border rounded-lg p-8 shadow-sm">
            <p className="text-lg leading-relaxed text-muted-foreground">
              vinofyx Promotions respects your privacy. We only collect essential information needed for communication and promotions. We never share or sell your data to third parties. Your details submitted through listings or forms are strictly used for business purposes and to improve our services. By using our website, you agree to this policy.
            </p>
            
            <div className="mt-8 pt-6 border-t">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us through our{" "}
                <a href="/contact" className="text-primary hover:underline">
                  Contact page
                </a>.
              </p>
            </div>
            
            <div className="mt-6 text-sm text-muted-foreground">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}