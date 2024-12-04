import { PropertyProps, TestimonialProps, Property, ServiceItem, StatItem } from "@/types";
import { Home, Building, Search, HandshakeIcon, BarChart, Shield, Phone, Mail, MapPin, Clock } from "lucide-react";
// import { Property, ServiceItem, StatItem } from "@/types";
export const PropertiesData: PropertyProps[] = [
  {
    title: "فيلا فاخرة مع حديقة خاصة",
    location: "حي السفارات، الرياض",
    beds: 5,
    bathRooms: 6,
    type: "فيلا",
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    ]
  },
  {
    title: "شقة حديثة مع إطلالة على البحر",
    location: "كورنيش جدة",
    beds: 3,
    bathRooms: 2,
    type: "شقة",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858"
    ]
  },
  {
    title: "بنتهاوس فاخر في قلب المدينة",
    location: "وسط البلد، دبي",
    beds: 4,
    bathRooms: 4,
    type: "بنتهاوس",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4"
    ]
  },
  {
    title: "منزل تقليدي مع لمسات عصرية",
    location: "حي الورود، الدمام",
    beds: 6,
    bathRooms: 5,
    type: "منزل",
    images: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
    ]
  },
  {
    title: "استديو أنيق في برج سكني",
    location: "مرسى دبي",
    beds: 1,
    bathRooms: 1,
    type: "استديو",
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    ]
  },
  {
    title: "شاليه مطل على البحر",
    location: "شاطئ نصف القمر، الخبر",
    beds: 3,
    bathRooms: 2,
    type: "شاليه",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
      "https://images.unsplash.com/photo-1613490493412-b04657ca0b2c",
      "https://images.unsplash.com/photo-1613490493544-3f42536dc6c6"
    ]
  },
  {
    title: "دوبلكس عائلي واسع",
    location: "حي النخيل، الرياض",
    beds: 7,
    bathRooms: 6,
    type: "دوبلكس",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb",
      "https://images.unsplash.com/photo-1600047509782-20cd39cc5da1"
    ]
  },
  {
    title: "شقة مفروشة في مجمع راقي",
    location: "جزيرة الريم، أبوظبي",
    beds: 2,
    bathRooms: 2,
    type: "شقة مفروشة",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      "https://images.unsplash.com/photo-1560448075-bb485b067938"
    ]
  }
];


export const testimonials: TestimonialProps[] = [
  {
    name: "أحمد خالد",
    title: "مستثمر عقاري",
    rating: 4,
    testimony: "تجربتي مع الوكالة كانت ممتازة. الخدمة احترافية والفريق متعاون للغاية. أنصح بشدة بالتعامل معهم في مجال العقارات"
  },
  {
    name: "سارة محمد",
    title: "مالكة عقار",
    rating: 5,
    testimony: "ساعدوني في بيع منزلي بأفضل سعر ممكن. كانت العملية سلسة وسريعة. شكراً لفريقهم المحترف"
  },
  {
    name: "عمر أحمد",
    title: "مشتري منزل أول",
    rating: 5,
    testimony: "كمشتري للمنزل الأول، قدموا لي نصائح قيمة وساعدوني في فهم السوق العقاري بشكل أفضل"
  },
  {
    name: "فاطمة علي",
    title: "مستأجرة",
    rating: 4,
    testimony: "وجدت الشقة المثالية بفضل مساعدتهم. عملية الإيجار كانت واضحة وشفافة"
  },
  {
    name: "خالد إبراهيم",
    title: "مطور عقاري",
    rating: 5,
    testimony: "شراكتنا معهم في تسويق مشاريعنا كانت ناجحة جداً. فريق محترف يفهم متطلبات السوق"
  },
  {
    name: "نورة سعد",
    title: "مستثمرة",
    rating: 4,
    testimony: "ساعدوني في تنويع محفظتي العقارية. خبرتهم في السوق المحلي قيمة جداً"
  },
  {
    name: "ياسر محمود",
    title: "مالك عقارات متعددة",
    rating: 5,
    testimony: "أتعامل معهم منذ سنوات في إدارة عقاراتي. خدمتهم ممتازة ويهتمون بأدق التفاصيل"
  },
  {
    name: "ريم عبدالله",
    title: "باحثة عن منزل",
    rating: 5,
    testimony: "قدموا لي خيارات متنوعة تناسب ميزانيتي. أسعدني تفانيهم في خدمة العملاء"
  }
]

