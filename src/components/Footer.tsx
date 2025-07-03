import { Code2, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Nimash Dilshan Manawadu</span>
            </div>
            <p className="text-gray-400 text-lg">
              Full Stack Developer | Computer Science & Engineering Student
            </p>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-400" />
                <span>using React & TypeScript</span>
              </div>
              <div className="text-gray-400">
                <p>&copy; 2024 Nimash Dilshan Manawadu. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;