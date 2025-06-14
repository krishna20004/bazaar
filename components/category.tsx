'use client';

import { FaBuilding, FaHome, FaCar, FaIndustry, FaGem, FaCity } from 'react-icons/fa';

const categories = [
  { label: 'Commercial', icon: <FaBuilding />, count: 105 },
  { label: 'Housing', icon: <FaHome />, count: 105 },
  { label: 'Apartment', icon: <FaBuilding />, count: 105 },
  { label: 'Vehicle', icon: <FaCar />, count: 105 },
  { label: 'Industrials', icon: <FaIndustry />, count: 105 },
  { label: 'Gold Auction', icon: <FaGem />, count: 105 },
  { label: 'Commercial', icon: <FaBuilding />, count: 105 },
  { label: 'Housing', icon: <FaHome />, count: 105 },
];

const ExploreCategoriesSection = () => {
  return (
<section className="w-full overflow-x-hidden bg-white">
  <div className="max-w-7xl mx-auto py-15 px-4 grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
    {/* Left Column */}
    <div>
      <p className="text-sm font-medium text-yellow-500 mb-1">Categories</p>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
        Explore Our Categories
      </h2>
    </div>

    {/* Right Grid */}
   <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 w-full">

      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
        >
          <div className="text-3xl text-gray-800 mb-3">{category.icon}</div>
          <h3 className="font-semibold text-sm text-gray-900 mb-2">{category.label}</h3>
          <p className="text-xs text-gray-500">{category.count} Properties</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default ExploreCategoriesSection;
