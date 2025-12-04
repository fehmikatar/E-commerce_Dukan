import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";

export function FeaturedProducts() {
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <span className="font-arabic text-tunisian-gold text-lg">منتجات مميزة</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Produits Vedettes
            </h2>
          </div>
          <Link to="/boutique" className="mt-4 md:mt-0">
            <Button variant="outline" className="group">
              Voir tout
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
