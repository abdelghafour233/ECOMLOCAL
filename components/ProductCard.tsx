import React from 'react';
import { Product } from '../types';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOrder: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onOrder }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full border border-gray-100">
      <div className="h-48 overflow-hidden relative group">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-brand-600 text-white text-xs px-2 py-1 rounded-full">
          {product.category}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-4 flex-grow line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
          <span className="text-2xl font-bold text-brand-700">
            {product.price} <span className="text-sm font-normal text-gray-500">درهم</span>
          </span>
          
          <button 
            onClick={() => onOrder(product)}
            className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors active:scale-95"
          >
            <ShoppingCart size={18} />
            <span>اطلب الآن</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;