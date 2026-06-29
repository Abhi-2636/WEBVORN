import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog — Webvorn | Insights on Web Development, Design & AI",
  description:
    "Read the latest articles on web development, UI/UX design, AI integration, and digital growth strategies from the Webvorn team.",
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
