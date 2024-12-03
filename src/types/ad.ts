export interface Ad {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  type: 'rent' | 'sale';
  category: string;
  images: string[];
  contactInfo: {
    name: string;
    phone: string;
    email: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export type AdFilters = {
  type?: 'rent' | 'sale';
  category?: string;
  location?: string;
  minPrice?: number;
  maxPrice?: number;
};