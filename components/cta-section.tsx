'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

export function CTASection() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	})

	const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1])

	return (
		<section className='relative min-h-[80vh] overflow-hidden' ref={ref}>
			{/* Background Image */}
			<motion.div style={{ scale }} className='absolute inset-0'>
				<Image
					src='/images/about-atelier.jpg'
					alt='ÉLAN atelier'
					fill
					className='object-cover'
				/>
				<div className='absolute inset-0 bg-foreground/60' />
			</motion.div>

			{/* Content */}
			<div className='relative flex min-h-[80vh] items-center px-6 md:px-12 lg:px-20'>
				<div className='mx-auto max-w-7xl py-16'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8 }}
						className='max-w-2xl'
					>
						<p className='text-xs tracking-[0.2em] text-primary-foreground/70'>
							VISIT US
						</p>
						<h2 className='mt-4 font-serif text-4xl text-primary-foreground md:text-5xl lg:text-6xl'>
							<span className='block text-balance'>Experience the</span>
							<span className='block text-balance italic'>Élan Difference</span>
						</h2>
						<p className='mt-8 max-w-md text-sm leading-relaxed text-primary-foreground/80'>
							Step into our flagship boutique and discover a curated world of
							refined elegance. Our style consultants are ready to help you find
							pieces that perfectly complement your personal aesthetic.
						</p>

						<div className='mt-10 flex flex-col gap-4 sm:flex-row sm:items-center'>
							<Link
								href='/contact'
								className='group inline-flex items-center justify-center gap-3 bg-primary-foreground px-8 py-4 text-xs tracking-[0.15em] text-foreground transition-all hover:gap-5'
							>
								BOOK AN APPOINTMENT
								<ArrowRight
									className='h-4 w-4 transition-transform group-hover:translate-x-1'
									strokeWidth={1.5}
								/>
							</Link>
							<Link
								href='/about'
								className='inline-flex items-center justify-center px-8 py-4 text-xs tracking-[0.15em] text-primary-foreground underline underline-offset-4 transition-colors hover:text-primary-foreground/70'
							>
								LEARN MORE
							</Link>
						</div>

						{/* Store Info */}
						<div className='mt-16 grid gap-8 border-t border-primary-foreground/20 pt-8 sm:grid-cols-2'>
							<div>
								<p className='text-xs tracking-[0.15em] text-primary-foreground/60'>
									FLAGSHIP STORE
								</p>
								<p className='mt-2 text-sm text-primary-foreground'>
									123 Madison Avenue
									<br />
									New York, NY 10016
								</p>
							</div>
							<div>
								<p className='text-xs tracking-[0.15em] text-primary-foreground/60'>
									OPENING HOURS
								</p>
								<p className='mt-2 text-sm text-primary-foreground'>
									Mon - Sat: 10am - 7pm
									<br />
									Sunday: 12pm - 6pm
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
