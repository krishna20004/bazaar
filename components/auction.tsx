"use client";

import {
  FaCar,
  FaBuilding,
  FaUniversity,
  FaCity,
  FaSearch,
} from "react-icons/fa";
const auctionItems = [
  {
    icon: <FaCar className="text-2xl text-white/70" />,
    label: "Vehicle",
    count: "105 Vehicles",
  },
  {
    icon: <FaUniversity className="text-2xl text-white/70" />,
    label: "Available Banks",
    count: "105 Banks",
  },
  {
    icon: <FaBuilding className="text-2xl text-white/70" />,
    label: "Buildings",
    count: "105 Buildings",
  },
  {
    icon: <FaCity className="text-2xl text-white/70" />,
    label: "Cities",
    count: "105 Cities",
  },
];
const SearchAuctionSection = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="border rounded-lg p-6 sm:p-8 shadow-sm flex flex-col justify-between h-full">
            <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">
              Search Properties
            </h2>

            <div className="w-full border border-gray-300 rounded-lg flex flex-col sm:flex-row items-stretch overflow-hidden mb-6">
              <select className="bg-emerald-700 text-white text-sm px-3 py-3 sm:py-2 outline-none sm:rounded-none rounded-t-lg sm:rounded-l-lg sm:rounded-t-none w-full sm:w-auto">
                <option>Search By Category</option>
                <option>Vehicle</option>
                <option>Flat</option>
                <option>Building</option>
              </select>

              <input
                type="text"
                placeholder="Search "
                className="flex-1 px-4 py-3 sm:py-2 text-sm text-gray-700 outline-none w-full"
              />

              <button className="px-4 py-3 sm:py-2 bg-white text-gray-700 hover:text-black sm:rounded-r-lg w-full sm:w-auto">
                <FaSearch className="text-lg sm:text-base mx-auto" />
              </button>
            </div>

            <div className="text-sm flex flex-wrap gap-x-2 gap-y-2">
              <span className="text-orange-500 font-semibold mr-2">
                POPULAR CITIES :
              </span>
              <a href="#" className="text-black-900 hover:underline">
                Flat In Mumbai
              </a>
              <a href="#" className="text-black-900 hover:underline">
                Flat In Delhi
              </a>
              <a href="#" className="text-black-900 hover:underline">
                House In Hyderabad
              </a>
              <a href="#" className="text-black-900 hover:underline">
                Hyderabad
              </a>
            </div>
          </div>

          <div className="bg-emerald-800 text-white/60 rounded-lg shadow-md p-6 sm:p-8 flex flex-col justify-between h-full">
            <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6 text-white/60">
              Auction Listing Properties
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {auctionItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center text-left gap-4"
                >
                  <div className="text-2xl text-white/70">{item.icon}</div>
                  <div>
                    <p className="text-sm text-white/60">{item.label}</p>
                    <p className="text-xs text-white/60">{item.count}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchAuctionSection;
