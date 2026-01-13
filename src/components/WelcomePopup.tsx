
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface WelcomePopupProps {
    isOpen: boolean;
    onClose: () => void;
    userName?: string | null;
}

const WelcomePopup = ({ isOpen, onClose, userName }: WelcomePopupProps) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
                navigate("/");
            }, 3000); // Auto close after 3 seconds
            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose, navigate]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Popup Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20, rotateX: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20, rotateX: -10 }}
                        transition={{ type: "spring", duration: 0.6 }}
                        className="relative w-full max-w-sm bg-card/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 shadow-2xl text-center overflow-hidden perspective-[1000px]"
                    >
                        {/* Decorative glow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/20 blur-[50px] rounded-full" />

                        <div className="relative z-10 flex flex-col items-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                                className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary to-primary/50 flex items-center justify-center mb-4 shadow-lg shadow-primary/20"
                            >
                                <CheckCircle2 className="w-8 h-8 text-black" />
                            </motion.div>

                            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                                Welcome to Theion
                            </h2>
                            <p className="text-muted-foreground">
                                Glad to have you with us{userName ? `, ${userName}` : ""}! <br />
                                Redirecting you to home...
                            </p>
                        </div>

                        {/* Progress Bar */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 3, ease: "linear" }}
                            className="absolute bottom-0 left-0 h-1 bg-primary"
                        />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default WelcomePopup;
