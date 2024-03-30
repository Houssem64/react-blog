import React from "react";
import BlogCardSection from "../components/blogSection";
import LatestPostCard from "../components/latestPost";
export default function Home() {
  return (
    <div>
      <LatestPostCard />
      <BlogCardSection />
    </div>
  );
}
