import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-tunisian-black text-tunisian-sand">
      {/* Decorative top border */}
      <div className="h-2 bg-gradient-to-r from-tunisian-gold via-primary to-tunisian-gold" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-tunisian-sand">DAR EL BLED</h2>
            <p className="font-arabic text-tunisian-gold text-lg">دار البلاد</p>
            <p className="font-body text-tunisian-sand/70 text-sm leading-relaxed">
              Votre destination pour l'artisanat tunisien authentique. 
              Nous préservons les traditions en les adaptant au monde moderne.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="text-tunisian-sand/60 hover:text-tunisian-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-tunisian-sand/60 hover:text-tunisian-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-tunisian-sand/60 hover:text-tunisian-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-tunisian-gold">Liens Rapides</h3>
            <ul className="space-y-3 font-body text-sm">
              <li>
                <Link to="/boutique" className="text-tunisian-sand/70 hover:text-tunisian-gold transition-colors">
                  Boutique
                </Link>
              </li>
              <li>
                <Link to="/boutique?category=jebba" className="text-tunisian-sand/70 hover:text-tunisian-gold transition-colors">
                  Jebba
                </Link>
              </li>
              <li>
                <Link to="/boutique?category=keswa" className="text-tunisian-sand/70 hover:text-tunisian-gold transition-colors">
                  Keswa
                </Link>
              </li>
              <li>
                <Link to="/boutique?category=accessoires" className="text-tunisian-sand/70 hover:text-tunisian-gold transition-colors">
                  Accessoires
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-tunisian-gold">Service Client</h3>
            <ul className="space-y-3 font-body text-sm">
              <li>
                <Link to="/faq" className="text-tunisian-sand/70 hover:text-tunisian-gold transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/livraison" className="text-tunisian-sand/70 hover:text-tunisian-gold transition-colors">
                  Livraison & Retours
                </Link>
              </li>
              <li>
                <Link to="/guide-tailles" className="text-tunisian-sand/70 hover:text-tunisian-gold transition-colors">
                  Guide des Tailles
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-tunisian-sand/70 hover:text-tunisian-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-tunisian-gold">Contact</h3>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-center gap-3 text-tunisian-sand/70">
                <MapPin className="h-4 w-4 text-tunisian-gold" />
                <span>Médina de Tunis, Tunisie</span>
              </li>
              <li className="flex items-center gap-3 text-tunisian-sand/70">
                <Phone className="h-4 w-4 text-tunisian-gold" />
                <span>+216 71 123 456</span>
              </li>
              <li className="flex items-center gap-3 text-tunisian-sand/70">
                <Mail className="h-4 w-4 text-tunisian-gold" />
                <span>contact@darelbled.tn</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-tunisian-gold/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-tunisian-sand/60">
              © 2024 Dar El Bled. Tous droits réservés.
            </p>
            <p className="font-arabic text-tunisian-gold/60 text-sm">
              صنع بحب في تونس 🇹🇳
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
