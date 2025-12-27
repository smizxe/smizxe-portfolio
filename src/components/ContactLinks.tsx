import { useState } from 'react';
import { Mail, MessageCircle, Facebook, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import zaloQr from '../assets/anh-zalo.jpg';
import { cn } from '../lib/utils'; // Assuming this exists or I'll just use template literals if not found, but it was in Footer.tsx

interface ContactLinksProps {
    className?: string;
}

export default function ContactLinks({ className }: ContactLinksProps) {
    const [isZaloOpen, setIsZaloOpen] = useState(false);

    return (
        <>
            <div className={cn("flex flex-wrap justify-center gap-6 md:gap-8 max-w-2xl mx-auto", className)}>
                <a href="tel:0388307551" className="text-secondary hover:text-green-400 transition-colors flex items-center gap-2 text-sm group">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-green-400/20 transition-colors">
                        <Phone width={14} />
                    </div>
                    <span className="hidden sm:inline">0388 307 551</span>
                </a>
                <a href="mailto:vuonghoanggiang0811@gmail.com" className="text-secondary hover:text-white transition-colors flex items-center gap-2 text-sm group">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                        <Mail width={14} />
                    </div>
                    <span className="hidden sm:inline">Email</span>
                </a>
                <button
                    onClick={() => setIsZaloOpen(true)}
                    className="text-secondary hover:text-blue-400 transition-colors flex items-center gap-2 text-sm group cursor-pointer bg-transparent border-none p-0"
                >
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-400/20 transition-colors">
                        <MessageCircle width={14} />
                    </div>
                    <span className="hidden sm:inline">Zalo</span>
                </button>
                <a href="https://www.facebook.com/smizxe/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-blue-600 transition-colors flex items-center gap-2 text-sm group">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                        <Facebook width={14} />
                    </div>
                    <span className="hidden sm:inline">Facebook</span>
                </a>
            </div>

            <AnimatePresence>
                {isZaloOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        onClick={() => setIsZaloOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-surface border border-white/10 rounded-xl p-6 max-w-sm w-full relative shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsZaloOpen(false)}
                                className="absolute top-4 right-4 text-secondary hover:text-white transition-colors"
                            >
                                <X width={20} />
                            </button>
                            <h3 className="text-xl font-medium text-white mb-4 text-center">Kết nối qua Zalo</h3>
                            <div className="flex justify-center mb-4">
                                <img src={zaloQr} alt="Zalo QR Code" className="w-full max-w-[280px] h-auto rounded-lg object-contain" />
                            </div>
                            <p className="text-center text-secondary text-sm">
                                Quét mã QR hoặc tìm số điện thoại:<br />
                                <span className="text-white font-medium select-all">0388 307 551</span>
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
