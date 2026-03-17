'use client'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Spinner } from '@/components/ui/spinner'
import { useCart } from '@/lib/cart-context'
import { motion } from 'framer-motion'
import { ArrowLeft, Check, CreditCard, Lock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

export default function CheckoutPage() {
	const router = useRouter()
	const { items, totalPrice, clearCart } = useCart()
	const [step, setStep] = useState<'info' | 'payment' | 'success'>('info')
	const [isProcessing, setIsProcessing] = useState(false)

	const [formData, setFormData] = useState({
		email: '',
		firstName: '',
		lastName: '',
		address: '',
		city: '',
		country: 'United States',
		state: '',
		zip: '',
		cardNumber: '',
		cardExpiry: '',
		cardCvc: '',
		cardName: '',
	})

	const shipping = totalPrice >= 500 ? 0 : 25
	const tax = Math.round(totalPrice * 0.08)
	const finalTotal = totalPrice + shipping + tax

	const formatCardNumber = (value: string) => {
		const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
		const matches = v.match(/\d{4,16}/g)
		const match = (matches && matches[0]) || ''
		const parts = []
		for (let i = 0, len = match.length; i < len; i += 4) {
			parts.push(match.substring(i, i + 4))
		}
		return parts.length ? parts.join(' ') : value
	}

	const formatExpiry = (value: string) => {
		const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
		if (v.length >= 2) {
			return v.substring(0, 2) + '/' + v.substring(2, 4)
		}
		return v
	}

	const handleSubmitInfo = (e: React.FormEvent) => {
		e.preventDefault()
		setStep('payment')
	}

	const handleSubmitPayment = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsProcessing(true)

		// Simulate payment processing
		await new Promise(resolve => setTimeout(resolve, 2000))

		setIsProcessing(false)
		setStep('success')
		clearCart()
		toast.success('Order placed successfully!')
	}

	if (items.length === 0 && step !== 'success') {
		return (
			<>
				<Header />
				<main className='flex min-h-screen items-center justify-center bg-background pt-18'>
					<div className='text-center'>
						<h1 className='font-serif text-3xl'>Your bag is empty</h1>
						<p className='mt-4 text-muted-foreground'>
							Add some items to proceed to checkout.
						</p>
						<Button
							asChild
							className='mt-6 bg-foreground text-primary-foreground hover:bg-foreground/90'
						>
							<Link href='/collections'>BROWSE COLLECTIONS</Link>
						</Button>
					</div>
				</main>
				<Footer />
			</>
		)
	}

	if (step === 'success') {
		return (
			<>
				<Header />
				<main className='flex min-h-screen items-center justify-center bg-background pt-18 px-6'>
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						className='w-full max-w-md text-center'
					>
						<div className='mx-auto mb-6 flex h-20 w-20 items-center justify-center bg-foreground'>
							<Check
								className='h-10 w-10 text-primary-foreground'
								strokeWidth={1.5}
							/>
						</div>
						<h1 className='font-serif text-4xl'>Thank You</h1>
						<p className='mt-4 text-muted-foreground'>
							Your order has been placed successfully. We will send you a
							confirmation email shortly.
						</p>
						<p className='mt-2 font-serif text-lg'>
							Order #EL{Math.random().toString().slice(2, 8)}
						</p>
						<div className='mt-8 space-y-3'>
							<Button
								asChild
								className='w-full bg-foreground text-primary-foreground hover:bg-foreground/90'
							>
								<Link href='/collections'>CONTINUE SHOPPING</Link>
							</Button>
							<Button asChild variant='outline' className='w-full'>
								<Link href='/'>RETURN HOME</Link>
							</Button>
						</div>
					</motion.div>
				</main>
				<Footer />
			</>
		)
	}

	return (
		<>
			<Header />
			<main className='min-h-screen bg-background pt-18'>
				<div className='px-6 py-8 md:px-12 lg:px-20'>
					<div className='mx-auto max-w-7xl'>
						{/* Back Link */}
						<Link
							href='/collections'
							className='inline-flex items-center gap-2 text-xs tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground'
						>
							<ArrowLeft className='h-4 w-4' strokeWidth={1.5} />
							CONTINUE SHOPPING
						</Link>

						<h1 className='mt-8 font-serif text-4xl md:text-5xl'>Checkout</h1>

						{/* Progress Steps */}
						<div className='mt-8 flex items-center gap-4'>
							<div
								className={`flex items-center gap-2 ${step === 'info' ? 'text-foreground' : 'text-muted-foreground'}`}
							>
								<div
									className={`flex h-6 w-6 items-center justify-center text-xs ${step === 'info' ? 'bg-foreground text-primary-foreground' : 'border border-current'}`}
								>
									{step === 'payment' ? <Check className='h-3 w-3' /> : '1'}
								</div>
								<span className='text-xs tracking-[0.1em]'>INFORMATION</span>
							</div>
							<div className='h-px flex-1 bg-border' />
							<div
								className={`flex items-center gap-2 ${step === 'payment' ? 'text-foreground' : 'text-muted-foreground'}`}
							>
								<div
									className={`flex h-6 w-6 items-center justify-center text-xs ${step === 'payment' ? 'bg-foreground text-primary-foreground' : 'border border-current'}`}
								>
									2
								</div>
								<span className='text-xs tracking-[0.1em]'>PAYMENT</span>
							</div>
						</div>

						<div className='mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16'>
							{/* Form */}
							<div>
								{step === 'info' && (
									<motion.form
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										onSubmit={handleSubmitInfo}
										className='space-y-8'
									>
										<div>
											<h2 className='text-xs tracking-[0.15em]'>CONTACT</h2>
											<div className='mt-4'>
												<label className='mb-2 block text-xs text-muted-foreground'>
													EMAIL
												</label>
												<Input
													type='email'
													required
													value={formData.email}
													onChange={e =>
														setFormData({ ...formData, email: e.target.value })
													}
													className='border-border bg-transparent'
												/>
											</div>
										</div>

										<div>
											<h2 className='text-xs tracking-[0.15em]'>
												SHIPPING ADDRESS
											</h2>
											<div className='mt-4 grid gap-4 sm:grid-cols-2'>
												<div>
													<label className='mb-2 block text-xs text-muted-foreground'>
														FIRST NAME
													</label>
													<Input
														required
														value={formData.firstName}
														onChange={e =>
															setFormData({
																...formData,
																firstName: e.target.value,
															})
														}
														className='border-border bg-transparent'
													/>
												</div>
												<div>
													<label className='mb-2 block text-xs text-muted-foreground'>
														LAST NAME
													</label>
													<Input
														required
														value={formData.lastName}
														onChange={e =>
															setFormData({
																...formData,
																lastName: e.target.value,
															})
														}
														className='border-border bg-transparent'
													/>
												</div>
											</div>
											<div className='mt-4'>
												<label className='mb-2 block text-xs text-muted-foreground'>
													ADDRESS
												</label>
												<Input
													required
													value={formData.address}
													onChange={e =>
														setFormData({
															...formData,
															address: e.target.value,
														})
													}
													className='border-border bg-transparent'
												/>
											</div>
											<div className='mt-4 grid gap-4 sm:grid-cols-3'>
												<div>
													<label className='mb-2 block text-xs text-muted-foreground'>
														CITY
													</label>
													<Input
														required
														value={formData.city}
														onChange={e =>
															setFormData({ ...formData, city: e.target.value })
														}
														className='border-border bg-transparent'
													/>
												</div>
												<div>
													<label className='mb-2 block text-xs text-muted-foreground'>
														STATE
													</label>
													<Input
														required
														value={formData.state}
														onChange={e =>
															setFormData({
																...formData,
																state: e.target.value,
															})
														}
														className='border-border bg-transparent'
													/>
												</div>
												<div>
													<label className='mb-2 block text-xs text-muted-foreground'>
														ZIP CODE
													</label>
													<Input
														required
														value={formData.zip}
														onChange={e =>
															setFormData({ ...formData, zip: e.target.value })
														}
														className='border-border bg-transparent'
													/>
												</div>
											</div>
											<div className='mt-4'>
												<label className='mb-2 block text-xs text-muted-foreground'>
													COUNTRY
												</label>
												<Select
													value={formData.country}
													onValueChange={v =>
														setFormData({ ...formData, country: v })
													}
												>
													<SelectTrigger className='border-border bg-transparent'>
														<SelectValue />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value='United States'>
															United States
														</SelectItem>
														<SelectItem value='Canada'>Canada</SelectItem>
														<SelectItem value='United Kingdom'>
															United Kingdom
														</SelectItem>
														<SelectItem value='France'>France</SelectItem>
														<SelectItem value='Germany'>Germany</SelectItem>
													</SelectContent>
												</Select>
											</div>
										</div>

										<Button
											type='submit'
											className='w-full bg-foreground py-6 text-xs tracking-[0.15em] text-primary-foreground hover:bg-foreground/90'
										>
											CONTINUE TO PAYMENT
										</Button>
									</motion.form>
								)}

								{step === 'payment' && (
									<motion.form
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										onSubmit={handleSubmitPayment}
										className='space-y-8'
									>
										<div>
											<div className='flex items-center justify-between'>
												<h2 className='text-xs tracking-[0.15em]'>PAYMENT</h2>
												<div className='flex items-center gap-2 text-xs text-muted-foreground'>
													<Lock className='h-3 w-3' />
													SECURE CHECKOUT
												</div>
											</div>

											<div className='mt-6 border border-border p-6'>
												<div className='flex items-center gap-3'>
													<CreditCard
														className='h-5 w-5 text-muted-foreground'
														strokeWidth={1.5}
													/>
													<span className='text-sm'>Credit Card</span>
												</div>

												<div className='mt-6 space-y-4'>
													<div>
														<label className='mb-2 block text-xs text-muted-foreground'>
															CARD NUMBER
														</label>
														<Input
															required
															placeholder='1234 5678 9012 3456'
															value={formData.cardNumber}
															onChange={e =>
																setFormData({
																	...formData,
																	cardNumber: formatCardNumber(e.target.value),
																})
															}
															maxLength={19}
															className='border-border bg-transparent'
														/>
													</div>
													<div>
														<label className='mb-2 block text-xs text-muted-foreground'>
															NAME ON CARD
														</label>
														<Input
															required
															value={formData.cardName}
															onChange={e =>
																setFormData({
																	...formData,
																	cardName: e.target.value,
																})
															}
															className='border-border bg-transparent'
														/>
													</div>
													<div className='grid grid-cols-2 gap-4'>
														<div>
															<label className='mb-2 block text-xs text-muted-foreground'>
																EXPIRY
															</label>
															<Input
																required
																placeholder='MM/YY'
																value={formData.cardExpiry}
																onChange={e =>
																	setFormData({
																		...formData,
																		cardExpiry: formatExpiry(e.target.value),
																	})
																}
																maxLength={5}
																className='border-border bg-transparent'
															/>
														</div>
														<div>
															<label className='mb-2 block text-xs text-muted-foreground'>
																CVC
															</label>
															<Input
																required
																placeholder='123'
																type='password'
																value={formData.cardCvc}
																onChange={e =>
																	setFormData({
																		...formData,
																		cardCvc: e.target.value
																			.replace(/\D/g, '')
																			.slice(0, 4),
																	})
																}
																maxLength={4}
																className='border-border bg-transparent'
															/>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div className='flex gap-4'>
											<Button
												type='button'
												variant='outline'
												onClick={() => setStep('info')}
												className='flex-1 py-6 text-xs tracking-[0.15em]'
											>
												BACK
											</Button>
											<Button
												type='submit'
												disabled={isProcessing}
												className='flex-1 bg-foreground py-6 text-xs tracking-[0.15em] text-primary-foreground hover:bg-foreground/90'
											>
												{isProcessing ? (
													<>
														<Spinner className='mr-2 h-4 w-4' />
														PROCESSING...
													</>
												) : (
													`PAY $${finalTotal}`
												)}
											</Button>
										</div>
									</motion.form>
								)}
							</div>

							{/* Order Summary */}
							<div className='lg:pl-8'>
								<div className='sticky top-32 bg-card p-8'>
									<h2 className='text-xs tracking-[0.15em]'>ORDER SUMMARY</h2>

									<div className='mt-6 space-y-4'>
										{items.map(item => (
											<div key={item.id} className='flex gap-4'>
												<div className='relative h-20 w-16 shrink-0 overflow-hidden bg-secondary'>
													<Image
														src={item.image}
														alt={item.name}
														fill
														className='object-cover'
													/>
													<span className='absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center bg-foreground text-[10px] text-primary-foreground'>
														{item.quantity}
													</span>
												</div>
												<div className='flex flex-1 flex-col justify-center'>
													<p className='text-sm'>{item.name}</p>
													<p className='text-xs text-muted-foreground'>
														{item.size} / {item.color}
													</p>
												</div>
												<p className='font-serif'>
													${item.price * item.quantity}
												</p>
											</div>
										))}
									</div>

									<Separator className='my-6' />

									<div className='space-y-3 text-sm'>
										<div className='flex justify-between'>
											<span className='text-muted-foreground'>Subtotal</span>
											<span>${totalPrice}</span>
										</div>
										<div className='flex justify-between'>
											<span className='text-muted-foreground'>Shipping</span>
											<span>{shipping === 0 ? 'FREE' : `$${shipping}`}</span>
										</div>
										<div className='flex justify-between'>
											<span className='text-muted-foreground'>Tax</span>
											<span>${tax}</span>
										</div>
									</div>

									<Separator className='my-6' />

									<div className='flex justify-between'>
										<span>Total</span>
										<span className='font-serif text-xl'>${finalTotal}</span>
									</div>

									{shipping === 0 && (
										<p className='mt-4 text-center text-xs text-muted-foreground'>
											You qualify for free shipping!
										</p>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	)
}
