export type Product = {
  id: number;
  title: string;
  brand?: string | null;
  sku: string;
  price: number;
  quantity: number;
  images: {
    id: number;
    thumbnail: string;
    original: string;
  }[];
};
