import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog — Shree Shyam Living | Student Accommodation Insights",
  description:
    "Read the latest articles on student life, accommodation guides, amenities, and campus updates from the Shree Shyam Living team.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <BlogContent />
      </main>
      <Footer />
    </>
  );
}
