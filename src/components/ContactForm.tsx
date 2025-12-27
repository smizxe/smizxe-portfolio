
import { Mail, MessageCircle, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import LeadForm from './LeadForm';

export default function ContactForm() {

    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-transparent to-neutral-900/50">
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6">
                        Bạn cần Web/App trọn gói<br />với chi phí tốt nhất?
                    </h2>
                    <p className="text-secondary text-lg font-light">
                        Để lại thông tin, Giang sẽ liên hệ tư vấn giải pháp tối ưu cho bạn ngay.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <LeadForm />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center gap-8 mt-12 border-t border-white/5 pt-8 max-w-lg mx-auto"
                >
                    <a href="mailto:contact@vuonghoanggiang.com" className="text-secondary hover:text-white transition-colors flex items-center gap-2 text-sm group">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                            <Mail width={14} />
                        </div>
                        <span className="hidden sm:inline">Email</span>
                    </a>
                    <a href="#" className="text-secondary hover:text-blue-400 transition-colors flex items-center gap-2 text-sm group">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-400/20 transition-colors">
                            <MessageCircle width={14} />
                        </div>
                        <span className="hidden sm:inline">Zalo</span>
                    </a>
                    <a href="#" className="text-secondary hover:text-blue-600 transition-colors flex items-center gap-2 text-sm group">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                            <Facebook width={14} />
                        </div>
                        <span className="hidden sm:inline">Facebook</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
