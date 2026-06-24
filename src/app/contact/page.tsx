"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  MapPin,
  Phone,
  Send,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { CONTACT_INFO } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Webvorn! I'm ${formData.name} from ${formData.company || "N/A"}. Budget: ${formData.budget || "N/A"}. Message: ${formData.message}`;
    window.open(
      `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="section-padding">
          <div className="section-container">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="text-center mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="text-sm font-semibold uppercase tracking-widest mb-4 block"
                style={{ color: "var(--color-accent-purple)" }}
              >
                Contact Us
              </motion.span>
              <motion.h1
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}
              >
                Let&apos;s Start Your{" "}
                <span className="gradient-text">Project</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-base md:text-lg max-w-2xl mx-auto"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Fill out the form below or reach out directly via WhatsApp. We
                respond within 2 hours.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="lg:col-span-3"
              >
                <form
                  onSubmit={handleSubmit}
                  className="glass-card p-8 space-y-6"
                  id="contact-form"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-sm font-medium mb-2 block"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{
                          background: "var(--glass-bg)",
                          border: "1px solid var(--glass-border)",
                          color: "var(--color-text-primary)",
                        }}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-sm font-medium mb-2 block"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{
                          background: "var(--glass-bg)",
                          border: "1px solid var(--glass-border)",
                          color: "var(--color-text-primary)",
                        }}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="text-sm font-medium mb-2 block"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{
                          background: "var(--glass-bg)",
                          border: "1px solid var(--glass-border)",
                          color: "var(--color-text-primary)",
                        }}
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="budget"
                        className="text-sm font-medium mb-2 block"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 cursor-pointer"
                        style={{
                          background: "var(--glass-bg)",
                          border: "1px solid var(--glass-border)",
                          color: "var(--color-text-primary)",
                        }}
                      >
                        <option value="">Select budget</option>
                        <option value="₹15,000 - ₹50,000">₹15,000 - ₹50,000</option>
                        <option value="₹50,000 - ₹1,50,000">₹50,000 - ₹1,50,000</option>
                        <option value="₹1,50,000 - ₹5,00,000">₹1,50,000 - ₹5,00,000</option>
                        <option value="₹5,00,000+">₹5,00,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-sm font-medium mb-2 block"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                      style={{
                        background: "var(--glass-bg)",
                        border: "1px solid var(--glass-border)",
                        color: "var(--color-text-primary)",
                      }}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full text-base py-4"
                    id="contact-submit"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Send size={18} /> Send via WhatsApp
                    </span>
                  </button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="lg:col-span-2 space-y-6"
              >
                {[
                  {
                    icon: <MessageCircle size={24} />,
                    title: "WhatsApp",
                    value: CONTACT_INFO.whatsapp,
                    href: `https://wa.me/${CONTACT_INFO.whatsappRaw}`,
                    cta: "Chat Now",
                  },
                  {
                    icon: <Mail size={24} />,
                    title: "Email",
                    value: CONTACT_INFO.email,
                    href: `mailto:${CONTACT_INFO.email}`,
                    cta: "Send Email",
                  },
                  {
                    icon: <MapPin size={24} />,
                    title: "Location",
                    value: "India (Remote Worldwide)",
                    href: "#",
                    cta: "View on Map",
                  },
                  {
                    icon: <Phone size={24} />,
                    title: "Phone",
                    value: CONTACT_INFO.phone,
                    href: `tel:${CONTACT_INFO.phoneRaw}`,
                    cta: "Call Now",
                  },
                ].map((item, i) => (
                  <motion.a
                    key={item.title}
                    variants={fadeInUp}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glass-card gradient-border p-6 flex items-start gap-4 group no-underline block"
                    id={`contact-info-${i}`}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(139, 92, 246, 0.15)",
                        color: "var(--color-accent-purple)",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1" style={{ color: "var(--color-text-primary)" }}>
                        {item.title}
                      </h3>
                      <p className="text-sm mb-2" style={{ color: "var(--color-text-secondary)" }}>
                        {item.value}
                      </p>
                      <span
                        className="text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                        style={{ color: "var(--color-accent-purple)" }}
                      >
                        {item.cta} <ArrowRight size={12} />
                      </span>
                    </div>
                  </motion.a>
                ))}

                {/* Calendly placeholder */}
                <motion.div variants={fadeInUp} className="glass-card p-6">
                  <h3 className="font-semibold mb-2" style={{ color: "var(--color-text-primary)" }}>
                    📅 Book a Call
                  </h3>
                  <p className="text-sm mb-4" style={{ color: "var(--color-text-secondary)" }}>
                    Schedule a free 30-minute consultation to discuss your project.
                  </p>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full text-sm"
                    id="calendly-link"
                  >
                    Schedule on Calendly <ArrowRight size={14} />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
