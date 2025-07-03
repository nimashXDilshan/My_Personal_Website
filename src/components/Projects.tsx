import React, { useState } from 'react';
import { ExternalLink, Github, Code, Database, Globe, Smartphone, MapPin, Trophy, X } from 'lucide-react';

import Im1 from '../../public/assets/projects/learnconnect/Screenshot 2025-07-03 113830.png';
import Im2 from '../../public/assets/projects/learnconnect/Screenshot 2025-07-03 113847.png';
import Im3 from '../../public/assets/projects/learnconnect/Screenshot 2025-07-03 113933.png';
import Im4 from '../../public/assets/projects/learnconnect/Screenshot 2025-07-03 113949.png';

import Im5 from '../../public/assets/projects/mycampushome/Screenshot 2025-07-03 114606.png';
import Im6 from '../../public/assets/projects/mycampushome/Screenshot 2025-07-03 114619.png';
import Im7 from '../../public/assets/projects/mycampushome/Screenshot 2025-07-03 114703.png';

import Im8 from '../../public/assets/projects/spritx/Screenshot 2025-07-03 120400.png';
import Certificate from '../../public/assets/projects/spritx/Screenshot 2025-07-03 155424.png';

const Projects = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  type TechIcons = {
    [key: string]: React.ReactNode;
  };

  const projects = [
    {
      id: 1,
      title: "LearnConnect - Online Learning Platform",
      description: "A comprehensive online learning platform...",
      longDescription: "LearnConnect is a full-featured online learning platform...",
      technologies: ["React.js", "Django", "MongoDB", "Firebase"],
      features: [
        "User Authentication & Role Management",
        "Course Catalog with Advanced Filtering",
        "Interactive Learning Dashboard",
        "Tutor-Student Matching System",
        "Progress Tracking & Analytics",
        "Responsive Design for All Devices"
      ],
      images: {
        hero: Im1,
        courses: Im2,
        login: Im3,
        selectuser: Im4,
        dashboard: Im1
      },
      fallbackImage: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg",
      githubUrl: "https://github.com/nimashXDilshan/Online-Tutoring-Platform",
      liveUrl: "#",
      category: "Full Stack Web Application",
      status: "Pending",
      techIcons: {
        "React.js": <Code className="h-5 w-5" />,
        "Django": <Database className="h-5 w-5" />,
        "MongoDB": <Database className="h-5 w-5" />,
        "Firebase": <Globe className="h-5 w-5" />
      } as TechIcons
    },
    {
      id: 2,
      title: "MyCampusHome - University Boarding Search Platform",
      description: "A comprehensive platform for finding boarding houses...",
      longDescription: "MyCampusHome is a specialized rental platform...",
      technologies: ["React.js", "Node.js (Express)", "MongoDB", "JWT Authentication"],
      features: [
        "Advanced Property Search & Filtering",
        "Interactive Maps & Location Services",
        "Secure User Authentication with JWT",
        "Property Listing Management",
        "University-Specific Search Results",
        "Responsive Design for Mobile & Desktop",
        "User Account Management",
        "Property Owner Dashboard"
      ],
      images: {
        hero: Im5,
        about: Im6,
        signup: Im7,
        dashboard: Im5
      },
      fallbackImage: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
      githubUrl: "https://github.com/nimashXDilshan/MyCampusHome",
      liveUrl: "#",
      category: "Full Stack Web Application",
      status: "Completed",
      techIcons: {
        "React.js": <Code className="h-5 w-5" />,
        "Node.js (Express)": <Globe className="h-5 w-5" />,
        "MongoDB": <Database className="h-5 w-5" />,
        "JWT Authentication": <MapPin className="h-5 w-5" />
      }
    },
    {
      id: 3,
      title: "Spritx - Inter University Development Competition",
      description: "A competitive project developed for the competition...",
      longDescription: "Spritx is an innovative platform developed by Team WebWizard...",
      technologies: ["React.js", "Node.js", "Modern CSS", "Gradient Design"],
      features: [
        "Modern Gradient UI Design",
        "Comprehensive User Authentication",
        "Password Strength Validation",
        "Responsive Design System",
        "Interactive Form Elements",
        "Competition-Grade Performance",
        "Team Collaboration Features",
        "Advanced User Experience"
      ],
      images: {
        hero: "/assets/projects/spritx/hero.jpg",
        signup: Im8,
        certificate: Certificate
      },
      fallbackImage: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
      githubUrl: "https://github.com/nimashXDilshan/SpiritX_Web_Wizards_02",
      liveUrl: "#",
      category: "Competition Project",
      status: "Competition Entry",
      team: "Team WebWizard",
      competition: "Inter University Development Competition",
      techIcons: {
        "React.js": <Code className="h-5 w-5" />,
        "Node.js": <Globe className="h-5 w-5" />,
        "Modern CSS": <Smartphone className="h-5 w-5" />,
        "Gradient Design": <Trophy className="h-5 w-5" />
      }
    }
  ];

  const ProjectImage: React.FC<{ src: string; fallback: string; alt: string; className?: string }> = ({
    src,
    fallback,
    alt,
    className
  }) => {
    const [imageSrc, setImageSrc] = React.useState(src);
    const [imageError, setImageError] = React.useState(false);

    const handleError = () => {
      if (!imageError) {
        setImageSrc(fallback);
        setImageError(true);
      }
    };

    return (
      <img
        src={imageSrc}
        alt={alt}
        className={className}
        onError={handleError}
      />
    );
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore some of my recent projects that showcase my skills in full-stack development, user experience design, and modern web technologies.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
              {/* Project image and content */}
              <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <ProjectImage
                    src={project.images.hero}
                    fallback={project.fallbackImage}
                    alt={project.title}
                    className="w-full h-full object-cover min-h-[400px] hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-blue-600 text-sm font-semibold uppercase">{project.category}</span>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.longDescription}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      {project.features.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, i) => (
                        <div key={i} className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                          <span className="text-blue-600">{(project.techIcons as TechIcons)[tech]}</span>
                          <span className="text-sm">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a href={project.githubUrl} target="_blank" className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 flex items-center space-x-2">
                      <Github className="h-5 w-5" />
                      <span>Code</span>
                    </a>
                    <a href={project.liveUrl} className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2">
                      <ExternalLink className="h-5 w-5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Screenshots */}
              <div className="p-8 bg-gray-50">
                <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">Screenshots</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(project.images).slice(1).map(([key, imagePath], imgIndex) => (
                    <div key={imgIndex} className="relative group overflow-hidden rounded-lg shadow-md">
                      <button onClick={() => setModalImage(imagePath as string)} className="w-full h-full">
                        <ProjectImage
                          src={imagePath}
                          fallback={project.fallbackImage}
                          alt={`${project.title} - ${key}`}
                          className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </button>
                      <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setModalImage(null)}
          >
            <button className="absolute top-5 right-5 text-white bg-black/30 rounded-full p-2">
              <X className="h-6 w-6" />
            </button>
            <img
              src={modalImage}
              alt="Enlarged"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
