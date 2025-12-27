

const testimonials = [
    {
        text: "Ban đầu mình chỉ tính làm cái web đơn giản thôi, mà Giang tư vấn kỹ quá, 'moi' ra được bao nhiêu vấn đề vận hành mình không để ý. Cuối cùng chốt làm luôn hệ thống quản lý, giờ nhàn tênh.",
        author: "Anh Tuấn",
        role: "CEO, Chuỗi F&B Hà Nội",
        color: "from-orange-400 to-red-500" // Warm/Energetic
    },
    {
        text: "Ưng nhất là cái khoản support. Web bàn giao xong 3 tháng rồi, mình nhắn nhờ sửa lại cái banner lúc 10h đêm mà Giang vẫn rep và xử lý luôn trong đêm. Trách nhiệm thực sự!",
        author: "Chị Lan Anh",
        role: "Founder, Thời trang thiết kế",
        color: "from-pink-400 to-rose-500" // Sophisticated
    },
    {
        text: "Mình từng thuê team khác làm app mà bug tùm lum, gọi không nghe máy. Gặp Giang đúng kiểu cứu tinh, fix bug 'thần tốc', app giờ chạy mượt, khách khen quá trời.",
        author: "Huy Hoàng",
        role: "Project Manager, Tech Startup",
        color: "from-blue-400 to-cyan-500" // Tech/Stability
    },
    {
        text: "Chi phí rất hợp lý so với chất lượng nhận được. Giang code kỹ, logic chặt chẽ, không vẽ vời thêm tính năng để thu tiền. Rất đáng tin cậy để hợp tác đường dài.",
        author: "Văn Minh",
        role: "Giám đốc, Công ty Vận tải",
        color: "from-emerald-400 to-green-500" // Trust/Growth
    },
    {
        text: "Giải pháp AI chatbot của Giang tư vấn giúp bên mình giảm được 60% lượng tin nhắn hỏi đáp cơ bản. Nhân viên chỉ cần tập trung chốt đơn thôi, hiệu quả thấy rõ.",
        author: "Thanh Hằng",
        role: "Head of Sales, Mỹ phẩm Organic",
        color: "from-purple-400 to-indigo-500" // AI/Innovation
    },
    {
        text: "Làm việc chuyên nghiệp, rõ ràng từng đầu mục. Web chạy nhanh, chuẩn SEO, mới chạy 2 tuần mà từ khóa đã bắt đầu lên top. Rất hài lòng!",
        author: "Quốc Đạt",
        role: "Marketing Manager, BĐS",
        color: "from-yellow-400 to-amber-500" // Success/Result
    }
];

import { feedbackImages } from "../data/feedbackImages";
import { motion } from 'framer-motion';

export default function Testimonials() {
    return (
        <section className="py-24 bg-surface border-b border-white/5 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto px-6 mb-16 text-center"
            >
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
                    Chuyện người thật, việc thật
                </h2>
                <p className="text-secondary text-base md:text-lg font-light">
                    Niềm tin được xây dựng từ kết quả thực tế.
                </p>
            </motion.div>

            {/* Text Testimonials Marquee */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative flex overflow-x-hidden group mb-12"
            >
                {/* Gradient Masks */}
                <div className="absolute top-0 bottom-0 left-0 w-32 z-10 bg-gradient-to-r from-surface to-transparent pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-32 z-10 bg-gradient-to-l from-surface to-transparent pointer-events-none"></div>

                <div className="py-4 animate-marquee whitespace-nowrap flex gap-6 group-hover:[animation-play-state:paused]">
                    {[...testimonials, ...testimonials].map((item, idx) => ( // Duplicate for seamless loop
                        <div key={idx} className="w-[350px] md:w-[450px] flex-shrink-0 p-8 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/20 transition-all duration-300 hover:bg-white/5 whitespace-normal flex flex-col justify-between h-auto min-h-[220px]">
                            <div className="mb-6">
                                <div className="flex gap-1 mb-3">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <svg key={star} className="w-4 h-4 text-yellow-500 fill-yellow-500" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    ))}
                                </div>
                                <p className="text-white/90 text-sm md:text-base font-light italic leading-relaxed">"{item.text}"</p>
                            </div>

                            <div className="pt-4 border-t border-white/5">
                                <div>
                                    <h4 className="text-white font-medium text-sm">{item.author}</h4>
                                    <p className="text-secondary text-xs">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Image Evidence Marquee */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative flex overflow-x-hidden group"
            >
                {/* Gradient Masks */}
                <div className="absolute top-0 bottom-0 left-0 w-32 z-10 bg-gradient-to-r from-surface to-transparent pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-32 z-10 bg-gradient-to-l from-surface to-transparent pointer-events-none"></div>

                <div className="py-4 animate-marquee whitespace-nowrap flex gap-4 group-hover:[animation-play-state:paused]" style={{ animationDirection: 'reverse' }}>
                    {/* Using a subset or duplicating to fill screen. With 47 images, simpler to just map them all. */}
                    {[...feedbackImages, ...feedbackImages].map((src, idx) => (
                        <div key={idx} className="w-[180px] flex-shrink-0 rounded-xl overflow-hidden relative">
                            <img
                                src={src}
                                alt="Feedback proof"
                                className="w-full h-auto object-cover opacity-60 hover:opacity-100 transition-opacity duration-300"
                                loading="lazy"
                            />
                            {/* Inner shadow for feathering effect */}
                            <div className="absolute inset-0 shadow-[inset_0_0_20px_5px_#171717] pointer-events-none rounded-xl"></div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
