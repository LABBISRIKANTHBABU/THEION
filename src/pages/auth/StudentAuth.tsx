import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, ArrowLeft, Mail, Lock, Loader2 } from "lucide-react";
import logoImg from "@/Gemini_Generated_Image_86xpwe86xpwe86xp.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const StudentAuth = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => setIsLoading(false), 2000);
    };

    const handleGoogleSignIn = () => {
        // Implement Google Sign In logic here
        console.log("Google Sign In clicked");
    };

    return (
        <div className="min-h-screen bg-background flex flex-col md:flex-row relative">
            {/* Left Panel - Branding */}
            <div className="hidden md:flex flex-col justify-between w-1/2 bg-surface p-12 relative overflow-hidden border-r border-border/50">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />

                <div className="relative z-10">
                    <Link to="/" className="inline-block mb-8">
                        <div className="w-16 h-16 rounded-full bg-card border border-primary/20 flex items-center justify-center shadow-lg overflow-hidden">
                            <img
                                src={logoImg}
                                alt="Theion Consulting"
                                className="w-full h-full object-cover scale-150"
                            />
                        </div>
                    </Link>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        Student Portal
                    </div>
                    <h1 className="font-display text-4xl font-bold text-foreground mb-4">
                        Kickstart Your Career
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-md">
                        Theion Recruits connects you with premier internships, mentorships, and entry-level opportunities at top-tier companies.
                    </p>
                </div>

                <div className="relative z-10">
                    <blockquote className="text-muted-foreground border-l-2 border-primary/50 pl-4 py-1 italic">
                        "The perfect launchpad for ambitious students looking to make their mark."
                    </blockquote>
                </div>
            </div>

            {/* Right Panel - Auth Form */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 relative">
                <div className="w-full max-w-md">
                    <Link to="/get-started" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Role Selection
                    </Link>

                    <div className="mb-8">
                        <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                            {isLogin ? "Welcome back" : "Create an account"}
                        </h2>
                        <p className="text-muted-foreground">
                            {isLogin ? "Enter your credentials to access your account" : "Sign up to start your journey"}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <Button
                            variant="outline"
                            className="w-full h-12 relative font-medium"
                            onClick={handleGoogleSignIn}
                        >
                            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    fill="#EA4335"
                                />
                            </svg>
                            Sign in with Google
                        </Button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-border/50" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {!isLogin && (
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First name</Label>
                                        <Input id="firstName" placeholder="John" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last name</Label>
                                        <Input id="lastName" placeholder="Doe" required />
                                    </div>
                                </div>
                            )}
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input id="email" type="email" placeholder="name@example.com" className="pl-10" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input id="password" type="password" placeholder="••••••••" className="pl-10" required />
                                </div>
                            </div>

                            <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Please wait
                                    </>
                                ) : (
                                    isLogin ? "Sign In" : "Create Account"
                                )}
                            </Button>
                        </form>

                        <div className="text-center text-sm">
                            <span className="text-muted-foreground">
                                {isLogin ? "Don't have an account? " : "Already have an account? "}
                            </span>
                            <button
                                type="button"
                                className="font-semibold text-primary hover:underline"
                                onClick={() => setIsLogin(!isLogin)}
                            >
                                {isLogin ? "Sign up" : "Sign in"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentAuth;
