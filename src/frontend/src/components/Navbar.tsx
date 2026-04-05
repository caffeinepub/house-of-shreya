import { Heart, Menu, ShoppingBag, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { CartItem } from "../App";

interface NavbarProps {
  cartCount: number;
  cart: CartItem[];
}

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ cartCount, cart }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const totalPrice = cart.reduce(
    (sum, item) => sum + Number(item.product.price / 100n) * item.quantity,
    0,
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand wordmark */}
          <a
            href="#home"
            className="font-serif text-lg md:text-2xl font-bold tracking-[0.15em] uppercase text-primary"
            data-ocid="nav.link"
          >
            House of Shreya
          </a>

          {/* Desktop nav links */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide uppercase text-foreground/70 hover:text-primary transition-colors duration-200"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Icon cluster */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="hidden p-2 rounded-full hover:bg-secondary transition-colors text-foreground/70 hover:text-primary md:flex"
              aria-label="Wishlist"
              data-ocid="nav.toggle"
            >
              <Heart className="h-5 w-5" />
            </button>

            {/* Cart button */}
            <div className="relative">
              <button
                type="button"
                className="relative p-2 rounded-full hover:bg-secondary transition-colors text-foreground/70 hover:text-primary"
                aria-label={`Shopping cart, ${cartCount} items`}
                onClick={() => setCartOpen(!cartOpen)}
                data-ocid="nav.toggle"
              >
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Cart dropdown */}
              <AnimatePresence>
                {cartOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-12 w-72 bg-card rounded-xl shadow-xl border border-border p-4 z-50"
                    data-ocid="cart.popover"
                  >
                    <h3 className="font-serif text-base font-semibold text-primary mb-3">
                      Your Cart
                    </h3>
                    {cart.length === 0 ? (
                      <p
                        className="text-sm text-muted-foreground text-center py-4"
                        data-ocid="cart.empty_state"
                      >
                        Your cart is empty
                      </p>
                    ) : (
                      <>
                        <div className="space-y-3 max-h-48 overflow-y-auto">
                          {cart.map((item, i) => (
                            <div
                              key={String(item.product.id)}
                              className="flex items-center gap-3"
                              data-ocid={`cart.item.${i + 1}`}
                            >
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">
                                  {item.product.name}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  Qty: {item.quantity}
                                </p>
                              </div>
                              <p className="text-sm font-semibold text-primary">
                                ₹
                                {(
                                  Number(item.product.price / 100n) *
                                  item.quantity
                                ).toLocaleString("en-IN")}
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="border-t border-border mt-3 pt-3 flex justify-between items-center">
                          <span className="text-sm font-semibold">Total</span>
                          <span className="font-serif text-primary font-bold">
                            ₹{totalPrice.toLocaleString("en-IN")}
                          </span>
                        </div>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors text-foreground/70"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              data-ocid="nav.toggle"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-card border-t border-border"
            aria-label="Mobile navigation"
          >
            <div className="px-4 py-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium tracking-wide uppercase py-2 text-foreground/70 hover:text-primary transition-colors"
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
