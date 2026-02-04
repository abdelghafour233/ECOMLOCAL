import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import OrderModal from './components/OrderModal';
import { PRODUCTS } from './constants';
import { Category, Product } from './types';
import { Filter } from 'lucide-react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'الكل'>('الكل');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'الكل') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleOrderClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="products">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <span className="w-2 h-8 bg-brand-600 rounded-full"></span>
            أحدث المنتجات
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {[Category.ALL, Category.WATCHES, Category.GLASSES, Category.CAR_ACCESSORIES, Category.MISC].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat as Category | 'الكل')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat 
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onOrder={handleOrderClick}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-gray-100 p-4 rounded-full inline-block mb-4">
              <Filter className="text-gray-400" size={32} />
            </div>
            <p className="text-gray-500">لا توجد منتجات في هذا التصنيف حالياً.</p>
          </div>
        )}
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-bold text-xl mb-4">سوق المغرب</p>
          <p className="text-gray-400 text-sm">
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>

      {/* Order Modal */}
      <OrderModal 
        isOpen={isModalOpen}
        product={selectedProduct}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;