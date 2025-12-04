import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-tunisian.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Traditional Tunisian clothing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tunisian-black/80 via-tunisian-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-tunisian-black/60 to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-tunisian-gold via-primary to-tunisian-gold opacity-80" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-tunisian-gold via-primary to-tunisian-gold opacity-80" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-in-up">
          <span className="inline-block font-arabic text-tunisian-gold text-xl mb-4">
            أهلاً وسهلاً
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-tunisian-sand mb-6 leading-tight">
            L'Élégance de la
            <span className="block text-tunisian-gold">Tradition Tunisienne</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-tunisian-sand/80 mb-8 leading-relaxed max-w-xl">
            Découvrez notre collection exclusive de vêtements traditionnels tunisiens, 
            confectionnés par des artisans d'exception.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/boutique">
              <Button variant="hero" size="xl" className="group">
                Explorer la Collection
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/boutique?category=keswa">
              <Button variant="hero-outline" size="xl">
                Collection Mariage
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative corner patterns */}
      <div className="absolute top-20 right-10 w-32 h-32 border-2 border-tunisian-gold/20 rotate-45 hidden lg:block" />
      <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-tunisian-gold/20 rotate-12 hidden lg:block" />
    </section>
  );
}
