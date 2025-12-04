import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { CategorySection } from "@/components/CategorySection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { FeaturesSection } from "@/components/FeaturesSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Dar El Bled - Vêtements Traditionnels Tunisiens | دار البلاد</title>
        <meta
          name="description"
          content="Découvrez notre collection exclusive de vêtements traditionnels tunisiens: jebba, keswa, fouta, chéchia et accessoires artisanaux. Livraison en Tunisie."
        />
        <meta name="keywords" content="vêtements tunisiens, jebba, keswa, fouta, chéchia, artisanat tunisien, mode traditionnelle" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <CategorySection />
          <FeaturedProducts />
          <FeaturesSection />
          <NewsletterSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
