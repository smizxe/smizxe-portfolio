
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowDownRight, Layers, Cpu, Lightbulb, Search, Zap,
    HeartHandshake, Monitor, Check, Bot, ArrowUpRight,
    Users, BarChart2, Calendar, Smartphone, X, Menu
} from 'lucide-react';
import avatar from './assets/smizxe-chu-tich.jpg';

import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import MinimalWorkflow from './components/MinimalWorkflow';
import LeadForm from './components/LeadForm';
import ContactLinks from './components/ContactLinks';

function App() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="bg-background text-primary font-sans antialiased selection:bg-white/20 selection:text-white min-h-screen">

            {/* Background Grid Effect */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.07] bg-grid bg-grid-pattern"></div>

            {/* Navbar */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md"
            >
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <a href="#" className="flex items-center gap-3 group">
                        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="yangai" className="h-14 w-auto object-contain group-hover:opacity-80 transition-opacity" />
                        <span className="text-sm tracking-widest font-medium uppercase text-white/90 group-hover:text-white transition-colors hidden sm:block pt-1">
                            Vương Hoàng Giang <span className="opacity-50 normal-case tracking-normal">(yangai)</span>
                        </span>
                    </a>
                    <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-secondary">
                        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">Giới thiệu</a>
                        <a href="#services" onClick={(e) => handleScroll(e, 'services')} className="hover:text-white transition-colors">Dịch vụ</a>
                        <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:text-white transition-colors">Dự án</a>
                        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="px-4 py-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                            Liên hệ
                        </a>
                        <a href="tel:0388307551" className="hover:text-white transition-colors">
                            0388 307 551
                        </a>
                    </div>
                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu width={24} />
                    </button>
                </div>
            </motion.nav >

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-8"
                    >
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors"
                        >
                            <X width={32} />
                        </button>

                        <nav className="flex flex-col items-center gap-8 text-xl font-medium">
                            <a href="#" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-white/70 hover:text-white transition-colors">Giới thiệu</a>
                            <a href="#services" onClick={(e) => handleScroll(e, 'services')} className="text-white/70 hover:text-white transition-colors">Dịch vụ</a>
                            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="text-white/70 hover:text-white transition-colors">Dự án</a>
                            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-emerald-400 hover:text-emerald-300 transition-colors">Liên hệ</a>
                        </nav>

                        <div className="mt-12 pt-12 border-t border-white/10 w-full max-w-xs text-center space-y-6">
                            <p className="text-secondary text-sm">Kết nối trực tiếp</p>
                            <a href="tel:0388307551" className="block text-2xl font-light text-white">0388 307 551</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <main className="relative z-10 pt-24 pb-16 md:pt-36 md:pb-24 px-6 overflow-hidden">
                <div className="max-w-6xl mx-auto relative">

                    {/* Abstract Deco Element */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none mix-blend-screen"></div>
                    <div className="absolute top-40 -left-20 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none mix-blend-screen"></div>

                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex-1 text-center md:text-left"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs tracking-wide text-secondary mb-8">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                Sẵn sàng cho dự án mới
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-white leading-[1.1] mb-8 text-glow">
                                Xây dựng Website & <br className="hidden md:block" />
                                <span className="text-white/60">Mobile App chất lượng cao,</span> <br />
                                tối ưu chi phí vận hành.
                            </h1>

                            <p className="text-base md:text-lg text-secondary font-light max-w-2xl leading-relaxed mb-10 md:pr-10 mx-auto md:mx-0">
                                Tôi là Vương Hoàng Giang (yangai) – Fullstack Developer. Tôi mang đến giải pháp Website và Mobile App trọn gói: từ tư vấn, thiết kế đến lập trình, với mức phí khởi điểm hợp lý và cam kết đồng hành dài hạn.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                                <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="w-full sm:w-auto px-6 py-3 bg-white text-black text-sm font-medium rounded hover:bg-white/90 transition-colors flex items-center justify-center gap-2">
                                    Xem dự án đã thực hiện
                                    <ArrowDownRight width={16} strokeWidth={2} />
                                </a>
                                <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="w-full sm:w-auto px-6 py-3 border border-white/10 text-white text-sm font-medium rounded hover:bg-white/5 transition-colors text-center">
                                    Liên hệ trao đổi
                                </a>
                            </div>
                        </motion.div>

                        {/* User Image Area */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex-1 relative flex justify-center md:justify-end"
                        >
                            <div className="relative w-64 h-80 md:w-80 md:h-[450px] rounded-2xl overflow-hidden border-4 border-white/5 shadow-2xl shadow-indigo-500/20">
                                <img
                                    src={avatar}
                                    alt="Vương Hoàng Giang"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                            </div>
                            {/* Deco circles around image */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full -z-10 animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-white/5 rounded-full -z-10 animate-[spin_15s_linear_infinite_reverse]"></div>
                        </motion.div>
                    </div>

                    {/* Quick Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-16 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs md:text-sm text-secondary"
                    >
                        <div className="flex items-center gap-3 justify-start">
                            <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-white shrink-0">
                                <Layers width={16} strokeWidth={1.5} />
                            </div>
                            <span>Xây dựng trọn gói<br />Web & Mobile App</span>
                        </div>
                        <div className="flex items-center gap-3 justify-start">
                            <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-white shrink-0">
                                <Cpu width={16} strokeWidth={1.5} />
                            </div>
                            <span>Chi phí tối ưu,<br />chất lượng cam kết</span>
                        </div>
                        <div className="flex items-center gap-3 justify-start">
                            <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-white shrink-0">
                                <Lightbulb width={16} strokeWidth={1.5} />
                            </div>
                            <span>Hỗ trợ lâu dài,<br />không bỏ dở dự án</span>
                        </div>
                    </motion.div>

                    {/* Quick Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-16"
                    >
                        <LeadForm
                            className="max-w-3xl mx-auto"
                            title="Xây dựng nền tảng công nghệ vững chắc ngay hôm nay"
                            description="Chia sẻ ý tưởng hoặc vấn đề bạn đang gặp phải. Giang sẽ phân tích và đề xuất giải pháp Web/App tối ưu chi phí & hiệu quả nhất cho riêng bạn."
                        />
                        <ContactLinks className="mt-8" />
                    </motion.div>
                </div>
            </main>

            {/* Why Choose Me Section */}
            <section className="py-20 bg-surface border-y border-white/5 relative">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="md:sticky md:top-32"
                        >
                            <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">Tại sao nên chọn Yangai?</h2>
                            <p className="text-secondary font-light text-sm md:text-base leading-relaxed mb-6">
                                Tôi tập trung xây giải pháp có thể sử dụng lâu dài, bền vững và dễ dàng mở rộng, không phải sản phẩm "mì ăn liền" làm cho xong.
                            </p>
                            <div className="h-px w-20 bg-white/20"></div>
                        </motion.div>

                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                whileHover={{ scale: 1.02 }}
                                className="group hover:bg-white/5 p-6 rounded-lg transition-all duration-300 border border-transparent hover:border-white/5"
                            >
                                <Search className="text-white mb-4" width={24} strokeWidth={1.5} />
                                <h3 className="text-lg font-medium text-white mb-2">Chi phí hợp lý - Chất lượng cao</h3>
                                <p className="text-sm text-secondary leading-relaxed">Bạn không cần ngân sách "khủng" để có sản phẩm công nghệ xịn. Tôi tối ưu quy trình để mang lại mức giá cạnh tranh nhất mà vẫn đảm bảo hiệu năng và thẩm mỹ.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="group hover:bg-white/5 p-6 rounded-lg transition-all duration-300 border border-transparent hover:border-white/5"
                            >
                                <Zap className="text-white mb-4" width={24} strokeWidth={1.5} />
                                <h3 className="text-lg font-medium text-white mb-2">Đa nền tảng: Web & App</h3>
                                <p className="text-sm text-secondary leading-relaxed">Đáp ứng mọi nhu cầu số hoá. Từ Website giới thiệu, Landing Page bán hàng đến Mobile App (iOS/Android) mượt mà.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                whileHover={{ scale: 1.02 }}
                                className="group hover:bg-white/5 p-6 rounded-lg transition-all duration-300 border border-transparent hover:border-white/5"
                            >
                                <HeartHandshake className="text-white mb-4" width={24} strokeWidth={1.5} />
                                <h3 className="text-lg font-medium text-white mb-2">Cam kết hỗ trợ trọn đời</h3>
                                <p className="text-sm text-secondary leading-relaxed">Sản phẩm bàn giao là tâm huyết của tôi. Tôi cam kết bảo hành, bảo trì và hỗ trợ bạn trong suốt quá trình vận hành sau này.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About & Services Grid (Bento Style) */}
            <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-min">

                    {/* About Block */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 bg-surface border border-border p-8 md:p-10 rounded-xl flex flex-col justify-between"
                    >
                        <div>
                            <h2 className="text-xs font-medium uppercase tracking-widest text-secondary mb-6">Về Vương Hoàng Giang</h2>
                            <p className="text-lg md:text-xl font-light text-white/90 leading-relaxed mb-6">
                                Tôi là Fullstack Developer chuyên kiến tạo <span className="text-white font-normal underline decoration-white/20 underline-offset-4">Website và Mobile App</span> chất lượng cao. Tôi đề cao <span className="text-white font-medium">Hiệu quả thực tế</span>: tư vấn giải pháp tinh gọn, tập trung ngân sách vào các tính năng cốt lõi mang lại giá trị, giúp bạn sở hữu sản phẩm công nghệ bền vững với chi phí tối ưu nhất.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/5">
                            <div className="text-xs text-secondary">
                                <span className="block text-white font-medium mb-1">Chi phí</span>
                                Hợp lý, vừa túi tiền
                            </div>
                            <div className="text-xs text-secondary">
                                <span className="block text-white font-medium mb-1">Tiến độ</span>
                                Giao nhanh, đúng hẹn
                            </div>
                            <div className="text-xs text-secondary">
                                <span className="block text-white font-medium mb-1">Hỗ trợ</span>
                                Nhiệt tình, trọn đời
                            </div>
                        </div>
                    </motion.div>

                    {/* Service 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        whileHover={{ y: -5 }}
                        className="lg:col-span-5 bg-neutral-900 border border-border p-8 rounded-xl hover:border-white/20 transition-colors group"
                    >
                        <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-colors">
                            <Monitor width={20} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2">Thiết kế Website</h3>
                        <ul className="space-y-2 mt-4 text-sm text-secondary">
                            <li className="flex items-center gap-2"><Check width={14} /> Website Doanh nghiệp (Corporate)</li>
                            <li className="flex items-center gap-2"><Check width={14} /> Landing Page bán hàng (High convert)</li>
                            <li className="flex items-center gap-2"><Check width={14} /> Trang thương mại điện tử (E-commerce)</li>
                            <li className="flex items-center gap-2"><Check width={14} /> Website theo yêu cầu (Custom)</li>
                            <li className="flex items-center gap-2"><Check width={14} /> Đồ án, bài tập lớn cho sinh viên</li>
                        </ul>
                    </motion.div>

                    {/* Service 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ y: -5 }}
                        className="lg:col-span-6 bg-neutral-900 border border-border p-8 rounded-xl hover:border-indigo-500/30 transition-colors group relative overflow-hidden"
                    >
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-colors"></div>
                        <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white mb-6 relative z-10 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                            <Smartphone width={20} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2 relative z-10">Lập trình Mobile App</h3>
                        <ul className="space-y-2 mt-4 text-sm text-secondary relative z-10">
                            <li className="flex items-center gap-2"><Check width={14} /> App bán hàng, đặt lịch (iOS/Android)</li>
                            <li className="flex items-center gap-2"><Check width={14} /> Ứng dụng quản lý nội bộ</li>
                            <li className="flex items-center gap-2"><Check width={14} /> Tích hợp thông báo đẩy (Notification)</li>
                        </ul>
                    </motion.div>

                    {/* Service 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ y: -5 }}
                        className="lg:col-span-6 bg-neutral-900 border border-border p-8 rounded-xl hover:border-emerald-500/30 transition-colors group relative overflow-hidden"
                    >
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors"></div>
                        <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white mb-6 relative z-10 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                            <Bot width={20} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2 relative z-10">Giải pháp AI & Automation</h3>
                        <ul className="space-y-2 mt-4 text-sm text-secondary relative z-10">
                            <li className="flex items-center gap-2"><Check width={14} /> Chatbot tư vấn tự động 24/7</li>
                            <li className="flex items-center gap-2"><Check width={14} /> Tích hợp ChatGPT/OpenAI</li>
                            <li className="flex items-center gap-2"><Check width={14} /> Tool tự động hoá quy trình (RPA)</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-background border-t border-white/5">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                    >
                        <div>
                            <h2 className="text-3xl font-medium tracking-tight text-white mb-4">Dự án Demo & Practice</h2>
                            <p className="text-secondary text-sm max-w-lg">
                                Các dự án dưới đây là demo mô phỏng nhằm thể hiện tư duy giải pháp và năng lực kỹ thuật của tôi trong việc kết hợp Web Development và AI.
                            </p>
                        </div>
                        <div className="hidden md:block h-px flex-1 bg-white/10 mx-8 mb-2"></div>
                        <span className="text-xs font-mono text-secondary/50 border border-white/10 px-2 py-1 rounded">Selected Works 2023-2024</span>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Project 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="group cursor-pointer"
                        >
                            <div className="h-64 bg-surface rounded-lg border border-white/5 overflow-hidden relative mb-6">
                                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                    <div className="w-3/4 h-3/4 border border-white/10 rounded bg-[#0f0f0f] relative overflow-hidden">
                                        <div className="absolute top-0 w-full h-8 border-b border-white/10 flex items-center px-3 gap-2">
                                            <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                            <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                                        </div>
                                        <div className="p-4 space-y-3">
                                            <div className="w-1/2 h-4 bg-white/10 rounded"></div>
                                            <div className="w-full h-20 bg-white/5 rounded flex items-center justify-center text-xs text-emerald-400/80">
                                                AI Booking Active...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors">Lotus Spa – Booking Assistant</h3>
                                    <p className="text-sm text-secondary mt-1">Website giới thiệu + AI Chatbot đặt lịch tự động</p>
                                </div>
                                <ArrowUpRight className="text-white/30 group-hover:text-white transition-colors" width={20} />
                            </div>
                            <div className="flex gap-2 mt-3">
                                <span className="text-[10px] uppercase tracking-wider border border-white/10 px-2 py-0.5 rounded text-secondary">Web</span>
                                <span className="text-[10px] uppercase tracking-wider border border-emerald-500/20 px-2 py-0.5 rounded text-emerald-400">AI Chatbot</span>
                            </div>
                        </motion.div>

                        {/* Project 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="h-64 bg-surface rounded-lg border border-white/5 overflow-hidden relative mb-6">
                                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                    <div className="w-3/4 h-3/4 border border-white/10 rounded bg-[#0f0f0f] relative overflow-hidden p-6 flex flex-col items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4">
                                            <Users className="text-indigo-400" width={20} />
                                        </div>
                                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full w-2/3 bg-indigo-500"></div>
                                        </div>
                                        <span className="text-[10px] text-indigo-300 mt-2">Processing Leads...</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-medium text-white group-hover:text-indigo-400 transition-colors">Khóa học tiếng Anh – AI Lead</h3>
                                    <p className="text-sm text-secondary mt-1">Landing page + AI phân loại & phản hồi học viên</p>
                                </div>
                                <ArrowUpRight className="text-white/30 group-hover:text-white transition-colors" width={20} />
                            </div>
                            <div className="flex gap-2 mt-3">
                                <span className="text-[10px] uppercase tracking-wider border border-white/10 px-2 py-0.5 rounded text-secondary">Landing Page</span>
                                <span className="text-[10px] uppercase tracking-wider border border-indigo-500/20 px-2 py-0.5 rounded text-indigo-400">Automation</span>
                            </div>
                        </motion.div>

                        {/* Project 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="group cursor-pointer"
                        >
                            <div className="h-64 bg-surface rounded-lg border border-white/5 overflow-hidden relative mb-6">
                                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                    <div className="w-3/4 h-3/4 border border-white/10 rounded bg-[#0f0f0f] relative overflow-hidden p-4">
                                        <div className="space-y-2">
                                            <div className="flex gap-2">
                                                <div className="w-8 h-8 rounded bg-white/10"></div>
                                                <div className="flex-1 space-y-1">
                                                    <div className="w-20 h-2 bg-white/20 rounded"></div>
                                                    <div className="w-full h-2 bg-white/5 rounded"></div>
                                                </div>
                                            </div>
                                            <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded text-[10px] text-blue-300">
                                                AI generated response based on client query...
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">AI Email Assistant</h3>
                                    <p className="text-sm text-secondary mt-1">Tool viết & gửi email tự động theo kịch bản CSKH</p>
                                </div>
                                <ArrowUpRight className="text-white/30 group-hover:text-white transition-colors" width={20} />
                            </div>
                            <div className="flex gap-2 mt-3">
                                <span className="text-[10px] uppercase tracking-wider border border-white/10 px-2 py-0.5 rounded text-secondary">Tool</span>
                                <span className="text-[10px] uppercase tracking-wider border border-blue-500/20 px-2 py-0.5 rounded text-blue-400">GPT-4</span>
                            </div>
                        </motion.div>

                        {/* Project 4 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="group cursor-pointer"
                        >
                            <div className="h-64 bg-surface rounded-lg border border-white/5 overflow-hidden relative mb-6">
                                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                    <div className="w-3/4 h-3/4 border border-white/10 rounded bg-[#0f0f0f] relative overflow-hidden grid grid-cols-2 gap-2 p-4">
                                        <div className="bg-white/5 rounded border border-white/5 flex items-center justify-center">
                                            <BarChart2 className="text-white/20" width={24} />
                                        </div>
                                        <div className="bg-white/5 rounded border border-white/5 flex items-center justify-center">
                                            <Calendar className="text-white/20" width={24} />
                                        </div>
                                        <div className="col-span-2 h-8 bg-purple-500/10 rounded border border-purple-500/20 flex items-center px-2 text-[10px] text-purple-300">
                                            Analyzing Data...
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-medium text-white group-hover:text-purple-400 transition-colors">Event Management System</h3>
                                    <p className="text-sm text-secondary mt-1">Web quản lý sự kiện + AI phân tích dữ liệu đăng ký</p>
                                </div>
                                <ArrowUpRight className="text-white/30 group-hover:text-white transition-colors" width={20} />
                            </div>
                            <div className="flex gap-2 mt-3">
                                <span className="text-[10px] uppercase tracking-wider border border-white/10 px-2 py-0.5 rounded text-secondary">Dashboard</span>
                                <span className="text-[10px] uppercase tracking-wider border border-purple-500/20 px-2 py-0.5 rounded text-purple-400">Data Analysis</span>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>


            {/* Process Section */}
            <MinimalWorkflow />

            {/* Testimonials */}
            <Testimonials />

            {/* CTA / Contact Section */}
            <ContactForm onOpenMenu={() => setIsMobileMenuOpen(true)} />

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="py-12 px-6 border-t border-white/5 bg-black text-center md:text-left"
            >
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <p className="text-xs text-white/40 uppercase tracking-widest font-medium mb-2">yangai</p>
                        <p className="text-xs text-secondary">© 2025 yangai, All Right Reserved.</p>
                    </div>
                    <div className="text-xs text-secondary/50 max-w-md text-center md:text-right">
                        <p>Một số dự án trên website là demo/practice nhằm thể hiện năng lực và quy trình làm việc.</p>
                    </div>
                </div>
            </motion.footer>

        </div >
    );
}

export default App;
