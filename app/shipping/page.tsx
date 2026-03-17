import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ShippingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        <section className="px-6 py-16 md:px-12 md:py-24 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-5xl md:text-6xl">Shipping</h1>

            <div className="mt-12 space-y-12 text-sm leading-relaxed text-muted-foreground">
              <section>
                <h2 className="mb-4 font-serif text-2xl text-foreground">Domestic Shipping (United States)</h2>
                <div className="mt-6 border border-border">
                  <div className="grid grid-cols-3 border-b border-border bg-card px-4 py-3 text-xs tracking-[0.1em] text-foreground">
                    <span>METHOD</span>
                    <span>DELIVERY TIME</span>
                    <span>COST</span>
                  </div>
                  <div className="grid grid-cols-3 border-b border-border px-4 py-3">
                    <span>Standard</span>
                    <span>5-7 business days</span>
                    <span>$25</span>
                  </div>
                  <div className="grid grid-cols-3 border-b border-border px-4 py-3">
                    <span>Express</span>
                    <span>2-3 business days</span>
                    <span>$45</span>
                  </div>
                  <div className="grid grid-cols-3 px-4 py-3">
                    <span>Overnight</span>
                    <span>Next business day</span>
                    <span>$75</span>
                  </div>
                </div>
                <p className="mt-4">
                  <strong className="text-foreground">Free shipping</strong> on all orders over $500.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl text-foreground">International Shipping</h2>
                <p>
                  We ship to over 50 countries worldwide. International shipping rates are calculated at 
                  checkout based on destination and package weight. Delivery times typically range from 
                  7-14 business days.
                </p>
                <p className="mt-4">
                  Please note that international orders may be subject to import duties and taxes, which 
                  are the responsibility of the recipient.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl text-foreground">Order Processing</h2>
                <p>
                  Orders placed before 2pm EST Monday-Friday are typically processed the same day. Orders 
                  placed after 2pm EST or on weekends will be processed the next business day.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl text-foreground">Tracking Your Order</h2>
                <p>
                  Once your order ships, you will receive an email with your tracking number. You can track 
                  your package by visiting our website or the carrier&apos;s tracking page.
                </p>
              </section>

              <section>
                <h2 className="mb-4 font-serif text-2xl text-foreground">Questions?</h2>
                <p>
                  If you have any questions about shipping, please{" "}
                  <Link href="/contact" className="underline underline-offset-4">
                    contact us
                  </Link>
                  .
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
