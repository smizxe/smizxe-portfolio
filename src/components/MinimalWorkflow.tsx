
import { motion } from 'framer-motion';
import { Search, Lightbulb, Code2, Rocket } from 'lucide-react';
import { cn } from '../lib/utils'; // Assuming this exists, based on clsx/tailwind-merge in package.json. If not I will define a helper or use template literals.

const steps = [
    {
        id: "01",
        title: "Tư vấn & Tối ưu Ngân sách",
        icon: Search,
        description: "Hiểu rõ bài toán tài chính của bạn. Mình tư vấn giải pháp 'đáng tiền' nhất, loại bỏ tính năng thừa thãi để giảm chi phí đầu tư ban đầu mà vẫn đảm bảo hiệu quả cốt lõi.",
        color: "text-blue-400",
        bgcolor: "bg-blue-400/10",
        border: "border-blue-400/20"
    },
    {
        id: "02",
        title: "Giải pháp Web & App Toàn diện",
        icon: Lightbulb,
        description: "Dù là Website giới thiệu hay Mobile App phức tạp, mình đều có lộ trình triển khai minh bạch, rõ ràng. Cam kết chi phí trọn gói, không phát sinh vô lý.",
        color: "text-amber-400",
        bgcolor: "bg-amber-400/10",
        border: "border-amber-400/20"
    },
    {
        id: "03",
        title: "Chất lượng đặt lên hàng đầu",
        icon: Code2,
        description: "Giá hợp lý không có nghĩa là code ẩu. Mình chăm chút từng dòng code, tối ưu tốc độ và trải nghiệm người dùng (UX/UI) để sản phẩm vận hành mượt mà, ổn định.",
        color: "text-emerald-400",
        bgcolor: "bg-emerald-400/10",
        border: "border-emerald-400/20"
    },
    {
        id: "04",
        title: "Hỗ trợ trọn đời & Nâng cấp",
        icon: Rocket,
        description: "Mình không 'đem con bỏ chợ'. Cam kết bảo hành, bảo trì lâu dài và sẵn sàng hỗ trợ nâng cấp tính năng bất cứ khi nào bạn cần mở rộng quy mô.",
        color: "text-purple-400",
        bgcolor: "bg-purple-400/10",
        border: "border-purple-400/20"
    }
];

export default function MinimalWorkflow() {
    return (
        <section className="py-24 px-6 bg-surface border-y border-white/5 relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
                        Quy trình làm việc tối giản
                    </h2>
                    <p className="text-secondary text-base md:text-lg font-light max-w-2xl mx-auto">
                        Tối ưu chi phí - Hiệu năng vượt trội. Dù bạn cần Website hay Mobile App, quy trình của mình đều hướng tới sự tinh gọn, chất lượng cao và đồng hành dài hạn.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent transform md:-translate-x-1/2"></div>

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={cn(
                                    "relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center",
                                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                                )}
                            >
                                {/* Content Card */}
                                <div className="flex-1 w-full pl-20 md:pl-0">
                                    <div className={cn(
                                        "relative p-6 md:p-8 rounded-xl border bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-neutral-900/80 hover:shadow-2xl hover:shadow-black/50 group",
                                        step.border,
                                        index % 2 === 0 ? "md:text-right md:mr-16" : "md:ml-16"
                                    )}>
                                        <div className={cn(
                                            "absolute top-6 p-2 rounded-lg mb-4 inline-flex items-center justify-center md:hidden",
                                            step.bgcolor, step.color
                                        )}>
                                            <step.icon size={20} />
                                        </div>

                                        <h3 className="text-xl font-semibold text-white mb-3 pt-8 md:pt-0">
                                            {step.title}
                                        </h3>
                                        <p className="text-secondary text-sm md:text-base leading-relaxed">
                                            {step.description}
                                        </p>

                                        {/* Connector Line for Desktop */}
                                        <div className={cn(
                                            "hidden md:block absolute top-1/2 w-16 h-px bg-white/20",
                                            index % 2 === 0 ? "-right-16 left-auto" : "-left-16 right-auto"
                                        )}></div>
                                    </div>
                                </div>

                                {/* Center Node */}
                                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                                    <div className={cn(
                                        "w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-background bg-neutral-900 flex items-center justify-center z-10 shadow-xl",
                                        step.color, // Border color via text color class? No, let's use inline style or ring
                                        "ring-1 ring-white/10"
                                    )}>
                                        <span className="font-mono font-bold text-lg md:text-xl tracking-tighter">
                                            {step.id}
                                        </span>
                                    </div>
                                </div>

                                {/* Empty side for spacing */}
                                <div className="hidden md:block flex-1"></div>

                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom decorative text/cta */}
                <div className="text-center mt-20">
                    <p className="text-sm font-light text-white/40 italic">
                        "Quy trình này không cứng nhắc. Nó linh hoạt theo từng dự án để đạt hiệu quả cao nhất."
                    </p>
                </div>
            </div>
        </section>
    );
}
