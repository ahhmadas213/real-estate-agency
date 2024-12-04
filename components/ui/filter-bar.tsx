"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {  MapPin } from "lucide-react";

interface FilterBarProps {
  onFilter: (filters: { type?: string; location?: string; bedrooms?: string }) => void;
}

export function FilterBar({ onFilter }: FilterBarProps) {
  const [filters, setFilters] = useState({
    type: "",
    location: "",
    bedrooms: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
    onFilter({ ...filters, [name]: value });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative mb-12"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>
      <div className="relative bg-white/90 p-8 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative">
            <select
              name="type"
              value={filters.type}
              onChange={handleChange}
              className="w-full p-4 bg-white text-right border border-gray-200 appearance-none"
            >
              <option value="">نوع العقار</option>
              <option value="apartment">شقة</option>
              <option value="villa">فيلا</option>
              <option value="land">أرض</option>
              <option value="commercial">تجاري</option>
            </select>
          </div>
          
          <div className="relative">
            <select
              name="location"
              value={filters.location}
              onChange={handleChange}
              className="w-full p-4 bg-white text-right border border-gray-200 appearance-none"
            >
              <option value="">الموقع</option>
              <option value="riyadh">الرياض</option>
              <option value="jeddah">جدة</option>
              <option value="dammam">الدمام</option>
              <option value="khobar">الخبر</option>
            </select>
            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="relative">
            <select
              name="bedrooms"
              value={filters.bedrooms}
              onChange={handleChange}
              className="w-full p-4 bg-white text-right border border-gray-200 appearance-none"
            >
              <option value="">عدد الغرف</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
          </div>
        </div>
      </div>
    </motion.div>
  );
}