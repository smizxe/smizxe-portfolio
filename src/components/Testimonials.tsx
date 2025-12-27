import { i18n } from '../data/i18n';
import Section from './Section';

interface TestimonialsProps {
    lang: 'vi' | 'en';
}

export default function Testimonials({ lang }: TestimonialsProps) {
    const t = i18n[lang].nav; // Use nav localized string or modify i18n structure to include distinct field. Re-using nav.testimonials for title.

    // Mock data inline
    const testimonials = [
        { name: "Minh Anh", role: "Fellow Student", text: "Giang code rất gọn gàng và logic. Rất thích cách bạn ấy tối ưu performance." },
        { name: "John D.", role: "Mentor", text: "Impressive attention to detail for a student portfolio. The UI is clean and professional." },
        { name: "Linh Nguyen", role: "Project Partner", text: "Làm việc với Giang rất thoải mái, bạn ấy luôn đúng hạn và có trách nhiệm cao." }
    ];

    return (
        <Section id="testimonials" className="bg-dark/50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient">
                    {t.testimonials}
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((item, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/5 relative">
                            <span className="text-4xl text-primary/20 font-serif absolute top-4 left-4">"</span>
                            <p className="text-gray-300 mb-6 italic relative z-10 pt-4">
                                {item.text}
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-sm">
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">{item.name}</h4>
                                    <p className="text-xs text-gray-500">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-xs text-gray-600 mt-8 italic">
                    *Practice/Peer feedback
                </p>
            </div>
        </Section>
    );
}
