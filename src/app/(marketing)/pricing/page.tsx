'use client';
import React, { useState, FC, ReactNode } from 'react'; // 1. Import useState, FC, ReactNode
import { Check, X, Star, Rocket, Crown } from 'lucide-react';
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { AnimationContainer, MaxWidthWrapper } from "@/components";
import MagicBadge from "@/components/ui/magic-badge";
import Link from 'next/link';

// --- Type Definitions for TypeScript ---
interface ScheduleCallModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Feature {
    name: string;
    value: string;
    included: boolean;
}

interface PricingPlan {
    id: string;
    name:string;
    icon: ReactNode;
    gradient: string;
    price: string;
    description: string;
    features: Feature[];
    popular: boolean;
    cta: string;
}

interface FeatureIconProps {
    included: boolean;
}

interface Addon {
    name: string;
    price: string;
    desc: string;
}
// --- End Type Definitions ---


// 2. Modal Component for scheduling a call
const ScheduleCallModal: FC<ScheduleCallModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        // Backdrop
        <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-[999]"
            onClick={onClose}
        >
            {/* Modal Panel */}
            <div
                className="relative bg-gray-900/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 shadow-2xl w-full max-w-md m-4 animate-fade-in-scale"
                onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()} // Prevents modal from closing when clicking inside
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    aria-label="Close modal"
                >
                    <X className="w-6 h-6" />
                </button>

                <h2 className="text-2xl font-bold text-center mb-4 text-white">
                    Schedule a Discovery Call
                </h2>
                <p className="text-center text-gray-400 mb-8">
                    Choose a duration that best fits your schedule. We are excited to connect with you!
                </p>

                <div className="flex flex-col gap-4">
                    <a
                        href="https://calendly.com/futureflow-dev-2025/new-meeting"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                        onClick={onClose} // Optional: close modal on link click
                    >
                        15 Minute Call
                    </a>
                    <a
                        href="https://calendly.com/futureflow-dev-2025/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center border border-primary/30 text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
                        onClick={onClose} // Optional: close modal on link click
                    >
                        30 Minute Call
                    </a>
                </div>
            </div>
        </div>
    );
};


