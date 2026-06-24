import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BLOG_POSTS } from "@/lib/constants";
import BlogDetailContent from "./BlogDetailContent";

const BLOG_POSTS_CONTENT = {
  "why-startups-need-premium-website": {
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
          In the digital age, your website is your brand&apos;s digital storefront. It&apos;s the first place potential clients, investors, and partners go to verify your credibility. A basic, low-budget template might get you online, but it won&apos;t build the trust needed to win premium customers.
        </p>

        <div className="glass-card p-6 my-8 border-l-4 border-l-purple-500">
          <p className="italic text-base" style={{ color: "var(--color-text-primary)" }}>
            &quot;Design is not just what it looks like and feels like. Design is how it works.&quot; — Steve Jobs
          </p>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}>
          1. The Psychology of Premium Design
        </h3>
        <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
          Users form an opinion about your website in <strong>50 milliseconds</strong>. Within that blink of an eye, they judge your credibility, professionalism, and capabilities. A premium website with smooth animations, custom layout grids, and premium typography signals that your business is high-end, reliable, and detailed-oriented.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}>
          2. Conversion-Focused UX
        </h3>
        <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
          A premium website is more than just beautiful imagery. It utilizes visual weight, whitespace, and micro-interactions to guide visitors seamlessly down the funnel. By removing friction from the navigation and providing clear Call-to-Actions (CTAs), a professional website can increase your conversion rates by <strong>200% to 400%</strong>.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}>
          3. Speed & SEO Optimization
        </h3>
        <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
          In 2026, page load speed is a critical ranking factor. Modern premium sites are built with frameworks like Next.js and Tailwind, offering server-side rendering (SSR), optimized asset delivery, and clean code that search engines love. A fraction of a second delay can cost you thousands in lost conversions.
        </p>
      </>
    ),
  },
  "ai-integration-web-applications": {
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
          Artificial Intelligence is shifting from a futuristic trend to a core business requirement. Integrating AI into your web application can automate processes, offer real-time customer insights, and provide hyper-personalized user experiences.
        </p>

        <div className="glass-card p-6 my-8 border-l-4 border-l-blue-500">
          <p className="italic text-base" style={{ color: "var(--color-text-primary)" }}>
            The startups that will lead the next decade are those integrating intelligence directly into the client user interface.
          </p>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}>
          1. Automated Customer Support
        </h3>
        <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
          Traditional chatbots are frustrating and limited. Modern LLM-based assistants (like Gemini API integrations) understand context, read user documents, and resolve complex issues in real-time, providing immediate 24/7 assistance that feels completely human.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}>
          2. Dynamic Personalization
        </h3>
        <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
          By analyzing user interaction sequences in real-time, your application can change layout components, recommend products, and suggest dashboard features tailored specifically to that user. This creates an extremely engaging, sticky digital product.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}>
          3. AI-Driven Analytics
        </h3>
        <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
          Give your users the power to query their data using natural language. Integrating natural-language-to-SQL logic lets users write sentences like &quot;Show me my highest performing sales regions this month&quot; and instantly receive rendered charts.
        </p>
      </>
    ),
  },
  "react-vs-nextjs-comparison": {
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
          Choosing the right framework is one of the most critical technology decisions you will make. While React is the library that powers everything, Next.js is a production-ready framework built on top of it. Let&apos;s break down which one fits your project.
        </p>

        <div className="glass-card p-6 my-8 border-l-4 border-l-cyan-500">
          <p className="italic text-base" style={{ color: "var(--color-text-primary)" }}>
            Understanding rendering paths (SSR vs CSR) is key to delivering both developer velocity and customer satisfaction.
          </p>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}>
          1. React (Client-Side Rendering)
        </h3>
        <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
          React is excellent for dashboard interfaces, internal admin tools, and single-page apps (SPAs) where SEO is not a consideration. Since it loads all JavaScript in the browser, once loaded, page transitions are instant, making it feel like a local application.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}>
          2. Next.js (Server-Side & Hybrid Rendering)
        </h3>
        <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
          Next.js renders HTML on the server. This makes pages load instantly, ensures search engine crawlers can index every word, and provides built-in image optimization, edge routing, and directory-based routing. It is the gold standard for marketing, e-commerce, and SaaS landing pages.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}>
          3. Summary: How to Choose
        </h3>
        <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
          If you are building a public website where organic search traffic and initial load times determine your revenue, use <strong>Next.js</strong>. If you are building a password-protected software app behind a login gate, a raw <strong>React</strong> template may serve you well.
        </p>
      </>
    ),
  },
} as const;

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const postContent = BLOG_POSTS_CONTENT[slug as keyof typeof BLOG_POSTS_CONTENT];

  if (!post || !postContent) {
    return (
      <>
        <Navbar />
        <main className="pt-32 pb-20 section-container text-center">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}
          >
            Article Not Found
          </h1>
          <Link href="/blog" className="btn-primary mt-6">
            <span>← Back to Blog</span>
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <BlogDetailContent
      post={post}
      content={postContent.content}
      otherPosts={otherPosts}
    />
  );
}
