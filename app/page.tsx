import SearchAuctionSection from "@/components/auction";
import RecentBlogs from "@/components/blog";
import ExploreCategoriesSection from "@/components/category";
import Footer from "@/components/fotter";
import AuctionBanner from "@/components/hero";
import Locations from "@/components/locations";
import Navbar from "@/components/navbar";
import LatestFreeAuctions from "@/components/table";
import AuctionTable from "@/components/table";
import { Lateef } from "next/font/google";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <AuctionBanner/>
      <SearchAuctionSection/>
      <ExploreCategoriesSection/>
      <Locations/>
      <LatestFreeAuctions/>
      <RecentBlogs/>
      <Footer/>
    </div>
  );
}
