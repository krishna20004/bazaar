// components/AuctionBanner.tsx

import Image from 'next/image';

const AuctionBanner = () => {
  return (
    <section className="bg-white py-12 px-4 text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
        Bank Auctions Made Easy & Convenient
      </h2>

      {/* Subheading */}
      <p className="text-gray-900 text-base sm:text-lg md:text-xl lg:text-1xl max-w-2xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
        eAuctions, Banks can create and publish events in few easy steps and monitor the entire process online.
        The easy to use interface requires minimal training to the bank users and bidders
      </p>

     
      <div className="flex justify-center">
        <Image
          src="/5.png" 
          alt="Bank auction illustration"
          width={1000}
          height={450}
          className=" w-full h-auto max-w-7xl"
        />
      </div>
    </section>
  );
};

export default AuctionBanner;
