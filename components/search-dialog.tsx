'use client'

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { articles, products } from '@/lib/data'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { Search, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'

interface SearchDialogProps {
	open: boolean
	onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
	const [query, setQuery] = useState('')

	useEffect(() => {
		if (!open) setQuery('')
	}, [open])

	const results = useMemo(() => {
		if (!query.trim()) return { products: [], articles: [] }

		const q = query.toLowerCase()
		return {
			products: products
				.filter(
					p =>
						p.name.toLowerCase().includes(q) ||
						p.category.toLowerCase().includes(q) ||
						p.color.toLowerCase().includes(q),
				)
				.slice(0, 4),
			articles: articles
				.filter(
					a =>
						a.title.toLowerCase().includes(q) ||
						a.category.toLowerCase().includes(q) ||
						a.excerpt.toLowerCase().includes(q),
				)
				.slice(0, 3),
		}
	}, [query])

	const hasResults = results.products.length > 0 || results.articles.length > 0

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className='max-h-[85vh] max-w-2xl gap-0 overflow-hidden p-0'>
				<VisuallyHidden>
					<DialogTitle>Search</DialogTitle>
				</VisuallyHidden>

				{/* Search Input */}
				<div className='flex items-center gap-3 border-b border-border px-6 py-4'>
					<Search className='h-5 w-5 text-muted-foreground' strokeWidth={1.5} />
					<Input
						autoFocus
						placeholder='Search products, articles...'
						value={query}
						onChange={e => setQuery(e.target.value)}
						className='flex-1 border-0 bg-transparent p-0 text-base placeholder:text-muted-foreground focus-visible:ring-0 px-4'
					/>
					{query && (
						<button
							onClick={() => setQuery('')}
							className='text-muted-foreground hover:text-foreground'
						>
							<X className='h-4 w-4' strokeWidth={1.5} />
						</button>
					)}
				</div>

				{/* Results */}
				<div className='max-h-[60vh] overflow-y-auto p-6'>
					{!query.trim() ? (
						<div className='py-12 text-center'>
							<p className='text-sm text-muted-foreground'>
								Start typing to search...
							</p>
							<div className='mt-6'>
								<p className='text-xs tracking-[0.15em] text-muted-foreground'>
									POPULAR SEARCHES
								</p>
								<div className='mt-3 flex flex-wrap justify-center gap-2'>
									{['Linen', 'Cashmere', 'New Arrivals', 'Sustainability'].map(
										term => (
											<button
												key={term}
												onClick={() => setQuery(term)}
												className='border border-border px-3 py-1.5 text-xs transition-colors hover:bg-foreground hover:text-primary-foreground'
											>
												{term}
											</button>
										),
									)}
								</div>
							</div>
						</div>
					) : !hasResults ? (
						<div className='py-12 text-center'>
							<p className='text-sm text-muted-foreground'>
								No results found for "{query}"
							</p>
							<p className='mt-2 text-xs text-muted-foreground'>
								Try searching for something else
							</p>
						</div>
					) : (
						<div className='space-y-8'>
							{/* Products */}
							{results.products.length > 0 && (
								<div>
									<div className='mb-4 flex items-center justify-between'>
										<h3 className='text-xs tracking-[0.15em] text-muted-foreground'>
											PRODUCTS
										</h3>
										<Link
											href={`/collections?search=${encodeURIComponent(query)}`}
											onClick={() => onOpenChange(false)}
											className='text-xs underline underline-offset-4'
										>
											View all
										</Link>
									</div>
									<div className='grid gap-4 sm:grid-cols-2'>
										{results.products.map(product => (
											<Link
												key={product.id}
												href={`/product/${product.id}`}
												onClick={() => onOpenChange(false)}
												className='group flex gap-4'
											>
												<div className='relative h-20 w-20 shrink-0 overflow-hidden bg-secondary'>
													<Image
														src={product.image}
														alt={product.name}
														fill
														className='object-cover transition-transform group-hover:scale-105'
													/>
												</div>
												<div className='flex flex-col justify-center'>
													<p className='text-xs text-muted-foreground'>
														{product.category}
													</p>
													<p className='mt-1 text-sm'>{product.name}</p>
													<p className='mt-1 font-serif'>${product.price}</p>
												</div>
											</Link>
										))}
									</div>
								</div>
							)}

							{/* Articles */}
							{results.articles.length > 0 && (
								<div>
									<div className='mb-4 flex items-center justify-between'>
										<h3 className='text-xs tracking-[0.15em] text-muted-foreground'>
											JOURNAL
										</h3>
										<Link
											href='/journal'
											onClick={() => onOpenChange(false)}
											className='text-xs underline underline-offset-4'
										>
											View all
										</Link>
									</div>
									<div className='space-y-4'>
										{results.articles.map(article => (
											<Link
												key={article.id}
												href={`/journal/${article.slug}`}
												onClick={() => onOpenChange(false)}
												className='group block'
											>
												<p className='text-xs text-muted-foreground'>
													{article.category}
												</p>
												<p className='mt-1 text-sm group-hover:underline'>
													{article.title}
												</p>
											</Link>
										))}
									</div>
								</div>
							)}
						</div>
					)}
				</div>
			</DialogContent>
		</Dialog>
	)
}
