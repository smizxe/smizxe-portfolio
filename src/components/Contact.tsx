import { useState, FormEvent } from 'react';
import { Copy, Mail, Send, CheckCircle2 } from 'lucide-react';
import { i18n } from '../data/i18n';
import Section from './Section';

interface ContactProps {
    lang: 'vi' | 'en';
}

export default function Contact({ lang }: ContactProps) {
    const t = i18n[lang].contact;
    const [copied, setCopied] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        const subject = `[Portfolio Contact] New request from ${data.name}`;
        const body = `Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0AGoal: ${data.goal}%0D%0ABudget: ${data.budget}%0D%0ADeadline: ${data.deadline}`;

        window.location.href = `mailto:giang@example.com?subject=${subject}&body=${body}`;
    };

    const copyEmail = () => {
        navigator.clipboard.writeText("giang@example.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Section id="contact" className="bg-dark">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient">
                    {t.title}
                </h2>

                <div className="grid md:grid-cols-5 gap-12">
                    {/* Direct Contact Info */}
                    <div className="md:col-span-2 space-y-8 order-2 md:order-1">
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-white">Contact Info</h3>
                            <p className="text-gray-400 mb-6">Based in Hanoi, Vietnam.</p>

                            <div className="space-y-4">
                                <button
                                    onClick={copyEmail}
                                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors flex items-center gap-4 group text-left"
                                >
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <span className="block text-xs text-gray-500">Email</span>
                                        <span className="font-medium text-sm break-all">giang@example.com</span>
                                    </div>
                                    {copied ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-gray-500 group-hover:text-white" />}
                                </button>

                                {/* Placeholder social buttons */}
                                <div className="grid grid-cols-2 gap-4">
                                    <button className="p-3 rounded-xl bg-blue-600/20 text-blue-500 hover:bg-blue-600 hover:text-white transition-colors font-medium">Facebook</button>
                                    <button className="p-3 rounded-xl bg-blue-500/20 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors font-medium">Zalo</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="md:col-span-3 order-1 md:order-2">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">{t.form.name}</label>
                                    <input required name="name" type="text" className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">{t.form.email}</label>
                                    <input required name="email" type="email" className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none transition-colors" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">{t.form.goal}</label>
                                <textarea required name="goal" rows={4} className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none transition-colors resize-none" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">{t.form.budget}</label>
                                    <select name="budget" className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none transition-colors appearance-none cursor-pointer">
                                        <option value="<5M">Under 5,000,000 VND</option>
                                        <option value="5M-10M">5,000,000 - 10,000,000 VND</option>
                                        <option value=">10M">Above 10,000,000 VND</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">{t.form.deadline}</label>
                                    <select name="deadline" className="w-full p-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary outline-none transition-colors appearance-none cursor-pointer">
                                        <option value="ASAP">ASAP (Urgent)</option>
                                        <option value="1week">1 Week</option>
                                        <option value="2weeks">2 Weeks</option>
                                        <option value="flexible">Flexible</option>
                                    </select>
                                </div>
                            </div>

                            <button type="submit" className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-bold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                                <Send className="w-5 h-5" />
                                {t.form.submit}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Section>
    );
}
