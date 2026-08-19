"use client";

import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/config/site";
import { scrollToSection } from "@/lib/scrollTo";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const handleNavigate = (href: string) => {
        onClose();
        setTimeout(() => {
            scrollToSection(href);
        }, 300);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-40 flex flex-col justify-between bg-black/95 px-8 py-24 backdrop-blur-2xl md:hidden"
                >
                    {/* Background subtle glow */}
                    <div
                        className="pointer-events-none absolute inset-0"
                        style={{
                            background:
                                "radial-gradient(circle at 50% 30%, rgba(215,193,138,.08), transparent 70%)"
                        }}
                    />

                    {/* Navigation list */}
                    <nav className="relative z-10 flex flex-col gap-5 pt-4">
                        {site.navigation.map((item, index) => (
                            <motion.button
                                key={item.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: 0.04 * index,
                                    duration: 0.35,
                                    ease: "easeOut"
                                }}
                                onClick={() => handleNavigate(item.href)}
                                className="flex items-center justify-between text-left text-xl font-light tracking-[0.18em] text-white/90 transition-colors hover:text-[#D7C18A]"
                            >
                                <span>{item.label}</span>
                                <span className="text-[10px] tracking-[0.3em] text-[#D7C18A]/60">
                                    0{index + 1}
                                </span>
                            </motion.button>
                        ))}
                    </nav>

                    {/* Footer info */}
                    <div className="relative z-10 border-t border-white/10 pt-6">
                        <p className="text-xs uppercase tracking-[0.35em] text-[#D7C18A]">
                            {site.origin.location}
                        </p>
                        <p className="mt-2 text-xs text-white/60">
                            {site.origin.ecosystem} · {site.origin.altitude}
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
