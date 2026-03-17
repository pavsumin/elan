"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Spinner } from "@/components/ui/spinner"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    toast.success("Message sent successfully!", {
      description: "We'll get back to you within 24-48 hours.",
    })
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        <section className="px-6 py-16 md:px-12 md:py-24 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-2">
              {/* Left - Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="font-serif text-5xl md:text-6xl">Contact Us</h1>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  We&apos;d love to hear from you. Whether you have a question about our products, 
                  need help with an order, or just want to say hello, our team is here to help.
                </p>

                <div className="mt-12 space-y-8">
                  <div>
                    <h3 className="text-xs tracking-[0.15em]">CUSTOMER SERVICE</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Available Monday - Friday, 9am - 6pm EST
                    </p>
                    <a
                      href="mailto:hello@elan.com"
                      className="mt-1 block text-sm underline underline-offset-4"
                    >
                      hello@elan.com
                    </a>
                  </div>

                  <div>
                    <h3 className="text-xs tracking-[0.15em]">PRESS INQUIRIES</h3>
                    <a
                      href="mailto:press@elan.com"
                      className="mt-2 block text-sm underline underline-offset-4"
                    >
                      press@elan.com
                    </a>
                  </div>

                  <div>
                    <h3 className="text-xs tracking-[0.15em]">WHOLESALE</h3>
                    <a
                      href="mailto:wholesale@elan.com"
                      className="mt-2 block text-sm underline underline-offset-4"
                    >
                      wholesale@elan.com
                    </a>
                  </div>

                  <div>
                    <h3 className="text-xs tracking-[0.15em]">FLAGSHIP STORE</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      123 Madison Avenue<br />
                      New York, NY 10016<br />
                      Mon - Sat: 10am - 7pm<br />
                      Sun: 11am - 6pm
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right - Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs tracking-[0.1em] text-muted-foreground">
                        NAME
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="border-border bg-transparent"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs tracking-[0.1em] text-muted-foreground">
                        EMAIL
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="border-border bg-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs tracking-[0.1em] text-muted-foreground">
                      SUBJECT
                    </label>
                    <Select
                      value={formData.subject}
                      onValueChange={(v) => setFormData({ ...formData, subject: v })}
                    >
                      <SelectTrigger className="border-border bg-transparent">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="order">Order Inquiry</SelectItem>
                        <SelectItem value="product">Product Question</SelectItem>
                        <SelectItem value="returns">Returns & Exchanges</SelectItem>
                        <SelectItem value="sizing">Sizing Help</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs tracking-[0.1em] text-muted-foreground">
                      MESSAGE
                    </label>
                    <Textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="border-border bg-transparent resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-foreground py-6 text-xs tracking-[0.15em] text-primary-foreground hover:bg-foreground/90"
                  >
                    {isSubmitting ? (
                      <>
                        <Spinner className="mr-2 h-4 w-4" />
                        SENDING...
                      </>
                    ) : (
                      "SEND MESSAGE"
                    )}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
