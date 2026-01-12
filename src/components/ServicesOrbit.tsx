import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Cpu,
  Users,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import logoImg from "@/Gemini_Generated_Image_86xpwe86xpwe86xp.png";

const services = [
  {
    id: "digital",
    name: "Theion Digital",
    description: "Cutting-edge software solutions and digital transformation.",
    icon: Monitor,
    link: "/theion-digital"
  },
  {
    id: "technologies",
    name: "Theion Technologies",
    description: "Enterprise technology consulting and infrastructure.",
    icon: Cpu,
    link: "/theion-technologies"
  },
  {
    id: "recruits",
    name: "Theion Recruits",
    description: "Premium talent acquisition and workforce solutions.",
    icon: Users,
    link: "/theion-recruits"
  },
];

const DottedRing = () => {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
      <svg className="w-[600px] h-[600px] animate-spin-slow" viewBox="0 0 100 100" style={{ animationDuration: '60s' }}>
        {/* Outer dotted ring */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="1 3"
          className="text-primary/30"
        />
        {/* Inner solid thin ring */}
        <circle
          cx="50"
          cy="50"
          r="36"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.2"
          className="text-primary/10"
        />
      </svg>
    </div>
  );
};

const ServicesOrbit = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(null);
  const [tooltipSide, setTooltipSide] = useState<'left' | 'right'>('right');

  // Dynamic radius based on screen width would be ideal, but for CSS-in-JS simple variables with tailwind is tricky 
  // without a resize listener or CSS variable. 
  // We'll use a responsive container and CSS transforms, but the x/y dist is calculated in JS.
  // To make it responsive simpler: We'll stick to a radius that fits mobile (e.g. 140px) and scale up, 
  // or use a resize listener. A resize listener is safer for maintaining the circle.

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1000);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const orbitRadius = isMobile ? 130 : 210; // Mobile vs Desktop radius

  const handleMouseEnter = (e: React.MouseEvent, serviceId: string) => {
    if (!isMobile) {
      setIsHovered(true);
      setActiveService(serviceId);

      const rect = e.currentTarget.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      if (rect.left + rect.width / 2 < viewportWidth / 2) {
        setTooltipSide('left');
      } else {
        setTooltipSide('right');
      }
    }
  };

  const handleServiceClick = (e: React.MouseEvent | React.TouchEvent, serviceId: string) => {
    // For mobile, clicking sets the active service
    if (isMobile) {
      if (activeService === serviceId) {
        // If already active, let the link work (or toggle off if desired, but link is better)
        return;
      } else {
        e.preventDefault(); // Prevent navigation on first tap if we want to just show label first
        setActiveService(serviceId);
      }
    }
  };

  return (
    <section className="relative py-12 md:py-24 overflow-hidden bg-background">
      {/* Section Header */}
      <div className="container px-6 mb-8 md:mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
            Our Expertise
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mt-4">
            Comprehensive Solutions
          </h2>
        </motion.div>
      </div>

      {/* Orbit View - Visible on ALL screens now */}
      <div className="flex flex-col relative items-center justify-center h-[400px] md:h-[600px] w-full max-w-[800px] mx-auto perspective-[1000px]">
        {/* Center Static Logo */}
        <div className="absolute z-20 w-32 h-32 md:w-48 md:h-48 rounded-full bg-card border border-primary/20 flex items-center justify-center shadow-2xl shadow-black/80">
          <div className="absolute inset-0 rounded-full border border-primary/10 animate-pulse-glow" />
          <img
            src={logoImg}
            alt="Theion Consulting Logo"
            className="w-full h-full object-cover rounded-full p-2"
          />
        </div>

        {/* Mobile Central Active Service Label */}
        {/* Only visible on mobile, positioned below the logo or overlaying */}
        <AnimatePresence>
          {isMobile && activeService && (
            <div className="absolute z-50 pointer-events-none flex items-center justify-center w-full top-1/2 mt-20"> {/* Positioned nicely below logo center */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-black/80 backdrop-blur-md border border-primary/30 rounded-full px-6 py-2 shadow-xl"
              >
                <span className="text-primary font-display font-semibold text-sm tracking-wide">
                  {services.find(s => s.id === activeService)?.name}
                </span>
              </motion.div>
            </div>
          )}
        </AnimatePresence>


        {/* Rotating Orbit Container */}
        <div
          className={`absolute inset-0 w-full h-full flex items-center justify-center animate-orbit ${isHovered || (isMobile && activeService) ? 'paused' : ''}`}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            // Calculate position for 3 items: 0, 120, 240 degrees
            const angleDeg = (index * 360) / services.length;
            const angleRad = (angleDeg * Math.PI) / 180;

            const x = Math.cos(angleRad) * orbitRadius;
            const y = Math.sin(angleRad) * orbitRadius;

            return (
              <div
                key={service.id}
                className="absolute flex items-center justify-center"
                style={{
                  transform: `translate(${x}px, ${y}px)`
                }}
              >
                {/* Counter-Rotating Node to keep it upright */}
                <div className={`animate-counter-orbit ${isHovered || (isMobile && activeService) ? 'paused' : ''}`}>
                  <Link
                    to={service.link}
                    className="relative group block"
                    onClick={(e) => handleServiceClick(e, service.id)}
                    onMouseEnter={(e) => handleMouseEnter(e, service.id)}
                    onMouseLeave={() => {
                      if (!isMobile) {
                        setIsHovered(false);
                        setActiveService(null);
                      }
                    }}
                  >
                    {/* Service Node Circle */}
                    <motion.div
                      animate={{
                        scale: activeService === service.id ? 1.2 : 1,
                        borderColor: activeService === service.id ? "hsl(41 52% 54%)" : "rgba(255,255,255,0.1)",
                        backgroundColor: activeService === service.id ? "hsl(0 0% 8%)" : "rgba(10,10,10,0.8)"
                      }}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full border backdrop-blur-md flex flex-col items-center justify-center relative z-30 transition-shadow duration-300"
                      style={{
                        boxShadow: activeService === service.id ? "0 0 30px -5px hsl(41 52% 54% / 0.4)" : "none"
                      }}
                    >
                      <Icon className={`w-6 h-6 md:w-7 md:h-7 mb-1.5 transition-colors duration-300 ${activeService === service.id ? "text-primary" : "text-muted-foreground"}`} />
                    </motion.div>

                    {/* Tooltip Label Panel - DESKTOP ONLY */}
                    <AnimatePresence>
                      {activeService === service.id && !isMobile && (
                        <motion.div
                          initial={{ opacity: 0, x: tooltipSide === 'left' ? -20 : 20, scale: 0.9 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: tooltipSide === 'left' ? -10 : 10, scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute top-1/2 -translate-y-1/2 w-72 z-40 ${tooltipSide === 'left'
                            ? "right-full mr-6"
                            : "left-full ml-6"
                            }`}
                        >
                          <div className="bg-popover/95 backdrop-blur-xl border border-primary/30 rounded-xl p-5 shadow-2xl relative">
                            {/* Connector Line */}
                            <div className={`absolute top-1/2 -translate-y-1/2 w-6 h-[1px] bg-primary/50 ${tooltipSide === 'left' ? "left-full" : "right-full"
                              }`} />
                            <div className={`absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary ${tooltipSide === 'left' ? "left-full -ml-1" : "right-full -mr-1"
                              }`} />

                            <h3 className="font-display font-semibold text-primary text-lg mb-2">{service.name}</h3>
                            <p className="text-xs text-muted-foreground leading-relaxed mb-3">{service.description}</p>
                            <div className="text-[10px] text-primary uppercase tracking-widest font-bold flex items-center gap-1.5 pt-2 border-t border-white/5">
                              View Details <ArrowRight className="w-3 h-3" />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOrbit;
