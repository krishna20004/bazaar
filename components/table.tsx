"use client";
import { useState } from "react";

const LatestFreeAuctions: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);


  const auctions = [...Array(100)].map((_, i) => ({
    id: 148598 + i,
    bankName: "HDFC Bank",
    property:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    city: "Chennai",
    auctionDate: "08-08-2023",
    emdLastDate: "08-08-2023",
    reservePrice: "5,00,000",
  }));

  const totalPages = Math.ceil(auctions.length / pageSize);
  const currentAuctions = auctions.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  return (
    <section className="py-10 px-4">
      <h2 className="text-center text-black font-semibold text-lg sm:text-xl mb-6">
        Latest Free Auctions
      </h2>

      <div className="overflow-x-auto w-full px-4">
        <div className="w-full max-w-7xl mx-auto  p-4 rounded-xl ">
          <table className="min-w-[700px] w-full text-sm text-center border-separate border-spacing-y-3">
            <thead>
              <tr className="bg-teal-700 text-white">
                {[
                  "Auction ID",
                  "Bank Name",
                  "Property of Auction",
                  "City",
                  "Auction Date",
                  "EMD Last Date",
                  "Reserve Price",
                  "View Details",
                ].map((heading, index, array) => (
                  <th
                    key={index}
                    className={`font-semibold border-r border-white last:border-r-0 ${
                      index === 0 ? "rounded-tl-xl" : ""
                    } ${index === array.length - 1 ? "rounded-tr-xl" : ""}`}
                  >
                    <div className="px-5 py-5">{heading}</div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {currentAuctions.map((auction) => (
                <tr
                  key={auction.id}
                  className="bg-gray-200 text-black  rounded-md overflow-hidden shadow-sm"
                >
                  <td className="px-2 sm:px-3 py-2 sm:py-4 border-r border-black rounded-l-md ">
                    {auction.id}
                  </td>
                  <td className="px-2 sm:px-3 py-2 sm:py-4 border-r border-black">
                    {auction.bankName}
                  </td>
                  <td className="px-2 sm:px-3 py-2 sm:py-4 text-[10px] sm:text-xs break-words max-w-[120px] sm:max-w-xs border-r border-black">
                    {auction.property}
                  </td>
                  <td className="px-2 sm:px-3 py-2 sm:py-4 border-r border-black">
                    {auction.city}
                  </td>
                  <td className="px-2 sm:px-3 py-2 sm:py-4 border-r border-black">
                    {auction.auctionDate}
                  </td>
                  <td className="px-2 sm:px-3 py-2 sm:py-4 border-r border-black">
                    {auction.emdLastDate}
                  </td>
                  <td className="px-2 sm:px-3 py-2 sm:py-4 border-r border-black">
                    {auction.reservePrice}
                  </td>
                  <td className="px-2 sm:px-3 py-2 sm:py-4 text-blue-600 font-semibold hover:underline cursor-pointer rounded-r-md">
                    View
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 mt-6 px-2">
        <div className="flex flex-wrap justify-center md:justify-start gap-1">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded text-blue-900 hover:bg-gray-100 disabled:opacity-50"
          >
            &larr; Prev
          </button>

          {[...Array(totalPages)].slice(0, 7).map((_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 border rounded ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "text-blue-900 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            );
          })}

          {totalPages > 7 && (
            <>
              <span className="px-3 py-1 border rounded text-blue-900">
                ...
              </span>
              <button
                onClick={() => setCurrentPage(totalPages)}
                className="px-3 py-1 border rounded text-blue-900 hover:bg-gray-100"
              >
                {totalPages}
              </button>
            </>
          )}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded text-blue-900 hover:bg-gray-100 disabled:opacity-50"
          >
            Next &rarr;
          </button>
        </div>

        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(1); 
            }}
            className="border rounded px-3 py-1 text-blue-900"
          >
            <option value={10}>10 per page</option>
            <option value={20}>20 per page</option>
            <option value={50}>50 per page</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default LatestFreeAuctions;
