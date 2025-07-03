import { useState, useEffect } from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette, ChevronDown, Star, Zap, Award } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState(new Set());

  const skillCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95, experience: "4+ years" },
        { name: "TypeScript", level: 90, experience: "3+ years" },
        { name: "JavaScript", level: 95, experience: "5+ years" },
        { name: "HTML5", level: 98, experience: "6+ years" },
        { name: "CSS3", level: 92, experience: "5+ years" },
        { name: "Tailwind CSS", level: 88, experience: "2+ years" }
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 92, experience: "4+ years" },
        { name: "Express", level: 88, experience: "3+ years" },
        { name: "Python", level: 85, experience: "3+ years" },
        { name: "RESTful APIs", level: 95, experience: "4+ years" },
        { name: "Authentication", level: 90, experience: "3+ years" },
        { name: "Server Architecture", level: 82, experience: "2+ years" }
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database & Cloud",
      skills: [
        { name: "MySQL", level: 90, experience: "4+ years" },
        { name: "PostgreSQL", level: 85, experience: "3+ years" },
        { name: "MongoDB", level: 88, experience: "3+ years" },
        { name: "Firebase", level: 92, experience: "2+ years" },
        { name: "AWS", level: 78, experience: "2+ years" },
        { name: "Git & GitHub", level: 95, experience: "5+ years" }
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Technologies",
      skills: [
        { name: "Responsive Design", level: 95, experience: "5+ years" },
        { name: "Progressive Web Apps", level: 82, experience: "2+ years" },
        { name: "Performance Optimization", level: 88, experience: "3+ years" },
        { name: "SEO", level: 85, experience: "3+ years" },
        { name: "Accessibility", level: 90, experience: "3+ years" },
        { name: "Testing", level: 87, experience: "2+ years" }
      ],
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50 dark:bg-teal-900/20"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile & UI/UX",
      skills: [
        { name: "React Native", level: 85, experience: "2+ years" },
        { name: "Flutter", level: 78, experience: "1+ years" },
        { name: "UI/UX Design", level: 92, experience: "4+ years" },
        { name: "Figma", level: 90, experience: "3+ years" },
        { name: "User Research", level: 82, experience: "2+ years" },
        { name: "Prototyping", level: 88, experience: "3+ years" }
      ],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Tools & Methodologies",
      skills: [
        { name: "Agile Development", level: 90, experience: "3+ years" },
        { name: "DevOps", level: 80, experience: "2+ years" },
        { name: "CI/CD", level: 85, experience: "2+ years" },
        { name: "Docker", level: 82, experience: "2+ years" },
        { name: "Testing Frameworks", level: 88, experience: "3+ years" },
        { name: "Code Review", level: 92, experience: "4+ years" }
      ],
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50 dark:bg-pink-900/20"
    }
  ];

  const achievements = [
    { icon: <Star className="h-5 w-5" />, text: "5+ Years Experience", color: "text-yellow-500" },
    { icon: <Zap className="h-5 w-5" />, text: "50+ Projects Completed", color: "text-blue-500" },
    { icon: <Award className="h-5 w-5" />, text: "Full Stack Certified", color: "text-green-500" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillIndex = (entry.target as HTMLElement).dataset.skillIndex;
            if (skillIndex) {
              setAnimatedSkills(prev => new Set([...prev, skillIndex]));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillElements = document.querySelectorAll('[data-skill-index]');
    skillElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleCategory = (index: number) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  const getSkillLabel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <section id="skills" className={`py-20 transition-all duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Technical Skills
              </h2>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-yellow-500 text-gray-900' : 'bg-gray-800 text-white'}`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              As a full-stack developer, I work with a diverse range of technologies to create comprehensive solutions from concept to deployment.
            </p>
            
            {/* Achievements */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">
                  <span className={achievement.color}>{achievement.icon}</span>
                  <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                    {achievement.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white'
                }`}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mb-6`}>
                  {category.icon}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    {category.title}
                  </h3>
                  <button
                    onClick={() => toggleCategory(index)}
                    className={`p-1 rounded-full transition-transform duration-300 ${
                      activeCategory === index ? 'rotate-180' : ''
                    } ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}
                    aria-label={`Toggle ${category.title} details`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </button>
                </div>
                
                <div className={`transition-all duration-300 overflow-hidden ${
                  activeCategory === index ? 'max-h-96 opacity-100' : 'max-h-32 opacity-70'
                }`}>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        data-skill-index={`${index}-${skillIndex}`}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                            {skill.name}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className={`text-xs px-2 py-1 rounded-full ${getSkillColor(skill.level)} text-white`}>
                              {getSkillLabel(skill.level)}
                            </span>
                            <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              {skill.experience}
                            </span>
                          </div>
                        </div>
                        {activeCategory === index && (
                          <div className={`w-full rounded-full h-2 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                            <div 
                              className={`h-2 rounded-full ${getSkillColor(skill.level)} transition-all duration-1000 ease-out ${
                                animatedSkills.has(`${index}-${skillIndex}`) ? 'w-full' : 'w-0'
                              }`}
                              style={{ width: animatedSkills.has(`${index}-${skillIndex}`) ? `${skill.level}%` : '0%' }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Full Stack Expertise</h3>
                <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-6">
                  I specialize in building end-to-end web applications, from designing intuitive user interfaces to developing robust backend systems. My goal is to create seamless, scalable solutions that provide exceptional user experiences.
                </p>
                <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                  View My Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;