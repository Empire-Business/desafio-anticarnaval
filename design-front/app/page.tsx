import CarnivalEffects from "@/components/ui/CarnivalEffects";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Epiphany from "@/components/sections/Epiphany";
import Solution from "@/components/sections/Solution";
import Curriculum from "@/components/sections/Curriculum";
import Deliverables from "@/components/sections/Deliverables";
import SocialProof from "@/components/sections/SocialProof";
import FAQ from "@/components/sections/FAQ";
import Scarcity from "@/components/sections/Scarcity";
import FinalCTA from "@/components/sections/FinalCTA";
import FormSection from "@/components/sections/FormSection";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black">
      {/* Carnival Background Effects */}
      <CarnivalEffects />

      {/* Hero Section */}
      <Hero />

      {/* Problem Section */}
      <Problem />

      {/* Epiphany Bridge Section */}
      <Epiphany />

      {/* Solution Section */}
      <Solution />

      {/* Curriculum Section */}
      <Curriculum />

      {/* Deliverables Section */}
      <Deliverables />

      {/* Form Embed - First Placement */}
      <FormSection />

      {/* Social Proof Section */}
      <SocialProof />

      {/* FAQ Section */}
      <FAQ />

      {/* Scarcity Section */}
      <Scarcity />

      {/* Final CTA Section */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
