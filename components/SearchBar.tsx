'use client'
import React, { useState } from 'react';
import { Search, MapPin, Home, ChevronDown } from 'lucide-react';

type PropertyType = 'apartment' | 'villa' | 'office' | 'land';
type ListingType = 'buy' | 'sell' | 'rent';

interface FilterState {
  location: string;
  propertyType: PropertyType | '';
  listingType: ListingType | '';
}

const RealEstateSearch = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    location: '',
    propertyType: '',
    listingType: '',
  });

  const locations = [
    'الرياض',
    'جدة',
    'الدمام',
    'مكة المكرمة',
    'المدينة المنورة',
  ];

  const propertyTypes: { value: PropertyType; label: string }[] = [
    { value: 'apartment', label: 'شقة' },
    { value: 'villa', label: 'فيلا' },
    { value: 'office', label: 'مكتب' },
    { value: 'land', label: 'أرض' },
  ];

  const listingTypes: { value: ListingType; label: string }[] = [
    { value: 'buy', label: 'شراء' },
    { value: 'sell', label: 'بيع' },
    { value: 'rent', label: 'إيجار' },
  ];

  const handleSearch = () => {
    console.log('Search with filters:', filters);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 font-sans" dir="rtl">
      {/* Main Search Bar */}
      <div className={`relative bg-white  shadow-lg`}>
        <div className="flex items-center p-4">
          <Search className="w-6 h-6 text-gray-400" />
          <input
            type="text"
            placeholder="ابحث عن عقارك المثالي..."
            className="w-full px-4 py-2 text-lg focus:outline-none text-gray-700 placeholder-gray-400"
          />
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 bg-gray-100 transition-colors"
          >
            <span className=''>الفلترة</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''
                }`}
            />
          </button>
        </div>

        {/* Filters Section */}
        <div
          className={`overflow-hidden bg-white w-full absolute transition-all duration-300 ease-in-out ${isFilterOpen ? 'max-h-96' : 'max-h-0'
            }`}
        >
          <div className="p-4 border-t border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Location Filter */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>الموقع</span>
                </label>
                <select
                  value={filters.location}
                  onChange={(e) =>
                    setFilters({ ...filters, location: e.target.value })
                  }
                  className="w-full p-2 border border-gray-200  focus:outline-none focus:border-blue-500"
                >
                  <option value="">اختر الموقع</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              {/* Property Type Filter */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-600">
                  <Home className="w-5 h-5" />
                  <span>نوع العقار</span>
                </label>
                <select
                  value={filters.propertyType}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      propertyType: e.target.value as PropertyType,
                    })
                  }
                  className="w-full p-2 border border-gray-200  focus:outline-none focus:border-blue-500"
                >
                  <option value="">اختر نوع العقار</option>
                  {propertyTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Listing Type Filter */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-gray-600">
                  <span>نوع العملية</span>
                </label>
                <div className="flex gap-2">
                  {listingTypes.map((type) => (
                    <button
                      key={type.value}
                      onClick={() =>
                        setFilters({ ...filters, listingType: type.value })
                      }
                      className={`flex-1 py-2 px-4  transition-all duration-200 ${filters.listingType === type.value
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleSearch}
                className="bg-blue-500 text-white px-8 py-3 w-full hover:bg-blue-600 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                بحث
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateSearch;