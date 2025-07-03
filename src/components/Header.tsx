import { useState, useEffect } from 'react';
import { Menu, X, Code2, Sun, Moon, Download, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'projects', 'uni-events', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setCurrentSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = () => {
  const link = document.createElement('a');
  link.href =  `${import.meta.env.BASE_URL}public/Nimash_Dilshan_CV.pdf`;
  link.setAttribute('download', 'Nimash_Dilshan_CV.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };


  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => scrollToSection('home')}>
            <div className="relative">
              <div className="absolute inset-0 transition-opacity rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 blur opacity-20 group-hover:opacity-40"></div>
              <div className="relative p-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600">
                <Code2 className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800 transition-colors dark:text-gray-400 group-hover:text-blue-600">
                Nimash Dilshan
              </span>
              <span className="-mt-1 text-xs text-gray-500 dark:text-gray-400">
                Full Stack Developer
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-1 lg:flex ">
            {[
              { label: 'Home', id: 'home' },
              { label: 'About', id: 'about' },
              { label: 'Skills', id: 'skills' },
              { label: 'Projects', id: 'projects' },
              { label: 'Uni Events', id: 'uni-events' },
              { label: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentSection === item.id
                    ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-900/20'
                    : 'text-gray-700 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`}
              >
                {item.label}
                {currentSection === item.id && (
                  <div className="absolute bottom-0 w-1 h-1 transform -translate-x-1/2 bg-blue-600 rounded-full left-1/2"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="items-center hidden space-x-3 md:flex">
            {/* Social Links */}
            <div className="flex items-center space-x-2">
              <a
                href="https://github.com/nimashXDilshan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-colors duration-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/nimash-dilshan-36b973305/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-colors duration-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </a>
              <a
                href="mailto:nimash.22@cse.mrt.ac.lk"
                className="p-2 transition-colors duration-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </a>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 transition-all duration-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {/* Download CV Button */}
            <button type="button" 
  onClick={handleDownload}
  className="flex items-center justify-center gap-2 px-4 py-3 font-medium text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
>
  <Download className="w-5 h-5" />
  <span>Download CV</span>
</button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 transition-colors duration-200 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <nav className="py-4 mt-4 border-t md:hidden border-gray-200/20 dark:border-gray-700/20">
            <div className="flex flex-col space-y-2">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About', id: 'about' },
                { label: 'Skills', id: 'skills' },
                { label: 'Projects', id: 'projects' },
                { label: 'Uni Events', id: 'uni-events' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                    currentSection === item.id
                      ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Actions */}
              <div className="pt-4 space-y-3 border-t border-gray-200/20 dark:border-gray-700/20">
                {/* Social Links */}
                <div className="flex items-center justify-center space-x-4">
                  <a
                    href="https://github.com/nimashXDilshan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 transition-colors duration-200 bg-gray-100 rounded-full dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nimash-dilshan-36b973305/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 transition-colors duration-200 bg-gray-100 rounded-full dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </a>
                  <a
                    href="mailto:nimash.22@cse.mrt.ac.lk"
                    className="p-3 transition-colors duration-200 bg-gray-100 rounded-full dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </a>
                </div>

                {/* Mobile Buttons */}
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={toggleDarkMode}
                    className="flex items-center justify-center gap-2 px-4 py-3 transition-colors duration-200 bg-gray-100 rounded-lg dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    {isDarkMode ? (
                      <>
                        <Sun className="w-5 h-5 text-yellow-500" />
                        <span className="text-gray-700 dark:text-gray-300">Light Mode</span>
                      </>
                    ) : (
                      <>
                        <Moon className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
                      </>
                    )}
                  </button>
                  
                  <button type="button" 
  onClick={handleDownload}
  className="flex items-center justify-center gap-2 px-4 py-3 font-medium text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
>
  <Download className="w-5 h-5" />
  <span>Download CV</span>
</button>



                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;