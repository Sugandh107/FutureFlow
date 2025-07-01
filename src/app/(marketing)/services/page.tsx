import { AnimationContainer, MaxWidthWrapper } from "@/components";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import MagicBadge from "@/components/ui/magic-badge";
import { FAQ } from "@/utils/constants/faq";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import ComputerRoundedIcon from '@mui/icons-material/ComputerRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import StayCurrentPortraitRoundedIcon from '@mui/icons-material/StayCurrentPortraitRounded';
// Enhanced services data with more details
const services = [
    {
        id: "website-design",
        title: "Website Design & Development",
        description: "Stunning, high-performance websites that convert visitors into customers. Built with cutting-edge technologies and optimized for speed, SEO, and user experience.",
        features: ["Responsive Design", "SEO Optimized", "Lightning Fast", "Conversion Focused"],
        icon: <LanguageRoundedIcon />,
        gradient: "from-blue-500/20 to-cyan-500/20",
        price: "Starting at $2,999",
        popular: true
    },
    {
        id: "mobile-app",
        title: "Mobile App Development",
        description: "Next-generation mobile applications that deliver exceptional user experiences. From concept to App Store, we create apps that users love and engage with daily.",
        features: ["iOS & Android", "Cross-Platform", "Native Performance", "App Store Ready"],
        icon: <StayCurrentPortraitRoundedIcon />,
        gradient: "from-purple-500/20 to-pink-500/20",
        price: "Starting at $4,999",
        popular: true
    },
    {
        id: "ui-ux-design",
        title: "UI/UX Design",
        description: "Award-winning design solutions that combine psychology, aesthetics, and functionality. We create interfaces that users intuitively understand and love to use.",
        features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
        icon: <ColorLensRoundedIcon />,
        gradient: "from-orange-500/20 to-red-500/20",
        price: "Starting at $1,999",
        popular: false
    },
    {
        id: "backend-api",
        title: "Backend/API Development",
        description: "Rock-solid backend infrastructure that scales with your business. Secure, fast, and reliable systems that power your applications and handle millions of requests.",
        features: ["RESTful APIs", "Database Design", "Cloud Integration", "Security First"],
        icon: <SettingsRoundedIcon />,
        gradient: "from-green-500/20 to-emerald-500/20",
        popular: false
    },
    {
        id: "seo-hosting",
        title: "SEO, Hosting & Maintenance",
        description: "Complete digital ecosystem management. From search engine domination to bulletproof hosting and proactive maintenance that keeps your business running 24/7.",
        features: ["SEO Optimization", "Cloud Hosting", "24/7 Monitoring", "Regular Updates"],
        icon: <ComputerRoundedIcon />,
        gradient: "from-indigo-500/20 to-purple-500/20",
        popular: false
    },
];

const ServicesPage = () => {
    return (
        <MaxWidthWrapper className="mb-40">
            <div className="h-[13rem] lg:h-[15rem] hidden md:flex items-center justify-center">
                <TextHoverEffect text="FutureFlow" />
            </div>
            
            <AnimationContainer delay={0.1}>
                <div className="flex flex-col items-center justify-center py-10 max-w-4xl mx-auto">
                    <MagicBadge title="Our Services" />
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading text-center mt-6 !leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                        Services That Drive <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Success</span>
                    </h1>
                    <p className="text-lg md:text-xl mt-6 text-center text-muted-foreground max-w-2xl leading-relaxed">
                        Comprehensive digital solutions tailored to your business needs. From concept to deployment and beyond, we deliver excellence at every step.
                    </p>
                </div>
            </AnimationContainer>

            <AnimationContainer delay={0.2}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`relative group p-8 rounded-2xl border transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${
                                service.popular 
                                    ? 'border-primary/50 bg-gradient-to-br from-primary/5 to-primary/10 shadow-lg' 
                                    : 'border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/30'
                            }`}
                        >
                            {service.popular && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                                        Most Popular
                                    </div>
                                </div>
                            )}
                            
                            <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} text-3xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                {service.icon}
                            </div>
                            
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                    
                                </div>
                                
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    {service.description}
                                </p>
                                
                                <div className="space-y-3 pt-4">
                                    {service.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center text-sm">
                                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-primary/60 mr-3 flex-shrink-0"></div>
                                            <span className="text-foreground/80">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                
                               
                            </div>
                            
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10`}></div>
                        </div>
                    ))}
                </div>
            </AnimationContainer>

            {/* Process Section */}
            <AnimationContainer delay={0.25}>
                <div className="mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Process</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            A proven methodology that ensures successful project delivery and exceptional results.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Discovery", desc: "Understanding your vision and requirements" },
                            { step: "02", title: "Strategy", desc: "Planning the perfect solution for your needs" },
                            { step: "03", title: "Development", desc: "Building with precision and attention to detail" },
                            { step: "04", title: "Launch", desc: "Deploying and optimizing for maximum impact" }
                        ].map((process, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                                    {process.step}
                                </div>
                                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                                    {process.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {process.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimationContainer>

            <AnimationContainer delay={0.3}>
                <div className="mt-32 w-full">
                    <div className="flex flex-col items-center justify-center w-full pt-12">
                        <h2 className="mt-6 text-3xl md:text-4xl font-bold text-center">
                            Frequently Asked Questions
                        </h2>
                        <p className="max-w-2xl mt-6 text-center text-muted-foreground">
                            Here are some of the most common questions we get asked about our services. If you have a question that isn&apos;t answered here, feel free to reach out to us.
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto w-full mt-20">
                        <Accordion type="single" collapsible className="space-y-4">
                            {FAQ.map((faq) => (
                                <AccordionItem key={faq.id} value={faq.id} className="border border-border/50 rounded-xl px-6 hover:border-primary/30 transition-colors">
                                    <AccordionTrigger className="text-left hover:text-primary">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </AnimationContainer>
        </MaxWidthWrapper>
    );
};

export default ServicesPage;