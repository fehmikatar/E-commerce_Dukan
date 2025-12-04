import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Heart, ShoppingBag, Star, Truck, Shield, ChevronLeft, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Helmet } from "react-helmet-async";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product?.sizes?.[0]
  );
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    product?.colors?.[0]?.name
  );
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-2xl font-bold mb-4">Produit non trouvé</h1>
            <Link to="/boutique">
              <Button variant="tunisian">Retourner à la boutique</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity, selectedSize, selectedColor);
  };

  return (
    <>
      <Helmet>
        <title>{product.name} - Dar El Bled | Vêtements Traditionnels Tunisiens</title>
        <meta name="description" content={product.description} />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Breadcrumb */}
          <div className="bg-muted/30 py-4">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-2 font-body text-sm">
                <Link to="/" className="text-muted-foreground hover:text-foreground">
                  Accueil
                </Link>
                <span className="text-muted-foreground">/</span>
                <Link to="/boutique" className="text-muted-foreground hover:text-foreground">
                  Boutique
                </Link>
                <span className="text-muted-foreground">/</span>
                <span className="text-foreground">{product.name}</span>
              </div>
            </div>
          </div>

          {/* Product Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <Link
                to="/boutique"
                className="inline-flex items-center font-body text-sm text-muted-foreground hover:text-foreground mb-8"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Retour à la boutique
              </Link>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Images */}
                <div className="space-y-4">
                  <div className="aspect-[3/4] overflow-hidden rounded-sm border border-tunisian-gold/20">
                    <img
                      src={product.images[activeImage]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {product.images.length > 1 && (
                    <div className="flex gap-4">
                      {product.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveImage(index)}
                          className={cn(
                            "w-20 h-20 overflow-hidden rounded-sm border-2 transition-colors",
                            activeImage === index
                              ? "border-tunisian-gold"
                              : "border-transparent hover:border-tunisian-gold/50"
                          )}
                        >
                          <img
                            src={image}
                            alt={`${product.name} ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                  <div>
                    <span className="font-arabic text-tunisian-gold">{product.categoryAr}</span>
                    <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-1">
                      {product.name}
                    </h1>
                    <p className="font-arabic text-muted-foreground mt-1">{product.nameAr}</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-5 w-5",
                            i < Math.floor(product.rating)
                              ? "fill-tunisian-gold text-tunisian-gold"
                              : "text-muted"
                          )}
                        />
                      ))}
                    </div>
                    <span className="font-body text-sm text-muted-foreground">
                      ({product.reviewCount} avis)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-4xl font-bold text-primary">
                      {product.price} DT
                    </span>
                    {product.originalPrice && (
                      <span className="font-body text-xl text-muted-foreground line-through">
                        {product.originalPrice} DT
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  {/* Material */}
                  <div className="flex items-center gap-4 py-4 border-y border-border">
                    <span className="font-body text-sm text-muted-foreground">Matière:</span>
                    <span className="font-body font-medium">{product.material}</span>
                    <span className="font-arabic text-sm text-tunisian-gold">({product.materialAr})</span>
                  </div>

                  {/* Size Selection */}
                  {product.sizes && (
                    <div>
                      <h3 className="font-display font-semibold mb-3">Taille</h3>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={cn(
                              "px-4 py-2 border-2 rounded-sm font-body text-sm transition-colors",
                              selectedSize === size
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border hover:border-tunisian-gold"
                            )}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Color Selection */}
                  {product.colors && (
                    <div>
                      <h3 className="font-display font-semibold mb-3">Couleur</h3>
                      <div className="flex gap-3">
                        {product.colors.map((color) => (
                          <button
                            key={color.name}
                            onClick={() => setSelectedColor(color.name)}
                            className={cn(
                              "w-10 h-10 rounded-full border-2 transition-all",
                              selectedColor === color.name
                                ? "border-primary ring-2 ring-primary ring-offset-2"
                                : "border-border hover:border-tunisian-gold"
                            )}
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quantity */}
                  <div>
                    <h3 className="font-display font-semibold mb-3">Quantité</h3>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-border rounded-sm">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="p-3 hover:bg-muted transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-6 font-body font-medium">{quantity}</span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="p-3 hover:bg-muted transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 pt-4">
                    <Button
                      variant="tunisian"
                      size="xl"
                      className="flex-1"
                      onClick={handleAddToCart}
                    >
                      <ShoppingBag className="h-5 w-5 mr-2" />
                      Ajouter au panier
                    </Button>
                    <Button variant="outline" size="xl">
                      <Heart className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 pt-6">
                    <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-sm">
                      <Truck className="h-5 w-5 text-tunisian-gold" />
                      <div>
                        <p className="font-body text-sm font-medium">Livraison gratuite</p>
                        <p className="font-body text-xs text-muted-foreground">À partir de 200 DT</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-sm">
                      <Shield className="h-5 w-5 text-tunisian-gold" />
                      <div>
                        <p className="font-body text-sm font-medium">Retours faciles</p>
                        <p className="font-body text-xs text-muted-foreground">14 jours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ProductDetail;
