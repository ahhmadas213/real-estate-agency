"use client";

import { motion } from "framer-motion";
import { Building2, Users, Trophy, Clock, CheckCircle } from "lucide-react";
import Image from "next/image";
export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const values = [
    "الشفافية والنزاهة في جميع تعاملاتنا",
    "الاحترافية والتميز في تقديم الخدمات",
    "الابتكار في الحلول العقارية",
    "التركيز على رضا العملاء",
    "الالتزام بأعلى معايير الجودة"
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[40vh] mb-12">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="text-white px-4"
          >
            <h1 className="text-5xl text-blue-400 font-bold mb-6">من نحن</h1>
            <p className="text-xl max-w-3xl mx-auto">
              نحن وكالة عقارية رائدة في المملكة العربية السعودية، نقدم خدمات عقارية متكاملة بخبرة تمتد لأكثر من 15 عاماً
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Building2, title: "1000+", desc: "عقار تم بيعه" },
            { icon: Users, title: "500+", desc: "عميل راضٍ" },
            { icon: Trophy, title: "15+", desc: "سنة خبرة" },
            { icon: Clock, title: "24/7", desc: "خدمة العملاء" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 p-8  shadow-lg border border-blue-400/20 text-center hover:bg-gray-100 transition-colors duration-300"
            >
              <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <Image width={500} height={500}
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3"
              alt="Modern Office"
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="space-y-8 text-right">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">رؤيتنا</h2>
              <p className="text-gray-600 leading-relaxed">
                نسعى لأن نكون الخيار الأول في سوق العقارات السعودي، من خلال تقديم خدمات استثنائية وحلول مبتكرة تلبي احتياجات عملائنا وتتجاوز توقعاتهم.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">مهمتنا</h2>
              <p className="text-gray-600 leading-relaxed">
                تقديم خدمات عقارية شاملة واحترافية، مع التركيز على رضا العملاء وبناء علاقات طويلة الأمد معهم، والمساهمة في تطوير القطاع العقاري في المملكة.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="bg-gray-50 shadow-lg border border-blue-400/20 p-12"
        >
          <h2 className="text-3xl font-bold text-center mb-12">قيمنا</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-center gap-4 text-right">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-gray-600">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}