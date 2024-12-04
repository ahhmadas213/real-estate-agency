"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { properties } from "@/lib/data";
import { Property } from "@/types";
import { FilterBar } from "@/components/ui/filter-bar";
import { PropertyCard } from "@/components/ui/property-card";

export default function Properties() {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);

  const handleFilter = (filters: { type?: string; location?: string; bedrooms?: string }) => {
    let filtered = [...properties];

    if (filters.type && filters.type !== "all") {
      filtered = filtered.filter((p) => p.type === filters.type);
    }

    if (filters.location && filters.location !== "all") {
      filtered = filtered.filter((p) => p.location.includes(filters.location!));
    }

    if (filters.bedrooms && filters.bedrooms !== "all") {
      const bedroomCount = Number(filters.bedrooms);
      if (!isNaN(bedroomCount)) {
        filtered = filtered.filter(p => p.bedrooms === bedroomCount);
      }
    }

    setFilteredProperties(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[40vh] mb-12">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white px-4"
          >
            <h1 className="text-5xl text-blue-400 font-bold mb-6">عقاراتنا</h1>
            <p className="text-xl max-w-3xl mx-auto">
              اكتشف مجموعة متنوعة من العقارات المميزة في أفضل المواقع
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <FilterBar onFilter={handleFilter} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-white shadow-lg p-8"
          >
            <p className="text-gray-600 text-lg">لا توجد عقارات تطابق معايير البحث</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}