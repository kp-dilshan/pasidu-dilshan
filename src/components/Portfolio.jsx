import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Github, Mail, Phone, MapPin, ExternalLink, Download, Calendar, Award, Book, Code, Users, Lightbulb, MessageSquare, Brain, ShoppingBag, Briefcase, Plane, BookOpen, GraduationCap, Scissors, ArrowRight, Dribbble, Twitter } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Main Portfolio Component
const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Data from your original portfolio (unchanged)
    const technicalSkills = [
        { name: "Web Development", progress: 90, icon: <Code size={20} /> },
        { name: "App Development", progress: 85, icon: <Code size={20} /> },
        { name: "UI/UX Design", progress: 85, icon: <Code size={20} /> },
        { name: "Photoshop", progress: 80, icon: <Code size={20} /> },
        { name: "Revit Architecture", progress: 70, icon: <Code size={20} /> },
        { name: "AutoCAD Architecture", progress: 75, icon: <Code size={20} /> }
    ];

    const professionalSkills = [
        { name: "Creativity", progress: 85, icon: <Lightbulb size={20} /> },
        { name: "Communication", progress: 90, icon: <MessageSquare size={20} /> },
        { name: "Teamwork", progress: 88, icon: <Users size={20} /> },
        { name: "Problem Solving", progress: 85, icon: <Brain size={20} /> }
    ];

    const education = [
        { id: 1, period: "2018-2020", title: "GCE Ordinary Level", institution: "N.Vijitha College", icon: <Book />, details: ["Completed Ordinary Level examinations", "Mathematics - B", "Science - B", "English - C"] },
        { id: 2, period: "2020-2023", title: "GCE Advanced Level", institution: "Nagoda Royal College", icon: <Award />, details: ["Completed Advanced Level studies in Technology stream", "SFT - A", "ICT - A", "ET - B", "District Rank - 32"] },
        { id: 3, period: "2023-2024", title: "Advanced Diploma in Web Development", institution: "IJSE", icon: <Code />, details: ["Comprehensive web development program", "Full-stack development training", "Industry-focused curriculum", "Practical project experience"] },
        { id: 4, period: "2025-Present", title: "AutoCAD and Revit Course", institution: "Dream Cad Academy", icon: <Calendar />, details: ["6-month full architecture course", "Focus on AutoCAD, Revit, and civil architecture", "Currently in progress"] }
    ];

    const projects = [
        { title: "E-Commerce Website", description: "A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and payment integration.", tech: ["React", "Node.js", "MongoDB"], image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2532&auto=format&fit=crop", icon: <ShoppingBag size={24} />, liveLink: "https://www.behance.net/gallery/214733815/E-Commerce-Full-Website", githubLink: "https://github.com/kp-dilshan", color: "from-blue-500 to-sky-500" },
        { title: "Portfolio Website", description: "Modern and interactive portfolio website with smooth animations, responsive design, and dynamic content loading.", tech: ["React", "Framer Motion", "Tailwind CSS"], image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2670&auto=format&fit=crop", icon: <Briefcase size={24} />, liveLink: "https://www.behance.net/gallery/214734187/Portfolio-Full-Website", githubLink: "https://github.com/kp-dilshan", color: "from-purple-500 to-indigo-500" },
        { title: "Travel Guide Website", description: "Interactive travel guide platform featuring destination discovery, trip planning, and user reviews.", tech: ["React", "Node.js", "MapBox"], image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2670&auto=format&fit=crop", icon: <Plane size={24} />, liveLink: "https://www.behance.net/gallery/214734343/Travel-Guide-Full-Website", githubLink: "https://github.com/kp-dilshan", color: "from-green-500 to-emerald-500" },
        { title: "Learning Management System", description: "Comprehensive learning platform with course management, student progress tracking, and interactive content delivery.", tech: ["React", "Node.js", "PostgreSQL"], image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2670&auto=format&fit=crop", icon: <BookOpen size={24} />, liveLink: "https://www.behance.net/gallery/214734751/DK-Learning-Website", githubLink: "https://github.com/kp-dilshan", color: "from-yellow-500 to-amber-500" },
        { title: "Academy Website", description: "Educational institution website with course catalog, student portal, and administrative dashboard.", tech: ["React", "Firebase", "Material-UI"], image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2670&auto=format&fit=crop", icon: <GraduationCap size={24} />, liveLink: "https://www.behance.net/gallery/214734859/Academy-Website", githubLink: "https://github.com/kp-dilshan", color: "from-red-500 to-orange-500" },
        { title: "Salon Management System", description: "Comprehensive salon management platform with appointment booking, staff scheduling, and inventory management.", tech: ["React", "Node.js", "MySQL"], image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2670&auto=format&fit=crop", icon: <Scissors size={24} />, liveLink: "https://www.behance.net/gallery/214735021/Salon-Website", githubLink: "https://github.com/kp-dilshan", color: "from-pink-500 to-rose-500" }
    ];

    return (
        <div className="min-h-screen bg-[#0d1117] text-gray-200 font-sans">
            {/* Header */}
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

            {/* Hero Section */}
            <HeroSection />
            
            {/* Skills Section */}
            <SkillsSection technicalSkills={technicalSkills} professionalSkills={professionalSkills} />

            {/* Education Section */}
            <EducationSection education={education} />
            
            {/* Projects Section */}
            <ProjectsSection projects={projects} />
            
            {/* Contact Section */}
            <ContactSection />

            {/* Footer */}
            <Footer />
        </div>
    );
};

// Sub-components for better organization

const Header = ({ isMenuOpen, setIsMenuOpen }) => (
    <nav className="bg-[#0d1117]/80 backdrop-blur-md shadow-lg fixed w-full z-50 border-b border-gray-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
                <motion.a 
                    href="#home"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
                >
                    Pasidu Dilshan
                </motion.a>
                <div className="hidden md:flex items-center space-x-2">
                    {["Home", "Skills", "Education", "Projects", "Contact"].map((item, index) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, color: '#60a5fa' }}
                            className="px-4 py-2 text-gray-300 rounded-full transition font-medium"
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>
                <div className="flex items-center md:hidden">
                    <motion.button whileTap={{ scale: 0.9 }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>
            </div>
        </div>
        {isMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden pb-4">
                {["Home", "Skills", "Education", "Projects", "Contact"].map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 text-lg text-gray-300 hover:bg-gray-800 rounded-md">
                        {item}
                    </a>
                ))}
            </motion.div>
        )}
    </nav>
);

const HeroSection = () => {
    const roles = ["Web Developer", "App Developer", "UI/UX Designer", "Architecture Enthusiast"];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const canvasRef = React.useRef(null);

    // Typing animation effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [roles.length]);

    // WOW feeling animated background effect
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();

        const mouse = { x: null, y: null };
        window.addEventListener('mousemove', (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
        });
        window.addEventListener('mouseout', () => {
            mouse.x = null;
            mouse.y = null;
        });

        class Particle {
            constructor(x, y, size, color, speedX, speedY) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.color = color;
                this.speedX = speedX;
                this.speedY = speedY;
                this.baseSize = size;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
            update() {
                if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
                if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;

                this.x += this.speedX;
                this.y += this.speedY;
                
                // Pulsating effect
                this.size = this.baseSize + Math.sin(Date.now() * 0.001 + this.x) * 0.5;

                this.draw();
            }
        }
        
        let particlesArray = [];
        const init = () => {
            particlesArray = [];
            let numberOfParticles = (canvas.width * canvas.height) / 10000;
            for(let i = 0; i < numberOfParticles; i++) {
                let size = Math.random() * 2 + 1;
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                let speedX = Math.random() * 0.4 - 0.2;
                let speedY = Math.random() * 0.4 - 0.2;
                let color = `hsl(${Math.random() * 50 + 190}, 100%, 50%)`;
                particlesArray.push(new Particle(x, y, size, color, speedX, speedY));
            }
        };

        const connect = () => {
            for (let i = 0; i < particlesArray.length; i++) {
                // Connect particles to mouse
                if (mouse.x && mouse.y) {
                    let distanceToMouse = Math.sqrt(Math.pow(particlesArray[i].x - mouse.x, 2) + Math.pow(particlesArray[i].y - mouse.y, 2));
                    if (distanceToMouse < 250) {
                        ctx.strokeStyle = `rgba(173, 216, 230, ${1 - distanceToMouse/250})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }
                // Connect particles to each other
                for (let j = i + 1; j < particlesArray.length; j++) {
                    let distance = Math.sqrt(Math.pow(particlesArray[i].x - particlesArray[j].x, 2) + Math.pow(particlesArray[i].y - particlesArray[j].y, 2));
                    if (distance < 120) {
                        ctx.strokeStyle = `rgba(173, 216, 230, ${0.8 - distance/120})`;
                        ctx.lineWidth = 0.2;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (const particle of particlesArray) {
                particle.update();
            }
            connect();
        };

        init();
        animate();

        const handleResize = () => {
            cancelAnimationFrame(animationFrameId);
            setCanvasSize();
            init();
            animate();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', ()=>{});
            window.removeEventListener('mouseout', ()=>{});
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0"></canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] via-[#161b22] to-[#0d1117] opacity-80 z-[1]"></div>
            
            <div className="max-w-4xl mx-auto px-4 text-center z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src="/bg.png" alt="Profile" className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-gray-700 shadow-lg"/>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="text-gray-100">Hi, I'm </span>
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Pasidu Dilshan</span>
                    </h1>
                    <div className="text-xl md:text-2xl text-blue-300 font-medium h-8 mb-6">
                        <motion.span
                            key={currentRoleIndex}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.5 }}
                        >
                            {roles[currentRoleIndex]}
                        </motion.span>
                    </div>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                        I bridge the gap between functionality and aesthetics, crafting digital experiences that are seamless, intuitive, and visually compelling.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#contact" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold flex items-center gap-2 group shadow-lg">
                            Get In Touch <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#" className="px-8 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white rounded-full font-semibold flex items-center gap-2">
                            <Download className="w-5 h-5" /> Download CV
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SkillsSection = ({ technicalSkills, professionalSkills }) => (
    <section id="skills" className="py-24 bg-[#161b22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text inline-block">My Personal Skills</h2>
                <p className="text-gray-400 mt-4 text-lg">The tools and talents I use to bring ideas to life.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12">
                <SkillCategory title="Technical Skills" icon={<Code />} skills={technicalSkills} gradient="from-blue-500 to-sky-500" />
                <SkillCategory title="Professional Skills" icon={<Users />} skills={professionalSkills} gradient="from-purple-500 to-indigo-500" />
            </div>
        </div>
    </section>
);

const SkillCategory = ({ title, icon, skills, gradient }) => (
    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gray-800/40 p-8 rounded-2xl shadow-lg border border-gray-700/50">
        <h3 className="text-2xl font-semibold text-gray-100 mb-6 flex items-center gap-3">
            <div className={`p-2 rounded-md bg-gradient-to-r ${gradient}`}>{icon}</div> {title}
        </h3>
        <div className="space-y-6">
            {skills.map((skill, index) => (
                <SkillBar key={index} skill={skill} gradient={gradient} delay={index * 0.1} />
            ))}
        </div>
    </motion.div>
);

const SkillBar = ({ skill, gradient, delay }) => (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay }} viewport={{ once: true }}>
        <div className="flex justify-between items-center mb-2">
            <div className="flex items-center text-gray-300 gap-2">
                {skill.icon} <span>{skill.name}</span>
            </div>
            <span className="text-blue-300 font-semibold">{skill.progress}%</span>
        </div>
        <div className="h-2.5 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.progress}%` }}
                transition={{ duration: 1, ease: "easeOut", delay: delay + 0.3 }}
                viewport={{ once: true }}
                className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
            />
        </div>
    </motion.div>
);

const EducationSection = ({ education }) => (
    <section id="education" className="py-24 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text inline-block">Education & Journey</h2>
                <p className="text-gray-400 mt-4 text-lg">My path of learning and growth.</p>
            </motion.div>
            <div className="relative">
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-1 h-full bg-gray-700/50 rounded-full" />
                {education.map((item, index) => <TimelineItem key={item.id} item={item} index={index} />)}
            </div>
        </div>
    </section>
);

const TimelineItem = ({ item, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className={`relative flex items-start mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-blue-400 flex items-center justify-center text-blue-400">
                {item.icon}
            </div>
        </div>
        <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-12`}>
            <motion.div whileHover={{ scale: 1.03, y: -5 }} className="bg-gray-800/50 border border-gray-700/50 p-6 rounded-lg shadow-lg hover:shadow-blue-500/10 transition-all cursor-pointer">
                <span className="text-blue-400 text-sm font-semibold">{item.period}</span>
                <h3 className="text-xl font-bold text-gray-100 mt-2">{item.title}</h3>
                <h4 className="text-blue-300 font-medium mt-1">{item.institution}</h4>
                <ul className="mt-4 space-y-2 text-gray-400">
                    {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                            <ArrowRight size={14} className="mr-2 mt-1 text-blue-400 flex-shrink-0" /> {detail}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    </motion.div>
);

const ProjectsSection = ({ projects }) => (
    <section id="projects" className="py-24 bg-[#161b22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text inline-block">My Creative Works</h2>
                <p className="text-gray-400 mt-4 text-lg">A selection of projects that showcase my passion.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => <ProjectCard key={index} project={project} index={index} />)}
            </div>
        </div>
    </section>
);

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        className="bg-gray-800/40 rounded-xl overflow-hidden shadow-lg border border-gray-700/50 flex flex-col"
    >
        <div className="relative group">
            <img src={project.image} alt={project.title} className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className={`absolute top-4 right-4 p-3 rounded-xl bg-gradient-to-r ${project.color}`}>{project.icon}</div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold mb-2 text-gray-100">{project.title}</h3>
            <p className="text-gray-400 mb-4 text-sm flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-gray-700 text-blue-300 rounded-full">{tech}</span>
                ))}
            </div>
            <div className="mt-auto flex gap-4 pt-4 border-t border-gray-700/50">
                <motion.a whileHover={{ scale: 1.05 }} href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2">
                    <ExternalLink size={16} /> Live Demo
                </motion.a>
                <motion.a whileHover={{ scale: 1.05 }} href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded-md text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2">
                    <Github size={16} /> Source Code
                </motion.a>
            </div>
        </div>
    </motion.div>
);

const ContactSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add form submission logic here (e.g., EmailJS, Formspree)
        alert("Thank you for your message!");
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-24 bg-[#0d1117]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text inline-block">Let's Build Something Amazing</h2>
                    <p className="text-gray-400 mt-4 text-lg">Have a project in mind or just want to say hi? Feel free to reach out.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-gray-800/40 border border-gray-700/50 rounded-2xl p-8 md:p-12 shadow-2xl">
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Your Name" className="w-full p-4 rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                            <input type="email" placeholder="Your Email" className="w-full p-4 rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                        </div>
                        <textarea placeholder="Your Message" rows="6" className="w-full p-4 rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required />
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-shadow">
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="bg-[#161b22] text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-xl font-bold text-white mb-3">Pasidu Dilshan</h3>
                    <p className="text-sm">A passionate developer creating seamless digital experiences from Sri Lanka.</p>
                    <div className="flex justify-center md:justify-start space-x-4 mt-4">
                        <SocialIcon href="https://github.com/kp-dilshan" icon={<Github size={20} />} />
                        <SocialIcon href="https://lk.linkedin.com/in/kariyawasam-pasidu-3b7167338" icon={<Linkedin size={20} />} />
                        <SocialIcon href="#" icon={<Twitter size={20} />} />
                        <SocialIcon href="#" icon={<Dribbble size={20} />} />
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
                        <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></li>
                        <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
                        <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Contact Info</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center justify-center md:justify-start gap-2"><MapPin size={16} /> Udagedara Wattha, Galle, Sri Lanka</li>
                        <li className="flex items-center justify-center md:justify-start gap-2"><Phone size={16} /> +94 756438176</li>
                        <li className="flex items-center justify-center md:justify-start gap-2"><Mail size={16} /> kariyawasampasidu@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Pasidu Dilshan. All rights reserved. Designed & Built with ❤️.</p>
            </div>
        </div>
    </footer>
);

const SocialIcon = ({ href, icon }) => (
    <motion.a whileHover={{ y: -3, scale: 1.1 }} href={href} className="text-gray-400 hover:text-blue-400 transition-colors">
        {icon}
    </motion.a>
);

export default Portfolio;



