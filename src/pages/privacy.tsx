import Seo from "@/components/Seo";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const easeStandard = [0.22, 0.61, 0.36, 1] as const;

export default function PrivacyPolicy() {
  return (
    <div className="page-gradient min-h-screen text-secondary">
      <Seo
        title="Privacy Policy | Globe Relocation Packers and Movers"
        description="Privacy Policy for Globe Relocation Packers and Movers. Learn how we collect, use, and protect your personal information."
        path="/privacy"
      />

      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: easeStandard }}
          >
            <h1 className="font-heading text-4xl text-primary md:text-5xl mb-8">Privacy Policy</h1>
            <p className="text-muted mb-12 italic">Last Updated: March 2025</p>

            <div className="space-y-12 text-secondary leading-relaxed">
              <section>
                <h2 className="text-2xl font-heading text-primary mb-4">1. Introduction</h2>
                <p>
                  At Globe Relocation Packers and Movers (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://globerelo.in or use our relocation services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading text-primary mb-4">2. Information We Collect</h2>
                <p className="mb-4">We may collect personal information that you provide directly to us, including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact details (name, email address, phone number).</li>
                  <li>Relocation details (current and destination addresses, preferred moving date, inventory details).</li>
                  <li>Payment information (processed securely through our payment partners).</li>
                  <li>Communications you send to us via WhatsApp, email, or our contact forms.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading text-primary mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use the collected information for various purposes, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing and managing our relocation and packing services.</li>
                  <li>Generating accurate quotes and move blueprints.</li>
                  <li>Communicating with you regarding your move, including updates via WhatsApp.</li>
                  <li>Processing payments and preventing fraudulent transactions.</li>
                  <li>Improving our website and customer service experience.</li>
                  <li>Complying with legal and regulatory obligations.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading text-primary mb-4">4. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading text-primary mb-4">5. Data Protection and Security</h2>
                <p>
                  The security of your data is important to us. We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please remember that no method of transmission over the internet or method of electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading text-primary mb-4">6. Third-Party Sharing</h2>
                <p className="mb-4">We do not sell your personal data. We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Logistics partners and subcontractors necessary to fulfill your relocation request.</li>
                  <li>Service providers who assist us in website analytics, payment processing, and communication.</li>
                  <li>Law enforcement or regulatory authorities if required by law or to protect our rights.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading text-primary mb-4">7. User Rights</h2>
                <p className="mb-4">Depending on your location, you may have the following rights regarding your personal data:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The right to access the personal information we hold about you.</li>
                  <li>The right to request correction of inaccurate data.</li>
                  <li>The right to request deletion of your personal data under certain conditions.</li>
                  <li>The right to withdraw consent for data processing at any time.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading text-primary mb-4">8. Contact Information</h2>
                <p>
                  If you have any questions or concerns about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 p-6 rounded-2xl border border-[rgba(0, 0, 0, 0.08)] bg-[rgba(255, 255, 255, 0.6)]">
                  <p className="font-heading text-primary">Globe Relocation Packers and Movers</p>
                  <p>Email: info@globerelo.in</p>
                  <p>Phone: +91 79888 59067</p>
                  <p>Address: Bangalore, Karnataka, India</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
