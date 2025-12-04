import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Filter, X, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Helmet } from "react-helmet-async";

const Boutique = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1500]);
  const [sortBy, setSortBy] = useState("featured");

  const selectedCategory = searchParams.get("category") || "";

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase() ||
               categories.find(c => c.id === selectedCategory)?.name === p.category
      );
    }

    // Price filter
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Sorting
    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
        break;
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  }, [selectedCategory, priceRange, sortBy]);

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", categoryId);
    }
    setSearchParams(searchParams);
  };

  return (
    <>
      <Helmet>
        <title>Boutique - Dar El Bled | Vêtements Traditionnels Tunisiens</title>
        <meta
          name="description"
          content="Parcourez notre collection de vêtements traditionnels tunisiens. Jebba, Keswa, Fouta et accessoires artisanaux."
        />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Banner */}
          <section className="bg-primary text-primary-foreground py-16 bg-pattern-geometric relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/90" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center">
                <span className="font-arabic text-tunisian-gold text-lg">المتجر</span>
                <h1 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
                  Notre Boutique
                </h1>
                <p className="font-body text-primary-foreground/80 max-w-xl mx-auto">
                  Explorez notre sélection de vêtements et accessoires traditionnels tunisiens, 
                  confectionnés avec amour par des artisans locaux.
                </p>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              {/* Toolbar */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filtres
                  </Button>
                  <p className="font-body text-muted-foreground">
                    {filteredProducts.length} produit{filteredProducts.length > 1 ? "s" : ""}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Trier par" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">En vedette</SelectItem>
                      <SelectItem value="newest">Nouveautés</SelectItem>
                      <SelectItem value="price-asc">Prix croissant</SelectItem>
                      <SelectItem value="price-desc">Prix décroissant</SelectItem>
                      <SelectItem value="rating">Meilleures notes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex gap-8">
                {/* Filters Sidebar */}
                <aside
                  className={cn(
                    "fixed lg:relative inset-y-0 left-0 z-50 lg:z-0 w-72 bg-background lg:bg-transparent p-6 lg:p-0 border-r lg:border-r-0 border-border transform transition-transform duration-300 lg:transform-none lg:block",
                    showFilters ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                  )}
                >
                  {/* Mobile close button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 lg:hidden"
                    onClick={() => setShowFilters(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>

                  <div className="space-y-8">
                    {/* Categories */}
                    <div>
                      <h3 className="font-display text-lg font-semibold mb-4">Catégories</h3>
                      <div className="space-y-2">
                        <button
                          onClick={() => handleCategoryChange("all")}
                          className={cn(
                            "block w-full text-left font-body text-sm py-2 px-3 rounded-sm transition-colors",
                            !selectedCategory
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-muted"
                          )}
                        >
                          Tous les produits
                        </button>
                        {categories.map((category) => (
                          <button
                            key={category.id}
                            onClick={() => handleCategoryChange(category.id)}
                            className={cn(
                              "block w-full text-left font-body text-sm py-2 px-3 rounded-sm transition-colors",
                              selectedCategory === category.id
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-muted"
                            )}
                          >
                            <span>{category.name}</span>
                            <span className="font-arabic text-xs ml-2 opacity-70">
                              ({category.nameAr})
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Price Range */}
                    <div>
                      <h3 className="font-display text-lg font-semibold mb-4">Prix</h3>
                      <div className="px-2">
                        <Slider
                          value={priceRange}
                          onValueChange={setPriceRange}
                          max={1500}
                          step={10}
                          className="mb-4"
                        />
                        <div className="flex justify-between font-body text-sm text-muted-foreground">
                          <span>{priceRange[0]} DT</span>
                          <span>{priceRange[1]} DT</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>

                {/* Overlay for mobile */}
                {showFilters && (
                  <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setShowFilters(false)}
                  />
                )}

                {/* Products Grid */}
                <div className="flex-1">
                  {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                      {filteredProducts.map((product, index) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          className="animate-fade-in"
                          style={{ animationDelay: `${index * 50}ms` }}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16">
                      <p className="font-body text-muted-foreground text-lg">
                        Aucun produit trouvé pour ces critères.
                      </p>
                      <Button
                        variant="outline"
                        className="mt-4"
                        onClick={() => {
                          setPriceRange([0, 1500]);
                          handleCategoryChange("all");
                        }}
                      >
                        Réinitialiser les filtres
                      </Button>
                    </div>
                  )}
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

export default Boutique;
