'use client'

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { useCart } from '@/lib/cart-context'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { SearchDialog } from './search-dialog'

const navigation = [
	{ name: 'COLLECTIONS', href: '/collections' },
	{ name: 'JOURNAL', href: '/journal' },
	{ name: 'ABOUT', href: '/about' },
	{ name: 'CONTACT', href: '/contact' },
]

interface HeaderProps {
	variant?: 'dark' | 'light'
	forceScrolled?: boolean
}

export function Header({
	variant = 'dark',
	forceScrolled = false,
}: HeaderProps) {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [isSearchOpen, setIsSearchOpen] = useState(false)
	const pathname = usePathname()
	const { totalItems, setIsOpen: setCartOpen } = useCart()

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 100)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const showDark = forceScrolled || isScrolled || variant === 'dark'

	return (
		<>
			<motion.header
				transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
				className={cn(
					'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
					showDark
						? 'bg-background/95 backdrop-blur-md border-b border-border'
						: 'bg-transparent',
				)}
			>
				<nav className='flex items-center justify-between px-6 py-5 md:px-12 lg:px-20'>
					{/* Logo */}
					<Link
						href='/'
						className={cn(
							'font-serif text-2xl tracking-[0.2em] transition-colors',
							showDark ? 'text-foreground' : 'text-primary-foreground',
						)}
					>
						ÉLAN
					</Link>

					{/* Desktop Navigation */}
					<div className='hidden items-center gap-12 lg:flex'>
						{navigation.map(item => (
							<Link
								key={item.name}
								href={item.href}
								className={cn(
									'relative text-xs tracking-[0.15em] transition-colors',
									pathname === item.href
										? showDark
											? 'text-foreground'
											: 'text-primary-foreground'
										: showDark
											? 'text-muted-foreground hover:text-foreground'
											: 'text-primary-foreground/70 hover:text-primary-foreground',
								)}
							>
								{item.name}
								{pathname === item.href && (
									<motion.div
										layoutId='underline'
										className={cn(
											'absolute -bottom-1 left-0 right-0 h-px',
											showDark ? 'bg-foreground' : 'bg-primary-foreground',
										)}
									/>
								)}
							</Link>
						))}
					</div>

					{/* Right Actions */}
					<div className='flex items-center gap-6'>
						<button
							onClick={() => setIsSearchOpen(true)}
							className={cn(
								'hidden items-center gap-2 text-xs tracking-[0.15em] transition-colors lg:flex',
								showDark
									? 'text-muted-foreground hover:text-foreground'
									: 'text-primary-foreground/70 hover:text-primary-foreground',
							)}
							aria-label='Search'
						>
							<Search className='h-4 w-4' strokeWidth={1.5} />
							<span className='hidden xl:inline'>SEARCH</span>
						</button>

						<button
							onClick={() => setCartOpen(true)}
							className='group relative'
							aria-label='Shopping bag'
						>
							<ShoppingBag
								className={cn(
									'h-5 w-5 transition-transform group-hover:scale-110',
									showDark ? 'text-foreground' : 'text-primary-foreground',
								)}
								strokeWidth={1.5}
							/>
							<span
								className={cn(
									'absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center text-[10px]',
									showDark
										? 'bg-foreground text-primary-foreground'
										: 'bg-primary-foreground text-foreground',
								)}
							>
								{totalItems}
							</span>
						</button>

						{/* Mobile Menu */}
						<Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
							<SheetTrigger asChild>
								<button className='lg:hidden' aria-label='Open menu'>
									<Menu
										className={cn(
											'h-6 w-6',
											showDark ? 'text-foreground' : 'text-primary-foreground',
										)}
										strokeWidth={1.5}
									/>
								</button>
							</SheetTrigger>
							<SheetContent
								side='right'
								className='w-full bg-background p-0 sm:max-w-md'
							>
								<SheetTitle className='sr-only'>Navigation Menu</SheetTitle>
								<div className='flex h-full flex-col'>
									<div className='flex items-center justify-between border-b border-border px-6 py-5'>
										<span className='font-serif text-2xl tracking-[0.2em]'>
											ÉLAN
										</span>
										<SheetClose asChild>
											<button aria-label='Close menu'>
												<X
													className='h-6 w-6 text-foreground'
													strokeWidth={1.5}
												/>
											</button>
										</SheetClose>
									</div>

									<nav className='flex-1 px-6 py-12'>
										<ul className='space-y-8'>
											{navigation.map((item, index) => (
												<motion.li
													key={item.name}
													initial={{ opacity: 0, x: 20 }}
													animate={{ opacity: 1, x: 0 }}
													transition={{ delay: index * 0.1 }}
												>
													<Link
														href={item.href}
														onClick={() => setIsMobileMenuOpen(false)}
														className={cn(
															'block font-serif text-3xl transition-colors',
															pathname === item.href
																? 'text-foreground'
																: 'text-muted-foreground hover:text-foreground',
														)}
													>
														{item.name}
													</Link>
												</motion.li>
											))}
										</ul>
									</nav>

									<div className='border-t border-border px-6 py-8'>
										<button
											onClick={() => {
												setIsMobileMenuOpen(false)
												setIsSearchOpen(true)
											}}
											className='flex w-full items-center gap-4 text-muted-foreground'
										>
											<Search className='h-5 w-5' strokeWidth={1.5} />
											<span className='text-sm'>Search products</span>
										</button>
									</div>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</nav>
			</motion.header>

			<SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
		</>
	)
}
