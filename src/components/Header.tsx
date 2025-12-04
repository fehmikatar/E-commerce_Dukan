import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X, Search, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";
const navLinks = [{
  name: "Accueil",
  nameAr: "الرئيسية",
  href: "/"
}, {
  name: "Boutique",
  nameAr: "المتجر",
  href: "/boutique"
}, {
  name: "Jebba",
  nameAr: "جبة",
  href: "/boutique?category=jebba"
}, {
  name: "Keswa",
  nameAr: "كسوة",
  href: "/boutique?category=keswa"
}, {
  name: "Accessoires",
  nameAr: "إكسسوارات",
  href: "/boutique?category=accessoires"
}];
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    totalItems
  } = useCart();
  return <header className="sticky top-0 z-50 w-full">
      {/* Top decorative border */}
      <div className="h-1 w-full bg-gradient-to-r from-tunisian-gold via-primary to-tunisian-gold" />
      
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm">
        <p className="font-body">
          Livraison gratuite en Tunisie à partir de 200 DT | شحن مجاني في تونس ابتداءً من 200 دينار
        </p>
      </div>

      {/* Main header */}
      <div className="bg-background/95 backdrop-blur-md border-b border-tunisian-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {/* Logo */}
            <Link to="/" className="flex flex-col items-center">
              <h1 className="font-display text-2xl md:text-3xl font-bold text-primary tracking-wide">DUKAN</h1>
              <span className="font-arabic text-sm text-tunisian-gold">دكان</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => <Link key={link.name} to={link.href} className="font-body text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tunisian-gold transition-all duration-300 group-hover:w-full" />
                </Link>)}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="h-5 w-5" />
              </Button>
              <Link to="/panier">
                <Button variant="outline" size="icon" className="relative">
                  <ShoppingBag className="h-5 w-5" />
                  {totalItems > 0 && <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold">
                      {totalItems}
                    </span>}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn("lg:hidden fixed inset-x-0 top-[calc(theme(spacing.20)+2.5rem+4px)] bg-background border-b border-tunisian-gold/20 transition-all duration-300 overflow-hidden", isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}>
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navLinks.map(link => <Link key={link.name} to={link.href} className="font-body text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border/50" onClick={() => setIsMenuOpen(false)}>
              <span>{link.name}</span>
              <span className="font-arabic text-tunisian-gold ml-2">({link.nameAr})</span>
            </Link>)}
          <div className="flex gap-4 pt-4">
            <Button variant="outline" size="sm" className="flex-1">
              <Search className="h-4 w-4 mr-2" /> Rechercher
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <User className="h-4 w-4 mr-2" /> Connexion
            </Button>
          </div>
        </nav>
      </div>
    </header>;
}