export const quickLinks = {
  explore: [
    { title: "الرئيسية", url: "/" },
    { title: "عنا", url: "/about" },
    { title: "المدونة", url: "/blog" },
    { title: "اتصل بنا", url: "/contact" },
  ],
  services: [
    { title: "بيع العقارات", url: "/sell" },
    { title: "شراء العقارات", url: "/buy" },
    { title: "الإيجار", url: "/rent" },
    { title: "تقييم", url: "/valuation" },
  ],
};




export const services: ServiceItem[] = [
  {
    icon: Home,
    title: "بيع وشراء العقارات",
    description: "نساعدك في العثور على العقار المناسب أو بيع عقارك بأفضل سعر"
  },
  {
    icon: Building,
    title: "إدارة الأملاك",
    description: "نقدم خدمات إدارة شاملة لعقاراتك لضمان أفضل عائد استثماري"
  },
  {
    icon: Search,
    title: "التقييم العقاري",
    description: "تقييم محترف ودقيق للعقارات باستخدام أحدث الأساليب والمعايير"
  },
  {
    icon: HandshakeIcon,
    title: "الاستشارات العقارية",
    description: "نقدم استشارات متخصصة لمساعدتك في اتخاذ القرار الاستثماري الصحيح"
  },
  {
    icon: BarChart,
    title: "دراسات السوق",
    description: "تحليل شامل لسوق العقارات وتقديم رؤى قيمة للمستثمرين"
  },
  {
    icon: Shield,
    title: "الخدمات القانونية",
    description: "مساعدة قانونية كاملة في جميع المعاملات العقارية"
  }
];

export const stats: StatItem[] = [
  { icon: Building, title: "1000+", desc: "عقار تم بيعه" },
  { icon: HandshakeIcon, title: "500+", desc: "عميل راضٍ" },
  { icon: Shield, title: "15+", desc: "سنة خبرة" },
  { icon: Clock, title: "24/7", desc: "خدمة العملاء" }
];

export const contactInfo = [
  {
    icon: Phone,
    title: "اتصل بنا",
    details: ["+966 12 345 6789", "+966 12 345 6788"]
  },
  {
    icon: Mail,
    title: "راسلنا",
    details: ["info@realestate.com", "support@realestate.com"]
  },
  {
    icon: MapPin,
    title: "موقعنا",
    details: ["شارع الملك فهد", "الرياض، المملكة العربية السعودية"]
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    details: ["الأحد - الخميس: 9:00 - 18:00", "الجمعة - السبت: مغلق"]
  }
];

export const properties: Property[] = [
  {
    id: "1",
    title: "فيلا فاخرة في حي النرجس",
    description: "فيلا حديثة بتصميم عصري وإطلالة رائعة على المدينة",
    price: 2500000,
    location: "حي النرجس، الرياض",
    type: "villa",
    bedrooms: 5,
    bathrooms: 6,
    area: 450,
    amenities: ["حديقة خاصة", "مسبح", "غرفة خادمة", "مصعد", "موقف سيارات"],
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3"
    ],
    featured: true
  },
  {
    id: "2",
    title: "شقة مميزة في برج السلام",
    description: "شقة حديثة بموقع استراتيجي وخدمات متكاملة",
    price: 900000,
    location: "شارع الملك فهد، الرياض",
    type: "apartment",
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    amenities: ["أمن 24/7", "نادي رياضي", "موقف سيارات", "مصعد"],
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3"
    ],
    featured: true
  },
  {
    id: "3",
    title: "أرض تجارية في حي العليا",
    description: "أرض تجارية بموقع حيوي مناسبة للاستثمار",
    price: 5000000,
    location: "حي العليا، الرياض",
    type: "land",
    area: 1000,
    amenities: ["شارعين", "موقع حيوي", "مخطط معتمد"],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3"
    ],
    featured: false
  }
];