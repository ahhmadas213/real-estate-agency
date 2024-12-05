'use client';
import { useState } from "react";
import PropertyCard from "./PropertyCard";
import { properties } from '@/lib/data';
import AnimatedCarousel from "./ui/AnimatedCarousel";
import Link from "next/link";

const PopularProperty = () => {
  const [filter, setFilter] = useState('');

  const filteredProperties = filter
    ? properties.filter(property => property.featured && property.type === filter)
    : properties;

  // Fallback to PropertiesData if filter returns no results
  const displayedProperties = filteredProperties.length > 0 ? filteredProperties : properties;

  return (
    <div>
      <div className="container md:px-0 px-2 mx-auto w-full py-24 ">

        {/* Introduction text */}
        <div className="flex flex-col md:flex-row items-start justify-center w-full">
          <h3 className="flex-1 text-3xl mb-4 font-bold">العقارات المميزة</h3>
          <p className="flex-1 max-w-xl text-gray-500 md:text-lg">
            نحن نقدم خدمات شاملة لشراء وبيع وتأجير العقارات، مما يضمن تجربة سلسة وفعالة من البداية إلى النهاية.
          </p>
        </div>

        {/* Break line */}
        <div className="h-[1px] w-full my-20 bg-gray-800" />

        {/* Property listing */}
        <div>
          {/* Filter */}
          <div className="w-full flex-wrap mb-20  gap-4 flex justify-between items-center">
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setFilter('land')}
                className={`px-6 py-2 transition-all duration-200 ${filter === 'land' ? 'bg-black text-white' : 'bg-blue-400 hover:bg-gray-800 hover:text-white'
                  }`}
              >
                ارض
              </button>
              <button
                onClick={() => setFilter('villa')}
                className={`px-6 py-2 transition-all duration-200 ${filter === 'villa' ? 'bg-black text-white' : 'bg-blue-400 hover:bg-gray-800 hover:text-white'
                  }`}
              >
                فيلا
              </button>
              <button
                onClick={() => setFilter('apartment')}
                className={`px-6 py-2 transition-all duration-200 ${filter === 'apartment' ? 'bg-black text-white' : 'bg-blue-400 hover:bg-gray-800 hover:text-white'
                  }`}
              >
                شقق
              </button>
              <button
                onClick={() => setFilter('')}
                className={`px-6 py-2 transition-all duration-200 ${filter === '' ? 'bg-black text-white' : 'bg-blue-400 hover:bg-gray-800 hover:text-white'
                  }`}
              >
                الكل
              </button>
            </div>

            <Link href="/contact" className="py-2 px-10 cursor-pointer hover:bg-blue-400 transition-all duration-100 bg-black text-white">
              اكتشف المزيد
            </Link>
          </div>

          {/* Property cards */}
          <div dir="ltr">
            <AnimatedCarousel>
              {displayedProperties.filter(p => p.featured).map((property, index) => (
                <PropertyCard property={property} key={index} />
              ))}
            </AnimatedCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProperty;
