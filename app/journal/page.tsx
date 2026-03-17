'use client'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { articleCategories, articles } from '@/lib/data'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useRef, useState } from 'react'

export default function JournalPage() {
	const [selectedCategory, setSelectedCategory] = useState('All')
	const gridRef = useRef(null)
	const isGridInView = useInView(gridRef, { once: true, margin: '-50px' })

	const featuredPost = articles[0]
	const otherPosts = articles.slice(1)

	const filteredPosts = useMemo(() => {
		if (selectedCategory === 'All') return otherPosts
		return otherPosts.filter(post => post.category === selectedCategory)
	}, [selectedCategory, otherPosts])

	return (
		<>
			<Header />
			<main className='min-h-screen bg-background pt-18'>
				{/* Page Header */}
				<motion.section
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='border-b border-border px-6 py-16 md:px-12 md:py-24 lg:px-20'
				>
					<div className='mx-auto max-w-7xl'>
						<p className='text-xs tracking-[0.2em] text-muted-foreground'>
							STORIES & INSIGHTS
						</p>
						<h1 className='mt-4 font-serif text-5xl md:text-6xl lg:text-7xl'>
							The Journal
						</h1>
						<p className='mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground'>
							Explore our world through stories of craft, sustainability, and
							the art of mindful dressing. Discover the people and processes
							behind every piece.
						</p>
					</div>
				</motion.section>

				{/* Categories Filter */}
				<motion.section
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className='border-b border-border px-6 py-4 md:px-12 lg:px-20'
				>
					<div className='mx-auto max-w-7xl'>
						<div className='flex items-center justify-between'>
							{/* Desktop Categories */}
							<div className='hidden gap-6 md:flex py-2'>
								{articleCategories.map(category => (
									<button
										key={category}
										onClick={() => setSelectedCategory(category)}
										className={`whitespace-nowrap text-xs tracking-[0.15em] transition-colors ${
											selectedCategory === category
												? 'text-foreground'
												: 'text-muted-foreground hover:text-foreground'
										}`}
									>
										{category.toUpperCase()}
										{selectedCategory === category && (
											<motion.div
												layoutId='journalCategoryUnderline'
												className='mt-1 h-px bg-foreground'
											/>
										)}
									</button>
								))}
							</div>

							{/* Mobile Category Select */}
							<div className='w-full md:hidden'>
								<Select
									value={selectedCategory}
									onValueChange={setSelectedCategory}
								>
									<SelectTrigger className='w-full border-0 bg-transparent px-0 text-xs tracking-[0.15em] focus:ring-0'>
										<SelectValue placeholder='Select category' />
									</SelectTrigger>
									<SelectContent>
										{articleCategories.map(category => (
											<SelectItem key={category} value={category}>
												{category}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>

							<span className='hidden text-xs text-muted-foreground md:block'>
								{filteredPosts.length + 1} ARTICLES
							</span>
						</div>
					</div>
				</motion.section>

				{/* Featured Post */}
				<section className='px-6 py-16 md:px-12 md:py-24 lg:px-20'>
					<div className='mx-auto max-w-7xl'>
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
						>
							<Link
								href={`/journal/${featuredPost.slug}`}
								className='group block'
							>
								<div className='grid gap-8 lg:grid-cols-2 lg:gap-12'>
									<div className='relative aspect-[4/3] overflow-hidden lg:aspect-[4/5]'>
										<Image
											src={featuredPost.image}
											alt={featuredPost.title}
											fill
											className='object-cover transition-transform duration-700 group-hover:scale-105'
											priority
										/>
									</div>
									<div className='flex flex-col justify-center'>
										<div className='flex items-center gap-4'>
											<span className='text-xs tracking-[0.15em] text-muted-foreground'>
												{featuredPost.category.toUpperCase()}
											</span>
											<span className='text-xs text-muted-foreground'>•</span>
											<span className='text-xs text-muted-foreground'>
												{featuredPost.date}
											</span>
										</div>
										<h2 className='mt-4 font-serif text-3xl leading-tight md:text-4xl lg:text-5xl'>
											{featuredPost.title}
										</h2>
										<p className='mt-6 text-sm leading-relaxed text-muted-foreground'>
											{featuredPost.excerpt}
										</p>
										<div className='mt-8 flex items-center gap-2 text-xs tracking-[0.15em]'>
											READ ARTICLE
											<ArrowRight
												className='h-4 w-4 transition-transform group-hover:translate-x-1'
												strokeWidth={1.5}
											/>
										</div>
									</div>
								</div>
							</Link>
						</motion.div>
					</div>
				</section>

				{/* Posts Grid */}
				<section
					className='bg-card px-6 py-16 md:px-12 md:py-24 lg:px-20'
					ref={gridRef}
				>
					<div className='mx-auto max-w-7xl'>
						<div className='mb-12 flex items-center justify-between'>
							<h2 className='font-serif text-2xl'>Latest Stories</h2>
							<span className='text-xs text-muted-foreground'>
								{filteredPosts.length} ARTICLES
							</span>
						</div>

						<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
							{filteredPosts.map((post, index) => (
								<motion.article
									key={post.id}
									initial={{ opacity: 0, y: 30 }}
									animate={isGridInView ? { opacity: 1, y: 0 } : {}}
									transition={{ duration: 0.6, delay: index * 0.1 }}
								>
									<Link href={`/journal/${post.slug}`} className='group block'>
										<div className='relative aspect-[4/3] overflow-hidden'>
											<Image
												src={post.image}
												alt={post.title}
												fill
												className='object-cover transition-transform duration-700 group-hover:scale-105'
											/>
										</div>
										<div className='mt-6'>
											<div className='flex items-center gap-4'>
												<span className='text-xs tracking-[0.15em] text-muted-foreground'>
													{post.category.toUpperCase()}
												</span>
												<span className='text-xs text-muted-foreground'>
													{post.readTime}
												</span>
											</div>
											<h3 className='mt-3 font-serif text-xl leading-tight'>
												{post.title}
											</h3>
											<p className='mt-3 line-clamp-2 text-sm text-muted-foreground'>
												{post.excerpt}
											</p>
											<p className='mt-4 text-xs text-muted-foreground'>
												{post.date}
											</p>
										</div>
									</Link>
								</motion.article>
							))}
						</div>

						{filteredPosts.length === 0 && (
							<div className='py-16 text-center'>
								<p className='text-muted-foreground'>
									No articles found in this category.
								</p>
								<button
									onClick={() => setSelectedCategory('All')}
									className='mt-4 text-xs tracking-[0.15em] underline underline-offset-4'
								>
									VIEW ALL ARTICLES
								</button>
							</div>
						)}
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
