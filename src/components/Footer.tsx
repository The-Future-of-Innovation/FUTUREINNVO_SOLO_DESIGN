import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass-effect-strong text-white border-t border-blue-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo.svg"
                alt="FUTUREINNVO Logo"
                className="h-8 w-auto logo-hover text-black hover:text-white"
              />
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 50"
                className="h-8 w-auto logo-hover text-black hover:text-white"
                fill="currentColor"
              >
               
              </svg> */}
              <span className="text-xl font-bold">The Futurn of Innovation</span>
            </div>
            <p className="text-blue-100 mb-4">
              Leading the future through innovative solutions and cutting-edge technology.
              We transform ideas into reality and drive progress across industries.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/projects" className="text-blue-200 hover:text-white transition-colors">Projects</a></li>
              <li><a href="/team" className="text-blue-200 hover:text-white transition-colors">Team</a></li>
              <li><a href="/activities" className="text-blue-200 hover:text-white transition-colors">Activities</a></li>
              <li><a href="/ceo-message" className="text-blue-200 hover:text-white transition-colors">CEO Message</a></li>
              <li><a href="/career" className="text-blue-200 hover:text-white transition-colors">Career</a></li>
              <li><a href="/contact" className="text-blue-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-300" />
                <span className="text-blue-200">+968 7111 1040</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-300" />
                <span className="text-blue-200">futureinnvoteam@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-300" />
                <span className="text-blue-200">Salalah, Oman</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-400/20 mt-8 pt-8 text-center">
          <p className="text-blue-300">&copy; 2025 FUTUREINNVO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;