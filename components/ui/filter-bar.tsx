import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Building2, Bed, DollarSign, ChevronDown, ChevronUp, Filter } from "lucide-react";

interface FilterBarProps {
  onFilter: (filters: {
    type?: string;
    location?: string;
    bedrooms?: string;
    operationType?: string;
    minPrice?: string;
    maxPrice?: string;
    bathrooms?: string;
    area?: string;
    amenities?: string[];
  }) => void;
}

export function FilterBar({ onFilter }: FilterBarProps) {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [filters, setFilters] = useState({
    type: "",
    location: "",
    bedrooms: "",
    operationType: "",
    minPrice: "",
    maxPrice: "",
    bathrooms: "",
    area: "",
    amenities: [] as string[],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFilters((prev) => {
      const updatedFilters = { ...prev, [name]: value };
      onFilter(updatedFilters); // Call onFilter with the updated state
      return updatedFilters;
    });
  };

  const handleAmenityChange = (amenity: string) => {
    setFilters((prev) => {
      const updatedAmenities = prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity];

      const updatedFilters = { ...prev, amenities: updatedAmenities };
      onFilter(updatedFilters); // Call onFilter with the updated state
      return updatedFilters;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative mb-12"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>
      <div className="relative bg-white/90 p-8 shadow-lg">
        {/* Main Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
          <div className="relative">
            <select
              name="operationType"
              value={filters.operationType}
              onChange={handleChange}
              className="w-full p-4 bg-white text-right border border-gray-200 appearance-none"
            >
              <option value="">نوع العملية</option>
              <option value="rent">للإيجار</option>
              <option value="sale">للبيع</option>
              <option value="commercial">تجاري</option>
            </select>
            <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

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
              <option value="duplex">دوبلكس</option>
              <option value="penthouse">بنتهاوس</option>
              <option value="studio">ستوديو</option>

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
              <option value="الرياض">الرياض</option>
              <option value="جدة">جدة</option>
              <option value="الدمام">الدمام</option>
              <option value="الخبر">الخبر</option>
              <option value="مكة">مكة</option>
              <option value="المدينة">المدينة</option>
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
              <option value="4">4</option>
              <option value="5+">5+</option>
            </select>
            <Bed className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Price Range */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="relative">
            <input
              type="number"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleChange}
              placeholder="السعر من"
              className="w-full p-4 bg-white text-right border border-gray-200"
            />
            <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative">
            <input
              type="number"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleChange}
              placeholder="السعر إلى"
              className="w-full p-4 bg-white text-right border border-gray-200"
            />
            <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Advanced Options Button */}
        <button
          onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mr-auto"
        >
          {isAdvancedOpen ? (
            <>
              <ChevronUp className="w-4 h-4" />
              <span>خيارات أقل</span>
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              <span>خيارات متقدمة</span>
            </>
          )}
          <Filter className="w-4 h-4" />
        </button>

        {/* Advanced Options */}
        {isAdvancedOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 border-t border-gray-200 pt-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative">
                <select
                  name="bathrooms"
                  value={filters.bathrooms}
                  onChange={handleChange}
                  className="w-full p-4 bg-white text-right border border-gray-200 appearance-none"
                >
                  <option value="">عدد الحمامات</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4+">4+</option>
                </select>
              </div>

              <div className="relative">
                <input
                  type="number"
                  name="area"
                  value={filters.area}
                  onChange={handleChange}
                  placeholder="المساحة (متر مربع)"
                  className="w-full p-4 bg-white text-right border border-gray-200"
                />
              </div>

              <div className="space-y-2">
                <div className="text-right mb-2">المميزات</div>
                <div className="grid grid-cols-2 gap-2">
                  {["مسبح", "حديقة", "موقف سيارات", "مصعد", "أمن"].map((amenity) => (
                    <label key={amenity} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filters.amenities.includes(amenity)}
                        onChange={() => handleAmenityChange(amenity)}
                      />
                      {amenity}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
