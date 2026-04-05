import { Facebook, Instagram } from "lucide-react";
import { useState } from "react";
import { SiPinterest } from "react-icons/si";

const SHOP_LINKS = [
  { label: "All Products", href: "#products" },
  { label: "Necklaces", href: "#products" },
  { label: "Earrings", href: "#products" },
  { label: "Bracelets", href: "#products" },
  { label: "Rings", href: "#products" },
];

const SOCIAL = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: SiPinterest, label: "Pinterest", href: "https://pinterest.com" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer style={{ backgroundColor: "oklch(0.68 0.07 10)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Column 1: Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold uppercase tracking-[0.12em] text-white mb-3">
              House of Shreya
            </h3>
            <p className="text-white/75 text-sm leading-relaxed mb-4">
              Premium anti-tarnish jewellery crafted for the modern woman. Shine
              forever.
            </p>
            <p className="text-white/50 text-xs italic">
              Timeless · Waterproof · Long-lasting
            </p>
          </div>

          {/* Column 2: Shop links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-4">
              Shop
            </h4>
            <ul className="space-y-2">
              {SHOP_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/75 hover:text-white transition-colors duration-200"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3 mb-4">
              {SOCIAL.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors duration-200"
                  data-ocid="footer.link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="text-white/60 text-xs leading-relaxed">
              Join our community for exclusive deals, jewellery care tips, and
              new arrivals.
            </p>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-4">
              Newsletter
            </h4>
            {subscribed ? (
              <p
                className="text-sm text-white"
                data-ocid="newsletter.success_state"
              >
                ✓ You&apos;re subscribed!
              </p>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col gap-2"
                data-ocid="newsletter.panel"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-4 py-2.5 rounded-full bg-white/20 text-white placeholder-white/50 text-sm border border-white/20 focus:outline-none focus:border-white/60 transition-colors"
                  data-ocid="newsletter.input"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-full bg-white text-primary font-medium text-xs uppercase tracking-widest hover:bg-white/90 transition-colors"
                  data-ocid="newsletter.submit_button"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/60 text-xs">
          <p>
            © {currentYear}. Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex gap-4">
            <span className="text-white/60">Privacy Policy</span>
            <span className="text-white/60">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
