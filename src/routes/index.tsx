import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Facilities from "@/components/Facilities";
import AdmissionsProcess from "@/components/AdmissionsProcess";
import LeadForm from "@/components/LeadForm";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "MSDSPG- Major SD Singh PG Ayurvedic Medical College | Admissions 2026-27" },
      {
        name: "description",
        content:
          "Apply for BAMS and MS (Prasuti Tantra, Shalya Tantra) at MSDSPG. NCISM approved, 20+ years legacy, 200-bed teaching hospital. Admissions open.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-cream">
      <Navbar />
      <Hero />
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
    </main>
  );
}
