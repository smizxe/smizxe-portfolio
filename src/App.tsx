
import { motion } from 'framer-motion';
import {
    ArrowDownRight, Layers, Cpu, Lightbulb, Search, Zap,
    HeartHandshake, Monitor, Check, Bot, Workflow, ArrowUpRight,
    Users, BarChart2, Calendar, ArrowRight, Mail, MessageCircle, Facebook
} from 'lucide-react';
import avatar from './assets/smizxe-chu-tich.jpg';
import logo from './assets/logo.png';
import MinimalWorkflow from './components/MinimalWorkflow';

function App() {
    return (
        <div className="bg-background text-primary font-sans antialiased selection:bg-white/20 selection:text-white min-h-screen">

            {/* Background Grid Effect */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.07] bg-grid bg-grid-pattern"></div>

            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <a href="#" className="flex items-center gap-2 group">
                        <img src={logo} alt="VHG Logo" className="h-10 w-auto object-contain scale-125 group-hover:opacity-80 transition-opacity" />
                        <span className="text-sm tracking-widest font-medium uppercase text-white/90 group-hover:text-white transition-colors hidden sm:block pt-1">
                            Vương Hoàng Giang
                        </span>
                    </a>
                    <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-secondary">
                        <a href="#about" className="hover:text-white transition-colors">Giới thiệu</a>
                        <a href="#services" className="hover:text-white transition-colors">Dịch vụ</a>
                        <a href="#projects" className="hover:text-white transition-colors">Dự án</a>
                        <a href="#contact" className="px-4 py-2 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                            Liên hệ
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
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
                                Xây dựng website & <br className="hidden md:block" />
                                <span className="text-white/60">ứng dụng AI giúp doanh nghiệp</span> <br />
                                vận hành thông minh hơn.
                            </h1>

                            <p className="text-base md:text-lg text-secondary font-light max-w-2xl leading-relaxed mb-10 md:pr-10 mx-auto md:mx-0">
                                Tôi là Vương Hoàng Giang – Fullstack Developer, chuyên phát triển website, landing page và các giải pháp ứng dụng AI nhằm tự động hoá quy trình, cải thiện trải nghiệm người dùng và tối ưu hiệu quả kinh doanh.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                                <a href="#projects" className="w-full sm:w-auto px-6 py-3 bg-white text-black text-sm font-medium rounded hover:bg-white/90 transition-colors flex items-center justify-center gap-2">
                                    Xem dự án đã thực hiện
                                    <ArrowDownRight width={16} strokeWidth={2} />
                                </a>
                                <a href="#contact" className="w-full sm:w-auto px-6 py-3 border border-white/10 text-white text-sm font-medium rounded hover:bg-white/5 transition-colors text-center">
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
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/5 shadow-2xl shadow-indigo-500/20">
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
                    <div className="mt-16 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs md:text-sm text-secondary">
                        <div className="flex items-center gap-3 justify-start">
                            <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-white shrink-0">
                                <Layers width={16} strokeWidth={1.5} />
                            </div>
                            <span>Fullstack Developer<br />định hướng sản phẩm</span>
                        </div>
                        <div className="flex items-center gap-3 justify-start">
                            <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-white shrink-0">
                                <Cpu width={16} strokeWidth={1.5} />
                            </div>
                            <span>Kinh nghiệm xây dựng<br />Web + AI Automation</span>
                        </div>
                        <div className="flex items-center gap-3 justify-start">
                            <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-white shrink-0">
                                <Lightbulb width={16} strokeWidth={1.5} />
                            </div>
                            <span>Tư duy giải pháp,<br />không chỉ code rập khuôn</span>
                        </div>
                    </div>
                </div>
            </main>

            {/* Why Choose Me Section */}
            <section className="py-20 bg-surface border-y border-white/5 relative">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
                        <div className="sticky top-32">
                            <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">Tại sao nên chọn Giang?</h2>
                            <p className="text-secondary font-light text-sm md:text-base leading-relaxed mb-6">
                                Tôi tập trung xây giải pháp có thể sử dụng lâu dài, bền vững và dễ dàng mở rộng, không phải sản phẩm "mì ăn liền" làm cho xong.
                            </p>
                            <div className="h-px w-20 bg-white/20"></div>
                        </div>

                        <div className="space-y-8">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="group hover:bg-white/5 p-6 rounded-lg transition-all duration-300 border border-transparent hover:border-white/5"
                            >
                                <Search className="text-white mb-4" width={24} strokeWidth={1.5} />
                                <h3 className="text-lg font-medium text-white mb-2">Hiểu bài toán trước khi xây giải pháp</h3>
                                <p className="text-sm text-secondary leading-relaxed">Không bắt đầu code ngay. Tôi dành thời gian phân tích vấn đề của bạn để đảm bảo công nghệ được áp dụng đúng chỗ, đúng mục đích.</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="group hover:bg-white/5 p-6 rounded-lg transition-all duration-300 border border-transparent hover:border-white/5"
                            >
                                <Zap className="text-white mb-4" width={24} strokeWidth={1.5} />
                                <h3 className="text-lg font-medium text-white mb-2">Web + AI: Tiết kiệm thời gian & chi phí</h3>
                                <p className="text-sm text-secondary leading-relaxed">Tích hợp AI không phải để "làm màu". Tôi dùng AI để tự động hóa những việc lặp lại, giúp bạn giảm chi phí nhân sự vận hành.</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="group hover:bg-white/5 p-6 rounded-lg transition-all duration-300 border border-transparent hover:border-white/5"
                            >
                                <HeartHandshake className="text-white mb-4" width={24} strokeWidth={1.5} />
                                <h3 className="text-lg font-medium text-white mb-2">Hỗ trợ & đồng hành dài hạn</h3>
                                <p className="text-sm text-secondary leading-relaxed">Bàn giao không phải là kết thúc. Tôi hướng dẫn chi tiết cách sử dụng và luôn sẵn sàng hỗ trợ kỹ thuật khi hệ thống cần cập nhật.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About & Services Grid (Bento Style) */}
            <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-min">

                    {/* About Block */}
                    <div className="lg:col-span-7 bg-surface border border-border p-8 md:p-10 rounded-xl flex flex-col justify-between">
                        <div>
                            <h2 className="text-xs font-medium uppercase tracking-widest text-secondary mb-6">Về Vương Hoàng Giang</h2>
                            <p className="text-lg md:text-xl font-light text-white/90 leading-relaxed mb-6">
                                Tôi là Fullstack Developer với định hướng phát triển sản phẩm web hiện đại và ứng dụng AI vào các bài toán thực tế. Tôi đặc biệt quan tâm tới việc <span className="text-white font-normal underline decoration-white/20 underline-offset-4">tự động hoá & tối ưu quy trình</span>.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/5">
                            <div className="text-xs text-secondary">
                                <span className="block text-white font-medium mb-1">Giao tiếp</span>
                                Rõ ràng, minh bạch
                            </div>
                            <div className="text-xs text-secondary">
                                <span className="block text-white font-medium mb-1">Tư duy</span>
                                Chủ động đề xuất
                            </div>
                            <div className="text-xs text-secondary">
                                <span className="block text-white font-medium mb-1">Trách nhiệm</span>
                                Cam kết deadline
                            </div>
                        </div>
                    </div>

                    {/* Service 1 */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="lg:col-span-5 bg-neutral-900 border border-border p-8 rounded-xl hover:border-white/20 transition-colors group"
                    >
                        <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-black transition-colors">
                            <Monitor width={20} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2">Website & Landing Page</h3>
                        <ul className="space-y-2 mt-4 text-sm text-secondary">
                            <li className="flex items-center gap-2"><Check width={14} /> Website doanh nghiệp</li>
                            <li className="flex items-center gap-2"><Check width={14} /> Landing page bán hàng / thu lead</li>
                            <li className="flex items-center gap-2"><Check width={14} /> Portfolio cá nhân chuyên nghiệp</li>
                        </ul>
                    </motion.div>

                    {/* Service 2 */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="lg:col-span-6 bg-neutral-900 border border-border p-8 rounded-xl hover:border-indigo-500/30 transition-colors group relative overflow-hidden"
                    >
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-colors"></div>
                        <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white mb-6 relative z-10 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                            <Bot width={20} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2 relative z-10">Ứng dụng AI vào Website</h3>
                        <ul className="space-y-2 mt-4 text-sm text-secondary relative z-10">
                            <li className="flex items-center gap-2"><Check width={14} /> Chatbot CSKH 24/7 thông minh</li>
                            <li className="flex items-center gap-2"><Check width={14} /> AI xử lý form, phân loại dữ liệu</li>
                            <li className="flex items-center gap-2"><Check width={14} /> Tích hợp OpenAI/GPT vào sản phẩm</li>
                        </ul>
                    </motion.div>

                    {/* Service 3 */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="lg:col-span-6 bg-neutral-900 border border-border p-8 rounded-xl hover:border-emerald-500/30 transition-colors group relative overflow-hidden"
                    >
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors"></div>
                        <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white mb-6 relative z-10 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                            <Workflow width={20} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2 relative z-10">AI Automation Tool</h3>
                        <ul className="space-y-2 mt-4 text-sm text-secondary relative z-10">
                            <li className="flex items-center gap-2"><Check width={14} /> Tool nội bộ cho Startup/SME</li>
                            <li className="flex items-center gap-2"><Check width={14} /> Tự động hoá viết content, email</li>
                            <li className="flex items-center gap-2"><Check width={14} /> Kết nối dữ liệu đa kênh (n8n/Make)</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-background border-t border-white/5">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-3xl font-medium tracking-tight text-white mb-4">Dự án Demo & Practice</h2>
                            <p className="text-secondary text-sm max-w-lg">
                                Các dự án dưới đây là demo mô phỏng nhằm thể hiện tư duy giải pháp và năng lực kỹ thuật của tôi trong việc kết hợp Web Development và AI.
                            </p>
                        </div>
                        <div className="hidden md:block h-px flex-1 bg-white/10 mx-8 mb-2"></div>
                        <span className="text-xs font-mono text-secondary/50 border border-white/10 px-2 py-1 rounded">Selected Works 2023-2024</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Project 1 */}
                        <div className="group cursor-pointer">
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
                        </div>

                        {/* Project 2 */}
                        <div className="group cursor-pointer">
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
                        </div>

                        {/* Project 3 */}
                        <div className="group cursor-pointer">
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
                        </div>

                        {/* Project 4 */}
                        <div className="group cursor-pointer">
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
                        </div>

                    </div>
                </div>
            </section>


            {/* Process Section */}
            <MinimalWorkflow />

            {/* Testimonials */}
            <section className="py-24 px-6 bg-surface border-b border-white/5">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-xl font-medium text-center mb-16 text-white">Khách hàng nói gì?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white/5 rounded border border-white/5">
                            <p className="text-sm text-secondary italic mb-4">"Giang có tư duy hệ thống rất tốt, không chỉ làm theo yêu cầu mà còn tư vấn ngược lại cho mình."</p>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-500 to-gray-700"></div>
                                <span className="text-xs text-white">Founder, Start-up Edu</span>
                            </div>
                        </div>
                        <div className="p-6 bg-white/5 rounded border border-white/5">
                            <p className="text-sm text-secondary italic mb-4">"Giải pháp AI đơn giản nhưng giúp bên mình tiết kiệm rất nhiều thời gian xử lý email khách hàng."</p>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-700"></div>
                                <span className="text-xs text-white">Manager, Logistics Co.</span>
                            </div>
                        </div>
                        <div className="p-6 bg-white/5 rounded border border-white/5">
                            <p className="text-sm text-secondary italic mb-4">"Làm việc rõ ràng, chủ động, các mốc tiến độ đều được cập nhật đầy đủ."</p>
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700"></div>
                                <span className="text-xs text-white">Marketing Lead, Agency</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900 pointer-events-none"></div>
                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6">
                        Bạn đang cần website hoặc<br />giải pháp AI cho doanh nghiệp?
                    </h2>
                    <p className="text-secondary text-lg font-light mb-10">
                        Hãy trao đổi với Giang để tìm ra phương án tối ưu nhất.
                    </p>

                    <div className="flex flex-col items-center gap-6">
                        <a href="mailto:contact@vuonghoanggiang.com" className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black text-base font-medium rounded-full overflow-hidden transition-all hover:scale-105">
                            <span className="relative z-10 flex items-center gap-2">
                                Trao đổi dự án với Giang
                                <ArrowRight width={18} />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </a>

                        <div className="flex items-center gap-8 mt-4">
                            <a href="#" className="text-secondary hover:text-white transition-colors flex items-center gap-2 text-sm">
                                <Mail width={16} /> Email
                            </a>
                            <a href="#" className="text-secondary hover:text-blue-400 transition-colors flex items-center gap-2 text-sm">
                                <MessageCircle width={16} /> Zalo
                            </a>
                            <a href="#" className="text-secondary hover:text-blue-600 transition-colors flex items-center gap-2 text-sm">
                                <Facebook width={16} /> Facebook
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-white/5 bg-black text-center md:text-left">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <p className="text-xs text-white/40 uppercase tracking-widest font-medium mb-2">Vương Hoàng Giang</p>
                        <p className="text-xs text-secondary">© 2024 Fullstack Developer & AI Solutions.</p>
                    </div>
                    <div className="text-xs text-secondary/50 max-w-md text-center md:text-right">
                        <p>Một số dự án trên website là demo/practice nhằm thể hiện năng lực và quy trình làm việc.</p>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default App;
