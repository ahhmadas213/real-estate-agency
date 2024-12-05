"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { properties } from "@/lib/data";
import { Property } from "@/types";
import { FilterBar } from "@/components/ui/filter-bar";
import PropertyCard from "@/components/PropertyCard";

const ITEMS_PER_PAGE = 6; // Adjust this value as needed

export default function Properties() {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties); // Initialize with all properties
  const [displayedProperties, setDisplayedProperties] = useState<Property[]>([]);
  const [page, setPage] = useState(1);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  // Load initial properties on mount and update displayed properties when `page` or `filteredProperties` change
  useEffect(() => {
    setDisplayedProperties(filteredProperties.slice(0, page * ITEMS_PER_PAGE));
  }, [filteredProperties, page]);

  useEffect(() => {
    if (inView && displayedProperties.length < filteredProperties.length) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView, displayedProperties.length, filteredProperties.length]);

  const handleFilter = (filters: { type?: string; location?: string; bedrooms?: string }) => {
    let filtered = properties; // Avoid unnecessary spread

    if (filters.type && filters.type !== "all") {
      filtered = filtered.filter((p) => p.type === filters.type);
    }

    if (filters.location && filters.location !== "all") {
      filtered = filtered.filter((p) => p.location.includes(filters.location!));
    }

    if (filters.bedrooms && filters.bedrooms !== "all") {
      const bedroomCount = Number(filters.bedrooms);
      if (!isNaN(bedroomCount)) {
        filtered = bedroomCount < 4
          ? filtered.filter(p => p.bedrooms === bedroomCount)
          : filtered.filter(p => p.bedrooms! >= bedroomCount);
      }
    }

    setFilteredProperties(filtered);
    setPage(1); // Reset pagination when filters change
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

        <motion.div
          className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </motion.div>

        {displayedProperties.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-white shadow-lg p-8"
          >
            <p className="text-gray-600 text-lg">لا توجد عقارات تطابق معايير البحث</p>
          </motion.div>
        )}

        {displayedProperties.length < filteredProperties.length && (
          <div ref={ref} className="h-20 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-blue-500"
            >
              جاري تحميل المزيد...
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
