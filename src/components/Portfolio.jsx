import React, { useState } from 'react';
import { Menu, X, Linkedin, Github,Mail, Phone, MapPin, ExternalLink, Download, Calendar, Award, Book, Code, Users, Lightbulb, MessageSquare, Brain, ShoppingBag, Briefcase, Plane, BookOpen, GraduationCap, Scissors,ArrowRight} from 'lucide-react';

import { motion } from 'framer-motion';


const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const technicalSkills = [
    { name: "web development", progress: 90, icon: <Code size={20} /> },
    { name: "App development", progress: 85, icon: <Code size={20} /> },
    { name: "Ui Ux design", progress: 85, icon: <Code size={20} /> },
    { name: "Photoshop", progress: 80, icon: <Code size={20} /> },
    { name: "Revit architecture", progress: 70, icon: <Code size={20} /> },
    { name: "Autocad architecture", progress: 75, icon: <Code size={20} /> }
  ];

  const professionalSkills = [
    { name: "Creativity", progress: 85, icon: <Lightbulb size={20} /> },
    { name: "Communication", progress: 90, icon: <MessageSquare size={20} /> },
    { name: "Teamwork", progress: 88, icon: <Users size={20} /> },
    { name: "Problem Solving", progress: 85, icon: <Brain size={20} /> }
  ];


  const EducationTimeline = () => {
    const education = [
      {
        id: 1,
        period: "2018-2020",
        title: "GCE Ordinary Level",
        institution: "N.Vijitha College",
        icon: <Book />,
        details: [
          "Completed Ordinary Level examinations",
          "Mathematics - B",
          "Science - B",
          "English - C"
        ]
      },
      {
        id: 2,
        period: "2020-2023",
        title: "GCE Advanced Level",
        institution: "Nagoda Royal College",
        icon: <Award />,
        details: [
          "Completed Advanced Level studies in Technology stream",
          "SFT - A",
          "ICT - A",
          "ET - B",
          "District Rank - 32"
        ]
      },
      {
        id: 4,
        period: "2025-Present",
        title: "Autocad and Revit Coure ",
        institution: "Dream Cad Academy",
        icon: <Calendar />,
        details: [
          "6 month dream cad academy full  architecture course",
          "Focus on autocad ,revit software and civil architecture theory / practical",
          "Currently in progress"
        ]
      },
      {
        id: 3,
        period: "2023-2024",
        title: "Advanced Diploma in Web Development",
        institution: "IJSE (Institute of Java Software Engineering)",
        icon: <Code />,
        details: [
          "Comprehensive web development program",
          "Full-stack development training",
          "Industry-focused curriculum",
          "Practical project experience"
        ]
      }
    ];
  
    return (
      <div className="relative container mx-auto px-4">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-400" />
  
        {/* Timeline items */}
        {education.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative flex md:flex-row ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            } items-start mb-16`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-px md:-translate-x-1/2 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                {item.icon}
              </div>
            </div>
  
            {/* Content */}
            <div className={`w-full md:w-1/2 ${
              index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
            } pl-12`}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <span className="text-blue-400 text-sm font-semibold">
                  {item.period}
                </span>
                <h3 className="text-xl font-bold text-white mt-2">
                  {item.title}
                </h3>
                <h4 className="text-blue-300 font-medium mt-1">
                  {item.institution}
                </h4>
                <ul className="mt-4 space-y-2">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start">
                      <span className="mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };


  const projects = [
    {
      title: "E-Commerce Website",
      description: "A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and payment integration. Implements responsive design and modern UI/UX principles.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Tailwind CSS"],
      image: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2020/06/Help-Scout_s-homepage-1024x477.webp",
      icon: <ShoppingBag size={24} />,
      liveLink: "https://www.behance.net/gallery/214733815/E-Commerce-Full-Website",
      githubLink: "https://github.com/kp-dilshan",
      color: "from-blue-600 to-blue-400"
    },
    {
      title: "Portfolio Website",
      description: "Modern and interactive portfolio website with smooth animations, responsive design, and dynamic content loading. Features dark mode and contact form integration.",
      tech: ["React", "Framer Motion", "Tailwind CSS", "Email.js"],
      image: "https://repository-images.githubusercontent.com/279903174/e6d970ed-8a4d-42fa-9f16-0b7efc34fb95",
      icon: <Briefcase size={24} />,
      liveLink: "https://www.behance.net/gallery/214734187/Portfolio-Full-Website",
      githubLink: "https://github.com/kp-dilshan",
      color: "from-purple-600 to-purple-400"
    },
    {
      title: "Travel Guide Website",
      description: "Interactive travel guide platform featuring destination discovery, trip planning, and user reviews. Includes map integration and weather forecasts.",
      tech: ["React", "Node.js", "MongoDB", "MapBox", "Weather API"],
      image: "https://skift.com/wp-content/uploads/2022/06/Italy-Frame.png",
      icon: <Plane size={24} />,
      liveLink: "https://www.behance.net/gallery/214734343/Travel-Guide-Full-Website",
      githubLink: "https://github.com/kp-dilshan",
      color: "from-green-600 to-green-400"
    },
    {
      title: "Learning Management System",
      description: "Comprehensive learning platform with course management, student progress tracking, and interactive content delivery. Includes video streaming and quiz features.",
      tech: ["React", "Node.js", "PostgreSQL", "Socket.io", "AWS"],
      image: "https://repository-images.githubusercontent.com/717351392/a4e4296a-de4d-44b4-9af9-772cb8f8d05a",
      icon: <BookOpen size={24} />,
      liveLink: "https://www.behance.net/gallery/214734751/DK-Learning-Website",
      githubLink: "https://github.com/kp-dilshan",
      color: "from-yellow-600 to-yellow-400"
    },
    {
      title: "Academy Website",
      description: "Educational institution website with course catalog, student portal, and administrative dashboard. Features online enrollment and payment processing.",
      tech: ["React", "Firebase", "Material-UI", "Redux", "Node.js"],
      image: "https://www.misbahwp.com/cdn/shop/files/free-university-wordpress-theme.png?v=1715157681",
      icon: <GraduationCap size={24} />,
      liveLink: "https://www.behance.net/gallery/214734859/Academy-Website",
      githubLink: "https://github.com/kp-dilshan",
      color: "from-red-600 to-red-400"
    },
    {
      title: "Salon Management System",
      description: "Comprehensive salon management platform with appointment booking, staff scheduling, and inventory management. Includes customer relationship management.",
      tech: ["React", "Node.js", "MySQL", "Redux", "Bootstrap"],
      image: "https://colorlib.com/wp/wp-content/uploads/sites/2/hair-salon-branding-design.jpg",
      icon: <Scissors size={24} />,
      liveLink: "https://www.behance.net/gallery/214735021/Salon-Website",
      githubLink: "https://github.com/kp-dilshan",
      color: "from-pink-600 to-pink-400"
    }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
Navigation Bar Updates:
Made the navbar taller with more padding (h-20) for a modern look
Added a backdrop blur effect for a sleek glass-morphism style
Changed the logo text to a gradient
Added smooth hover and tap animations to all navigation links
Improved mobile menu with smoother animations and better spacing
Added rounded-full style to navigation items for a modern touch
Hero Section Improvements:
Enhanced the background with larger, more subtle gradient blobs
Added a decorative grid pattern for a tech/developer aesthetic
Improved the profile image presentation with an animated ring
Added subtle floating elements around the profile image
Enhanced the "Pasidu Dilshan" name with an animated underline
Redesigned CTA buttons with better hover effects and shadows
Added social media links with hover animations
Improved the scroll indicator animation
Enhanced responsiveness for all screen sizes
Added more subtle animations throughout the section
These changes create a more immersive, visually appealing hero section that maintains the original content while making it feel more modern and impressive. The combination of glass-morphism, subtle gradients, and fluid animations gives it that "wow factor" you were looking for.

To implement these changes, simply replace your existing navigation and hero sections with the code I've provided. Do you want me to make any specific adjustments to these updates?







{/* Updated Navigation */}
<nav className="bg-gray-900/80 backdrop-blur-md shadow-lg fixed w-full z-10 border-b border-gray-800/80">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex justify-between h-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center"
      >
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Pasidu Dilshan</span>
      </motion.div>
      
      <div className="flex items-center md:hidden">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-300 hover:text-white p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>
      
      <div className="hidden md:flex items-center space-x-1">
        {["Home", "Skills", "Education", "Projects", "Contact"].map((item, index) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-full transition font-medium"
          >
            {item}
          </motion.a>
        ))}
      </div>
    </div>
  </div>
  
  {isMenuOpen && (
    <motion.div 
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.2 }}
      className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800/80"
    >
      <div className="px-2 py-3 space-y-1">
        {["Home", "Skills", "Education", "Projects", "Contact"].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            whileTap={{ scale: 0.95 }}
            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition"
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </motion.a>
        ))}
      </div>
    </motion.div>
  )}
</nav>


   <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 via-blue-900/30 to-gray-900">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
    <div className="absolute top-40 right-20 w-80 h-80 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000" />
    <div className="absolute bottom-40 left-20 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
    
    {/* Grid overlay for tech feel */}
    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
    
    {/* Additional floating elements */}
    <motion.div
      animate={{ 
        y: [0, -10, 0],
        rotate: [0, 5, 0]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      className="absolute top-32 left-10 w-6 h-6 bg-blue-400 rounded-full opacity-30"
    />
    <motion.div
      animate={{ 
        y: [0, 15, 0],
        rotate: [0, -5, 0]
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      className="absolute top-40 right-32 w-8 h-8 bg-purple-400 rounded opacity-30"
    />
  </div>

  <div className="max-w-7xl mx-auto px-4 pt-36 pb-20 relative">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-center lg:text-left space-y-8"
      >
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <span className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm font-medium border border-blue-500/20 backdrop-blur-sm shadow-lg">
              Developer & Architecture
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Pasidu Dilshan
              </span>
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.9, duration: 0.8 }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Crafting digital experiences through creative web/app development. Specialized in building modern, responsive, and user-friendly applications.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-blue-500/30 transition-all"
          >
            Let's Talk
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "rgba(55, 65, 81, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="w-full sm:w-auto px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-700/50 transition-all"
          >
            <Download className="w-4 h-4" />
            Download CV
          </motion.a>
        </motion.div>
        
        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center lg:justify-start space-x-5 pt-4"
        >
          <motion.a 
            whileHover={{ y: -3, color: "#0077B5" }}
            href="https://lk.linkedin.com/in/kariyawasam-pasidu-3b7167338" 
            className="text-gray-400 hover:text-blue-400 transition-all"
          >
            <Linkedin size={22} />
          </motion.a>
          <motion.a 
            whileHover={{ y: -3, color: "#333" }}
            href="https://github.com/kp-dilshan" 
            className="text-gray-400 hover:text-white transition-all"
          >
            <Github size={22} />
          </motion.a>
          <motion.a 
            whileHover={{ y: -3, color: "#EA4335" }}
            href="mailto:kariyawasampasidu@gmail.com" 
            className="text-gray-400 hover:text-red-400 transition-all"
          >
            <Mail size={22} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Hero Image/Animation */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative hidden lg:block"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl opacity-30"></div>
        <motion.div
          animate={{ 
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="relative z-10"
        >
          {/* Decorative ring */}
          <motion.div 
            className="absolute inset-0 border-8 border-blue-400/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          <img
            src="bg.png"
            alt="Profile"
            className="rounded-full w-96 h-96 object-cover mx-auto border-4 border-blue-500/30 shadow-2xl"
          />
          
          {/* Floating Elements */}
          <motion.div
            animate={{ 
              rotate: [0, 360],
              y: [0, -10, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white transform rotate-12 shadow-lg backdrop-blur-sm"
          >
            <Code className="w-8 h-8" />
          </motion.div>
          
          <motion.div
            animate={{ 
              rotate: [0, -360],
              y: [0, 10, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="absolute -bottom-4 -left-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg backdrop-blur-sm"
          >
            <Brain className="w-6 h-6" />
          </motion.div>
          
          {/* Additional tech elements */}
          <motion.div
            animate={{ 
              rotate: [0, 180, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute top-8 left-0 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-md flex items-center justify-center text-white transform -rotate-12 shadow-lg backdrop-blur-sm"
          >
            <Briefcase className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8 }}
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
  >
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop"
      }}
      className="w-6 h-10 rounded-full border-2 border-blue-400/50 flex items-start justify-center p-2"
    >
      <motion.div 
        animate={{ 
          y: [0, 12, 0],
          opacity: [1, 0.3, 1]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop"
        }}
        className="w-1.5 h-1.5 rounded-full bg-blue-400" 
      />
    </motion.div>
  </motion.div>
    </section>

      

      
  {/* Skills Section */}
  <section id="skills" className="py-20 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold text-blue-400">Skills & Expertise</h2>
        <p className="text-gray-300 mt-4">My technical and professional skillset</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h3 className="text-xl font-semibold text-blue-400 mb-6 flex items-center">
              <Code className="mr-2" /> Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center text-gray-300">
                      {skill.icon}
                      <span className="ml-2">{skill.name}</span>
                    </div>
                    <span className="text-blue-400">{skill.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      transition={{
                        duration: 1,
                        delay: 0.5,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Professional Skills */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
            <h3 className="text-xl font-semibold text-blue-400 mb-6 flex items-center">
              <Users className="mr-2" /> Professional Skills
            </h3>
            <div className="space-y-6">
              {professionalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center text-gray-300">
                      {skill.icon}
                      <span className="ml-2">{skill.name}</span>
                    </div>
                    <span className="text-blue-400">{skill.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      transition={{
                        duration: 1,
                        delay: 0.5,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>


      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-blue-400">Education & Qualifications</h2>
            <p className="text-gray-300 mt-4">My academic journey and professional development</p>
          </motion.div>

          <EducationTimeline />
        </div>
      </section>


    {/* Projects Section */}
  <section id="projects" className="py-20 bg-gray-900">
    <div className="max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold text-blue-400">Featured Projects</h2>
        <p className="text-gray-300 mt-4">Explore my latest web development projects</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-xl"
          >
            <div className="relative group">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={project.liveLink}
                    className="p-2 bg-white rounded-full text-gray-900 hover:bg-blue-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={project.githubLink}
                    className="p-2 bg-white rounded-full text-gray-900 hover:bg-blue-400 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>
              <div className="absolute -bottom-6 left-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color}`}>
                  {project.icon}
                </div>
              </div>
            </div>

            <div className="p-6 pt-8">
              <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-sm line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-3 py-1 bg-gray-700 text-gray-300 rounded-full flex items-center"
                  >
                    <Code size={12} className="mr-1" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Contact Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <Phone className="text-blue-400" size={24} />
                <span className="text-gray-300">+94 756438176</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-400" size={24} />
                <span className="text-gray-300">kariyawasampasidu@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-blue-400" size={24} />
                <span className="text-gray-300">Udagedara Wattha,Galle, Sri Lanka</span>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleFormSubmit}
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/kp-dilshan" className="text-gray-400 hover:text-blue-400 transition">
              <Github size={24} />
            </a>
            <a href="https://lk.linkedin.com/in/kariyawasam-pasidu-3b7167338" className="text-gray-400 hover:text-blue-400 transition">
              <Linkedin size={24} />
            </a>
          </div>
          <p className="text-gray-400">© 2025 Pasidu Dilshan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
