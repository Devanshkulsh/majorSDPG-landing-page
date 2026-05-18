import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const TrustBar = lazy(() => import("@/components/TrustBar"));
const About = lazy(() => import("@/components/About"));
const Courses = lazy(() => import("@/components/Courses"));
const Facilities = lazy(() => import("@/components/Facilities"));
const AdmissionsProcess = lazy(() => import("@/components/AdmissionsProcess"));
const LeadForm = lazy(() => import("@/components/LeadForm"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));
const ChatBot = lazy(() => import("@/components/ChatBot"));

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Major S.D. Singh PG Ayurvedic Medical College | Top BAMS College in UP" },
      {
        name: "description",
        content:
          "Apply for BAMS and MS (Prasuti Tantra, Shalya Tantra) at MSDSPG. NCISM approved, 20+ years legacy, 200-bed teaching hospital. Admissions open.",
      },
      {
        property: "og:title",
        content: "Major S.D. Singh PG Ayurvedic Medical College | Top BAMS College in UP",
      },
      {
        property: "og:description",
        content:
          "Apply for BAMS and MS (Prasuti Tantra, Shalya Tantra) at MSDSPG. NCISM approved, 20+ years legacy, 200-bed teaching hospital. Admissions open.",
      },
      { property: "og:url", content: "https://majorsdspgamc.com/" },
      {
        name: "twitter:title",
        content: "Major S.D. Singh PG Ayurvedic Medical College | Top BAMS College in UP",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "MSDSPG Admissions",
          url: "https://majorsdspgamc.com/",
          description:
            "Admissions page for Major SD Singh PG Ayurvedic Medical College with BAMS and PG course details.",
          inLanguage: "en-IN",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-cream">
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <TrustBar />
        <About />
        <Courses />
        <Facilities />
        <AdmissionsProcess />
        <LeadForm />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
        <ChatBot />
      </Suspense>
    </main>
  );
}
