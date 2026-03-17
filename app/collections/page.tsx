'use client'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { useCart } from '@/lib/cart-context'
import { categories, products, sortOptions } from '@/lib/data'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { Grid3X3, LayoutGrid, Plus, SlidersHorizontal } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useRef, useState } from 'react'
import { toast } from 'sonner'

export default function CollectionsPage() {
	const [selectedCategory, setSelectedCategory] = useState('All')
	const [sortBy, setSortBy] = useState('Newest')
	const [gridSize, setGridSize] = useState<'large' | 'small'>('large')
	const [isFilterOpen, setIsFilterOpen] = useState(false)
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-50px' })
	const { addItem } = useCart()

	const filteredProducts = useMemo(() => {
		let filtered = products.filter(
			product =>
				selectedCategory === 'All' || product.category === selectedCategory,
		)

		if (sortBy === 'Price: Low to High') {
			filtered = [...filtered].sort((a, b) => a.price - b.price)
		} else if (sortBy === 'Price: High to Low') {
			filtered = [...filtered].sort((a, b) => b.price - a.price)
		}

		return filtered
	}, [selectedCategory, sortBy])

	const handleQuickAdd = (
		product: (typeof products)[0],
		e: React.MouseEvent,
	) => {
		e.preventDefault()
		e.stopPropagation()
		addItem({
			id: product.id,
			name: product.name,
			price: product.price,
			image: product.image,
			size: product.sizes[0],
			color: product.color,
		})
		toast.success('Added to bag', {
			description: `${product.name} - ${product.sizes[0]}`,
		})
	}

	return (
		<>
			<Header />
			<main className='min-h-screen bg-background pt-18'>
				{/* Page Header */}
				<section className='border-b border-border px-6 py-16 md:px-12 md:py-24 lg:px-20'>
					<div className='mx-auto max-w-7xl'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<p className='text-xs tracking-[0.2em] text-muted-foreground'>
								SPRING / SUMMER 2026
							</p>
							<h1 className='mt-4 font-serif text-5xl md:text-6xl lg:text-7xl'>
								Collections
							</h1>
							<p className='mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground'>
								Discover our curated selection of refined essentials, each piece
								crafted with uncompromising attention to detail and the finest
								natural materials.
							</p>
						</motion.div>
					</div>
				</section>

				{/* Filter Bar */}
				<section className='sticky top-[72px] z-40 border-b border-border bg-background/95 backdrop-blur-md'>
					<div className='px-6 py-4 md:px-12 lg:px-20'>
						<div className='mx-auto flex max-w-7xl items-center justify-between'>
							{/* Left - Categories (Desktop) */}
							<div className='hidden items-center gap-8 lg:flex'>
								{categories.map(category => (
									<button
										key={category}
										onClick={() => setSelectedCategory(category)}
										className={`relative text-xs tracking-[0.15em] transition-colors ${
											selectedCategory === category
												? 'text-foreground'
												: 'text-muted-foreground hover:text-foreground'
										}`}
									>
										{category.toUpperCase()}
										{selectedCategory === category && (
											<motion.div
												layoutId='categoryUnderline'
												className='absolute -bottom-1 left-0 right-0 h-px bg-foreground'
											/>
										)}
									</button>
								))}
							</div>

							{/* Mobile Filter Button */}
							<Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
								<SheetTrigger asChild>
									<button className='flex items-center gap-2 text-xs tracking-[0.15em] lg:hidden'>
										<SlidersHorizontal className='h-4 w-4' strokeWidth={1.5} />
										FILTER & SORT
									</button>
								</SheetTrigger>
								<SheetContent side='bottom' className='h-[70vh] bg-background'>
									<SheetHeader className='border-b border-border pb-4'>
										<SheetTitle className='text-xs tracking-[0.15em]'>
											FILTER & SORT
										</SheetTitle>
									</SheetHeader>
									<div className='py-6 px-6'>
										<div className='mb-8'>
											<h3 className='mb-4 text-xs tracking-[0.15em] text-muted-foreground'>
												CATEGORY
											</h3>
											<div className='flex flex-wrap gap-2'>
												{categories.map(category => (
													<button
														key={category}
														onClick={() => setSelectedCategory(category)}
														className={`border px-4 py-2 text-xs tracking-[0.1em] transition-colors ${
															selectedCategory === category
																? 'border-foreground bg-foreground text-primary-foreground'
																: 'border-border hover:border-foreground'
														}`}
													>
														{category.toUpperCase()}
													</button>
												))}
											</div>
										</div>
										<Separator className='my-6' />
										<div>
											<h3 className='mb-4 text-xs tracking-[0.15em] text-muted-foreground'>
												SORT BY
											</h3>
											<div className='space-y-2'>
												{sortOptions.map(option => (
													<button
														key={option}
														onClick={() => setSortBy(option)}
														className={`block w-full py-2 text-left text-sm ${
															sortBy === option
																? 'text-foreground'
																: 'text-muted-foreground hover:text-foreground'
														}`}
													>
														{option}
													</button>
												))}
											</div>
										</div>
									</div>
									<div className='absolute bottom-0 left-0 right-0 border-t border-border bg-background p-6'>
										<Button
											onClick={() => setIsFilterOpen(false)}
											className='w-full bg-foreground text-primary-foreground hover:bg-foreground/90'
										>
											View {filteredProducts.length} Products
										</Button>
									</div>
								</SheetContent>
							</Sheet>

							{/* Right - Sort & Grid Toggle */}
							<div className='flex items-center gap-6'>
								{/* Sort Dropdown (Desktop) */}
								<div className='hidden items-center gap-2 lg:flex'>
									<span className='text-xs tracking-[0.1em] text-muted-foreground'>
										SORT:
									</span>
									<Select value={sortBy} onValueChange={setSortBy}>
										<SelectTrigger className='w-[180px] border-0 bg-transparent text-xs tracking-[0.1em] focus:ring-0'>
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											{sortOptions.map(option => (
												<SelectItem key={option} value={option}>
													{option}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>

								{/* Grid Toggle */}
								<div className='flex items-center gap-2 border-l border-border pl-6'>
									<button
										onClick={() => setGridSize('large')}
										className={`p-1 ${gridSize === 'large' ? 'text-foreground' : 'text-muted-foreground'}`}
										aria-label='Large grid'
									>
										<Grid3X3 className='h-5 w-5' strokeWidth={1.5} />
									</button>
									<button
										onClick={() => setGridSize('small')}
										className={`p-1 ${gridSize === 'small' ? 'text-foreground' : 'text-muted-foreground'}`}
										aria-label='Small grid'
									>
										<LayoutGrid className='h-5 w-5' strokeWidth={1.5} />
									</button>
								</div>

								{/* Product Count */}
								<span className='hidden text-xs text-muted-foreground lg:block'>
									{filteredProducts.length} PRODUCTS
								</span>
							</div>
						</div>
					</div>
				</section>

				{/* Products Grid */}
				<section className='px-6 py-12 md:px-12 md:py-16 lg:px-20' ref={ref}>
					<div className='mx-auto max-w-7xl'>
						<motion.div
							layout
							className={`grid gap-6 ${
								gridSize === 'large'
									? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
									: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
							}`}
						>
							<AnimatePresence mode='popLayout'>
								{filteredProducts.map((product, index) => (
									<motion.div
										key={product.id}
										layout
										initial={{ opacity: 0, y: 20 }}
										animate={isInView ? { opacity: 1, y: 0 } : {}}
										exit={{ opacity: 0, scale: 0.9 }}
										transition={{ duration: 0.4, delay: index * 0.05 }}
									>
										<Link
											href={`/product/${product.id}`}
											className='group block'
										>
											<div
												className={`relative overflow-hidden bg-secondary ${
													gridSize === 'large'
														? 'aspect-[3/4]'
														: 'aspect-square'
												}`}
											>
												<Image
													src={product.image}
													alt={product.name}
													fill
													className='object-cover transition-transform duration-700 group-hover:scale-105'
												/>
												{product.isNew && (
													<span className='absolute left-4 top-4 bg-foreground px-3 py-1 text-[10px] tracking-[0.15em] text-primary-foreground'>
														NEW
													</span>
												)}
												<motion.button
													whileHover={{ scale: 1.1 }}
													onClick={e => handleQuickAdd(product, e)}
													className='absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center bg-background opacity-0 transition-opacity group-hover:opacity-100'
													aria-label='Quick add'
												>
													<Plus className='h-5 w-5' strokeWidth={1.5} />
												</motion.button>
											</div>
											<div className='mt-4'>
												<p className='text-xs text-muted-foreground'>
													{product.category}
												</p>
												<h3 className='mt-1 text-sm'>{product.name}</h3>
												<p className='mt-2 font-serif text-lg'>
													${product.price}
												</p>
											</div>
										</Link>
									</motion.div>
								))}
							</AnimatePresence>
						</motion.div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
