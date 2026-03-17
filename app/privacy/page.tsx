import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        <section className="px-6 py-16 md:px-12 md:py-24 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-5xl md:text-6xl">Privacy Policy</h1>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: March 1, 2026</p>

            <div className="mt-12 space-y-12 text-sm leading-relaxed text-muted-foreground">
              <section>
                <h2 className="mb-4 font-serif text-2xl text-foreground">1. Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you create an account, 
                  make a purchase, subscribe to our newsletter, or contact us for support. This information 
                  may include your name, email address, postal address, phone number, and payment information.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl text-foreground">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="mt-4 list-inside list-disc space-y-2">
                  <li>Process transactions and send related information</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Analyze trends and improve our services</li>
                  <li>Detect, investigate, and prevent fraudulent transactions</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl text-foreground">3. Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy. We may share information with 
                  service providers who assist us in operating our website and conducting our business.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl text-foreground">4. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction. 
                  However, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl text-foreground">5. Your Rights</h2>
                <p>
                  You have the right to access, correct, or delete your personal information. You may also 
                  object to or restrict certain processing of your data. To exercise these rights, please 
                  contact us at privacy@elan.com.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl text-foreground">6. Cookies</h2>
                <p>
                  We use cookies and similar tracking technologies to track activity on our website and 
                  hold certain information. You can instruct your browser to refuse all cookies or to 
                  indicate when a cookie is being sent.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl text-foreground">7. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="mt-4">
                  ÉLAN<br />
                  123 Madison Avenue<br />
                  New York, NY 10016<br />
                  privacy@elan.com
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
