import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Luxury Indian Ethnic Wear"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="h-[1px] w-12 bg-primary md:w-20" />
            <span className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
              Est. 2026 • Ghaziabad
            </span>
          </motion.div>

          <h1 className="mb-6 font-serif text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl">
            Puja Patel <br />
            <span className="text-primary italic">Ethnic Designs</span>
          </h1>

          <p className="mb-8 max-w-lg font-sans text-lg font-light leading-relaxed text-white/80 md:text-xl">
            Where tradition meets modern sophistication. Bespoke tailoring and
            exclusive ethnic wear crafted with perfection in every stitch.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button 
              size="lg" 
              className="group h-14 bg-white px-8 text-black hover:bg-primary hover:text-white font-medium tracking-wide transition-all duration-300"
            >
              Explore Collection
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="h-14 border-white/30 bg-white/5 px-8 text-white backdrop-blur-md hover:bg-white/20 hover:border-white/50"
            >
              Book Consultation
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest text-white/60">Scroll</span>
          <div className="h-12 w-[1px] bg-gradient-to-b from-white to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
