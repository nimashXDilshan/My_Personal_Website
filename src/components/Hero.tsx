import { ArrowDown, Github, Linkedin, Mail, Download, MapPin, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import ProfilImg from '../../public/assets/470207013_1000932115387069_5402848326749275013_n.jpg'


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = () => {
  const link = document.createElement('a');
  link.href =  `${import.meta.env.BASE_URL}Nimash_Dilshan_CV.pdf`;
  link.setAttribute('download', 'Nimash_Dilshan_CV.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  
  useEffect(() => {
    setIsVisible(true);
  }, []);


  return (
    
    <section id="home" className="items-center justify-center min-h-screen pt-20 bg-gradient-to-br from-gray-200 to-gray-300">

      {/* Modern Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M50 50h50v50H50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Modern Geometric Shapes */}
      <div className="absolute w-64 h-64 rounded-full top-20 right-20 bg-gradient-to-br from-blue-200/20 to-indigo-300/20 blur-3xl animate-pulse"></div>
      <div className="absolute delay-1000 rounded-full bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-pink-300/20 blur-3xl animate-pulse"></div>
      
      {/* Floating Elements */}
      <div className="absolute w-4 h-4 delay-500 bg-blue-400 rounded-full top-1/4 left-1/4 animate-bounce"></div>
      <div className="absolute w-6 h-6 delay-700 bg-indigo-400 rounded-full top-1/3 right-1/3 animate-bounce"></div>
      <div className="absolute w-3 h-3 delay-300 bg-purple-400 rounded-full bottom-1/4 right-1/4 animate-bounce"></div>

      <div className={`relative z-10 px-4 max-w-7xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
      }`}>
        
        {/* Modern Split Layout */}
        <div className="grid items-center gap-16 mb-12 lg:grid-cols-2">
          {/* Left Column - Content */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Status Badge */}
            {/* <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-green-800 bg-green-100 border border-green-200 rounded-full">
              <div className="w-2 h-2 mr-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for new opportunities
            </div> */}
            
            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight text-gray-900 lg:text-6xl">
                Nimash Dilshan
                <span className="block mt-2 text-3xl font-medium text-gray-600 lg:text-4xl">
                  Manawadu   
                </span>
                
              </h1>
              
              <div className="w-20 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 lg:mx-0"></div>
            </div>
            
            <div className="space-y-3">
              <p className="text-2xl font-semibold text-gray-800 lg:text-3xl">
                Full Stack Developer
              </p>
              
              <div className="flex items-center justify-center text-lg text-gray-600 lg:justify-start">
                <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                <span>University of Moratuwa, Sri Lanka</span>
              </div>
            </div>
            
            <p className="max-w-2xl text-lg leading-relaxed text-gray-700 lg:text-xl">
              Computer Science & Engineering student passionate about creating innovative web solutions. 
              Specialized in modern web technologies with a focus on user experience and performance optimization.
            </p>

            {/* Modern Skills Grid */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold tracking-wider text-gray-500 uppercase">Technologies</h3>
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                {[
                  { name: 'React', color: 'bg-blue-100 text-blue-700 border-blue-200' },
                  { name: 'Node.js', color: 'bg-green-100 text-green-700 border-green-200' },
                  { name: 'TypeScript', color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
                  { name: 'Python', color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
                  { name: 'MongoDB', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
                  { name: 'Express.js', color: 'bg-gray-100 text-gray-700 border-gray-200' },
                  { name: 'Java', color: 'bg-blue-100 text-blue-700 border-blue-200' },
                  { name: 'c++', color: 'bg-green-100 text-green-700 border-green-200' },
                  { name: 'springboot', color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
                ].map((tech) => (
                  <span 
                    key={tech.name} 
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 hover:shadow-md ${tech.color}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row lg:justify-start">
             <button type="button" 
  onClick={handleDownload}
  className="flex items-center justify-center gap-2 px-4 py-3 font-medium text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
>
  <Download className="w-5 h-5" />
  <span>Download CV</span>
</button>

              
              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center justify-center gap-2 px-8 py-4 font-semibold text-gray-800 transition-all duration-300 transform bg-white border border-gray-200 shadow-lg group rounded-xl hover:bg-gray-50 hover:scale-105 hover:shadow-xl"
              >
                View My Work
                <ExternalLink className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Background Decorative Elements */}
              <div className="absolute transition-opacity -inset-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30"></div>
              <div className="absolute inset-0 transition-transform transform bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl rotate-3 group-hover:rotate-6"></div>
              
              {/* Profile Image */}
              <div className="relative">
                <img
                  src={ProfilImg}
                  alt="Nimash Dilshan"
                  className="relative w-80 h-96 lg:w-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-white group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay Card */}
                <div className="absolute p-6 transition-transform duration-500 bg-white border border-gray-100 shadow-xl -bottom-6 -left-6 rounded-2xl group-hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600">
                      <span className="text-xl font-bold text-white">N</span>
                    </div>
                    <div
  onClick={() => {
    const section = document.getElementById('contact');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  }}
  className="p-2 transition rounded-lg cursor-pointer hover:bg-gray-100"
>
  <p className="font-semibold text-gray-800">Let's Connect</p>
  <p className="text-sm text-gray-600">Open to opportunities</p>
</div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Modern Social Links */}
        <div className="flex items-center justify-center mb-12 space-x-6">
          <span className="font-medium text-gray-500">Connect with me</span>
          <div className="flex space-x-4">
            <a
              href="https://github.com/nimashXDilshan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 transition-all duration-300 bg-white border border-gray-200 rounded-full shadow-md group hover:shadow-lg hover:scale-110 hover:border-gray-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 text-gray-700 group-hover:text-gray-900" />
            </a>
            <a
              href="https://www.linkedin.com/in/nimash-dilshan-36b973305/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 transition-all duration-300 bg-white border border-gray-200 rounded-full shadow-md group hover:shadow-lg hover:scale-110 hover:border-blue-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
            </a>
            <a
              href="mailto:nimash.22@cse.mrt.ac.lk"
              className="p-4 transition-all duration-300 bg-white border border-gray-200 rounded-full shadow-md group hover:shadow-lg hover:scale-110 hover:border-gray-300"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5 text-gray-700 group-hover:text-gray-900" />
            </a>
          </div>
        </div>
        
        {/* Contact CTA */}
        <div className="text-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center px-6 py-3 font-medium text-gray-600 transition-colors duration-300 hover:text-gray-800"
          >
            <span>Get in touch</span>
            <ArrowDown className="w-4 h-4 ml-2 animate-bounce" />
          </button>
        </div>
      </div>
      
      {/* Modern Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute transform -translate-x-1/2 bottom-8 left-1/2 group"
        aria-label="Scroll to next section"
      >
        <div className="p-3 transition-all duration-300 border border-gray-200 rounded-full shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl group-hover:scale-110">
          <ArrowDown className="w-5 h-5 text-gray-600 group-hover:text-gray-800 animate-bounce" />
        </div>
      </button>
    </section>
  );
};

export default Hero;