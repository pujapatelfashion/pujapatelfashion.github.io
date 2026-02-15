import { motion, useScroll, useTransform } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-white/10 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <span className="font-serif text-xl font-bold text-foreground">
            Puja Patel
          </span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-foreground/80">
            <a href="#" className="hover:text-primary transition-colors">Collections</a>
            <a href="#" className="hover:text-primary transition-colors">Services</a>
            <a href="#" className="hover:text-primary transition-colors">About</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <Button variant="ghost" size="sm" className="hidden md:flex">
            Book Appointment
          </Button>
        </div>
      </nav>

      <main>
        <Hero />
        <BentoGrid />
        <Testimonials />
        
        {/* Footer CTA */}
        <section className="bg-foreground py-20 px-6 text-center text-white">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 font-serif text-4xl md:text-5xl">Ready to Design Your Dream Outfit?</h2>
            <p className="mb-8 text-white/60">
              Visit our boutique in Ghaziabad or start a conversation on WhatsApp.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              Start a Conversation
            </Button>
            <div className="mt-12 pt-12 border-t border-white/10 text-xs text-white/40 flex flex-col md:flex-row justify-between items-center gap-4">
               <p>© 2026 Puja Patel Ethnic Designs. All rights reserved.</p>
               <div className="flex gap-4">
                 <a href="#" className="hover:text-white">Instagram</a>
                 <a href="#" className="hover:text-white">Facebook</a>
                 <a href="#" className="hover:text-white">Pinterest</a>
               </div>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppFloat />
    </div>
  );
}
