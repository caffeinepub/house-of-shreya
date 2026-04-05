import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingBag, Star } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import type { Product } from "../backend.d";
import { useGetAllProducts } from "../hooks/useQueries";

const IMAGE_MAP: Record<string, string> = {
  "necklace-gold": "/assets/generated/necklace-gold.dim_400x400.jpg",
  "earrings-elegant": "/assets/generated/earrings-elegant.dim_400x400.jpg",
  "bracelet-floral": "/assets/generated/bracelet-floral.dim_400x400.jpg",
  "ring-rose": "/assets/generated/ring-rose.dim_400x400.jpg",
  "pendant-pearl": "/assets/generated/pendant-pearl.dim_400x400.jpg",
  "bangle-set": "/assets/generated/bangle-set.dim_400x400.jpg",
};

const FALLBACK_PRODUCTS: Product[] = [
  {
    id: 1n,
    name: "Gold Necklace",
    description:
      "Elegant anti-tarnish gold-plated necklace with delicate chain",
    category: "Necklaces",
    imageId: "necklace-gold",
    price: 99900n,
  },
  {
    id: 2n,
    name: "Elegant Earrings",
    description: "Long-lasting shine drop earrings, perfect for every occasion",
    category: "Earrings",
    imageId: "earrings-elegant",
    price: 49900n,
  },
  {
    id: 3n,
    name: "Floral Bracelet",
    description: "Rust-free finish bracelet with intricate floral motifs",
    category: "Bracelets",
    imageId: "bracelet-floral",
    price: 69900n,
  },
  {
    id: 4n,
    name: "Rose Gold Ring",
    description: "Waterproof rose gold ring with timeless design",
    category: "Rings",
    imageId: "ring-rose",
    price: 89900n,
  },
  {
    id: 5n,
    name: "Pearl Pendant",
    description: "Classic pearl pendant on anti-tarnish sterling silver chain",
    category: "Necklaces",
    imageId: "pendant-pearl",
    price: 119900n,
  },
  {
    id: 6n,
    name: "Bangle Set",
    description: "Set of 6 stackable anti-tarnish bangles in mixed finishes",
    category: "Bangles",
    imageId: "bangle-set",
    price: 149900n,
  },
];

function formatPrice(paise: bigint): string {
  const rupees = Number(paise / 100n);
  return rupees.toLocaleString("en-IN");
}

function ProductCard({
  product,
  onAddToCart,
  index,
}: { product: Product; onAddToCart: (p: Product) => void; index: number }) {
  const imgSrc =
    IMAGE_MAP[product.imageId] ??
    "/assets/generated/necklace-gold.dim_400x400.jpg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
      className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-shadow duration-300 flex flex-col group"
      data-ocid={`products.item.${index + 1}`}
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={imgSrc}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-white/90 text-primary border-0 text-xs font-medium backdrop-blur-sm">
            {product.category}
          </Badge>
        </div>
        <div className="absolute top-3 right-3 flex gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="h-3 w-3 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <span className="font-serif text-xl font-bold text-primary">
            ₹{formatPrice(product.price)}
          </span>
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-2 px-4 py-2 bg-brand-btn hover:bg-brand-btn-hover text-white text-xs font-medium uppercase tracking-widest rounded-full transition-colors duration-200"
            data-ocid={`products.item.${index + 1}`}
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Add
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function ProductCardSkeleton() {
  return (
    <div className="bg-card rounded-2xl overflow-hidden">
      <Skeleton className="aspect-square w-full" />
      <div className="p-4 space-y-2">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex justify-between items-center pt-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-8 w-20 rounded-full" />
        </div>
      </div>
    </div>
  );
}

interface ProductsSectionProps {
  addToCart: (product: Product) => void;
}

export default function ProductsSection({ addToCart }: ProductsSectionProps) {
  const { data: products, isLoading } = useGetAllProducts();
  const [filter, setFilter] = useState("All");

  const displayProducts =
    products && products.length > 0 ? products : FALLBACK_PRODUCTS;
  const categories = [
    "All",
    ...Array.from(new Set(displayProducts.map((p) => p.category))),
  ];
  const filtered =
    filter === "All"
      ? displayProducts
      : displayProducts.filter((p) => p.category === filter);

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Curated For You
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-tight text-foreground">
            Our Collection
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-primary opacity-40 rounded-full" />
        </motion.div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-colors duration-200 ${
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-secondary hover:text-foreground border border-border"
              }`}
              data-ocid="products.tab"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Loading state */}
        {isLoading && (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            data-ocid="products.loading_state"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <ProductCardSkeleton key={n} />
            ))}
          </div>
        )}

        {/* Products grid */}
        {!isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filtered.map((product, i) => (
              <ProductCard
                key={String(product.id)}
                product={product}
                onAddToCart={addToCart}
                index={i}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
