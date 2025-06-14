"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const baseLocations = [
  { name: "Ahmedabad", image: "/ah.png" },
  { name: "Chennai", image: "/9.png" },
  { name: "Hyderabad", image: "/3.png" },
  { name: "Collocate", image: "/6.png" },
];

const locations = Array.from({ length: 4 }, () => baseLocations).flat();
export default function Locations() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: dir === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="w-full px-4 py-10">
      <div className="text-center mb-6">
        <p className="text-sm text-yellow-500 font-medium">Locations</p>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          Available 25+ Locations In India
        </h2>
      </div>

   
      <div className="hidden lg:block relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full p-2 shadow"
        >
          <ChevronLeft />
        </button>

        <div ref={scrollRef} className="overflow-x-auto scroll-smooth px-4 sm:px-6 lg:px-40">

          <div className="min-w-fit grid grid-rows-2 grid-flow-col gap-4 py-4">
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className="relative w-40 h-24 rounded-md overflow-hidden group"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${loc.image}')` }}
                />
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition duration-300" />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <span className="text-white text-sm font-semibold">{loc.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full p-2 shadow"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
        {locations.map((loc, idx) => (
          <div
            key={idx}
            className="relative h-24 rounded-md overflow-hidden group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${loc.image}')` }}
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300" />
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <span className="text-white text-sm font-semibold">{loc.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
