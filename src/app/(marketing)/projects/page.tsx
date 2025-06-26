import React from 'react'
import AnimationContainer from "@/components/global/animation-container";
import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";
import projects from "@/data/projects"; // Assuming you have a projects data file

const EnterprisePage = () => {
    // const projects = [
    //     {
    //         id: 1,
    //         title: "Cyber Security Learning Platform - SkodCyber",
    //         description: "A fully-fledged cyber security education platform designed for learners to enhance their skills through video-based learning, interactive quizzes, structured modules, and insightful blogs. Users can progress through courses, test their understanding with assessments, and stay updated with the latest in cyber security.",
    //         image: "/assets/projectSkod.png", // You can replace this with an actual image path
    //         technologies: ["React", "Next.js", "MongoDB", "Tailwind CSS", "Socket.io", "Cloudinary"],
    //         category: "EdTech / Cyber Security",
    //         borderColor: "from-red-500 to-amber-600",
    //         live: "https://skod-cyber.vercel.app/",
    //     },
    //     {
    //         id: 2,
    //         title: "Upskill Academy – Professional IT Training Platform",
    //         description: "Upskill Academy offers industry-focused training programs designed to equip learners with in-demand skills in Web Development, Cloud Computing, Business Analytics, Digital Media, Database Management, Networking, and more. Courses range from 2 to 6 months with a focus on hands-on learning and real-world application.",
    //         image: "/assets/upskill.png", // Make sure the image path is correct
    //         technologies: ["Vue.js", "Node.js", "MongoDB", "Chart.js"],
    //         category: "EdTech / IT Training",
    //         borderColor: "from-sky-500 to-indigo-600",
    //         live: "https://upskilldigitalacademy.vercel.app/"
    //     },
    //     {
    //         id: 3,
    //         title: "MediCare – Hospital Management System",
    //         description: "MediCare is a comprehensive hospital management system built using the MERN stack. It streamlines hospital operations with secure authentication, appointment scheduling, patient records, real-time doctor-patient communication, and a powerful admin dashboard. Designed for scalability and ease of use, MediCare enhances healthcare efficiency and improves the overall patient experience.",
    //         image: "/assets/medicare.png", // Replace with your actual image path
    //         technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    //         category: "Healthcare / Management System",
    //         borderColor: "from-green-500 to-cyan-600",
    //         live: "https://medicare-ai-frontend.vercel.app/" // Replace with actual deployed URL
    //     },
    //     {
    //         id: 4,
    //         title: "SmartRecruit: AI-Powered Recruitment System",
    //         description: "SmartRecruit is an open-source recruitment platform that revolutionizes the hiring process using automation and intelligent technologies. It features aptitude auto-validation with cheat detection, a multi-language coding assessment system, HR video interviews, real-time face monitoring, and automated candidate communication. Designed to eliminate inefficiencies and ensure assessment integrity.",
    //         image: "/assets/projectSmartrecruit.png", // Update path if needed
    //         technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
    //         category: "Recruitment Tech / Automation",
    //         borderColor: "from-rose-500 to-indigo-600",
    //         live: "https://smartrecruit.vercel.app/"
    //     },


    // ];

    return (

        <div className="flex flex-col items-center justify-center py-16 px-4">
            <AnimationContainer delay={0.1}>
                <div className="text-center mb-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-center !leading-tight">
                        Crafting Digital
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent"> Excellence</span>
                    </h1>

                    <p className="text-lg md:text-xl mt-4 text-center text-muted-foreground max-w-3xl mx-auto">
                        Discover our latest projects where innovation meets functionality. We transform ideas into powerful digital experiences that drive results and exceed expectations.
                    </p>
                </div>
            </AnimationContainer>

            <div className="w-full max-w-7xl mx-auto space-y-12">
                {projects.map((project, index) => (
                    <AnimationContainer
                        key={project.id}
                        delay={0.2 + (index * 0.1)}
                        className="relative"
                    >
                        <div className="grid lg:grid-cols-2 gap-8 items-center">
                            {/* Project Info */}
                            <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} space-y-4`}>
                                <h2 className="text-2xl md:text-3xl font-bold font-heading">
                                    {project.title}
                                </h2>

                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Live Project Link */}
                                <div className="pt-2">
                                    <a href={project.live} className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-300">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm font-medium">View Live Project</span>
                                    </a>
                                </div>
                            </div>

                            {/* Project Image with Border Animation */}
                            <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} relative pt-8 pb-8 md:py-12 px-2 bg-transparent w-full`}>
                                <div className="absolute md:top-[10%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow"></div>

                                <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                                    <BorderBeam
                                        size={250}
                                        duration={12}
                                        delay={9}
                                    />

                                    <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-md lg:rounded-xl bg-foreground/10 ring-1 ring-border overflow-hidden">
                                        {/* Placeholder for project image */}
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover rounded-md lg:rounded-xl"
                                        />
                                    </div>

                                    <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-background z-40"></div>
                                    <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50"></div>
                                </div>
                            </div>
                        </div>
                    </AnimationContainer>
                ))}
            </div>

            {/* Call to Action */}
            <AnimationContainer delay={0.5} className="text-center mt-20">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Lets collaborate to bring your vision to life. Get in touch with us to discuss your next digital project.
                    </p>
                    <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-400 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 text-lg">
                        Start Your Project
                    </button>
                </div>
            </AnimationContainer>
        </div>
    )
};

export default EnterprisePage