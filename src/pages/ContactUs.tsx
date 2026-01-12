import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Linkedin, Twitter, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Whitechapel, London, UK",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+919912245345",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Info@theionconsulting.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "09:00 am – 05:00 pm",
  },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:info@theionconsulting.com", label: "Email" },
];

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleClear = () => {
    setFormData({ name: "", email: "", message: "" });
  };

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
              Contact Us
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-foreground mt-4 mb-6">
              Connect with us <span className="text-gradient-gold">Now!</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Contact us for an initial call to understand your business requirements
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background-secondary">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-2xl font-semibold text-foreground mb-8">
                Theion Consulting
              </h2>

              <div className="space-y-6 mb-10">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-card border border-border/50 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">
                          {item.label}
                        </span>
                        <p className="text-foreground font-medium">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919912245345"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-10"
              >
                <Button className="btn-gold rounded-full px-6 py-5 group">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Message us on WhatsApp
                </Button>
              </a>

              {/* Social Links */}
              <div>
                <h3 className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="w-11 h-11 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                        whileHover={{ y: -2 }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12 bg-background border-border/50 text-foreground focus:border-primary focus:ring-primary/20"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 bg-background border-border/50 text-foreground focus:border-primary focus:ring-primary/20"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-[150px] bg-background border-border/50 text-foreground focus:border-primary focus:ring-primary/20 resize-none"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  {/* reCAPTCHA Notice */}
                  <p className="text-xs text-muted-foreground">
                    This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                  </p>

                  <div className="flex gap-4 pt-2">
                    <Button
                      type="submit"
                      className="btn-gold flex-1 py-6 rounded-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      className="btn-outline-gold py-6 rounded-full px-8"
                      onClick={handleClear}
                    >
                      Clear
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;