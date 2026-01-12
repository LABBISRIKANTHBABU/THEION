import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutTeaser = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 bg-background-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A24D' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Mission Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
              About Theion Consulting
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-8 leading-tight">
              Our Mission
            </h2>
            
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
              Our mission at Theion Consulting is to empower organizations to achieve sustainable growth 
              by delivering practical business solutions, innovative technology consulting, and access to 
              skilled talent — built on strong partnerships, transparency, and measurable results.
            </p>

            <Link to="/about-us">
              <Button className="btn-outline-gold rounded-full px-6 py-5 group">
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          {/* Right: Abstract Gold Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] hidden lg:block"
          >
            {/* Animated Gold Lines */}
            <svg className="w-full h-full" viewBox="0 0 400 400">
              {[...Array(5)].map((_, i) => (
                <motion.path
                  key={i}
                  d={`M${50 + i * 30} 350 Q${200} ${300 - i * 40} ${350 - i * 30} ${50 + i * 20}`}
                  fill="none"
                  stroke="hsl(41, 52%, 54%)"
                  strokeWidth={2 - i * 0.3}
                  strokeOpacity={0.6 - i * 0.1}
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1.5, delay: i * 0.2, ease: "easeInOut" }}
                />
              ))}
              
              {/* Decorative Circles */}
              {[
                { cx: 100, cy: 300, r: 6 },
                { cx: 200, cy: 200, r: 8 },
                { cx: 300, cy: 100, r: 5 },
              ].map((circle, i) => (
                <motion.circle
                  key={i}
                  cx={circle.cx}
                  cy={circle.cy}
                  r={circle.r}
                  fill="hsl(41, 52%, 54%)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 0.8 } : {}}
                  transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
                />
              ))}
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;