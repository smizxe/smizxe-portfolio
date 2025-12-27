
import { useState } from 'react';
import { ArrowRight, Mail, MessageCircle, Facebook, Phone, Loader2 } from 'lucide-react';

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
    };

    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-transparent to-neutral-900/50">
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6">
                        Bạn cần Web/App trọn gói<br />với chi phí tốt nhất?
                    </h2>
                    <p className="text-secondary text-lg font-light">
                        Để lại thông tin, Giang sẽ liên hệ tư vấn giải pháp tối ưu cho bạn ngay.
                    </p>
                </div>

                <div className="bg-surface/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl">
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-secondary">Họ và tên</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20"
                                        placeholder="VD: Nguyễn Văn A"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="contact" className="text-sm font-medium text-secondary">Số điện thoại / Zalo</label>
                                    <input
                                        type="text"
                                        id="contact"
                                        required
                                        className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20"
                                        placeholder="0912 345 xxx"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="needs" className="text-sm font-medium text-secondary">Nhu cầu của bạn</label>
                                <select
                                    id="needs"
                                    className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none"
                                >
                                    <option value="" className="bg-neutral-900">Chọn dịch vụ quan tâm...</option>
                                    <option value="web" className="bg-neutral-900">Thiết kế Website</option>
                                    <option value="app" className="bg-neutral-900">Lập trình Mobile App</option>
                                    <option value="ai" className="bg-neutral-900">Giải pháp AI & Chatbot</option>
                                    <option value="other" className="bg-neutral-900">Khác / Cần tư vấn chung</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-secondary">Lời nhắn (Không bắt buộc)</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-white/20 resize-none"
                                    placeholder="Mô tả sơ qua về ý tưởng của bạn..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-white text-black font-medium py-4 rounded-lg hover:bg-white/90 transition-all flex items-center justify-center gap-2 mt-4 group disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <> <Loader2 className="animate-spin" width={20} /> Đang gửi... </>
                                ) : (
                                    <> Gửi thông tin <ArrowRight width={18} className="group-hover:translate-x-1 transition-transform" /> </>
                                )}
                            </button>
                        </form>
                    ) : (
                        <div className="text-center py-12 space-y-4">
                            <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                                <ArrowRight width={32} className="rotate-[-45deg]" />
                            </div>
                            <h3 className="text-2xl font-medium text-white">Đã nhận thông tin!</h3>
                            <p className="text-secondary max-w-md mx-auto">
                                Cảm ơn bạn đã quan tâm. Giang sẽ liên hệ lại qua Số điện thoại/Zalo trong thời gian sớm nhất (thường trong vòng 2 giờ làm việc).
                            </p>
                        </div>
                    )}
                </div>

                <div className="flex justify-center gap-8 mt-12 border-t border-white/5 pt-8 max-w-lg mx-auto">
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
                </div>
            </div>
        </section>
    );
}
