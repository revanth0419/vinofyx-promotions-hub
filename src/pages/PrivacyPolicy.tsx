import { SEO } from "@/components/seo/SEO";
import { BackToTop } from "@/components/BackToTop";

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
            <div className="mb-6 pb-4 border-b">
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Effective Date:</strong> 04 JUNE 2025<br />
                <strong>Last Updated:</strong> 01 SEP 2025
              </p>
              <p className="text-lg leading-relaxed">
                At Promotions by vinofyx (promotions.vinofyx.com), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and safeguard your data when you interact with our website and services.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
                <p className="mb-3">When you visit or interact with our website, we may collect:</p>
                <div className="ml-4 space-y-3">
                  <div>
                    <h4 className="font-medium">Personal Information (when voluntarily provided):</h4>
                    <p className="text-muted-foreground">Name, email address, phone number, and business details (when you submit forms or contact us).</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Non-Personal Information:</h4>
                    <p className="text-muted-foreground">Browser type, IP address, device information, and usage data (collected automatically via cookies and analytics tools).</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
                <p className="mb-3">We use the information collected to:</p>
                <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                  <li>Provide, operate, and improve our website and promotional services.</li>
                  <li>Respond to inquiries, requests, and customer support.</li>
                  <li>Share promotional opportunities and updates.</li>
                  <li>Analyze website performance and user engagement.</li>
                  <li>Ensure compliance with legal and regulatory requirements.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">3. Sharing of Information</h2>
                <p className="mb-3">We do not sell, rent, or trade your personal information to third parties. However, we may share data:</p>
                <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                  <li>With trusted service providers (e.g., hosting, analytics, email services) who assist in operating our website.</li>
                  <li>To comply with legal obligations, enforce our terms, or protect the rights and safety of our users.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">4. Cookies & Tracking Technologies</h2>
                <p className="mb-3">Our website may use cookies, web beacons, and analytics tools (such as Google Analytics) to:</p>
                <ul className="list-disc ml-6 space-y-1 text-muted-foreground mb-3">
                  <li>Enhance user experience.</li>
                  <li>Monitor traffic and website performance.</li>
                  <li>Personalize content and promotions.</li>
                </ul>
                <p className="text-muted-foreground">You may disable cookies in your browser settings, but some features of the website may not function properly.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">5. Data Security</h2>
                <p className="text-muted-foreground">We implement reasonable technical and organizational measures to protect your personal data against unauthorized access, misuse, or disclosure. However, no online platform is completely secure, and we cannot guarantee absolute security.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">6. Third-Party Links</h2>
                <p className="text-muted-foreground">Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review their privacy policies before sharing personal information.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">7. Your Rights</h2>
                <p className="mb-3">Depending on your location, you may have the right to:</p>
                <ul className="list-disc ml-6 space-y-1 text-muted-foreground mb-3">
                  <li>Access, update, or delete your personal information.</li>
                  <li>Opt out of marketing communications.</li>
                  <li>Request a copy of the data we hold about you.</li>
                </ul>
                <p className="text-muted-foreground">
                  To exercise these rights, please contact us at: 
                  <a href="mailto:info@vinofyx.com" className="text-primary hover:underline ml-1">info@vinofyx.com</a>
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">8. Children's Privacy</h2>
                <p className="text-muted-foreground">Our website and services are not directed toward children under 13 years of age. We do not knowingly collect information from children. If you believe a child has provided us with personal data, please contact us to remove it.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">9. Changes to this Privacy Policy</h2>
                <p className="text-muted-foreground">We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. Updates will be posted on this page with a revised "Last Updated" date.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">10. Contact Us</h2>
                <p className="mb-3">If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us:</p>
                <div className="space-y-1 text-muted-foreground">
                  <p>📞 <a href="tel:+919391934534" className="text-primary hover:underline">+91 9391934534</a></p>
                  <p>📧 <a href="mailto:info@vinofyx.com" className="text-primary hover:underline">info@vinofyx.com</a></p>
                  <p>🌐 <a href="https://promotions.vinofyx.com" className="text-primary hover:underline">www.promotions.vinofyx.com</a></p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <BackToTop />
    </>
  );
}