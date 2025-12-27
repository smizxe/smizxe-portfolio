
import { motion } from 'framer-motion';
import LeadForm from './LeadForm';
import ContactLinks from './ContactLinks';

export default function ContactForm() {

    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-transparent to-neutral-900/50 scroll-mt-0">
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
                >
                    <ContactLinks className="mt-12 border-t border-white/5 pt-8" />
                </motion.div>
            </div>
        </section>
    );
}
