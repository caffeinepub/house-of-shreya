import { Heart, Shield, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const VALUES = [
  {
    icon: Sparkles,
    title: "Lasting Shine",
    desc: "Anti-tarnish technology keeps your pieces radiant for years.",
  },
  {
    icon: Shield,
    title: "Waterproof",
    desc: "Wear through showers, swims, and every adventure.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    desc: "Every piece crafted with care and artisanal attention.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-xl">
              <img
                src="/assets/generated/hero-model.dim_800x700.jpg"
                alt="House of Shreya brand story"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            {/* Decorative blush card */}
            <div className="absolute -bottom-6 -right-6 bg-brand-blush rounded-2xl p-5 shadow-md hidden md:block">
              <p className="font-serif text-2xl font-bold text-primary">2019</p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                Founded
              </p>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold uppercase text-foreground mb-6">
              About Us
            </h2>
            <div className="w-14 h-0.5 bg-primary opacity-40 rounded-full mb-6" />

            <p className="text-foreground/75 leading-relaxed mb-5">
              House of Shreya was born from a passion for timeless jewellery
              that stands the test of time. Every piece in our collection is
              crafted with love, designed to stay radiant through every moment
              of your life.
            </p>
            <p className="text-foreground/75 leading-relaxed mb-8">
              Our anti-tarnish technology ensures your jewellery remains as
              beautiful as the day you first wore it — whether you&apos;re at
              the beach, in the rain, or simply going about your everyday life.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {VALUES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-blush flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
