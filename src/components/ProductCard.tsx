import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
  style?: React.CSSProperties;
}

export function ProductCard({ product, className, style }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <article className={cn("product-card group bg-card", className)} style={style}>
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <Link to={`/produit/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.originalPrice && (
            <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-sm">
              -{Math.round((1 - product.price / product.originalPrice) * 100)}%
            </span>
          )}
          {product.newArrival && (
            <span className="bg-tunisian-gold text-tunisian-black text-xs font-semibold px-3 py-1 rounded-sm">
              Nouveau
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="secondary"
            size="icon"
            className="h-9 w-9 bg-background/90 hover:bg-background shadow-md"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Add to Cart Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button
            variant="tunisian"
            className="w-full"
            onClick={() => addItem(product)}
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Ajouter au panier
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="font-arabic text-tunisian-gold text-sm">{product.categoryAr}</span>
        <Link to={`/produit/${product.id}`}>
          <h3 className="font-display text-lg font-semibold text-foreground mt-1 hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <Star className="h-4 w-4 fill-tunisian-gold text-tunisian-gold" />
          <span className="font-body text-sm text-foreground">{product.rating}</span>
          <span className="font-body text-xs text-muted-foreground">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-3">
          <span className="font-display text-xl font-bold text-primary">
            {product.price} DT
          </span>
          {product.originalPrice && (
            <span className="font-body text-sm text-muted-foreground line-through">
              {product.originalPrice} DT
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
