import { TestimonialProps, Property, ServiceItem, StatItem } from "@/types";
import { Home, Building, Search, HandshakeIcon, BarChart, Shield, Phone, Mail, MapPin, Clock } from "lucide-react";
// export const PropertiesData: Property[] = [
//   {
//     title: "فيلا فاخرة مع حديقة خاصة",
//     location: "حي السفارات، الرياض",
//     beds: 5,
//     bathRooms: 6,
//     type: "villa",
//     images: [
//       "https://images.unsplash.com/photo-1613977257363-707ba9348227",
//       "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83",
//       "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
//     ]
//   },
//   {
//     title: "شقة حديثة مع إطلالة على البحر",
//     location: "كورنيش جدة",
//     beds: 3,
//     bathRooms: 2,
//     type: "شقة",
//     images: [
//       "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
//       "https://images.unsplash.com/photo-1560448204-603b3fc33ddc",
//       "https://images.unsplash.com/photo-1484154218962-a197022b5858"
//     ]
//   },
//   {
//     title: "بنتهاوس فاخر في قلب المدينة",
//     location: "وسط البلد، دبي",
//     beds: 4,
//     bathRooms: 4,
//     type: "بنتهاوس",
//     images: [
//       "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
//       "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4"
//     ]
//   },
//   {
//     title: "منزل تقليدي مع لمسات عصرية",
//     location: "حي الورود، الدمام",
//     beds: 6,
//     bathRooms: 5,
//     type: "منزل",
//     images: [
//       "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b",
//       "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
//       "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
//     ]
//   },
//   {
//     title: "استديو أنيق في برج سكني",
//     location: "مرسى دبي",
//     beds: 1,
//     bathRooms: 1,
//     type: "استديو",
//     images: [
//       "https://images.unsplash.com/photo-1554995207-c18c203602cb",
//       "https://images.unsplash.com/photo-1536376072261-38c75010e6c9",
//       "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
//     ]
//   },
//   {
//     title: "شاليه مطل على البحر",
//     location: "شاطئ نصف القمر، الخبر",
//     beds: 3,
//     bathRooms: 2,
//     type: "شاليه",
//     images: [
//       "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
//       "https://images.unsplash.com/photo-1613490493412-b04657ca0b2c",
//       "https://images.unsplash.com/photo-1613490493544-3f42536dc6c6"
//     ]
//   },
//   {
//     title: "دوبلكس عائلي واسع",
//     location: "حي النخيل، الرياض",
//     beds: 7,
//     bathRooms: 6,
//     type: "دوبلكس",
//     images: [
//       "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
//       "https://images.unsplash.com/photo-1600047509358-9dc75507daeb",
//       "https://images.unsplash.com/photo-1600047509782-20cd39cc5da1"
//     ]
//   },
//   {
//     title: "شقة مفروشة في مجمع راقي",
//     location: "جزيرة الريم، أبوظبي",
//     beds: 2,
//     bathRooms: 2,
//     type: "شقة مفروشة",
//     images: [
//       "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
//       "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
//       "https://images.unsplash.com/photo-1560448075-bb485b067938"
//     ]
//   }
// ];


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
  // {
  //   id: "1",
  //   title: "فيلا فاخرة في حي النرجس",
  //   description: "فيلا حديثة بتصميم عصري وإطلالة رائعة على المدينة",
  //   price: 2500000,
  //   location: "حي النرجس، الرياض",
  //   type: "villa",
  //   bedrooms: 5,
  //   bathrooms: 6,
  //   area: 450,
  //   amenities: ["حديقة خاصة", "مسبح", "غرفة خادمة", "مصعد", "موقف سيارات"],
  //   images: [
  //     "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3",
  //     "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3"
  //   ],
  //   featured: true
  // },
  // {
  //   id: "2",
  //   title: "شقة مميزة في برج السلام",
  //   description: "شقة حديثة بموقع استراتيجي وخدمات متكاملة",
  //   price: 900000,
  //   location: "شارع الملك فهد، الرياض",
  //   type: "apartment",
  //   bedrooms: 3,
  //   bathrooms: 2,
  //   area: 180,
  //   amenities: ["أمن 24/7", "نادي رياضي", "موقف سيارات", "مصعد"],
  //   images: [
  //     "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3",
  //     "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3"
  //   ],
  //   featured: true
  // },
  // {
  //   id: "3",
  //   title: "أرض تجارية في حي العليا",
  //   description: "أرض تجارية بموقع حيوي مناسبة للاستثمار",
  //   price: 5000000,
  //   location: "حي العليا، الرياض",
  //   type: "land",
  //   area: 1000,
  //   amenities: ["شارعين", "موقع حيوي", "مخطط معتمد"],
  //   images: [
  //     "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3"
  //   ],
  //   featured: false
  // },

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
    title: "قصر فخم في حي الحمراء",
    description: "قصر مذهل بتصميم كلاسيكي وحديقة واسعة",
    price: 8500000,
    location: "حي الحمراء، جدة",
    type: "palace",
    bedrooms: 8,
    bathrooms: 10,
    area: 1200,
    amenities: ["حديقة ضخمة", "مسبح داخلي", "مسبح خارجي", "ملعب تنس", "مجلس رجال", "مجلس نساء", "غرف خدم"],
    images: [
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-4.0.3"
    ],
    featured: true
  },
  {
    id: "4",
    title: "شقة سكنية في حي الروضة",
    description: "شقة عائلية مريحة بموقع هادئ وخدمات متكاملة",
    price: 750000,
    location: "حي الروضة، جدة",
    type: "apartment",
    bedrooms: 4,
    bathrooms: 3,
    area: 220,
    amenities: ["شرفة", "موقف سيارات", "مصعد", "حراسة أمنية"],
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3"
    ],
    featured: false
  },
  {
    id: "5",
    title: "فيلا مودرن في حي الياسمين",
    description: "فيلا عصرية بتصميم فريد وتشطيبات فاخرة",
    price: 3200000,
    location: "حي الياسمين، الرياض",
    type: "villa",
    bedrooms: 6,
    bathrooms: 7,
    area: 500,
    amenities: ["حديقة خاصة", "مسبح", "غرفة سينما", "غرفة ألعاب", "غرفة خادمة"],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3"
    ],
    featured: true
  },
  {
    id: "6",
    title: "بنتهاوس فاخر في أبراج البحر",
    description: "شقة بنتهاوس فاخرة بإطلالة بحرية خلابة",
    price: 4500000,
    location: "كورنيش جدة",
    type: "penthouse",
    bedrooms: 5,
    bathrooms: 6,
    area: 400,
    amenities: ["تراس خاص", "جاكوزي", "مطبخ مجهز", "غرفة خدم", "موقف خاص"],
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3"
    ],
    featured: true
  },
  {
    id: "7",
    title: "شقة استوديو في حي السلامة",
    description: "استوديو عصري مثالي للسكن أو الاستثمار",
    price: 400000,
    location: "حي السلامة، جدة",
    type: "studio",
    bedrooms: 1,
    bathrooms: 1,
    area: 60,
    amenities: ["مطبخ مجهز", "موقف سيارات", "مصعد", "أمن"],
    images: [
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3"
    ],
    featured: false
  },
  {
    id: "8",
    title: "فيلا تاون هاوس في الملقا",
    description: "تاون هاوس حديث بتصميم عملي وموقع مميز",
    price: 1800000,
    location: "حي الملقا، الرياض",
    type: "townhouse",
    bedrooms: 4,
    bathrooms: 5,
    area: 300,
    amenities: ["حديقة صغيرة", "غرفة خادمة", "موقف سيارتين", "مخزن"],
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600566752229-250ed26fb23b?ixlib=rb-4.0.3"
    ],
    featured: false
  },
  {
    id: "9",
    title: "شقة دوبلكس في حي الشاطئ",
    description: "دوبلكس فاخر بإطلالة بحرية وتصميم عصري",
    price: 2200000,
    location: "حي الشاطئ، جدة",
    type: "duplex",
    bedrooms: 5,
    bathrooms: 4,
    area: 350,
    amenities: ["شرفة بحرية", "سلم داخلي", "مطبخ مجهز", "غرفة خادمة", "موقف خاص"],
    images: [
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600573472583-e271a6333011?ixlib=rb-4.0.3"
    ],
    featured: true
  },
  {
    id: "10",
    title: "فيلا مستقلة في حي الورود",
    description: "فيلا عائلية واسعة مع حديقة كبيرة",
    price: 2800000,
    location: "حي الورود، الرياض",
    type: "villa",
    bedrooms: 6,
    bathrooms: 7,
    area: 550,
    amenities: ["حديقة كبيرة", "مسبح", "ملعب أطفال", "غرفتين خدم", "مجلس رجال ونساء"],
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3"
    ],
    featured: true
  },
  {
    id: "11",
    title: "شقة فاخرة في برج المملكة",
    description: "شقة راقية في أحد أفخم أبراج المدينة",
    price: 3500000,
    location: "طريق الملك فهد، الرياض",
    type: "apartment",
    bedrooms: 4,
    bathrooms: 5,
    area: 280,
    amenities: ["خدمة فندقية", "نادي صحي", "مسبح مشترك", "أمن 24/7", "موقف خاص"],
    images: [
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3"
    ],
    featured: true
  },
  {
    id: "12",
    title: "فيلا مع مسبح في حي الأندلس",
    description: "فيلا عائلية مميزة مع مسبح خاص وحديقة",
    price: 2900000,
    location: "حي الأندلس، جدة",
    type: "villa",
    bedrooms: 5,
    bathrooms: 6,
    area: 480,
    amenities: ["مسبح خاص", "حديقة", "غرفة خادمة", "مطبخ خارجي", "غرفة سائق"],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3"
    ],
    featured: false
  },
  {
    id: "13",
    title: "شقة روف في حي الخبر الشمالية",
    description: "شقة روف مميزة مع تراس واسع وإطلالة بحرية",
    price: 1800000,
    location: "الخبر الشمالية، الخبر",
    type: "penthouse",
    bedrooms: 3,
    bathrooms: 4,
    area: 250,
    amenities: ["تراس كبير", "مطبخ مفتوح", "غرفة خادمة", "موقف خاص", "مخزن"],
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3"
    ],
    featured: false
  },
  {
    id: "14",
    title: "فيلا درج صالة في حي النزهة",
    description: "فيلا درج صالة حديثة بتصميم عصري",
    price: 2100000,
    location: "حي النزهة، الرياض",
    type: "villa",
    bedrooms: 7,
    bathrooms: 8,
    area: 420,
    amenities: ["مجلس رجال", "مجلس نساء", "غرفة خادمة", "مطبخ مجهز", "حديقة أمامية"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3"
    ],
    featured: false
  },

  {
    id: "15",
    title: "شقة غرفتين وصالة في الروضة",
    description: "شقة اقتصادية مثالية للعائلات الصغيرة",
    price: 650000,
    location: "حي الروضة، جدة",
    type: "apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
    amenities: ["مطبخ مجهز", "مصعد", "موقف سيارات", "تكييف مركزي"],
    images: [
      "https://images.unsplash.com/photo-1598528644866-3215eb3e9771?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1598528644942-c4f785934373?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1598528644848-2631149fbcd3?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1598528644847-6f7678742a66?ixlib=rb-4.0.3"
    ],
    featured: false
  },
  {
    id: "16",
    title: "قصر فخم في حي المحمدية",
    description: "قصر ملكي بتصميم أندلسي وحدائق واسعة",
    price: 12000000,
    location: "حي المحمدية، الرياض",
    type: "palace",
    bedrooms: 12,
    bathrooms: 14,
    area: 2000,
    amenities: ["حدائق واسعة", "مسبح داخلي", "مسبح خارجي", "مجلس كبير", "قاعة احتفالات", "سكن خدم", "ملعب تنس"],
    images: [
      "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1577495508048-b2c46d2b4a1b?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1577495508048-b2c46d2b4a1c?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1577495508048-b2c46d2b4a1d?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1577495508048-b2c46d2b4a1e?ixlib=rb-4.0.3"
    ],
    featured: true
  },
  {
    id: "17",
    title: "شقة روف مع مسبح خاص",
    description: "شقة روف فاخرة مع مسبح خاص وإطلالة بانورامية",
    price: 4200000,
    location: "شارع الأمير سلطان، جدة",
    type: "penthouse",
    bedrooms: 4,
    bathrooms: 5,
    area: 380,
    amenities: ["مسبح خاص", "تراس واسع", "غرفة خادمة", "مصعد خاص", "موقف خاص", "خدمة أمن"],
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600607687166-aac4c3eac7f4?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118d?ixlib=rb-4.0.3"
    ],
    featured: true
  },
  {
    id: "18",
    title: "فيلا مودرن في حي الربيع",
    description: "فيلا عصرية بتصميم مميز وتشطيبات راقية",
    price: 3100000,
    location: "حي الربيع، الرياض",
    type: "villa",
    bedrooms: 6,
    bathrooms: 7,
    area: 520,
    amenities: ["حديقة خاصة", "مسبح", "غرفة العاب", "غرفة سينما", "غرفتين خدم", "مطبخ خارجي"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0d?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0e?ixlib=rb-4.0.3"
    ],
    featured: true
  },
  {
    id: "19",
    title: "شقة استوديو في الشاطئ",
    description: "استوديو أنيق بإطلالة بحرية وموقع حيوي",
    price: 480000,
    location: "حي الشاطئ، جدة",
    type: "studio",
    bedrooms: 1,
    bathrooms: 1,
    area: 65,
    amenities: ["إطلالة بحرية", "مطبخ مجهز", "مسبح مشترك", "صالة رياضية", "أمن 24/7"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93689?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1502672023488-70e25813eb81?ixlib=rb-4.0.3"
    ],
    featured: false
  },
  {
    id: "20",
    title: "فيلا مع مسبح في حي الملقا",
    description: "فيلا فاخرة مع مسبح خاص وتصميم معاصر",
    price: 3800000,
    location: "حي الملقا، الرياض",
    type: "villa",
    bedrooms: 7,
    bathrooms: 8,
    area: 600,
    amenities: ["مسبح خاص", "حديقة واسعة", "غرف خدم", "مجلس رجال", "مجلس نساء", "مصعد", "غرفة سائق"],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539b0?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0d?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539b1?ixlib=rb-4.0.3"
    ],
    featured: true
  },

  {
    id: "21",
    title: "أرض سكنية في حي الملقا",
    description: "أرض سكنية مستوية في حي راقي، مخططة وجاهزة للبناء",
    price: 1800000,
    location: "حي الملقا، الرياض",
    type: "land",
    area: 750,
    amenities: ["شارعين", "مخططة", "كهرباء", "مياه"],
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1598885511440-218a568970b0?ixlib=rb-4.0.3"
    ],
    featured: true
  },
  {
    id: "22",
    title: "أرض تجارية على طريق الملك فهد",
    description: "أرض تجارية بموقع استراتيجي مميز على الشارع العام",
    price: 4500000,
    location: "طريق الملك فهد، الرياض",
    type: "land",
    area: 1200,
    amenities: ["شارع تجاري", "تصريح تجاري", "خدمات متكاملة"],
    images: [
      "https://images.unsplash.com/photo-1524813686514-a57563d77965?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1507149833265-60c372daea22?ixlib=rb-4.0.3"
    ],
    featured: true
  },
  {
    id: "23",
    title: "أرض سكنية في حي العارض",
    description: "أرض سكنية في منطقة حيوية، مناسبة للاستثمار السكني",
    price: 1200000,
    location: "حي العارض، الرياض",
    type: "land",
    area: 625,
    amenities: ["شارع 20 متر", "قريبة من الخدمات", "مخططة"],
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3"
    ],
    featured: false
  },
  {
    id: "24",
    title: "أرض استثمارية في حي اليرموك",
    description: "أرض استثمارية بموقع متميز، مناسبة للمجمعات السكنية",
    price: 3200000,
    location: "حي اليرموك، الرياض",
    type: "land",
    area: 900,
    amenities: ["شارعين زاوية", "تصريح عمائر", "قريبة من المدارس"],
    images: [
      "https://images.unsplash.com/photo-1564013434775-f71db0030976?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1542889689-32d93dbe45d3?ixlib=rb-4.0.3",

    ],
    featured: true
  },
  {
    id: "25",
    title: "أرض تجارية في حي النخيل",
    description: "أرض تجارية على زاوية شارعين رئيسيين، موقع حيوي",
    price: 5500000,
    location: "حي النخيل، الرياض",
    type: "land",
    area: 1500,
    amenities: ["زاوية", "شوارع تجارية", "خدمات متكاملة", "تصريح تجاري"],
    images: [
      "https://images.unsplash.com/photo-1598887544487-2c137ea51c74?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1598887354946-50d5bbc451e6?ixlib=rb-4.0.3"
    ],
    featured: true
  }
];