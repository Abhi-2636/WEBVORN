import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PORTFOLIO } from "@/lib/constants";
import CaseStudyContent from "../CaseStudyContent";

function slugify(value: string) {
  return value.toLowerCase().replace(/\s+/g, "-");
}

export async function generateStaticParams() {
  return PORTFOLIO.map((project) => ({
    slug: project.id,
  }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PORTFOLIO.find(
    (p) => p.id === slug || slugify(p.title) === slug
  );

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="pt-32 pb-20 section-container text-center">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}
          >
            Project Not Found
          </h1>
          <Link href="/#portfolio" className="btn-primary mt-6">
            <span>← Back to Portfolio</span>
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return <CaseStudyContent project={project} />;
}
