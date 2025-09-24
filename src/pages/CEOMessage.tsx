import React from 'react';
import { Quote, Award, TrendingUp, Globe, Users, Lightbulb, Target, ArrowRight } from 'lucide-react';

const CEOMessage = () => {
  const achievements = [
    {
      icon: TrendingUp,
      title: '300% Growth',
      description: 'Year-over-year revenue growth',
      color: 'text-green-300'
    },
    {
      icon: Users,
      title: '50+ Clients',
      description: 'Successful partnerships globally',
      color: 'text-blue-300'
    },
    {
      icon: Award,
      title: '15+ Awards',
      description: 'Industry recognition and accolades',
      color: 'text-purple-300'
    },
    {
      icon: Globe,
      title: '12 Countries',
      description: 'International project delivery',
      color: 'text-orange-300'
    }
  ];

  const visionPoints = [
    {
      icon: Lightbulb,
      title: 'Innovation Leadership',
      description: 'Leading the charge in AI and digital transformation across the Middle East and beyond.',
      color: 'text-yellow-300'
    },
    {
      icon: Target,
      title: 'Client Success',
      description: 'Delivering measurable results that transform businesses and create lasting value.',
      color: 'text-red-300'
    },
    {
      icon: Users,
      title: 'Team Excellence',
      description: 'Building a world-class team of innovators, creators, and problem solvers.',
      color: 'text-green-300'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Creating solutions that make a positive difference in communities worldwide.',
      color: 'text-blue-300'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in">
            Message from our <span className="text-blue-300 animate-pulse-glow">CEO</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-slide-in">
            A personal note from our leadership on our vision, values, and commitment to innovation.
          </p>
        </div>

        {/* CEO Profile Section */}
        <section className="mb-16">
          <div className="glass-effect-strong rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* CEO Image */}
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Ahmed Al-Rashid, CEO"
                  className="w-full h-96 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">Ahmed Al-Rashid</h2>
                  <p className="text-blue-200">Chief Executive Officer & Founder</p>
                </div>
              </div>
              
              {/* CEO Info */}
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Leadership Excellence</h3>
                  <p className="text-blue-200 leading-relaxed">
                    With over 15 years of experience in technology leadership and digital transformation, 
                    Ahmed has been instrumental in driving innovation across multiple industries. His vision 
                    for the future of AI and business transformation continues to guide our company's mission.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="glass-effect p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-300 mb-1">15+</div>
                    <div className="text-blue-200 text-sm">Years Experience</div>
                  </div>
                  <div className="glass-effect p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-300 mb-1">100+</div>
                    <div className="text-blue-200 text-sm">Projects Led</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-blue-200">
                    <Award className="h-5 w-5 text-purple-300 mr-3" />
                    <span>TEDx Speaker on Future of Technology</span>
                  </div>
                  <div className="flex items-center text-blue-200">
                    <Award className="h-5 w-5 text-purple-300 mr-3" />
                    <span>Published AI Research Author</span>
                  </div>
                  <div className="flex items-center text-blue-200">
                    <Award className="h-5 w-5 text-purple-300 mr-3" />
                    <span>Digital Transformation Expert</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CEO Message */}
        <section className="mb-16">
          <div className="glass-effect-strong rounded-2xl p-8 lg:p-12">
            <div className="flex items-center mb-8">
              <Quote className="h-12 w-12 text-blue-300 mr-4 animate-pulse-glow" />
              <h2 className="text-3xl font-bold text-white">A Personal Message</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <div className="text-blue-100 leading-relaxed space-y-6 text-lg">
                <p className="animate-slide-in">
                  <strong className="text-white">Dear Partners, Clients, and Team Members,</strong>
                </p>
                
                <p className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
                  When we founded <span className="text-blue-300 font-semibold">Future Innovation</span>, we had a simple yet ambitious vision: 
                  to bridge the gap between cutting-edge technology and real-world business challenges. Today, as I reflect on our journey, 
                  I'm incredibly proud of how far we\'ve come and excited about the future we're building together.
                </p>
                
                <p className="animate-slide-in" style={{ animationDelay: '0.4s' }}>
                  <span className="text-blue-300 font-semibold">Artificial Intelligence and Digital Transformation</span> are not just buzzwords for us – 
                  they represent the core of our mission to create meaningful change. Every project we undertake, every solution we develop, 
                  and every partnership we forge is guided by our commitment to innovation that makes a real difference.
                </p>
                
                <p className="animate-slide-in" style={{ animationDelay: '0.6s' }}>
                  What sets us apart is not just our technical expertise, but our deep understanding that technology should serve humanity. 
                  We don't just build systems; we create solutions that empower businesses, enhance communities, and improve lives. 
                  Our team of brilliant minds works tirelessly to ensure that every line of code, every algorithm, and every digital 
                  transformation initiative contributes to a better future.
                </p>
                
                <p className="animate-slide-in" style={{ animationDelay: '0.8s' }}>
                  As we look ahead, I see unprecedented opportunities in the convergence of AI, cloud computing, and digital innovation. 
                  The challenges facing businesses today – from operational efficiency to customer engagement – require solutions that 
                  are not just technologically advanced, but also strategically sound and ethically responsible.
                </p>
                
                <p className="animate-slide-in" style={{ animationDelay: '1s' }}>
                  <span className="text-green-300 font-semibold">To our clients:</span> Thank you for trusting us with your digital transformation journey. 
                  Your success is our success, and we remain committed to delivering solutions that exceed your expectations.
                </p>
                
                <p className="animate-slide-in" style={{ animationDelay: '1.2s' }}>
                  <span className="text-purple-300 font-semibold">To our team:</span> Your passion, creativity, and dedication are the driving forces 
                  behind our achievements. Together, we're not just building a company – we\'re shaping the future of technology.
                </p>
                
                <p className="animate-slide-in" style={{ animationDelay: '1.4s' }}>
                  <span className="text-orange-300 font-semibold">To our partners:</span> Your collaboration and shared vision enable us to tackle 
                  challenges that no single organization could solve alone. Together, we're creating an ecosystem of innovation.
                </p>
                
                <p className="animate-slide-in" style={{ animationDelay: '1.6s' }}>
                  The future belongs to those who dare to innovate, who embrace change, and who never stop learning. 
                  At Future Innovation, we're not just preparing for the future – <span className="text-blue-300 font-semibold">we're creating it</span>.
                </p>
                
                <p className="animate-slide-in" style={{ animationDelay: '1.8s' }}>
                  <strong className="text-white">
                    Thank you for being part of our journey. The best is yet to come.
                  </strong>
                </p>
                
                <div className="mt-8 animate-slide-in" style={{ animationDelay: '2s' }}>
                  <p className="text-white font-semibold">Ahmed Al-Rashid</p>
                  <p className="text-blue-300">Chief Executive Officer & Founder</p>
                  <p className="text-blue-200">Future Innovation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Achievements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center animate-slide-in">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div 
                  key={index}
                  className="glass-effect-strong p-6 rounded-xl text-center hover:bg-blue-500/20 transition-all duration-300 animate-float"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <IconComponent className={`h-12 w-12 ${achievement.color} mx-auto mb-4 animate-pulse-glow`} />
                  <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-blue-200">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Vision & Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center animate-slide-in">Our Vision in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visionPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <div 
                  key={index}
                  className="glass-effect-strong p-8 rounded-xl hover:bg-blue-500/20 transition-all duration-300 animate-slide-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="glass-effect p-3 rounded-lg">
                      <IconComponent className={`h-8 w-8 ${point.color} animate-pulse-glow`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                      <p className="text-blue-200 leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="glass-effect-strong animate-gradient bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-blue-600/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 animate-slide-in">Ready to Shape the Future Together?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-slide-in">
              Whether you're looking to transform your business or join our mission, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glass-effect-strong text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/30 transition-all duration-200 animate-pulse-glow flex items-center justify-center">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="glass-effect text-white px-8 py-3 rounded-lg font-semibold border border-blue-400/30 hover:glass-effect-strong transition-all duration-200">
                Join Our Team
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CEOMessage;