export interface Product {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  price: number;
  originalPrice?: number;
  category: string;
  categoryAr: string;
  images: string[];
  sizes?: string[];
  colors?: { name: string; hex: string }[];
  material: string;
  materialAr: string;
  inStock: boolean;
  rating: number;
  reviewCount: number;
  featured?: boolean;
  newArrival?: boolean;
}

export interface Category {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  image: string;
  productCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}
