import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        <section className="px-6 py-16 md:px-12 md:py-24 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-5xl md:text-6xl">Terms of Service</h1>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: March 1, 2026</p>

            <div className="mt-12 space-y-12 text-sm leading-relaxed text-muted-foreground">
              <section>
                <h2 className="mb-4 font-serif text-2xl text-foreground">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using this website, you accept and agree to be bound by the terms and 
                  provisions of this agreement. If you do not agree to abide by these terms, please do 
                  not use this site.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl text-foreground">2. Products and Pricing</h2>
                <p>
                  All products displayed on this website are subject to availability. We reserve the right 
                  to discontinue any product at any time. Prices for products are subject to change without 
                  notice. We shall not be liable to you or any third party for any modification, price 
                  change, suspension, or discontinuance of any product.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl text-foreground">3. Orders and Payment</h2>
                <p>
                  We reserve the right to refuse any order you place with us. We may, in our sole discretion, 
                  limit or cancel quantities purchased per person, per household, or per order. Payment must 
                  be received prior to the acceptance of an order.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl text-foreground">4. Shipping and Delivery</h2>
                <p>
                  Shipping times are estimates only and cannot be guaranteed. We are not liable for any 
                  delays in shipments. Risk of loss and title for items purchased pass to you upon delivery 
                  of the items to the carrier.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl text-foreground">5. Returns and Exchanges</h2>
                <p>
                  We accept returns within 30 days of purchase for unworn items in original condition with 
                  tags attached. Items marked as final sale cannot be returned or exchanged. Refunds will 
                  be processed to the original payment method within 5-10 business days.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl text-foreground">6. Intellectual Property</h2>
                <p>
                  All content on this website, including but not limited to text, graphics, logos, images, 
                  and software, is the property of ÉLAN and is protected by international copyright laws. 
                  You may not reproduce, distribute, or create derivative works without our express 
                  written permission.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl text-foreground">7. Limitation of Liability</h2>
                <p>
                  In no event shall ÉLAN, its directors, employees, or agents be liable for any indirect, 
                  punitive, incidental, special, or consequential damages arising out of or in any way 
                  connected with the use of this website or products purchased through it.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl text-foreground">8. Contact Information</h2>
                <p>
                  Questions about the Terms of Service should be sent to us at:
                </p>
                <p className="mt-4">
                  ÉLAN<br />
                  123 Madison Avenue<br />
                  New York, NY 10016<br />
                  legal@elan.com
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
