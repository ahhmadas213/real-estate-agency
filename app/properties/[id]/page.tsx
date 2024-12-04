"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { properties } from "@/lib/data";
import { MapPin, Home, Ruler, Bath, Bed } from "lucide-react";
import Link from "next/link";

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">العقار غير موجود</h1>
          <Link href="/properties" className="text-primary hover:underline">
            العودة إلى العقارات
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[50vh]">
        <div className="absolute inset-0">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-center px-4"
          >
            <h1 className="text-4xl font-bold mb-4">{property.title}</h1>
            <p className="text-xl flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              {property.location}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white p-8">
              <h2 className="text-2xl font-bold mb-6 text-right">تفاصيل العقار</h2>
              <div className="grid grid-cols-2 gap-6 text-right">
                <div className="flex items-center gap-3 justify-end">
                  <span>المساحة: {property.area} متر مربع</span>
                  <Ruler className="w-5 h-5 text-primary" />
                </div>
                {property.bedrooms && (
                  <div className="flex items-center gap-3 justify-end">
                    <span>غرف النوم: {property.bedrooms}</span>
                    <Bed className="w-5 h-5 text-primary" />
                  </div>
                )}
                {property.bathrooms && (
                  <div className="flex items-center gap-3 justify-end">
                    <span>الحمامات: {property.bathrooms}</span>
                    <Bath className="w-5 h-5 text-primary" />
                  </div>
                )}
                <div className="flex items-center gap-3 justify-end">
                  <span>نوع العقار: {property.type}</span>
                  <Home className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>

            <div className="bg-white p-8">
              <h2 className="text-2xl font-bold mb-6 text-right">الوصف</h2>
              <p className="text-gray-600 leading-relaxed text-right">
                {property.description}
              </p>
            </div>

            <div className="bg-white p-8">
              <h2 className="text-2xl font-bold mb-6 text-right">المميزات</h2>
              <ul className="grid grid-cols-2 gap-4 text-right">
                {property.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center gap-2 justify-end">
                    <span>{amenity}</span>
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white p-8">
              <h2 className="text-2xl font-bold mb-6 text-right">السعر</h2>
              <p className="text-3xl font-bold text-primary text-right">
                {property.price.toLocaleString()} ريال
              </p>
            </div>

            <div className="grid gap-4">
              {property.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${property.title} - صورة ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}