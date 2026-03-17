'use client'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { useCart } from '@/lib/cart-context'
import { products } from '@/lib/data'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ArrowLeft, Check, Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { use, useState } from 'react'
import { toast } from 'sonner'

interface PageProps {
	params: Promise<{ id: string }>
}

export default function ProductPage({ params }: PageProps) {
	const { id } = use(params)
	const product = products.find(p => p.id === parseInt(id))

	if (!product) {
		notFound()
	}

	const [selectedSize, setSelectedSize] = useState('')
	const [selectedColor, setSelectedColor] = useState(product.color)
	const [quantity, setQuantity] = useState(1)
	const [activeImage, setActiveImage] = useState(0)
	const { addItem } = useCart()

	const handleAddToCart = () => {
		if (!selectedSize && product.sizes[0] !== 'One Size') {
			toast.error('Please select a size')
			return
		}

		addItem({
			id: product.id,
			name: product.name,
			price: product.price,
			image: product.image,
			size: selectedSize || product.sizes[0],
			color: selectedColor,
		})

		toast.success('Added to bag', {
			description: `${product.name} - ${selectedSize || product.sizes[0]}`,
		})
	}

	const relatedProducts = products
		.filter(p => p.category === product.category && p.id !== product.id)
		.slice(0, 4)

	return (
		<>
			<Header />
			<main className='min-h-screen bg-background pt-18'>
				{/* Breadcrumb */}
				<div className='border-b border-border px-6 py-4 mt-2 md:px-12 lg:px-20'>
					<div className='mx-auto max-w-7xl'>
						<Link
							href='/collections'
							className='inline-flex items-center gap-2 text-xs tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground'
						>
							<ArrowLeft className='h-4 w-4' strokeWidth={1.5} />
							BACK TO COLLECTIONS
						</Link>
					</div>
				</div>

				{/* Product Details */}
				<section className='px-6 py-12 md:px-12 md:py-16 lg:px-20'>
					<div className='mx-auto max-w-7xl'>
						<div className='grid gap-12 lg:grid-cols-2 lg:gap-16'>
							{/* Images */}
							<div className='space-y-4'>
								<motion.div
									key={activeImage}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									className='relative aspect-[3/4] overflow-hidden bg-secondary'
								>
									<Image
										src={product.images[activeImage]}
										alt={product.name}
										fill
										className='object-cover'
										priority
									/>
									{product.isNew && (
										<span className='absolute left-4 top-4 bg-foreground px-3 py-1 text-[10px] tracking-[0.15em] text-primary-foreground'>
											NEW
										</span>
									)}
								</motion.div>
								{product.images.length > 1 && (
									<div className='flex gap-4'>
										{product.images.map((img, i) => (
											<button
												key={i}
												onClick={() => setActiveImage(i)}
												className={cn(
													'relative h-20 w-20 overflow-hidden bg-secondary transition-opacity',
													activeImage === i
														? 'ring-1 ring-foreground'
														: 'opacity-60 hover:opacity-100',
												)}
											>
												<Image src={img} alt='' fill className='object-cover' />
											</button>
										))}
									</div>
								)}
							</div>

							{/* Details */}
							<div className='lg:py-8'>
								<p className='text-xs tracking-[0.15em] text-muted-foreground'>
									{product.category.toUpperCase()}
								</p>
								<h1 className='mt-2 font-serif text-4xl md:text-5xl'>
									{product.name}
								</h1>
								<p className='mt-4 font-serif text-2xl'>${product.price}</p>

								<p className='mt-6 text-sm leading-relaxed text-muted-foreground'>
									{product.description}
								</p>

								{/* Color Selection */}
								<div className='mt-8'>
									<p className='text-xs tracking-[0.15em] text-muted-foreground'>
										COLOR: {selectedColor.toUpperCase()}
									</p>
									<div className='mt-3 flex gap-3'>
										{product.colors.map(color => (
											<button
												key={color}
												onClick={() => setSelectedColor(color)}
												className={cn(
													'relative h-10 w-10 border transition-all',
													selectedColor === color
														? 'border-foreground'
														: 'border-border hover:border-muted-foreground',
												)}
												title={color}
											>
												<span
													className='absolute inset-1'
													style={{
														backgroundColor:
															color === 'White'
																? '#fff'
																: color === 'Black'
																	? '#1a1a1a'
																	: color === 'Beige'
																		? '#d4c4b0'
																		: color === 'Cream'
																			? '#f5f0e8'
																			: color === 'Ivory'
																				? '#fffff0'
																				: color === 'Navy'
																					? '#1a1a40'
																					: color === 'Charcoal'
																						? '#36454f'
																						: color === 'Grey'
																							? '#808080'
																							: color === 'Camel'
																								? '#c19a6b'
																								: color === 'Blush'
																									? '#f5c6c6'
																									: color === 'Sage'
																										? '#9dc183'
																										: '#d4c4b0',
													}}
												/>
												{selectedColor === color && (
													<Check
														className='absolute inset-0 m-auto h-4 w-4 text-foreground mix-blend-difference'
														strokeWidth={2}
													/>
												)}
											</button>
										))}
									</div>
								</div>

								{/* Size Selection */}
								<div className='mt-8'>
									<div className='flex items-center justify-between'>
										<p className='text-xs tracking-[0.15em] text-muted-foreground'>
											SELECT SIZE
										</p>
										<button className='text-xs underline underline-offset-4'>
											Size Guide
										</button>
									</div>
									<div className='mt-3 flex flex-wrap gap-2'>
										{product.sizes.map(size => (
											<button
												key={size}
												onClick={() => setSelectedSize(size)}
												className={cn(
													'min-w-[3rem] border px-4 py-2 text-xs tracking-[0.1em] transition-colors',
													selectedSize === size
														? 'border-foreground bg-foreground text-primary-foreground'
														: 'border-border hover:border-foreground',
												)}
											>
												{size}
											</button>
										))}
									</div>
								</div>

								{/* Quantity */}
								<div className='mt-8'>
									<p className='text-xs tracking-[0.15em] text-muted-foreground'>
										QUANTITY
									</p>
									<div className='mt-3 flex items-center border border-border w-fit'>
										<button
											onClick={() => setQuantity(Math.max(1, quantity - 1))}
											className='px-4 py-3 text-muted-foreground hover:text-foreground'
											aria-label='Decrease quantity'
										>
											<Minus className='h-4 w-4' strokeWidth={1.5} />
										</button>
										<span className='w-12 text-center'>{quantity}</span>
										<button
											onClick={() => setQuantity(quantity + 1)}
											className='px-4 py-3 text-muted-foreground hover:text-foreground'
											aria-label='Increase quantity'
										>
											<Plus className='h-4 w-4' strokeWidth={1.5} />
										</button>
									</div>
								</div>

								{/* Add to Cart */}
								<div className='mt-8 space-y-3'>
									<Button
										onClick={handleAddToCart}
										className='w-full bg-foreground py-6 text-xs tracking-[0.15em] text-primary-foreground hover:bg-foreground/90'
									>
										ADD TO BAG — ${product.price * quantity}
									</Button>
								</div>

								{/* Details Accordion */}
								<div className='mt-12 space-y-0 divide-y divide-border border-t border-border'>
									<details className='group py-4'>
										<summary className='flex cursor-pointer items-center justify-between text-xs tracking-[0.15em]'>
											DETAILS
											<Plus
												className='h-4 w-4 transition-transform group-open:rotate-45'
												strokeWidth={1.5}
											/>
										</summary>
										<ul className='mt-4 space-y-2'>
											{product.details.map((detail, i) => (
												<li key={i} className='text-sm text-muted-foreground'>
													• {detail}
												</li>
											))}
										</ul>
									</details>
									<details className='group py-4'>
										<summary className='flex cursor-pointer items-center justify-between text-xs tracking-[0.15em]'>
											CARE
											<Plus
												className='h-4 w-4 transition-transform group-open:rotate-45'
												strokeWidth={1.5}
											/>
										</summary>
										<p className='mt-4 text-sm text-muted-foreground'>
											{product.care}
										</p>
									</details>
									<details className='group py-4'>
										<summary className='flex cursor-pointer items-center justify-between text-xs tracking-[0.15em]'>
											SHIPPING & RETURNS
											<Plus
												className='h-4 w-4 transition-transform group-open:rotate-45'
												strokeWidth={1.5}
											/>
										</summary>
										<div className='mt-4 space-y-2 text-sm text-muted-foreground'>
											<p>Free shipping on orders over $500.</p>
											<p>Standard shipping: 5-7 business days.</p>
											<p>Express shipping: 2-3 business days.</p>
											<p>Free returns within 30 days of purchase.</p>
										</div>
									</details>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Related Products */}
				{relatedProducts.length > 0 && (
					<section className='border-t border-border px-6 py-16 md:px-12 md:py-24 lg:px-20'>
						<div className='mx-auto max-w-7xl'>
							<h2 className='font-serif text-2xl'>You May Also Like</h2>
							<div className='mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
								{relatedProducts.map(item => (
									<Link
										key={item.id}
										href={`/product/${item.id}`}
										className='group block'
									>
										<div className='relative aspect-[3/4] overflow-hidden bg-secondary'>
											<Image
												src={item.image}
												alt={item.name}
												fill
												className='object-cover transition-transform duration-700 group-hover:scale-105'
											/>
										</div>
										<div className='mt-4'>
											<p className='text-xs text-muted-foreground'>
												{item.category}
											</p>
											<h3 className='mt-1 text-sm'>{item.name}</h3>
											<p className='mt-2 font-serif text-lg'>${item.price}</p>
										</div>
									</Link>
								))}
							</div>
						</div>
					</section>
				)}
			</main>
			<Footer />
		</>
	)
}
