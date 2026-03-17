'use client'

import { AnimatePresence, motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useRef, useState } from 'react'

const testimonials = [
	{
		id: 1,
		quote:
			"The quality is exceptional. I've never felt more confident in clothes that fit so perfectly and feel so luxurious against my skin.",
		author: 'Isabella Chen',
		title: 'Fashion Editor, Vogue',
		location: 'New York',
	},
	{
		id: 2,
		quote:
			'ÉLAN represents everything I value in fashion - timeless design, sustainable practices, and impeccable craftsmanship.',
		author: 'Marcus Williams',
		title: 'Creative Director',
		location: 'London',
	},
	{
		id: 3,
		quote:
			'These pieces have become the foundation of my wardrobe. Simple, elegant, and endlessly versatile for any occasion.',
		author: 'Sophie Laurent',
		title: 'Art Curator',
		location: 'Paris',
	},
]

export function TestimonialsSection() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })
	const [currentIndex, setCurrentIndex] = useState(0)

	const next = () => setCurrentIndex(prev => (prev + 1) % testimonials.length)
	const prev = () =>
		setCurrentIndex(
			prev => (prev - 1 + testimonials.length) % testimonials.length,
		)

	return (
		<section
			className='bg-foreground py-24 text-primary-foreground md:py-32'
			ref={ref}
		>
			<div className='px-6 md:px-12 lg:px-20'>
				<div className='mx-auto max-w-4xl'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6 }}
						className='text-center'
					>
						<Quote
							className='mx-auto h-10 w-10 text-primary-foreground/30'
							strokeWidth={1}
						/>

						<div className='relative mt-8 min-h-[200px]'>
							<AnimatePresence mode='wait'>
								<motion.div
									key={currentIndex}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.5 }}
								>
									<blockquote className='font-serif text-2xl leading-relaxed md:text-3xl lg:text-4xl'>
										"{testimonials[currentIndex].quote}"
									</blockquote>
									<div className='mt-8'>
										<p className='text-sm tracking-[0.1em]'>
											{testimonials[currentIndex].author}
										</p>
										<p className='mt-1 text-xs text-primary-foreground/60'>
											{testimonials[currentIndex].title} —{' '}
											{testimonials[currentIndex].location}
										</p>
									</div>
								</motion.div>
							</AnimatePresence>
						</div>

						{/* Navigation */}
						<div className='mt-12 flex items-center justify-center gap-4'>
							<button
								onClick={prev}
								className='flex h-12 w-12 items-center justify-center border border-primary-foreground/30 transition-colors hover:bg-primary-foreground hover:text-foreground cursor-pointer'
								aria-label='Previous testimonial'
							>
								<ChevronLeft className='h-5 w-5' strokeWidth={1.5} />
							</button>

							<div className='flex gap-2 px-4'>
								{testimonials.map((_, index) => (
									<button
										key={index}
										onClick={() => setCurrentIndex(index)}
										className={`h-2 w-2 transition-colors cursor-pointer ${
											index === currentIndex
												? 'bg-primary-foreground'
												: 'bg-primary-foreground/30'
										}`}
										aria-label={`Go to testimonial ${index + 1}`}
									/>
								))}
							</div>

							<button
								onClick={next}
								className='flex h-12 w-12 items-center justify-center border border-primary-foreground/30 transition-colors hover:bg-primary-foreground hover:text-foreground cursor-pointer'
								aria-label='Next testimonial'
							>
								<ChevronRight className='h-5 w-5' strokeWidth={1.5} />
							</button>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
