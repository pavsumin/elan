'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
	return (
		<section className='min-h-screen bg-background'>
			{/* Hero Content */}
			<div className='grid min-h-screen pt-20 lg:grid-cols-2'>
				{/* Left Column - Text Content */}
				<div className='flex flex-col justify-center px-6 py-16 md:px-12 lg:px-20 lg:py-0'>
					<div className='max-w-xl'>
						{/* Season Tag */}
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className='mb-6 text-xs tracking-[0.2em] text-muted-foreground'
						>
							SPRING / SUMMER 2026
						</motion.p>

						{/* Main Headline */}
						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							className='font-serif text-5xl font-light leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl'
						>
							<span className='block text-balance'>Timeless elegance</span>
							<span className='block text-balance italic'>meets modern</span>
							<span className='block text-balance'>sophistication</span>
						</motion.h1>

						{/* Description */}
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.5 }}
							className='mt-8 max-w-md text-sm leading-relaxed text-muted-foreground'
						>
							Discover our curated collection of refined essentials, crafted
							with uncompromising attention to detail and the finest natural
							materials.
						</motion.p>

						{/* CTA Buttons */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.6 }}
							className='mt-10 flex flex-col gap-4 sm:flex-row sm:items-center'
						>
							<Link
								href='/collections'
								className='group inline-flex items-center justify-center gap-3 bg-foreground px-8 py-4 text-xs tracking-[0.15em] text-primary-foreground transition-all hover:gap-5'
							>
								EXPLORE COLLECTION
								<ArrowRight
									className='h-4 w-4 transition-transform group-hover:translate-x-1'
									strokeWidth={1.5}
								/>
							</Link>
							<Link
								href='/journal'
								className='inline-flex items-center justify-center px-8 py-4 text-xs tracking-[0.15em] text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground'
							>
								VIEW LOOKBOOK
							</Link>
						</motion.div>

						{/* Stats */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.7 }}
							className='mt-16 grid grid-cols-3 gap-8 border-t border-border pt-8'
						>
							<div>
								<p className='font-serif text-3xl font-light text-foreground'>
									25+
								</p>
								<p className='mt-1 text-xs tracking-[0.1em] text-muted-foreground'>
									YEARS OF CRAFT
								</p>
							</div>
							<div>
								<p className='font-serif text-3xl font-light text-foreground'>
									100%
								</p>
								<p className='mt-1 text-xs tracking-[0.1em] text-muted-foreground'>
									NATURAL FABRICS
								</p>
							</div>
							<div>
								<p className='font-serif text-3xl font-light text-foreground'>
									40+
								</p>
								<p className='mt-1 text-xs tracking-[0.1em] text-muted-foreground'>
									GLOBAL BOUTIQUES
								</p>
							</div>
						</motion.div>
					</div>
				</div>

				{/* Right Column - Image Grid */}
				<div className='relative hidden lg:block'>
					<div className='absolute inset-0 grid grid-cols-2 gap-4 p-4'>
						{/* Main Hero Image */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className='relative col-span-2 row-span-2 overflow-hidden'
						>
							<Image
								src='/images/hero-fashion.jpg'
								alt='Editorial fashion photography featuring elegant neutral tones'
								fill
								className='object-cover'
								priority
							/>
							{/* Image Overlay Text */}
							<div className='absolute bottom-8 left-8 right-8'>
								<p className='text-xs tracking-[0.2em] text-white/80'>
									NEW ARRIVAL
								</p>
								<p className='mt-2 font-serif text-xl text-white'>
									The Essential Linen Collection
								</p>
							</div>
						</motion.div>
					</div>
				</div>

				{/* Mobile Image */}
				<div className='relative h-[60vh] lg:hidden'>
					<Image
						src='/images/hero-fashion.jpg'
						alt='Editorial fashion photography featuring elegant neutral tones'
						fill
						className='object-cover'
						priority
					/>
					<div className='absolute bottom-8 left-6 right-6'>
						<p className='text-xs tracking-[0.2em] text-white/80'>
							NEW ARRIVAL
						</p>
						<p className='mt-2 font-serif text-xl text-white'>
							The Essential Linen Collection
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
