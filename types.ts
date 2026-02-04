export enum Category {
  WATCHES = 'ساعات',
  GLASSES = 'نظارات',
  CAR_ACCESSORIES = 'إكسسوارات السيارات',
  MISC = 'منتجات متنوعة',
  ALL = 'الكل'
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: Category;
}

export interface OrderForm {
  name: string;
  city: string;
  phone: string;
}