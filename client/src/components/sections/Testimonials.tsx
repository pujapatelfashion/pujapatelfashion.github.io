import { motion } from "framer-motion";
import { Star, MessageCircle, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import customer1 from "@/assets/customer1.jpg";

const testimonials = [
  {
    id: 1,
    name: "Anjali Sharma",
    role: "Housewife, Ghaziabad",
    content: "The fitting is absolutely perfect! I was worried about my daughter's wedding lehenga, but Puja Patel Designs delivered beyond my expectations.",
    rating: 5,
    image: customer1
  },
  {
    id: 2,
    name: "Riya Gupta",
    role: "Student, Noida",
    content: "Loved the fusion wear collection. It's trendy yet traditional. The bento grid layout of the website made it so easy to choose styles!",
    rating: 5,
    image: undefined
  },
  {
    id: 3,
    name: "Meera Verma",
    role: "Professional",
    content: "Finally a boutique that understands deadlines. Got my suit stitched in 2 days for an urgent function. Highly recommended!",
    rating: 4,
    image: undefined
  }
];

export function Testimonials() {
  return (
    <section className="bg-muted/30 py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
             <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">Social Proof</span>
             <h2 className="font-serif text-4xl md:text-5xl text-foreground">What Our Clients Say</h2>
          </div>
          <div className="mt-6 md:mt-0">
             <div className="flex -space-x-4">
               {[1,2,3,4].map((i) => (
                 <div key={i} className="h-12 w-12 rounded-full border-2 border-white bg-gray-200" />
               ))}
               <div className="h-12 w-12 rounded-full border-2 border-white bg-black text-white flex items-center justify-center text-xs font-bold">
                 50+
               </div>
             </div>
             <p className="text-sm text-muted-foreground mt-2 text-right">Happy Customers in Ghaziabad</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex gap-1 text-secondary mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < t.rating ? 'fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  
                  <p className="text-foreground/80 font-sans leading-relaxed flex-grow mb-6">
                    "{t.content}"
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <Avatar>
                      <AvatarImage src={t.image} />
                      <AvatarFallback>{t.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-serif font-bold text-foreground">{t.name}</h4>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Video Testimonial Placeholder */}
        <div className="mt-16 rounded-3xl overflow-hidden bg-black relative aspect-video md:aspect-[21/9] group cursor-pointer">
           <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 mix-blend-multiply opacity-60" />
           <img src={customer1} className="w-full h-full object-cover opacity-50" alt="Video cover" />
           <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="h-20 w-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 border border-white/40"
              >
                <Play className="h-8 w-8 fill-white text-white ml-1" />
              </motion.div>
              <h3 className="font-serif text-3xl md:text-4xl mb-2">Watch Their Stories</h3>
              <p className="text-white/80 max-w-xl">See how we transform fabrics into memories. Real stories from real customers.</p>
           </div>
        </div>
      </div>
    </section>
  );
}
