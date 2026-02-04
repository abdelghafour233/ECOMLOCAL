import React, { useState } from 'react';
import { Product, OrderForm, Category } from '../types'; // Added Category to import
import { X, CheckCircle, Loader2 } from 'lucide-react';
import { MOROCCAN_CITIES } from '../constants';

interface OrderModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ product, isOpen, onClose }) => {
  const [formData, setFormData] = useState<OrderForm>({
    name: '',
    city: MOROCCAN_CITIES[0],
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen || !product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Order Submitted:', { product: product.name, ...formData });
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after success view
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', city: MOROCCAN_CITIES[0], phone: '' });
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-fade-in relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 z-10 p-1 bg-white/50 rounded-full"
        >
          <X size={24} />
        </button>

        {isSuccess ? (
          <div className="p-12 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
              <CheckCircle size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">تم الطلب بنجاح!</h2>
            <p className="text-gray-500">شكراً لك {formData.name}، سنتصل بك قريباً لتأكيد الطلب.</p>
          </div>
        ) : (
          <div className="flex flex-col">
            {/* Header / Product Info */}
            <div className="bg-gray-50 p-6 border-b border-gray-100 flex gap-4">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-20 h-20 rounded-lg object-cover shadow-sm"
              />
              <div>
                <h3 className="font-bold text-gray-900 line-clamp-1">{product.name}</h3>
                <p className="text-brand-600 font-bold mt-1">{product.price} درهم</p>
                <p className="text-xs text-gray-500 mt-1">الدفع عند الاستلام</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">الاسم الكامل</label>
                <input 
                  type="text" 
                  required
                  placeholder="مثال: محمد العمري"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
                <input 
                  type="tel" 
                  required
                  placeholder="06XXXXXXXX"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-left"
                  dir="ltr"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">المدينة</label>
                <select 
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                >
                  {MOROCCAN_CITIES.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-brand-500/30 transition-all flex items-center justify-center gap-2 mt-4"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>جاري الطلب...</span>
                  </>
                ) : (
                  <span>تأكيد الطلب الآن ({product.price} درهم)</span>
                )}
              </button>
              
              <p className="text-xs text-gray-400 text-center mt-2">
                بالضغط على الزر، أنت توافق على شراء المنتج والدفع عند الاستلام.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderModal;