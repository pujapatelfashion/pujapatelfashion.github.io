import { motion } from "framer-motion";
import pujaAbout from "@/assets/tailoring.jpg";

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
              <img src={pujaAbout} alt="Puja Patel at work" className="w-full h-full object-cover aspect-[4/5]" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            {/* Decorative background shape */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-0" />
            
            {/* Experience Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 -right-4 md:-right-10 bg-white p-6 rounded-2xl shadow-xl z-20 border border-border"
            >
              <div className="text-center">
                <span className="block text-4xl font-serif font-bold text-primary">15+</span>
                <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Years of Expertise</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              A Legacy of <br />
              <span className="italic text-secondary">Craftsmanship</span> in Ghaziabad
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded by <strong className="text-foreground">Puja Patel</strong>, our boutique is more than just a tailoring shop—it's a sanctuary for those who value the art of Indian ethnic wear. Based in the heart of Ghaziabad, Puja has dedicated her career to understanding the unique fashion needs of our local community.
              </p>
              <p>
                From housewives looking for durable, traditional aesthetics for local festivals like Karwa Chauth, to students seeking the latest trends and modern alterations, our mission is to provide <strong>Perfection in Every Stitch</strong>.
              </p>
              <p>
                We believe that every garment tells a story. Whether it's a bespoke bridal lehenga or a perfectly fitted daily-wear suit, we bring a level of precision and personal attention that builds lifelong trust with our clients.
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-8">
               <div>
                 <h4 className="font-serif text-xl font-bold text-foreground">Local Trust</h4>
                 <p className="text-sm">Serving 500+ families across NCR</p>
               </div>
               <div>
                 <h4 className="font-serif text-xl font-bold text-foreground">Fast Delivery</h4>
                 <p className="text-sm">Timely stitches for your events</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
