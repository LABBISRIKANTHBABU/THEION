import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Brain, 
  Shield, 
  Cloud, 
  Layers, 
  TestTube, 
  Megaphone, 
  Code, 
  Monitor,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Brain,
    title: "Data & AI",
    description: "Unlock AI potential with predictive intelligence, generative tools, and autonomous agents to transform your business operations.",
  },
  {
    icon: Monitor,
    title: "Managed IT Services",
    description: "Digital transformation consulting with strategy and digital presence optimization for modern enterprises.",
  },
  {
    icon: Shield,
    title: "Cyber Security",
    description: "Comprehensive security consulting and digital support to protect your organization from evolving threats.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Seamless, secure cloud experiences that scale with your business needs and drive operational efficiency.",
  },
  {
    icon: Layers,
    title: "System Integrations",
    description: "Seamless backend and frontend integration services to unify your technology ecosystem.",
  },
  {
    icon: TestTube,
    title: "Testing",
    description: "Manual and automated QA services ensuring reliability, performance, and quality across all platforms.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "SEO, paid advertising, and content strategy to drive leads, visibility, and sustainable growth.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Secure, scalable websites and applications with exceptional UX focus and modern architecture.",
  },
];

const TheionDigital = () => {
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
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
              Theion Digital [SAAS]
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-4 mb-6">
              Innovative Consulting Solutions for{" "}
              <span className="text-gradient-gold">Theion Consulting</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive digital and IT services designed to transform your business 
              and drive sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background-secondary">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-premium p-8 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button className="flex items-center text-sm text-primary font-medium group-hover:underline">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.div>
              );
            })}
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contact us today to discuss how our digital solutions can help you achieve your goals.
            </p>
            <Link to="/contact-us">
              <Button className="btn-gold px-8 py-6 text-base rounded-full group">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TheionDigital;