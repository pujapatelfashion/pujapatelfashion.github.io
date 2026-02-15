import { motion } from "framer-motion";
import { Scissors, Ruler, Sparkles, Shirt, Heart, Clock, TrendingUp, ShieldCheck } from "lucide-react";
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

  const categories = [
    {
      title: "Traditional Blouses",
      description: "Custom-designed for the perfect silhouette. From padded bridal blouses to daily wear, we ensure your saree looks its best.",
      icon: <Sparkles className="h-6 w-6" />,
      image: embroidery,
      span: "md:col-span-2 md:row-span-1"
    },
    {
      title: "Suits & Salwars",
      description: "Elegant and comfortable designs for every occasion. Expert stitching for Anarkalis, Churidar, and straight suits.",
      icon: <Shirt className="h-6 w-6" />,
      image: tailoring,
      span: "md:col-span-1 md:row-span-2"
    },
    {
      title: "Saree Work",
      description: "Expert fall-pico, tassels, and border work to enhance the beauty of your favorite sarees.",
      icon: <Heart className="h-6 w-6" />,
      image: saree,
      span: "md:col-span-1 md:row-span-1"
    },
    {
      title: "Leggings & Pajamas",
      description: "Custom-fit bottom wear designed for comfort and durability. Available in all sizes and fabrics.",
      icon: <Ruler className="h-6 w-6" />,
      image: fusionWear,
      span: "md:col-span-1 md:row-span-1"
    }
  ];

  return (
    <section id="services" className="bg-background py-24 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-3 block font-sans text-sm font-bold uppercase tracking-widest text-primary">
            Services Portfolio
          </span>
          <h2 className="font-serif text-4xl font-medium text-foreground md:text-5xl">
            Perfection in Every Stitch
          </h2>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2 h-auto md:h-[700px]"
        >
          {/* Main Category: Blouses */}
          <motion.div variants={item} className="group relative md:col-span-2 md:row-span-1 overflow-hidden rounded-3xl border border-border">
            <img src={embroidery} alt="Traditional Blouses" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <div className="mb-4 h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl mb-2">Traditional Blouses</h3>
              <p className="text-sm text-white/80 max-w-md">Custom-designed for the perfect silhouette. From padded bridal blouses to daily wear, we ensure your saree looks its best.</p>
              <a href="https://wa.me/918595100460" className="mt-4 text-xs font-bold uppercase tracking-widest text-primary-foreground underline decoration-primary underline-offset-4">Inquire on WhatsApp</a>
            </div>
          </motion.div>

          {/* Category: Suits */}
          <motion.div variants={item} className="group relative md:col-span-1 md:row-span-2 overflow-hidden rounded-3xl border border-border">
            <img src={tailoring} alt="Suits & Salwars" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <div className="mb-4 h-10 w-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Shirt className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-2xl mb-2">Suits & Salwars</h3>
              <p className="text-sm text-white/80">Elegant and comfortable designs for every occasion. Expert stitching for Anarkalis, Churidar, and straight suits.</p>
              <a href="https://wa.me/918595100460" className="mt-4 text-xs font-bold uppercase tracking-widest text-primary-foreground underline decoration-primary underline-offset-4">Get a Quote</a>
            </div>
          </motion.div>

          {/* Category: Saree Work */}
          <motion.div variants={item} className="group relative md:col-span-1 md:row-span-1 overflow-hidden rounded-3xl border border-border">
            <img src={saree} alt="Saree Work" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
              <h3 className="font-serif text-xl mb-1">Intricate Saree Work</h3>
              <p className="text-xs text-white/70">Expert fall-pico, tassels, and border work.</p>
              <a href="https://wa.me/918595100460" className="mt-2 text-[10px] font-bold uppercase tracking-widest text-primary-foreground underline underline-offset-2">Book Service</a>
            </div>
          </motion.div>

          {/* Category: Leggings */}
          <motion.div variants={item} className="group relative md:col-span-1 md:row-span-1 overflow-hidden rounded-3xl border border-border">
            <img src={fusionWear} alt="Leggings & Pajamas" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
              <h3 className="font-serif text-xl mb-1">Leggings & Pajamas</h3>
              <p className="text-xs text-white/70">Custom-fit bottom wear for comfort.</p>
              <a href="https://wa.me/918595100460" className="mt-2 text-[10px] font-bold uppercase tracking-widest text-primary-foreground underline underline-offset-2">Order Now</a>
            </div>
          </motion.div>
        </motion.div>

        {/* Segment Specific Messaging */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="p-8 rounded-3xl bg-primary/5 border border-primary/10"
           >
             <div className="mb-4 h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
               <ShieldCheck className="h-6 w-6" />
             </div>
             <h4 className="font-serif text-xl mb-3">For Ghaziabad Families</h4>
             <p className="text-sm text-muted-foreground leading-relaxed">
               Focusing on <strong>Reliability</strong> and <strong>Traditional Aesthetics</strong>. Whether it's "Saj Dhaj" for Karwa Chauth or festive Diwali preparations, we ensure your outfits mirror our rich local culture with durable stitches.
             </p>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="p-8 rounded-3xl bg-secondary/5 border border-secondary/10"
           >
             <div className="mb-4 h-12 w-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
               <TrendingUp className="h-6 w-6" />
             </div>
             <h4 className="font-serif text-xl mb-3">For Students & Gen Z</h4>
             <p className="text-sm text-muted-foreground leading-relaxed">
               <strong>Affordable</strong> trending designs and <strong>Modern Alterations</strong>. Repurpose your old ethnic pieces into stylish new outfits that stand out in Ghaziabad's vibrant student community.
             </p>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="p-8 rounded-3xl bg-muted border border-border"
           >
             <div className="mb-4 h-12 w-12 rounded-2xl bg-foreground/10 flex items-center justify-center text-foreground">
               <Clock className="h-6 w-6" />
             </div>
             <h4 className="font-serif text-xl mb-3">For Busy Professionals</h4>
             <p className="text-sm text-muted-foreground leading-relaxed">
               <strong>Precision Fit</strong> and <strong>Timely Delivery</strong> for sophisticated workwear. Use our WhatsApp consultation to save time and get your outfits tailored without multiple visits.
             </p>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
