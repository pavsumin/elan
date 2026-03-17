"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  shop: [
    { name: "New Arrivals", href: "/collections?filter=new" },
    { name: "Best Sellers", href: "/collections?filter=best" },
    { name: "Essentials", href: "/collections?filter=essentials" },
    { name: "Sale", href: "/collections?filter=sale" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Journal", href: "/journal" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
  ],
  support: [
    { name: "Contact", href: "/contact" },
    { name: "Shipping", href: "/shipping" },
    { name: "Returns", href: "/returns" },
    { name: "FAQ", href: "/faq" },
  ],
}

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="px-6 py-16 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div>
                <h3 className="font-serif text-3xl md:text-4xl">
                  Join Our World
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/70">
                  Subscribe to receive exclusive access to new collections, 
                  private events, and personalized style recommendations.
                </p>
              </div>
              <div className="flex items-center">
                <form className="flex w-full max-w-md gap-0">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 border-b border-primary-foreground/30 bg-transparent px-0 py-3 text-sm placeholder:text-primary-foreground/50 focus:border-primary-foreground focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="border-b border-primary-foreground/30 px-6 py-3 text-xs tracking-[0.15em] transition-colors hover:border-primary-foreground"
                  >
                    SUBSCRIBE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="font-serif text-3xl tracking-[0.2em]">
                ÉLAN
              </Link>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
                Timeless elegance meets modern sophistication. Crafted with 
                uncompromising attention to detail since 2001.
              </p>
              <div className="mt-8 flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center border border-primary-foreground/30 transition-colors hover:bg-primary-foreground hover:text-foreground"
                    aria-label={social.name}
                  >
                    <social.icon className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="text-xs tracking-[0.15em]">SHOP</h4>
              <ul className="mt-6 space-y-4">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-xs tracking-[0.15em]">COMPANY</h4>
              <ul className="mt-6 space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-xs tracking-[0.15em]">SUPPORT</h4>
              <ul className="mt-6 space-y-4">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="px-6 py-6 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-xs text-primary-foreground/50">
                © 2026 ÉLAN. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link
                  href="/privacy"
                  className="text-xs text-primary-foreground/50 transition-colors hover:text-primary-foreground"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-xs text-primary-foreground/50 transition-colors hover:text-primary-foreground"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
