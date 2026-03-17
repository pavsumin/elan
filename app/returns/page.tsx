import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import Link from 'next/link'

export default function ReturnsPage() {
	return (
		<>
			<Header />
			<main className='min-h-screen bg-background pt-18'>
				<section className='px-6 py-16 md:px-12 md:py-24 lg:px-20'>
					<div className='mx-auto max-w-3xl'>
						<h1 className='font-serif text-5xl md:text-6xl'>
							Returns & Exchanges
						</h1>

						<div className='mt-12 space-y-12 text-sm leading-relaxed text-muted-foreground'>
							<section>
								<h2 className='mb-4 font-serif text-2xl text-foreground'>
									Our Return Policy
								</h2>
								<p>
									We want you to be completely satisfied with your purchase. If
									for any reason you&apos;re not, we offer free returns within
									30 days of purchase for unworn items in their original
									condition with all tags attached.
								</p>
							</section>

							<section>
								<h2 className='mb-4 font-serif text-2xl text-foreground'>
									How to Return
								</h2>
								<ol className='mt-4 list-inside list-decimal space-y-3'>
									<li>
										Log into your account and navigate to your order history
									</li>
									<li>
										Select the item(s) you wish to return and indicate the
										reason
									</li>
									<li>Print the prepaid return label provided</li>
									<li>Pack the item(s) securely in the original packaging</li>
									<li>
										Drop off the package at any authorized shipping location
									</li>
								</ol>
							</section>

							<section>
								<h2 className='mb-4 font-serif text-2xl text-foreground'>
									Exchanges
								</h2>
								<p>
									If you&apos;d like to exchange an item for a different size or
									color, we recommend returning the original item for a refund
									and placing a new order. This ensures you receive your desired
									item as quickly as possible.
								</p>
							</section>

							<section>
								<h2 className='mb-4 font-serif text-2xl text-foreground'>
									Refund Timeline
								</h2>
								<p>
									Once we receive your return, please allow 5-10 business days
									for your refund to be processed. The refund will be credited
									to your original payment method.
								</p>
							</section>

							<section>
								<h2 className='mb-4 font-serif text-2xl text-foreground'>
									Non-Returnable Items
								</h2>
								<ul className='mt-4 list-inside list-disc space-y-2'>
									<li>Items marked as Final Sale</li>
									<li>Items that have been worn, washed, or altered</li>
									<li>Items without original tags</li>
									<li>Undergarments and swimwear (for hygiene reasons)</li>
								</ul>
							</section>

							<section>
								<h2 className='mb-4 font-serif text-2xl text-foreground'>
									Damaged or Defective Items
								</h2>
								<p>
									If you receive a damaged or defective item, please{' '}
									<Link
										href='/contact'
										className='underline underline-offset-4'
									>
										contact us
									</Link>{' '}
									immediately with photos of the damage. We will arrange for a
									replacement or full refund at no additional cost to you.
								</p>
							</section>

							<section>
								<h2 className='mb-4 font-serif text-2xl text-foreground'>
									Questions?
								</h2>
								<p>
									Our customer service team is here to help. Please{' '}
									<Link
										href='/contact'
										className='underline underline-offset-4'
									>
										contact us
									</Link>{' '}
									if you have any questions about returns or exchanges.
								</p>
							</section>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
