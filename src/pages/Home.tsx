import { ArrowRight, Target, Users, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ objectPosition: 'center 30%' }}
        >
          <source
            src="https://videos.pexels.com/video-files/25744125/11904089_1920_1080_24fps.mp4"
            type="video/mp4"
          />
          {/* Fallback for browsers that don't support video */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-blue-800/40 to-purple-900/50"></div>
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Additional gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-purple-900/40 z-20"></div>


        {/* Content */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-in drop-shadow-2xl">
            Building the <span className="text-blue-300 animate-pulse-glow">Future</span> Today
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto animate-slide-in drop-shadow-lg">
            We are pioneers in innovation, transforming industries through cutting-edge technology
            and forward-thinking solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-4 glass-effect-strong hover:bg-blue-500/30 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 animate-pulse-glow"
            >
              View Our Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 glass-effect hover:bg-blue-500/20 text-white font-semibold rounded-lg border border-blue-400/30 transition-all duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-float">
              <div className="text-4xl font-bold text-blue-300 mb-2">150+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div className="text-center animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-4xl font-bold text-blue-300 mb-2">50+</div>
              <div className="text-blue-100">Team Members</div>
            </div>
            <div className="text-center animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-4xl font-bold text-blue-300 mb-2">12</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div className="text-center animate-float" style={{ animationDelay: '3s' }}>
              <div className="text-4xl font-bold text-blue-300 mb-2">98%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Who Are We Section */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-slide-in">
              Who Are We?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-blue-100 mb-8 leading-relaxed animate-slide-in">
                We are a startup specializing in <span className="text-blue-300 font-semibold">artificial intelligence</span> and 
                <span className="text-purple-300 font-semibold"> digital transformation</span> solutions. 
                If you're looking for a partner to create the future of business with you, you\'ve come to the right place!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="glass-effect-strong p-6 rounded-xl animate-float hover:bg-blue-500/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center mb-4 mx-auto animate-pulse-glow">
                    <span className="text-white font-bold text-lg">AI</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Artificial Intelligence</h3>
                  <p className="text-blue-200 text-sm">
                    Leveraging cutting-edge AI and machine learning to solve complex business challenges and unlock new opportunities.
                  </p>
                </div>
                <div className="glass-effect-strong p-6 rounded-xl animate-float hover:bg-purple-500/20 transition-all duration-300" style={{ animationDelay: '1s' }}>
                  <div className="w-12 h-12 bg-purple-500/30 rounded-lg flex items-center justify-center mb-4 mx-auto animate-pulse-glow">
                    <span className="text-white font-bold text-lg">DT</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Digital Transformation</h3>
                  <p className="text-blue-200 text-sm">
                    Transforming traditional business processes with modern digital solutions that drive efficiency and growth.
                  </p>
                </div>
                <div className="glass-effect-strong p-6 rounded-xl animate-float hover:bg-green-500/20 transition-all duration-300" style={{ animationDelay: '2s' }}>
                  <div className="w-12 h-12 bg-green-500/30 rounded-lg flex items-center justify-center mb-4 mx-auto animate-pulse-glow">
                    <span className="text-white font-bold text-lg">🚀</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Startup Agility</h3>
                  <p className="text-blue-200 text-sm">
                    Fast, flexible, and innovative approach to delivering solutions that adapt to your evolving business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose US?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results 
              that drive your business forward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl glass-effect hover:glass-effect-strong transition-all duration-200 animate-float">
              <Target className="h-12 w-12 text-blue-300 mx-auto mb-4 animate-pulse-glow" />
              <h3 className="text-xl font-semibold text-white mb-2">Strategic Vision</h3>
              <p className="text-blue-200">
                We align technology solutions with your business goals for maximum impact.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl glass-effect hover:glass-effect-strong transition-all duration-200 animate-float" style={{ animationDelay: '1s' }}>
              <Users className="h-12 w-12 text-green-300 mx-auto mb-4 animate-pulse-glow" />
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-blue-200">
                Our diverse team of professionals brings decades of combined experience.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl glass-effect hover:glass-effect-strong transition-all duration-200 animate-float" style={{ animationDelay: '2s' }}>
              <Award className="h-12 w-12 text-purple-300 mx-auto mb-4 animate-pulse-glow" />
              <h3 className="text-xl font-semibold text-white mb-2">Quality Assured</h3>
              <p className="text-blue-200">
                We maintain the highest standards of quality in every project we deliver.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl glass-effect hover:glass-effect-strong transition-all duration-200 animate-float" style={{ animationDelay: '3s' }}>
              <TrendingUp className="h-12 w-12 text-orange-300 mx-auto mb-4 animate-pulse-glow" />
              <h3 className="text-xl font-semibold text-white mb-2">Future-Ready</h3>
              <p className="text-blue-200">
                We build scalable solutions that grow with your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 glass-effect-strong animate-gradient bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-blue-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-slide-in">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-slide-in">
            Let's discuss how we can help you achieve your goals with innovative solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 glass-effect-strong text-white font-semibold rounded-lg hover:bg-blue-500/30 transition-all duration-200 animate-pulse-glow"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;