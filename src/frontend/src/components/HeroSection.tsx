import { motion } from "motion/react";

const STATS = [
  { val: "500+", label: "Happy Customers" },
  { val: "100%", label: "Anti-Tarnish" },
  { val: "Free", label: "Returns" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen pt-16 md:pt-20 bg-brand-blush flex items-stretch"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 items-center">
        {/* Left: Text content */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 md:py-0">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-[0.3em] uppercase text-primary/70 mb-4"
          >
            Timeless · Waterproof · Long-lasting
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-tight tracking-tight text-primary mb-6"
          >
            Premium
            <br />
            Anti-Tarnish
            <br />
            Jewellery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-foreground/70 mb-8 max-w-sm leading-relaxed"
          >
            Shine forever with our waterproof &amp; long-lasting designs,
            crafted for every moment of your life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#products"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-btn hover:bg-brand-btn-hover text-white font-medium text-sm uppercase tracking-widest rounded-full transition-colors duration-200 shadow-sm"
              data-ocid="hero.primary_button"
            >
              Shop Now
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium text-sm uppercase tracking-widest rounded-full transition-colors duration-200"
              data-ocid="hero.secondary_button"
            >
              Our Story
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-6 mt-10"
          >
            {STATS.map(({ val, label }) => (
              <div key={label} className="text-center">
                <p className="font-serif text-xl font-bold text-primary">
                  {val}
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mt-0.5">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Hero image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative h-72 md:h-full md:min-h-screen overflow-hidden"
        >
          <img
            src="/assets/generated/hero-model.dim_800x700.jpg"
            alt="Premium anti-tarnish jewellery model"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Subtle overlay gradient from left */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blush via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
