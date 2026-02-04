import React from 'react';
import { Truck, ShieldCheck, Wallet } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-brand-50 border-b border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          أفضل المنتجات <span className="text-brand-600">بأفضل الأسعار</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
          تسوق الآن واحصل على منتجات عالية الجودة مع خدمة التوصيل إلى جميع مدن المغرب.
          الدفع بأمان عند الاستلام.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-8">
          <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-full mb-3">
              <Wallet size={24} />
            </div>
            <h3 className="font-bold text-gray-800">الدفع عند الاستلام</h3>
            <p className="text-sm text-gray-500">لا تدفع شيئاً حتى تستلم طلبك</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
            <div className="p-3 bg-green-100 text-green-600 rounded-full mb-3">
              <Truck size={24} />
            </div>
            <h3 className="font-bold text-gray-800">توصيل سريع</h3>
            <p className="text-sm text-gray-500">توصيل لجميع المدن المغربية</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-full mb-3">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-bold text-gray-800">جودة مضمونة</h3>
            <p className="text-sm text-gray-500">منتجات أصلية ومكفولة</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;