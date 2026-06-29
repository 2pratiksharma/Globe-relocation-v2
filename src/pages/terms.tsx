import Seo from "@/components/Seo";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const easeStandard = [0.22, 0.61, 0.36, 1] as const;

export default function TermsAndConditions() {
  return (
    <div className="page-gradient min-h-screen text-secondary">
      <Seo
        title="Terms & Conditions | Globe Relocation Packers and Movers Banglore Banglore"
        description="Terms and Conditions for Globe Relocation Packers and Movers Banglore Banglore. Read our service agreement, booking policies, and liability terms."
        path="/terms"
      />

      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: easeStandard }}
          >
            <h1 className="font-heading text-4xl text-primary md:text-5xl mb-8">Terms & Conditions</h1>
            <p className="text-muted mb-12 italic">Last Updated: March 2025</p>

            <div className="space-y-12 text-secondary leading-relaxed">
              <section>
                <h2 className="text-2xl font-heading text-primary mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing our website https://globerelo.in and using the services of Globe Relocation Packers and Movers Banglore Banglore, you agree to comply with and be bound by these Terms & Conditions. If you do not agree with any part of these terms, please refrain from using our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading text-primary mb-4">2. Services Offered</h2>
                <p>
                  Globe Relocation Packers and Movers Banglore Banglore provides professional packing, loading, transportation, unloading, and unpacking services for household shifting, office relocation, and international moves. We also offer specialized services like vehicle transportation and bonded storage.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading text-primary mb-4">3. User Responsibilities</h2>
                <p className="mb-4">As a user and customer, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information regarding your move requirements.</li>
                  <li>Ensure that you have the legal right to transport the goods being moved.</li>
                  <li>Not include prohibited items such as jewelry, cash, hazardous chemicals, explosives, or illegal substances in the consignment.</li>
                  <li>Be present or have an authorized representative present during the packing and delivery process.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading text-primary mb-4">4. Booking and Payment</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>A booking is considered confirmed only after an initial advance payment as specified in your quote.</li>
                  <li>The remaining balance must be paid before or at the time of loading, unless otherwise agreed upon in writing.</li>
                  <li>Quotes are valid for 15 days from the date of issuance.</li>
                  <li>Cancellations made within 24 hours of the scheduled move date may be subject to a cancellation fee.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading text-primary mb-4">5. Insurance and Claims</h2>
                <p className="mb-4">To safeguard your belongings, we recommend opting for our comprehensive marine insurance:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Insurance coverage is subject to the terms of the insurance provider.</li>
                  <li>Inventory lists with declared values must be provided by the customer for insurance purposes.</li>
                  <li>Any claims for damages or missing items must be reported within 48 hours of delivery and noted on the consignment note.</li>
                  <li>Globe Relocation will assist in the claim process but is not responsible for the final decision of the insurance company.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading text-primary mb-4">6. Limitation of Liability</h2>
                <p>
                  While we take every precaution to ensure the safety of your goods, Globe Relocation Packers and Movers Banglore Banglore shall not be liable for any indirect, incidental, or consequential damages. Our liability for any loss or damage is limited to the terms specified in the service contract and the insurance coverage opted by the customer.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading text-primary mb-4">7. Governing Law</h2>
                <p>
                  These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with our services shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading text-primary mb-4">8. Contact Information</h2>
                <p>
                  For any clarifications regarding these Terms & Conditions, please reach out to us:
                </p>
                <div className="mt-4 p-6 rounded-2xl border border-[rgba(0, 0, 0, 0.08)] bg-[rgba(255, 255, 255, 0.6)]">
                  <p className="font-heading text-primary">Globe Relocation Packers and Movers Banglore Banglore</p>
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
