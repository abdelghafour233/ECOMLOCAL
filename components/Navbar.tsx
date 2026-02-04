import React from 'react';
import { ShoppingBag, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-brand-600 text-white p-2 rounded-lg">
              <ShoppingBag size={24} />
            </div>
            <span className="font-bold text-xl text-gray-800">سوق المغرب</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-gray-600 font-medium">
            <a href="#" className="hover:text-brand-600 transition-colors">الرئيسية</a>
            <a href="#products" className="hover:text-brand-600 transition-colors">المنتجات</a>
            <a href="#contact" className="hover:text-brand-600 transition-colors">اتصل بنا</a>
          </div>

          <div className="md:hidden text-gray-500">
             {/* Mobile menu icon placeholder - simplified for this demo */}
            <Menu size={24} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;