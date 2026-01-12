import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Partner logos represented as styled text blocks (placeholder for actual logos)
const partners = [
  "Partner 1", "Partner 2", "Partner 3", "Partner 4",
  "Partner 5", "Partner 6", "Partner 7", "Partner 8",
  "Partner 9", "Partner 10", "Partner 11", "Partner 12",
];

const Clientele = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial" />
        <div className="container relative px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
              Clientele
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-foreground mt-4 mb-6">
              Our <span className="text-gradient-gold">Partners</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Trusted by leading organizations across industries worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-background-secondary">
        <div className="container px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-[3/2] bg-card border border-border/50 rounded-xl flex items-center justify-center p-8 group cursor-pointer transition-all duration-500 hover:border-primary/30"
              >
                {/* Placeholder for partner logo */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-background-secondary mx-auto mb-3 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                      <span className="font-display text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300">
                        {partner.charAt(8) || "P"}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {partner}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground mb-4">
              Want to become a partner?
            </p>
            <a 
              href="/contact-us" 
              className="text-primary hover:underline font-medium"
            >
              Get in touch with us →
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clientele;