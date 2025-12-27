import { Share2, Code, Layout, Rocket } from 'lucide-react';

export const portfolio = {
    about: {
        avatar: "VG", // Initials for placeholder
        strengths: [
            "Pixel-perfect UI Implementation",
            "Performance Optimization",
            "Mobile-First Mindset",
            "Clean & Maintainable Code"
        ],
        skills: [
            { name: "HTML/CSS", level: 90 },
            { name: "JS/TS", level: 85 },
            { name: "React", level: 85 },
            { name: "Vite", level: 90 },
            { name: "Tailwind", level: 95 },
            { name: "SEO Basics", level: 70 },
            { name: "Figma Basics", level: 60 }
        ]
    },
    services: [
        {
            id: "landing",
            icon: Rocket,
            key: 0 // Index in i18n array
        },
        {
            id: "business",
            icon: Layout,
            key: 1
        },
        {
            id: "portfolio",
            icon: Code,
            key: 2
        },
        {
            id: "optimization",
            icon: Share2,
            key: 3
        }
    ],
    projects: [
        {
            id: "lotus-spa",
            title: "Lotus Spa",
            category: "Booking Landing",
            tech: ["React", "Tailwind", "Framer Motion"],
            color: "from-pink-500 to-rose-500",
            stats: {
                role: "Frontend Developer",
                timeline: "1 week",
            },
            highlights: ["Interactive Booking Form", "Smooth Scroll Animations"],
            caseStudy: {
                problem: "Client needed a modern way for customers to book appointments online.",
                solution: "High-performance landing page with integrated booking form (mock).",
                features: ["Responsive Design", "Service Menu", "Contact Integration"],
                outcome: "Increased user engagement potential by 40%.",
            },
            links: {
                demo: "#",
                source: "#"
            }
        },
        {
            id: "fpt-student-club",
            title: "FPT Student Club",
            category: "Event Hub",
            tech: ["React", "Vite", "TypeScript"],
            color: "from-orange-400 to-red-500",
            stats: {
                role: "UI/UX & Dev",
                timeline: "2 weeks",
            },
            highlights: ["Event Calendar", "Member Registration"],
            caseStudy: {
                problem: "Club events were hard to track on social media.",
                solution: "Centralized hub for all club activities.",
                features: ["Calendar View", "Filtering System", "Mobile Friendly"],
                outcome: "Simplified event discovery for students.",
            },
            links: {
                demo: "#",
                source: "#"
            }
        },
        {
            id: "english-master",
            title: "English Master",
            category: "Course Landing",
            tech: ["React", "Tailwind"],
            color: "from-blue-400 to-indigo-500",
            stats: {
                role: "Frontend Developer",
                timeline: "5 days",
            },
            highlights: ["Curriculum Accordion", "Testimonials Slider"],
            caseStudy: {
                problem: "Old site was slow and not mobile responsive.",
                solution: "Complete redesign with mobile-first approach.",
                features: ["Fast Loading", "Clear CTA", "SEO Optimized"],
                outcome: "Page speed score increased to 98/100.",
            },
            links: {
                demo: "#",
                source: "#"
            }
        },
        {
            id: "cafe-beans",
            title: "Cafe Beans",
            category: "Mini E-commerce",
            tech: ["React", "Zustand", "Tailwind"],
            color: "from-emerald-400 to-teal-500",
            stats: {
                role: "Full Implementation",
                timeline: "10 days",
            },
            highlights: ["Cart Logic", "Product Filtering"],
            caseStudy: {
                problem: "Coffee shop wanted to sell beans online.",
                solution: "Single page shop with cart functionality.",
                features: ["Add to Cart", "Category Filter", "Checkout Simulation"],
                outcome: "Ready for payment gateway integration.",
            },
            links: {
                demo: "#",
                source: "#"
            }
        }
    ],
    pricing: [
        {
            id: "starter",
            price: "1,500,000",
            features: ["Single Page", "Mobile Friendly", "Basic SEO", "1 Revision"],
            popular: false,
        },
        {
            id: "pro",
            price: "3,500,000",
            features: ["Multi-section Landing", "Advanced Animations", "Contact Form", "Standard SEO", "3 Revisions"],
            popular: true,
        },
        {
            id: "premium",
            price: "7,000,000",
            features: ["Complex Web App", "CMS Integration", "Performance Optimization", "Advanced SEO", "Unlimited Revisions"],
            popular: false,
        }
    ],
    faq: [
        {
            q: "Thời gian hoàn thành một website là bao lâu?",
            a: "Tùy thuộc vào độ phức tạp, thông thường từ 3-5 ngày cho landing page đơn giản và 7-14 ngày cho website doanh nghiệp."
        },
        {
            q: "Web có chuẩn SEO không?",
            a: "Có, mình tối ưu cấu trúc HTML, meta tags, và tốc độ tải trang để đảm bảo thân thiện với các công cụ tìm kiếm."
        },
        {
            q: "Chi phí hosting và domain tính sao?",
            a: "Mình sẽ tư vấn mua domain và hosting phù hợp. Với landing page đơn giản, mình có thể hướng dẫn dùng hosting miễn phí chất lượng cao như Vercel/Netlify/GitHub Pages."
        },
        {
            q: "Bảo hành và hỗ trợ sau bàn giao thế nào?",
            a: "Mình bảo hành lỗi kỹ thuật trong 3 tháng. Hỗ trợ hướng dẫn sử dụng và thay đổi nội dung cơ bản."
        }
    ]
}