const PricingPage: FC = () => {
    // 3. State to control modal visibility
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const pricingPlans: PricingPlan[] = [
        {
            id: "starter",
            name: "Starter",
            icon: <Star className="w-6 h-6" />,
            gradient: "from-yellow-500/20 to-orange-500/20",
            price: "₹10k - ₹20k",
            description: "Perfect for small businesses and startups getting their digital presence established",
            features: [
                { name: "Pages/Screens", value: "1 - 5", included: true },
                { name: "Responsive Design", value: "Yes", included: true },
                { name: "CMS/Dashboard", value: "No", included: false },
                { name: "Admin Panel", value: "No", included: false },
                { name: "API Integration", value: "No", included: false },
                { name: "SEO Setup", value: "No", included: false },
                { name: "E-commerce", value: "No", included: false },
                { name: "Revisions", value: "1", included: true },
                { name: "Delivery Time", value: "5 - 7 days", included: true }
            ],
            popular: false,
            cta: "Get Started"
        },
        {
            id: "professional",
            name: "Professional",
            icon: <Rocket className="w-6 h-6" />,
            gradient: "from-blue-500/20 to-purple-500/20",
            price: "₹25k - ₹50k",
            description: "Ideal for growing businesses that need more features and functionality",
            features: [
                { name: "Pages/Screens", value: "5 - 10", included: true },
                { name: "Responsive Design", value: "Yes", included: true },
                { name: "CMS/Dashboard", value: "Yes", included: true },
                { name: "Admin Panel", value: "Basic", included: true },
                { name: "API Integration", value: "Limited", included: true },
                { name: "SEO Setup", value: "Yes", included: true },
                { name: "E-commerce", value: "No", included: false },
                { name: "Revisions", value: "2", included: true },
                { name: "Delivery Time", value: "10 - 15 days", included: true }
            ],
            popular: true,
            cta: "Most Popular"
        },
        {
            id: "advanced",
            name: "Advanced",
            icon: <Crown className="w-6 h-6" />,
            gradient: "from-purple-500/20 to-pink-500/20",
            price: "₹60k - ₹1.2L",
            description: "Complete solution for enterprises requiring full-scale digital transformation",
            features: [
                { name: "Pages/Screens", value: "10+", included: true },
                { name: "Responsive Design", value: "Yes", included: true },
                { name: "CMS/Dashboard", value: "Yes", included: true },
                { name: "Admin Panel", value: "Full", included: true },
                { name: "API Integration", value: "All", included: true },
                { name: "SEO Setup", value: "Yes", included: true },
                { name: "E-commerce", value: "Yes", included: true },
                { name: "Revisions", value: "3+", included: true },
                { name: "Delivery Time", value: "15 - 30 days", included: true }
            ],
            popular: false,
            cta: "Go Premium"
        }
    ];
    
    const additionalServices: Addon[] = [
        { name: "Premium Animations", price: "₹5k - ₹15k", desc: "Custom animations and micro-interactions" },
        { name: "Advanced SEO", price: "₹8k - ₹20k", desc: "Comprehensive SEO optimization and setup" },
        { name: "Analytics Setup", price: "₹3k - ₹8k", desc: "Google Analytics and tracking implementation" },
        { name: "Performance Optimization", price: "₹5k - ₹12k", desc: "Speed optimization and performance tuning" }
    ];

    const FeatureIcon: FC<FeatureIconProps> = ({ included }) => (
        included ? (
            <Check className="w-4 h-4 text-green-500" />
        ) : (
            <X className="w-4 h-4 text-red-500" />
        )
    );

    return (
        <MaxWidthWrapper className="py-20">
            <div className="h-[13rem] lg:h-[15rem] hidden md:flex items-center justify-center">
                <TextHoverEffect text="FutureFlow" />
            </div>

            <AnimationContainer delay={0.1}>
                <div className="flex flex-col items-center justify-center py-10 max-w-4xl mx-auto">
                    <MagicBadge title="Pricing Plans" />
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading text-center mt-6 !leading-tight bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                        Simple, Transparent <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Pricing</span>
                    </h1>
                    <p className="text-lg md:text-xl mt-6 text-center text-gray-400 max-w-2xl leading-relaxed">
                        Choose the perfect plan for your business needs. No hidden fees, no surprises. Just honest pricing for exceptional results.
                    </p>
                </div>
            </AnimationContainer>

            <AnimationContainer delay={0.2}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative group p-8 rounded-2xl border transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${plan.popular
                                ? 'border-primary/50 bg-gradient-to-br from-primary/5 to-primary/10 shadow-lg lg:scale-105 bg-gray-900/50'
                                : 'border-gray-700/50 bg-gray-900/30 backdrop-blur-sm hover:border-primary/30'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                    {plan.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="text-3xl font-bold text-primary mb-2">{plan.price}</div>
                                <p className="text-sm text-muted-foreground">{plan.description}</p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-center justify-between text-sm">
                                        <div className="flex items-center">
                                            <FeatureIcon included={feature.included} />
                                            <span className="ml-3 text-white/80">{feature.name}</span>
                                        </div>
                                        <span className="text-gray-400 font-medium">{feature.value}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${plan.popular
                                ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:shadow-lg hover:scale-[1.02]'
                                : 'border border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/50'
                                }`}>
                                {plan.cta}
                            </button>

                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10`}></div>
                        </div>
                    ))}
                </div>
            </AnimationContainer>

            <AnimationContainer delay={0.3}>
                <div className="mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Additional <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Services</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Enhance your project with our premium add-on services for maximum impact.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {additionalServices.map((addon, index) => (
                            <div key={index} className="p-6 rounded-xl border border-gray-700/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-gray-900/30">
                                <h3 className="font-semibold mb-2 text-white">{addon.name}</h3>
                                <div className="text-primary font-bold mb-2">{addon.price}</div>
                                <p className="text-sm text-gray-400">{addon.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimationContainer>

            {/* CTA Section */}
            <AnimationContainer delay={0.4}>
                <div className="mt-32 text-center">
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 border border-primary/20 bg-gray-900/50">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                            Ready to Get <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Started?</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                            Lets discuss your project requirements and find the perfect solution for your business needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=futureflow.dev.2025@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                            >
                                Start Your Project
                            </Link>
                            {/* 4. Update the "Schedule a Call" Link to a button that opens the modal */}
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="border border-primary/30 text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
                            >
                                Schedule a Call
                            </button>
                        </div>
                    </div>
                </div>
            </AnimationContainer>

            {/* 5. Render the modal component */}
            <ScheduleCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* 6. Add animation styles for the modal */}
            <style jsx>{`
                @keyframes fade-in-up {
                  from {
                    opacity: 0;
                    transform: translateY(30px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                
                .animate-fade-in-up {
                  animation: fade-in-up 0.6s ease-out both;
                }

                @keyframes fade-in-scale {
                  from {
                    opacity: 0;
                    transform: scale(0.95);
                  }
                  to {
                    opacity: 1;
                    transform: scale(1);
                  }
                }

                .animate-fade-in-scale {
                  animation: fade-in-scale 0.3s ease-out forwards;
                }
            `}</style>
        </MaxWidthWrapper>
    );
};

export default PricingPage;