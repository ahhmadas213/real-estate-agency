"use client";

import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Ruler } from "lucide-react";
import Link from "next/link";
import { Property } from "@/types";
import Image from "next/image";
interface PropertyCardProps {
  property: Property;
  index: number;
}

export function PropertyCard({ property, index }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white overflow-hidden group"
    >
      <Link href={`/properties/${property.id}`}>
        <div className="relative h-64">
          <Image width={500}
            height={500}
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {property.featured && (
            <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1">
              مميز
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 text-gray-500 mb-2 justify-end">
            <span>{property.location}</span>
            <MapPin className="w-4 h-4" />
          </div>
          <h3 className="text-xl font-bold mb-4 text-right">{property.title}</h3>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {property.bedrooms && (
              <div className="flex items-center gap-1 justify-end">
                <span>{property.bedrooms}</span>
                <Bed className="w-4 h-4 text-gray-500" />
              </div>
            )}
            {property.bathrooms && (
              <div className="flex items-center gap-1 justify-end">
                <span>{property.bathrooms}</span>
                <Bath className="w-4 h-4 text-gray-500" />
              </div>
            )}
            <div className="flex items-center gap-1 justify-end">
              <span>{property.area}م²</span>
              <Ruler className="w-4 h-4 text-gray-500" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-primary font-bold text-lg">
              {property.price.toLocaleString()} ريال
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}