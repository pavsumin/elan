"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Plus } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Essential Linen Shirt",
    price: 285,
    image: "/images/collection-1.jpg",
    category: "Tops",
  },
  {
    id: 2,
    name: "Cashmere Knit Sweater",
    price: 495,
    image: "/images/collection-2.jpg",
    category: "Knitwear",
  },
  {
    id: 3,
    name: "Tailored Wool Trousers",
    price: 385,
    image: "/images/collection-3.jpg",
    category: "Bottoms",
  },
  {
    id: 4,
    name: "Structured Wool Coat",
    price: 895,
    image: "/images/collection-4.jpg",
    category: "Outerwear",
  },
]

export function FeaturedProducts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="bg-background py-24 md:py-32" ref={ref}>
      <div className="px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <p className="text-xs tracking-[0.2em] text-muted-foreground">
                CURATED SELECTION
              </p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Featured Pieces
              </h2>
            </div>
            <Link
              href="/collections"
              className="group flex items-center gap-2 text-xs tracking-[0.15em] text-foreground"
            >
              VIEW ALL
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </Link>
          </motion.div>

          {/* Products Grid */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/product/${product.id}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Quick Add Button */}
                    <motion.button
                      initial={{ opacity: 0 }}
                      whileHover={{ scale: 1.1 }}
                      className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center bg-background opacity-0 transition-opacity group-hover:opacity-100"
                      aria-label="Quick add"
                    >
                      <Plus className="h-5 w-5" strokeWidth={1.5} />
                    </motion.button>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs text-muted-foreground">{product.category}</p>
                    <h3 className="mt-1 text-sm">{product.name}</h3>
                    <p className="mt-2 font-serif text-lg">${product.price}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
