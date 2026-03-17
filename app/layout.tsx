import { CartSheet } from '@/components/cart-sheet'
import { Toaster } from '@/components/ui/sonner'
import { CartProvider } from '@/lib/cart-context'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-serif',
})

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-sans',
})

export const metadata: Metadata = {
	title: 'ÉLAN | Luxury Fashion',
	description: 'Timeless elegance meets modern sophistication',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className={`${cormorant.variable} ${inter.variable}`}>
			<body className='font-sans antialiased'>
				<CartProvider>
					{children}
					<CartSheet />
					<Toaster position='bottom-right' />
				</CartProvider>
				<Analytics />
			</body>
		</html>
	)
}
