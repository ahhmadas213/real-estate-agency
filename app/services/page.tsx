"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[40vh] mb-12">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white px-4"
          >
            <h1 className="text-5xl font-bold text-blue-400 mb-6">خدماتنا</h1>
            <p className="text-xl max-w-3xl mx-auto">
              نقدم مجموعة شاملة من الخدمات العقارية المتميزة
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-8 border border-blue-400 hover:bg-gray-100 transition-colors duration-300"
            >
              <service.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4 text-right">{service.title}</h3>
              <p className="text-gray-600 text-right">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 bg-gray-50 p-12 border border-blue-400"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">لماذا تختارنا؟</h2>
            <p className="text-gray-600 leading-relaxed">
              نحن نجمع بين الخبرة العميقة في السوق العقاري والتكنولوجيا الحديثة لنقدم لك خدمة لا مثيل لها. فريقنا من المتخصصين ملتزم بتحقيق أهدافك الاستثمارية وتقديم حلول مبتكرة تناسب احتياجاتك.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}