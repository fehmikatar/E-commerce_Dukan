import { Link } from "react-router-dom";
import { categories } from "@/data/products";

export function CategorySection() {
  return (
    <section className="py-20 bg-background bg-pattern-geometric">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-arabic text-tunisian-gold text-lg">تصنيفاتنا</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Nos Collections
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-tunisian-gold to-transparent mx-auto mt-4" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/boutique?category=${category.id}`}
              className="group relative overflow-hidden rounded-sm aspect-[3/4] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-tunisian-black via-tunisian-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Border decoration */}
              <div className="absolute inset-2 border border-tunisian-gold/30 group-hover:border-tunisian-gold/60 transition-colors" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="font-arabic text-tunisian-gold text-sm mb-1">{category.nameAr}</span>
                <h3 className="font-display text-2xl font-bold text-tunisian-sand mb-2 group-hover:text-tunisian-gold transition-colors">
                  {category.name}
                </h3>
                <p className="font-body text-sm text-tunisian-sand/70 mb-3">
                  {category.description}
                </p>
                <span className="font-body text-xs text-tunisian-gold">
                  {category.productCount} produits
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
