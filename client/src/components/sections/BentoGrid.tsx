import { motion } from "framer-motion";
import { Scissors, Ruler, Sparkles, Shirt } from "lucide-react";
import lehenga from "@/assets/lehenga.jpg";
import embroidery from "@/assets/embroidery.jpg";
import saree from "@/assets/saree.jpg";
import tailoring from "@/assets/tailoring.jpg";
import fusionWear from "@/assets/fusion-wear.jpg";

export function BentoGrid() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-background py-24 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-3 block font-sans text-sm font-bold uppercase tracking-widest text-primary">
            Our Expertise
          </span>
          <h2 className="font-serif text-4xl font-medium text-foreground md:text-5xl">
            Curated Collections
          </h2>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-3 h-[1200px] md:h-[800px]"
        >
          {/* Main Feature - Bridal */}
          <motion.div variants={item} className="group relative col-span-1 row-span-1 md:col-span-2 md:row-span-2 overflow-hidden rounded-3xl">
            <img src={lehenga} alt="Bridal Lehenga" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="font-serif text-2xl text-white md:text-3xl">Bridal Couture</h3>
              <p className="mt-2 text-sm text-white/80">Handcrafted masterpieces for your special day</p>
            </div>
          </motion.div>

          {/* Service - Custom Tailoring */}
          <motion.div variants={item} className="group relative col-span-1 md:col-span-1 md:row-span-1 overflow-hidden rounded-3xl bg-secondary/10 p-6 flex flex-col justify-between border border-secondary/20">
            <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary-foreground mb-4">
              <Scissors className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium text-foreground">Custom Tailoring</h3>
              <p className="mt-2 text-sm text-muted-foreground">Perfect fit guaranteed with precise measurements.</p>
            </div>
          </motion.div>

          {/* Image - Embroidery Detail */}
          <motion.div variants={item} className="group relative col-span-1 md:col-span-1 md:row-span-1 overflow-hidden rounded-3xl">
             <img src={embroidery} alt="Intricate Embroidery" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
             <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
               Handwork
             </div>
          </motion.div>

          {/* Image - Fusion Wear */}
          <motion.div variants={item} className="group relative col-span-1 md:col-span-1 md:row-span-2 overflow-hidden rounded-3xl">
            <img src={fusionWear} alt="Fusion Wear" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
             <div className="absolute bottom-6 left-6">
              <h3 className="font-serif text-xl text-white">Indo-Western Fusion</h3>
              <p className="text-xs text-white/70 mt-1">Contemporary silhouettes</p>
            </div>
          </motion.div>

          {/* Service - Alterations */}
          <motion.div variants={item} className="group relative col-span-1 md:col-span-1 md:row-span-1 overflow-hidden rounded-3xl bg-white border border-border p-6 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-md transition-shadow">
             <Ruler className="h-8 w-8 text-primary mb-3" />
             <h3 className="font-serif text-lg font-medium">Expert Alterations</h3>
             <p className="text-xs text-muted-foreground mt-1">Revive your favorite outfits</p>
          </motion.div>

           {/* Image - Saree */}
           <motion.div variants={item} className="group relative col-span-1 md:col-span-2 md:row-span-1 overflow-hidden rounded-3xl">
            <img src={saree} alt="Designer Sarees" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-black/30" />
             <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-serif text-3xl italic text-white mix-blend-overlay">The Saree Collection</h3>
             </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
