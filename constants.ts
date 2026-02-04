import { Product, Category } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "ساعة فاخرة كلاسيكية",
    price: 350,
    category: Category.WATCHES,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800",
    description: "ساعة يد رجالية بتصميم كلاسيكي أنيق، مقاومة للماء مع حزام جلدي فاخر."
  },
  {
    id: 2,
    name: "نظارات شمسية عصرية",
    price: 150,
    category: Category.GLASSES,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800",
    description: "نظارات شمسية بحماية UV400، إطار خفيف الوزن وتصميم عصري يناسب الجميع."
  },
  {
    id: 3,
    name: "حامل هاتف للسيارة",
    price: 80,
    category: Category.CAR_ACCESSORIES,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800",
    description: "حامل هاتف مغناطيسي قوي للسيارة، يدور 360 درجة لسهولة الاستخدام أثناء القيادة."
  },
  {
    id: 4,
    name: "ساعة ذكية رياضية",
    price: 450,
    category: Category.WATCHES,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=800",
    description: "تتبع نشاطك الرياضي ونبضات القلب مع هذه الساعة الذكية المتطورة. بطارية تدوم طويلاً."
  },
  {
    id: 5,
    name: "معطر سيارة فاخر",
    price: 50,
    category: Category.CAR_ACCESSORIES,
    image: "https://images.unsplash.com/photo-1585232004423-244e0e6904e3?auto=format&fit=crop&q=80&w=800",
    description: "رائحة منعشة تدوم طويلاً لسيارتك. تصميم أنيق يضاف إلى ديكور السيارة."
  },
  {
    id: 6,
    name: "حقيبة ظهر متعددة الاستخدامات",
    price: 299,
    category: Category.MISC,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
    description: "حقيبة ظهر قوية ومريحة، مثالية للسفر والعمل. تحتوي على جيوب متعددة."
  },
  {
    id: 7,
    name: "نظارات طبية بإطار شفاف",
    price: 200,
    category: Category.GLASSES,
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=800",
    description: "إطار نظارات شفاف عصري، خفيف جداً ومريح للاستخدام اليومي."
  },
  {
    id: 8,
    name: "سماعات بلوتوث لاسلكية",
    price: 180,
    category: Category.MISC,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    description: "صوت نقي وباس قوي. تعمل لمدة 20 ساعة متواصلة. مريحة للأذن."
  }
];

export const MOROCCAN_CITIES = [
  "الدار البيضاء", "الرباط", "مراكش", "فاس", "طنجة", "أكادير", "مكناس", "وجدة", "القنيطرة", "تطوان"
];