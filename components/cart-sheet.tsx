"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, X, ShoppingBag } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/lib/cart-context"

export function CartSheet() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, isOpen, setIsOpen } = useCart()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="flex w-full flex-col bg-background p-0 sm:max-w-md">
        <SheetHeader className="border-b border-border px-6 py-5">
          <SheetTitle className="flex items-center gap-2 text-xs tracking-[0.15em]">
            <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
            SHOPPING BAG ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" strokeWidth={1} />
            <p className="mt-4 text-sm text-muted-foreground">Your bag is empty</p>
            <Button
              onClick={() => setIsOpen(false)}
              asChild
              className="mt-6 bg-foreground text-primary-foreground hover:bg-foreground/90"
            >
              <Link href="/collections">CONTINUE SHOPPING</Link>
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative h-24 w-20 shrink-0 overflow-hidden bg-secondary">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm">{item.name}</p>
                          {item.size && (
                            <p className="mt-1 text-xs text-muted-foreground">Size: {item.size}</p>
                          )}
                          {item.color && (
                            <p className="text-xs text-muted-foreground">Color: {item.color}</p>
                          )}
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-foreground"
                          aria-label="Remove item"
                        >
                          <X className="h-4 w-4" strokeWidth={1.5} />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center border border-border">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 text-muted-foreground hover:text-foreground"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" strokeWidth={1.5} />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 text-muted-foreground hover:text-foreground"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" strokeWidth={1.5} />
                          </button>
                        </div>
                        <p className="font-serif">${item.price * item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-border px-6 py-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${totalPrice}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm">Total</span>
                  <span className="font-serif text-lg">${totalPrice}</span>
                </div>
              </div>
              <Button
                asChild
                className="mt-6 w-full bg-foreground py-6 text-xs tracking-[0.15em] text-primary-foreground hover:bg-foreground/90"
              >
                <Link href="/checkout" onClick={() => setIsOpen(false)}>
                  PROCEED TO CHECKOUT
                </Link>
              </Button>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-3 w-full py-2 text-center text-xs tracking-[0.15em] underline underline-offset-4"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
