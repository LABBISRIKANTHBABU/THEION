
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, User, Mail, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { auth } from "@/lib/firebase"; // Import auth
import { onAuthStateChanged } from "firebase/auth";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        details: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Pre-fill user data when modal opens or auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setFormData(prev => ({
                    ...prev,
                    name: user.displayName || prev.name,
                    email: user.email || prev.email
                }));
            }
        });
        return () => unsubscribe();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await fetch("https://formsubmit.co/ajax/Info@theionconsulting.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    _subject: `New Session Booking Request - ${formData.date}`,
                    name: formData.name,
                    email: formData.email,
                    booking_date: formData.date,
                    booking_time: formData.time,
                    details: formData.details,
                    _cc: formData.email, // Send a copy to the user
                    _template: "table",
                    _autoresponse: `Congratulations! Your session booking has been confirmed for ${formData.date} at ${formData.time}. We will contact you shortly with the meeting link.`
                }),
            });

            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                setFormData({ name: "", email: "", date: "", time: "", details: "" });
                onClose();
            }, 3000);

        } catch (error) {
            toast.error("Failed to submit booking. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg bg-card border border-primary/20 rounded-2xl p-6 shadow-2xl overflow-hidden"
                    >
                        {/* Close Button */}
                        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                            <X className="w-5 h-5" />
                        </button>

                        {isSuccess ? (
                            <div className="flex flex-col items-center justify-center py-10 text-center">
                                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4 text-green-500">
                                    <CheckCircle2 className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Booking Confirmed!</h3>
                                <p className="text-muted-foreground">We have received your request and sent a confirmation to your email.</p>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-2xl font-display font-bold mb-1">Book a Session</h2>
                                <p className="text-muted-foreground text-sm mb-6">Schedule a 1-on-1 video call with our consultants.</p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label>Your Name</Label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
                                                <Input
                                                    required
                                                    className="pl-9 bg-background/50"
                                                    placeholder="John Doe"
                                                    value={formData.name}
                                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Email Address</Label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
                                                <Input
                                                    required
                                                    type="email"
                                                    className="pl-9 bg-background/50"
                                                    placeholder="john@example.com"
                                                    value={formData.email}
                                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label>Preferred Date</Label>
                                            <div className="relative">
                                                <Calendar className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
                                                <Input
                                                    required
                                                    type="date"
                                                    className="pl-9 bg-background/50"
                                                    value={formData.date}
                                                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Preferred Time</Label>
                                            <div className="relative">
                                                <Clock className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
                                                <Input
                                                    required
                                                    type="time"
                                                    className="pl-9 bg-background/50"
                                                    value={formData.time}
                                                    onChange={e => setFormData({ ...formData, time: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full btn-gold mt-2"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Confirm Booking"}
                                    </Button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
