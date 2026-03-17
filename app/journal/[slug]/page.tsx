import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { articles } from '@/lib/data'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface PageProps {
	params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
	return articles.map(article => ({
		slug: article.slug,
	}))
}

export default async function ArticlePage({ params }: PageProps) {
	const { slug } = await params
	const article = articles.find(a => a.slug === slug)

	if (!article) {
		notFound()
	}

	const currentIndex = articles.findIndex(a => a.slug === slug)
	const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null
	const nextArticle =
		currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null

	return (
		<>
			<Header />
			<main className='min-h-screen bg-background pt-20'>
				{/* Hero Image */}
				<section className='relative h-[50vh] md:h-[60vh]'>
					<Image
						src={article.image}
						alt={article.title}
						fill
						className='object-cover'
						priority
					/>
					<div className='absolute inset-0 bg-foreground/40' />
				</section>

				{/* Article Content */}
				<section className='px-6 py-16 md:px-12 md:py-24 lg:px-20'>
					<div className='mx-auto max-w-3xl'>
						{/* Back Link */}
						<Link
							href='/journal'
							className='mb-8 inline-flex items-center gap-2 text-xs tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground'
						>
							<ArrowLeft className='h-4 w-4' strokeWidth={1.5} />
							BACK TO JOURNAL
						</Link>

						{/* Meta */}
						<div className='flex items-center gap-4'>
							<span className='text-xs tracking-[0.15em] text-muted-foreground'>
								{article.category.toUpperCase()}
							</span>
							<span className='text-xs text-muted-foreground'>•</span>
							<span className='text-xs text-muted-foreground'>
								{article.date}
							</span>
							<span className='text-xs text-muted-foreground'>•</span>
							<span className='text-xs text-muted-foreground'>
								{article.readTime}
							</span>
						</div>

						{/* Title */}
						<h1 className='mt-6 font-serif text-4xl leading-tight md:text-5xl lg:text-6xl'>
							{article.title}
						</h1>

						{/* Author */}
						<div className='mt-8 flex items-center gap-4 border-b border-border pb-8'>
							<div className='flex h-12 w-12 items-center justify-center bg-secondary font-serif text-lg'>
								{article.author.charAt(0)}
							</div>
							<div>
								<p className='text-sm'>{article.author}</p>
								<p className='text-xs text-muted-foreground'>
									{article.authorRole}
								</p>
							</div>
						</div>

						{/* Content */}
						<div
							className='prose prose-lg mt-12 max-w-none prose-headings:font-serif prose-headings:font-normal prose-h2:mt-12 prose-h2:text-3xl prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground'
							dangerouslySetInnerHTML={{ __html: article.content }}
						/>

						{/* Share */}
						<div className='mt-16 border-t border-border pt-8'>
							<p className='text-xs tracking-[0.15em] text-muted-foreground'>
								SHARE THIS ARTICLE
							</p>
							<div className='mt-4 flex gap-4'>
								<a
									href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://elan.com/journal/${article.slug}`)}`}
									target='_blank'
									rel='noopener noreferrer'
									className='border border-border px-4 py-2 text-xs tracking-[0.1em] transition-colors hover:bg-foreground hover:text-primary-foreground'
								>
									TWITTER
								</a>
								<a
									href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://elan.com/journal/${article.slug}`)}`}
									target='_blank'
									rel='noopener noreferrer'
									className='border border-border px-4 py-2 text-xs tracking-[0.1em] transition-colors hover:bg-foreground hover:text-primary-foreground'
								>
									FACEBOOK
								</a>
							</div>
						</div>
					</div>
				</section>

				{/* Navigation */}
				<section className='border-t border-border'>
					<div className='grid md:grid-cols-2'>
						{prevArticle ? (
							<Link
								href={`/journal/${prevArticle.slug}`}
								className='group flex items-center gap-6 border-b border-border p-8 transition-colors hover:bg-card md:border-b-0 md:border-r md:p-12'
							>
								<ArrowLeft
									className='h-6 w-6 text-muted-foreground transition-transform group-hover:-translate-x-1'
									strokeWidth={1.5}
								/>
								<div>
									<p className='text-xs tracking-[0.15em] text-muted-foreground'>
										PREVIOUS
									</p>
									<p className='mt-2 font-serif text-lg'>{prevArticle.title}</p>
								</div>
							</Link>
						) : (
							<div className='hidden border-r border-border md:block' />
						)}
						{nextArticle ? (
							<Link
								href={`/journal/${nextArticle.slug}`}
								className='group flex items-center justify-end gap-6 p-8 text-right transition-colors hover:bg-card md:p-12'
							>
								<div>
									<p className='text-xs tracking-[0.15em] text-muted-foreground'>
										NEXT
									</p>
									<p className='mt-2 font-serif text-lg'>{nextArticle.title}</p>
								</div>
								<ArrowRight
									className='h-6 w-6 text-muted-foreground transition-transform group-hover:translate-x-1'
									strokeWidth={1.5}
								/>
							</Link>
						) : (
							<div />
						)}
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
