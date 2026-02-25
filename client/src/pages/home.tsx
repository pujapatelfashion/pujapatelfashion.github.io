import { motion, useScroll, useTransform } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg border-b border-border py-2 shadow-sm' : 'bg-transparent py-4'}`}>
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <span className={`font-serif text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-foreground' : 'text-white'}`}>
            Puja Patel
          </span>
          <div className={`hidden md:flex gap-8 text-sm font-semibold transition-colors duration-300 ${isScrolled ? 'text-foreground/80' : 'text-white/90'}`}>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant={isScrolled ? "default" : "outline"} size="sm" className={`hidden md:flex ${!isScrolled && 'border-white text-white hover:bg-white hover:text-black'}`} asChild>
              <a href="https://wa.me/918595100460">Book Appointment</a>
            </Button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <BentoGrid />
        <Testimonials />
        
        {/* Footer CTA */}
        <section className="bg-foreground py-20 px-6 text-center text-white">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 font-serif text-4xl md:text-5xl">Ready to Design Your Dream Outfit?</h2>
            <p className="mb-8 text-white/60">
              Visit our boutique in Ghaziabad or start a conversation on WhatsApp.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-white/90" asChild>
              <a href="https://wa.me/918595100460">Start a Conversation</a>
            </Button>
            <div className="mt-12 pt-12 border-t border-white/10 text-xs text-white/40 flex flex-col md:flex-row justify-between items-center gap-4">
               <p>© 2026 Puja Patel Ethnic Designs. All rights reserved.</p>
               <div className="flex gap-4">
                 {/* <a href="#" className="hover:text-white">Instagram</a>
                 <a href="#" className="hover:text-white">Facebook</a> */}
                 <p>Get In Touch</p>
                 1150, Vevekanand Nagar, Ghaziabad, Uttar Pradesh 201001
               </div>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppFloat />
    </div>
  );
}
