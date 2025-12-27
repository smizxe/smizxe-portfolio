import { useState } from 'react';
import { Check } from 'lucide-react';
import { i18n } from '../data/i18n';
import { portfolio } from '../data/portfolio';
import Section from './Section';
import { cn } from '../lib/utils';

interface PricingProps {
    lang: 'vi' | 'en';
}

export default function Pricing({ lang }: PricingProps) {
    const t = i18n[lang].pricing;
    const { pricing } = portfolio;
    const [isBusiness, setIsBusiness] = useState(false);

    return (
        <Section id="pricing" className="bg-dark">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gradient">
                    {t.title}
                </h2>

                {/* Toggle */}
                <div className="flex justify-center mb-16">
                    <div className="bg-white/5 p-1 rounded-full flex relative">
                        <div className={cn("absolute top-1 left-1 bottom-1 w-[50%] bg-primary rounded-full transition-transform duration-300", isBusiness ? "translate-x-full" : "translate-x-0")} />
                        <button
                            onClick={() => setIsBusiness(false)}
                            className={cn("px-6 py-2 rounded-full text-sm font-medium z-10 transition-colors relative", !isBusiness ? "text-white" : "text-gray-400")}
                        >
                            {lang === 'vi' ? 'Sinh viên' : 'Individual'}
                        </button>
                        <button
                            onClick={() => setIsBusiness(true)}
                            className={cn("px-6 py-2 rounded-full text-sm font-medium z-10 transition-colors relative", isBusiness ? "text-white" : "text-gray-400")}
                        >
                            {lang === 'vi' ? 'Doanh nghiệp' : 'Business'}
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricing.map((plan) => (
                        <div
                            key={plan.id}
                            className={cn(
                                "relative p-8 rounded-2xl border transition-all duration-300",
                                plan.popular
                                    ? "bg-white/10 border-primary shadow-[0_0_30px_rgba(59,130,246,0.15)] transform md:-translate-y-4"
                                    : "bg-white/5 border-white/5 hover:border-white/20"
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-xs font-bold uppercase tracking-wider">
                                    {t.popular}
                                </div>
                            )}

                            <h3 className="text-xl font-bold mb-4">{t[plan.id as keyof typeof t]}</h3>
                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-3xl font-bold text-white">{plan.price}</span>
                                <span className="text-sm text-gray-400">{t.unit}</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                        <Check className="w-5 h-5 text-secondary shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={cn(
                                "w-full py-3 rounded-full font-bold transition-all hover:scale-105",
                                plan.popular ? "bg-primary text-white hover:bg-primary/90" : "bg-white/10 text-white hover:bg-white/20"
                            )}>
                                Choose Plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
