import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, Briefcase, Building2, ArrowRight } from "lucide-react";
import logoImg from "@/Gemini_Generated_Image_2uj6d92uj6d92uj6.png";

const GetStarted = () => {
    const roles = [
        {
            id: "student",
            title: "Student",
            description: "Access internships, learning resources, and career guidance.",
            icon: GraduationCap,
            link: "/auth/student",
            color: "from-blue-500/20 to-cyan-500/20",
            border: "hover:border-blue-500/50",
            text: "text-blue-400"
        },
        {
            id: "professional",
            title: "Professional",
            description: "Explore career opportunities and professional networking.",
            icon: Briefcase,
            link: "/auth/professional",
            color: "from-emerald-500/20 to-teal-500/20",
            border: "hover:border-emerald-500/50",
            text: "text-emerald-400"
        },
        {
            id: "client",
            title: "Client",
            description: "Hire top talent and find comprehensive business solutions.",
            icon: Building2,
            link: "/auth/client",
            color: "from-purple-500/20 to-pink-500/20",
            border: "hover:border-purple-500/50",
            text: "text-purple-400"
        }
    ];

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden p-6">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]" />
                <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 max-w-5xl w-full"
            >
                {/* Header */}
                <div className="text-center mb-16">
                    <Link to="/" className="inline-block mb-8">
                        <div className="w-20 h-20 mx-auto rounded-full bg-card border border-primary/20 flex items-center justify-center shadow-lg overflow-hidden">
                            <img
                                src={logoImg}
                                alt="Theion Consulting"
                                className="w-full h-full object-cover scale-150"
                            />
                        </div>
                    </Link>
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Join <span className="text-gradient-gold">Theion</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Select your role to get started with our tailored experience.
                    </p>
                </div>

                {/* Roles Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {roles.map((role, index) => {
                        const Icon = role.icon;
                        return (
                            <motion.div
                                key={role.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    to={role.link}
                                    className={`group relative block h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 transition-all duration-300 ${role.border} hover:shadow-lg`}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className={`w-14 h-14 rounded-xl bg-background/50 border border-border/30 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${role.text}`}>
                                            <Icon className="w-7 h-7" />
                                        </div>

                                        <h3 className="font-display text-xl font-bold text-foreground mb-3">
                                            {role.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                            {role.description}
                                        </p>

                                        <div className={`flex items-center text-sm font-semibold mt-auto ${role.text}`}>
                                            Continue <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="text-center mt-12">
                    <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Back to Home
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default GetStarted;
