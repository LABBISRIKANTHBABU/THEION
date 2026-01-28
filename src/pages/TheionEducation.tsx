import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/services/theon-education.jpg";



const features = [
  "Expert Industry Instructors",
  "Hands-on Projects",
  "Flexible Learning Options",
  "Career Support Services",
  "Industry Partnerships",
  "Certification Programs"
];

const TheonEducation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div className="container relative px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
                Learning & Development
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mt-4 mb-6">
                Theion <span className="text-gradient-gold">Education</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Empowering professionals with world-class training and skill development
                programs designed to accelerate career growth and organizational success.
              </p>
              <Link to="/contact-us">
                <Button className="btn-gold rounded-full px-8 py-6">
                  Explore Programs <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
                <img
                  src={heroImg}
                  alt="Theion Education Programs"
                  className="w-full h-80 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Education Opportunities */}
      <section className="py-20 bg-background-secondary">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
              Global Education Opportunities
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-4">
              Study UG & PG Programs in Top Destinations
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Explore world-class university programs in leading education destinations. We guide you through the entire process from university selection to visa approval.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "United States", code: "us" },
              { name: "Canada", code: "ca" },
              { name: "United Kingdom", code: "gb" },
              { name: "Europe", code: "eu" }, // Represents Europe
              { name: "Middle East", code: "ae" }, // Using UAE as proxy for Middle East hub
              { name: "China", code: "cn" },
              { name: "Japan", code: "jp" },
              { name: "Australia", code: "au" },
              { name: "New Zealand", code: "nz" },
            ].map((country, index) => (
              <Link to="/contact-us" key={country.code}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="card-premium p-6 flex flex-col items-center justify-center gap-4 group cursor-pointer h-full border border-primary/10 hover:border-primary/40 bg-card hover:bg-card/80 transition-all duration-300 rounded-xl shadow-lg hover:shadow-primary/10"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-background shadow-md group-hover:shadow-lg transition-shadow duration-300 relative">
                    <img
                      src={`https://flagcdn.com/${country.code}.svg`}
                      alt={`${country.name} Flag`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {country.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">UG & PG Programs</p>
                  </div>
                  <span className="text-xs text-primary/60 uppercase tracking-widest font-medium group-hover:text-primary transition-colors mt-2">
                    Enquire Now
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-4">
              Our Advantages
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border/50 text-center hover:border-primary/50 transition-all duration-300"
              >
                <span className="text-foreground font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="py-20 bg-background-secondary">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
                Target Audience
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mt-4 mb-6">
                Who Is It For?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our education programs cater to students looking to kickstart their careers,
                professionals seeking to upskill, and organizations wanting to develop their
                workforce capabilities for sustained competitive advantage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Start Your Learning Journey
            </h2>
            <p className="text-muted-foreground mb-8">
              Invest in your future with our comprehensive training programs.
            </p>
            <Link to="/contact-us">
              <Button className="btn-gold rounded-full px-10 py-6 text-lg">
                Enroll Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TheonEducation;
