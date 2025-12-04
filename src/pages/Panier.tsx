import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Panier = () => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <>
        <Helmet>
          <title>Panier - Dar El Bled</title>
        </Helmet>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 flex items-center justify-center py-20">
            <div className="text-center max-w-md mx-auto px-4">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
              <h1 className="font-display text-2xl font-bold mb-4">Votre panier est vide</h1>
              <p className="font-body text-muted-foreground mb-8">
                Découvrez notre collection de vêtements traditionnels tunisiens et ajoutez vos articles préférés.
              </p>
              <Link to="/boutique">
                <Button variant="tunisian" size="lg">
                  Explorer la boutique
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Panier ({items.length}) - Dar El Bled</title>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12">
          <div className="container mx-auto px-4">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">Votre Panier</h1>
            <p className="font-arabic text-tunisian-gold mb-8">سلة التسوق</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                    className="flex gap-4 p-4 bg-card rounded-sm border border-tunisian-gold/20"
                  >
                    {/* Image */}
                    <Link to={`/produit/${item.product.id}`} className="shrink-0">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-24 h-32 object-cover rounded-sm"
                      />
                    </Link>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <Link to={`/produit/${item.product.id}`}>
                        <h3 className="font-display font-semibold text-foreground hover:text-primary transition-colors">
                          {item.product.name}
                        </h3>
                      </Link>
                      <p className="font-arabic text-sm text-tunisian-gold">{item.product.nameAr}</p>
                      
                      <div className="flex flex-wrap gap-4 mt-2 font-body text-sm text-muted-foreground">
                        {item.selectedSize && <span>Taille: {item.selectedSize}</span>}
                        {item.selectedColor && <span>Couleur: {item.selectedColor}</span>}
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-border rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-2 hover:bg-muted transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-4 font-body">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-2 hover:bg-muted transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        {/* Price */}
                        <span className="font-display text-lg font-bold text-primary">
                          {item.product.price * item.quantity} DT
                        </span>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="self-start p-2 text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                ))}

                <Button variant="ghost" onClick={clearCart} className="text-muted-foreground">
                  Vider le panier
                </Button>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-sm border border-tunisian-gold/20 p-6 sticky top-32">
                  <h2 className="font-display text-xl font-bold mb-6">Récapitulatif</h2>
                  
                  <div className="space-y-4 pb-6 border-b border-border">
                    <div className="flex justify-between font-body">
                      <span className="text-muted-foreground">Sous-total</span>
                      <span>{totalPrice} DT</span>
                    </div>
                    <div className="flex justify-between font-body">
                      <span className="text-muted-foreground">Livraison</span>
                      <span className={totalPrice >= 200 ? "text-green-600" : ""}>
                        {totalPrice >= 200 ? "Gratuite" : "7 DT"}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between py-6 font-display text-xl font-bold">
                    <span>Total</span>
                    <span className="text-primary">
                      {totalPrice >= 200 ? totalPrice : totalPrice + 7} DT
                    </span>
                  </div>

                  {totalPrice < 200 && (
                    <p className="font-body text-sm text-muted-foreground mb-6">
                      Plus que <strong>{200 - totalPrice} DT</strong> pour bénéficier de la livraison gratuite!
                    </p>
                  )}

                  <Button variant="tunisian" size="lg" className="w-full">
                    Passer la commande
                  </Button>

                  <p className="font-body text-xs text-muted-foreground text-center mt-4">
                    Paiement sécurisé 🔒
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Panier;
