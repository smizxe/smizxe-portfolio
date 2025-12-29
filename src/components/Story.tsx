import { motion } from 'framer-motion';
import storyImage from '../assets/smizxe-ngoi.jpg';

const Story = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Image Side */}
                    <div className="lg:w-5/12 w-full relative">
                        {/* Decorative Circles - Loop Animation - Outside animated container */}
                        <motion.div
                            initial={{ opacity: 0.8, rotate: 0, scale: 1 }}
                            animate={{
                                opacity: [0.8, 1, 0.8],
                                rotate: 360,
                                scale: [1, 1.05, 1]
                            }}
                            transition={{
                                duration: 20,
                                ease: "linear",
                                repeat: Infinity
                            }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-white/10 rounded-full pointer-events-none"
                            style={{ zIndex: 0 }}
                        ></motion.div>
                        <motion.div
                            initial={{ opacity: 0.5, rotate: 0, scale: 1.1 }}
                            animate={{
                                opacity: [0.5, 0.7, 0.5],
                                rotate: -360,
                                scale: [1.1, 1.15, 1.1]
                            }}
                            transition={{
                                duration: 25,
                                ease: "linear",
                                repeat: Infinity
                            }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] border border-white/5 rounded-full pointer-events-none"
                            style={{ zIndex: 0 }}
                        ></motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                            style={{ zIndex: 1 }}
                        >
                            <div className="relative aspect-[3/4] md:aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/10 group">
                                <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                <img
                                    src={storyImage}
                                    alt="Câu chuyện của Yangai"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Overlay Card */}
                                <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-xl z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-white font-medium text-sm">Vương Hoàng Giang (Yangai)</p>
                                    <p className="text-white/60 text-xs mt-1">
                                        Web <span className="text-white mx-1">•</span> App <span className="text-white mx-1">•</span> AI Developer & Entrepreneur
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-7/12 w-full"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs tracking-wide text-secondary mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                            My Hustle Journey
                        </div>

                        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
                            Hành trình của Yangai
                        </h2>

                        <p className="text-secondary text-base md:text-lg font-light leading-relaxed mb-10 max-w-2xl">
                            20 tuổi. Tôi không ngại va chạm, không ngại sai. Hành trình từ giảng đường FPT đến những dự án thực tế là quãng đường của sự "vấp ngã và trưởng thành". Tôi mang năng lượng của Gen Z vào từng dòng code: quyết liệt, sáng tạo và thực tế.
                        </p>

                        <div className="space-y-10 relative pl-12 before:absolute before:left-6 before:top-2 before:bottom-2 before:w-px before:bg-white/10">

                            {/* Timeline Item 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="relative"
                            >
                                <div className="absolute -left-9 top-1 w-6 h-6 rounded-full bg-neutral-900 border border-white/20 flex items-center justify-center z-10">
                                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                                </div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-indigo-400 font-mono text-sm font-medium">2023</span>
                                    <h3 className="text-white font-medium text-lg">Đam mê dẫn lối vào FPT</h3>
                                </div>
                                <p className="text-secondary text-sm leading-relaxed">
                                    "Thích công nghệ thì vào FPT thôi". Suy nghĩ đơn giản của chàng trai 18 tuổi. Mang theo sự háo hức và niềm tin rằng mình sẽ sớm trở thành một "siêu nhân code" như trong phim.
                                </p>
                            </motion.div>

                            {/* Timeline Item 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="relative"
                            >
                                <div className="absolute -left-9 top-1 w-6 h-6 rounded-full bg-neutral-900 border border-white/20 flex items-center justify-center z-10">
                                    <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                                </div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-indigo-400 font-mono text-sm font-medium">2024</span>
                                    <h3 className="text-white font-medium text-lg">Cú sốc hiện thực</h3>
                                </div>
                                <p className="text-secondary text-sm leading-relaxed">
                                    Đời không như mơ. Công nghệ khó hơn tôi tưởng. Tôi bị rớt vài môn, cảm giác như rơi tự do. Nhưng chính lúc chạm đáy đó, tôi quyết định không bỏ cuộc. Tôi sốc lại tinh thần, bắt đầu lại từ những dự án nhỏ nhất để tìm lại sự tự tin.
                                </p>
                            </motion.div>

                            {/* Timeline Item 3 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="relative"
                            >
                                <div className="absolute -left-9 top-1 w-6 h-6 rounded-full bg-neutral-900 border border-indigo-500/50 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(99,102,241,0.3)]">
                                    <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
                                </div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-emerald-400 font-mono text-sm font-medium">2025</span>
                                    <h3 className="text-white font-medium text-lg">Giúp Khách hàng có web ưng ý</h3>
                                </div>
                                <p className="text-secondary text-sm leading-relaxed">
                                    Vượt qua khủng hoảng, giờ tôi mang kinh nghiệm và sự thấu hiểu đó để phục vụ khách hàng. Tôi không chỉ viết code, tôi giúp bạn hiện thực hóa ý tưởng website ưng ý nhất với sự tận tâm của một người trẻ đang khởi nghiệp.
                                </p>
                            </motion.div>

                        </div>

                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default Story;
