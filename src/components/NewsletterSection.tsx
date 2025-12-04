import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Merci pour votre inscription!", {
        description: "Vous recevrez nos dernières nouvelles bientôt.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-tunisian-sand-dark bg-zellige">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="font-arabic text-tunisian-gold text-lg">النشرة الإخبارية</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Restez Informé
          </h2>
          <p className="font-body text-muted-foreground mb-8">
            Inscrivez-vous à notre newsletter pour recevoir nos dernières collections 
            et offres exclusives.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 border-tunisian-gold/30 focus:border-tunisian-gold"
              required
            />
            <Button type="submit" variant="tunisian" size="lg">
              S'inscrire
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
