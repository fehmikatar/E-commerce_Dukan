import { Truck, Shield, Repeat, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Livraison Rapide",
    titleAr: "توصيل سريع",
    description: "Livraison gratuite à partir de 200 DT",
  },
  {
    icon: Shield,
    title: "Paiement Sécurisé",
    titleAr: "دفع آمن",
    description: "Transactions 100% sécurisées",
  },
  {
    icon: Repeat,
    title: "Retours Faciles",
    titleAr: "إرجاع سهل",
    description: "14 jours pour changer d'avis",
  },
  {
    icon: HeadphonesIcon,
    title: "Support 24/7",
    titleAr: "دعم متواصل",
    description: "À votre service tous les jours",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-tunisian-gold/20 flex items-center justify-center mb-4 group-hover:bg-tunisian-gold/30 transition-colors">
                <feature.icon className="h-8 w-8 text-tunisian-gold" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-1">{feature.title}</h3>
              <span className="font-arabic text-tunisian-gold/80 text-sm mb-2">{feature.titleAr}</span>
              <p className="font-body text-sm text-primary-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
