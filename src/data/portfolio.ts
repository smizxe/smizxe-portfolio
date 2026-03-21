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
            id: "rentino",
            title: "Rentino - Cầm Thuê Nâng đời điện thoại",
            category: "Fintech / E-commerce",
            tech: ["React", "Vite", "Tailwind", "AI Integration"],
            color: "from-orange-500 to-red-600",
            image: "/images/rentino-preview.png",
            stats: {
                role: "Frontend Developer",
                timeline: "2 weeks",
            },
            highlights: ["AI Smart Check", "Định giá nhanh", "Minh bạch"],
            caseStudy: {
                problem: "Người dùng gặp khó khăn trong việc định giá và tìm kiếm giải pháp tài chính nhanh cho thiết bị di động.",
                solution: "Nền tảng Rentino cung cấp giải pháp Cầm, Thuê, Nâng đời với công nghệ AI định giá chuẩn xác.",
                features: ["AI Smart Check", "Định giá tự động", "Booking dịch vụ tận nơi"],
                outcome: "Giúp người dùng tiếp cận dịch vụ tài chính an toàn, minh bạch và nhanh chóng.",
            },
            links: {
                demo: "https://rentino.vn",
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
            id: "content-mastery",
            title: "Mẫu landing page Khóa học xây kênh - Auto Lead",
            category: "Landing Page / Education",
            tech: ["React", "Tailwind", "Automation"],
            color: "from-blue-400 to-indigo-500",
            image: "/images/content-mastery-preview.png",
            stats: {
                role: "Full Stack Developer",
                timeline: "1 week",
            },
            highlights: ["High Conversion", "Automation Funnel", "SEO Optimized"],
            caseStudy: {
                problem: "Conversion rate for the old course landing page was low.",
                solution: "Redesigned with a focus on value proposition and automated lead capture.",
                features: ["Fast Loading", "Clear CTA", "SEO Optimized"],
                outcome: "Increased lead generation by 60%.",
            },
            links: {
                demo: "https://smizxe.github.io/namnguyenlandingpage/",
                source: "#"
            }
        },
        {
            id: "personal-agent",
            title: "Personal Life AI Agent",
            category: "Automation / AI Assistant",
            tech: ["n8n", "OpenAI", "Google Workspace", "Telegram"],
            color: "from-blue-400 to-indigo-500",
            image: "/images/personal-agent-preview.png",
            stats: {
                role: "Automation Engineer",
                timeline: "3 weeks",
            },
            highlights: ["Task Orchestration", "Smart Decision Making", "Multi-Service Integration"],
            caseStudy: {
                problem: "Managing personal tasks, calendar, emails, and finances across multiple apps is fragmented and time-consuming.",
                solution: "A centralized AI agent that communicates via Telegram to orchestrate all personal life aspects.",
                features: ["Context Aware Memory", "Expense Tracking", "Auto-Scheduling"],
                outcome: "Saved 10+ hours per week on life admin tasks.",
            },
            links: {
                demo: "#",
                source: "#"
            }
        },
        {
            id: "lasante",
            title: "Lasante - Landing page 3D cho chăn ga gối đệm cao cấp",
            category: "3D Landing / Luxury Brand",
            tech: ["React", "Vite", "Three.js", "Motion Design"],
            color: "from-amber-300 to-stone-500",
            image: "/images/lasante-preview.png",
            stats: {
                role: "Creative Frontend Developer",
                timeline: "2 weeks",
            },
            highlights: ["3D Storytelling", "Luxury Visual Direction", "Immersive Scroll Experience"],
            caseStudy: {
                problem: "Premium bedding brands need a landing page that conveys softness and elegance without feeling generic.",
                solution: "A 3D-first landing experience focused on atmosphere, tactile visuals, and refined brand storytelling.",
                features: ["Immersive Hero", "Editorial Layout", "Premium Product Narrative"],
                outcome: "Created a distinct branded experience that feels high-end from the first screen.",
            },
            links: {
                demo: "https://lasante.vercel.app",
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
