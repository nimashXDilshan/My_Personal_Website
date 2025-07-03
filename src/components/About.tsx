import { useState, useEffect } from 'react';
import { GraduationCap, School, User, Heart, Code, Zap, Trophy, Coffee } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Code, label: "Projects Built", value: "25+", color: "from-cyan-400 to-blue-500" },
    { icon: Trophy, label: "Achievements", value: "10+", color: "from-purple-400 to-pink-500" },
    { icon: Coffee, label: "Cups of Coffee", value: "∞", color: "from-amber-400 to-orange-500" },
    { icon: Zap, label: "Years Learning", value: "4+", color: "from-green-400 to-emerald-500" }
  ];

  const interests = [
    { name: "Full-Stack Development", intensity: 95 },
    { name: "Cricket", intensity: 85 },
    { name: "Horror Movies", intensity: 70 },
    { name: "Problem Solving", intensity: 90 }
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6">
              About Me
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate full-stack developer crafting digital experiences that push the boundaries of what's possible
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`group relative p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Left Column - Personal Info */}
            <div className="space-y-8">
              <div className={`group p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      Nimash Dilshan Manawadu
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      A dedicated computer science student who believes in the transformative power of technology. 
                      I'm passionate about creating digital solutions that bridge the gap between complex problems and elegant code.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`group p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                      Interests & Passion
                    </h3>
                    <div className="space-y-4">
                      {interests.map((interest, index) => (
                        <div key={index}>
                          <div className="flex justify-between text-gray-300 mb-2">
                            <span>{interest.name}</span>
                            <span>{interest.intensity}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                              style={{ width: isVisible ? `${interest.intensity}%` : '0%', transitionDelay: `${index * 200}ms` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Education */}
            <div className="space-y-8">
              <div className={`group p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-emerald-400/30 transition-all duration-500 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <School className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                      Foundation Years
                    </h3>
                    <div className="space-y-3">
                      <div className="text-emerald-400 font-semibold text-lg">St. Aloysius College</div>
                      <p className="text-gray-300 leading-relaxed">
                        Where my journey began. This is where I first discovered my love for technology and 
                        developed the analytical thinking that drives my passion for problem-solving today.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`group p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-amber-400/30 transition-all duration-500 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                      Current Journey
                    </h3>
                    <div className="space-y-3">
                      <div className="text-amber-400 font-semibold text-lg">University of Moratuwa</div>
                      <div className="text-gray-300">Bachelor of Science in Computer Science & Engineering</div>
                      <p className="text-gray-300 leading-relaxed">
                        Immersing myself in the world of software engineering, algorithms, and full-stack development. 
                        Every day brings new challenges and opportunities to grow as a developer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className={`relative overflow-hidden rounded-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-purple-400/5 to-pink-400/5"></div>
            <div className="relative z-10 p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 mb-8">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                My Mission
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                To craft digital experiences that don't just function—they inspire. I'm on a mission to push the boundaries 
                of what's possible with code, creating solutions that are both technically excellent and beautifully human. 
                Every line of code I write is a step toward building a more connected, innovative future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;