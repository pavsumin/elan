"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    category: "Orders & Shipping",
    questions: [
      {
        q: "How long does shipping take?",
        a: "Standard shipping typically takes 5-7 business days within the US. Express shipping is available for 2-3 business day delivery. International orders usually arrive within 7-14 business days."
      },
      {
        q: "Do you offer free shipping?",
        a: "Yes! We offer complimentary shipping on all orders over $500 within the United States."
      },
      {
        q: "Can I track my order?",
        a: "Absolutely. Once your order ships, you'll receive an email with tracking information. You can also track your order through your account on our website."
      },
      {
        q: "Do you ship internationally?",
        a: "Yes, we ship to over 50 countries worldwide. Shipping rates and delivery times vary by destination and are calculated at checkout."
      },
    ]
  },
  {
    category: "Returns & Exchanges",
    questions: [
      {
        q: "What is your return policy?",
        a: "We accept returns within 30 days of purchase for unworn items in their original condition with tags attached. Final sale items cannot be returned."
      },
      {
        q: "How do I initiate a return?",
        a: "Log into your account, go to your order history, select the items you wish to return, and follow the prompts to generate a prepaid return label."
      },
      {
        q: "How long do refunds take?",
        a: "Once we receive your return, please allow 5-10 business days for your refund to be processed and credited to your original payment method."
      },
    ]
  },
  {
    category: "Products & Care",
    questions: [
      {
        q: "What materials do you use?",
        a: "We use only the finest natural materials including Belgian linen, Mongolian cashmere, Italian wool, and silk. All our materials are sustainably sourced."
      },
      {
        q: "How should I care for my garments?",
        a: "Care instructions are provided on each product page and on the garment's care label. Generally, we recommend dry cleaning for wool and silk items, and cold water washing for linen and cotton."
      },
      {
        q: "Are your products sustainable?",
        a: "Sustainability is at the core of everything we do. We use 100% natural and sustainably sourced materials, work with ethical manufacturers, and our production is carbon-neutral."
      },
    ]
  },
  {
    category: "Sizing & Fit",
    questions: [
      {
        q: "How do I find my size?",
        a: "Each product page includes detailed measurements and a size guide. If you're between sizes, we generally recommend sizing up for a more relaxed fit or down for a more fitted silhouette."
      },
      {
        q: "Do your sizes run true to size?",
        a: "Our sizing is designed to be consistent across all products. We recommend checking the specific measurements on each product page, as some styles may have a more relaxed or fitted cut."
      },
    ]
  },
  {
    category: "Account & Privacy",
    questions: [
      {
        q: "How do I create an account?",
        a: "Click the account icon in the top right corner of our website and select 'Create Account.' You'll need to provide your email address and create a password."
      },
      {
        q: "How do you protect my personal information?",
        a: "We take your privacy seriously. All personal information is encrypted and stored securely. We never sell your data to third parties. Please see our Privacy Policy for more details."
      },
    ]
  },
]

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        <section className="px-6 py-16 md:px-12 md:py-24 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-serif text-5xl md:text-6xl">FAQ</h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Find answers to frequently asked questions below. If you can&apos;t find what 
              you&apos;re looking for, please{" "}
              <Link href="/contact" className="underline underline-offset-4">
                contact us
              </Link>
              .
            </p>

            <div className="mt-12 space-y-12">
              {faqs.map((section) => (
                <div key={section.category}>
                  <h2 className="mb-4 text-xs tracking-[0.15em] text-muted-foreground">
                    {section.category.toUpperCase()}
                  </h2>
                  <Accordion type="single" collapsible className="border-t border-border">
                    {section.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`${section.category}-${index}`}>
                        <AccordionTrigger className="text-left text-sm hover:no-underline">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            <div className="mt-16 border-t border-border pt-12 text-center">
              <h2 className="font-serif text-2xl">Still have questions?</h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Our customer service team is here to help.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center bg-foreground px-8 py-4 text-xs tracking-[0.15em] text-primary-foreground transition-colors hover:bg-foreground/90"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
