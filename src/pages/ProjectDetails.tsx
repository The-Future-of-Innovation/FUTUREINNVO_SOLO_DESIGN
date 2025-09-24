import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, Globe, ExternalLink, CheckCircle, TrendingUp, Award, Lightbulb } from 'lucide-react';

const ProjectDetails = () => {
  const { id } = useParams();
  
  const projects = [
    {
      id: 1,
      title: 'Smart City Management Platform',
      category: 'AI & IoT Solutions',
      status: 'completed',
      client: 'Muscat Municipality',
      duration: '18 months',
      team: '12 developers',
      budget: '$2.5M',
      completionDate: 'March 2024',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'A comprehensive AI-powered platform for managing city resources, traffic optimization, utilities monitoring, and citizen services through advanced IoT integration and real-time analytics. This digital transformation project revolutionized how the city operates and serves its citizens.',
      challenge: 'Muscat Municipality faced challenges with inefficient resource allocation, traffic congestion, and limited citizen engagement. Traditional systems were siloed and lacked real-time insights, leading to reactive rather than proactive city management.',
      solution: 'We developed an integrated AI platform that connects all city systems through IoT sensors and machine learning algorithms. The solution provides predictive analytics, automated resource optimization, and a unified citizen service portal.',
      technologies: ['React', 'Node.js', 'MongoDB', 'TensorFlow', 'IoT Sensors', 'AWS', 'Python', 'Machine Learning'],
      features: [
        'AI-powered traffic flow optimization reducing congestion by 35%',
        'Smart waste management with predictive collection routes',
        'Citizen service portal with 24/7 AI chatbot support',
        'Real-time energy consumption analytics and optimization',
        'Emergency response coordination with automated alerts',
        'Predictive maintenance for city infrastructure',
        'Mobile app for citizens with AR navigation features',
        'Dashboard with real-time city metrics and KPIs'
      ],
      results: [
        'Reduced city operational costs by 25% ($1.2M annual savings)',
        'Improved citizen satisfaction scores by 40%',
        'Decreased emergency response time by 30%',
        'Optimized energy consumption reducing carbon footprint by 20%',
        'Increased citizen engagement through digital services by 60%'
      ],
      testimonial: {
        quote: "Future Innovation transformed how we manage our city. Their AI solutions have made us more efficient, sustainable, and responsive to our citizens' needs.",
        author: "Ahmed Al-Rashid",
        position: "Director of Digital Services, Muscat Municipality"
      },
      nextSteps: 'Phase 2 expansion to include AI-powered urban planning and smart building integration across the city.'
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      category: 'Digital Transformation',
      status: 'completed',
      client: 'Royal Hospital',
      duration: '14 months',
      team: '10 developers',
      budget: '$1.8M',
      completionDate: 'February 2024',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        'https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'Complete digital transformation of hospital operations with AI-powered patient management, telemedicine capabilities, and intelligent resource allocation. This comprehensive system revolutionized healthcare delivery and patient experience.',
      challenge: 'Royal Hospital struggled with paper-based records, long waiting times, inefficient resource allocation, and limited remote healthcare capabilities, especially highlighted during the pandemic.',
      solution: 'We implemented a fully integrated digital ecosystem with AI-driven patient flow optimization, electronic health records, telemedicine platform, and predictive analytics for resource management.',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'WebRTC', 'Docker', 'AI/ML', 'Blockchain', 'Cloud Infrastructure'],
      features: [
        'AI-powered electronic health records (EHR) system',
        'Intelligent appointment scheduling with wait time prediction',
        'Telemedicine platform with HD video consultations',
        'Automated billing and insurance claim processing',
        'Smart medical inventory management with predictive restocking',
        'Patient flow optimization using machine learning',
        'Mobile app for patients with health tracking features',
        'Real-time bed management and resource allocation'
      ],
      results: [
        'Reduced patient waiting times by 35%',
        'Enabled remote consultations for 10,000+ patients',
        'Improved operational efficiency by 45%',
        'Decreased medical errors by 60% through digital records',
        'Increased patient satisfaction scores by 50%'
      ],
      testimonial: {
        quote: "The digital transformation has revolutionized our hospital operations. We can now provide better care more efficiently than ever before.",
        author: "Dr. Fatima Al-Zahra",
        position: "Chief Medical Officer, Royal Hospital"
      },
      nextSteps: 'Integration with national health database and expansion of AI diagnostic capabilities.'
    },
    {
      id: 3,
      title: 'E-Commerce Marketplace App',
      category: 'AI & Mobile Solutions',
      status: 'ongoing',
      client: 'OmanShop',
      duration: '12 months',
      team: '8 developers',
      budget: '$1.2M',
      completionDate: 'Expected June 2024',
      image: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1200',
      gallery: [
        'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      description: 'Revolutionary mobile marketplace leveraging AI for personalized shopping experiences, AR product visualization, and intelligent vendor matching. This platform is transforming local e-commerce in Oman.',
      challenge: 'Local businesses struggled to compete with international e-commerce platforms, lacking digital presence and advanced features that modern consumers expect.',
      solution: 'We\'re building a comprehensive marketplace with AI-powered recommendations, AR try-before-buy features, and intelligent logistics optimization to support local businesses.',
      technologies: ['React Native', 'Firebase', 'TensorFlow', 'AR Kit', 'Stripe', 'Node.js', 'Machine Learning', 'Cloud Functions'],
      features: [
        'AI-powered product recommendations based on user behavior',
        'AR product visualization for furniture and fashion items',
        'Multi-vendor marketplace with intelligent vendor matching',
        'Real-time order tracking with delivery optimization',
        'Integrated payment gateway with multiple options',
        'Voice search and AI shopping assistant',
        'Social commerce features with user-generated content',
        'Advanced analytics dashboard for vendors'
      ],
      results: [
        'Successfully onboarded 300+ local businesses (target: 500+)',
        'Achieved 25,000+ app downloads in beta phase',
        'Generated $500K+ in transactions during pilot',
        'Improved local business digital presence by 80%',
        'Created 200+ new jobs in the digital economy'
      ],
      testimonial: {
        quote: "Future Innovation is helping us compete globally while supporting our local economy. Their AI features are game-changing.",
        author: "Mohammed Al-Balushi",
        position: "CEO, OmanShop"
      },
      nextSteps: 'Full launch with expanded AI features and integration with government digital initiatives.'
    }
  ];

  const project = projects.find(p => p.id === parseInt(id || '1'));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center glass-effect-strong p-8 rounded-xl">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-blue-300 hover:text-blue-200 transition-colors duration-200">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'ongoing':
        return 'bg-blue-100 text-blue-800';
      case 'planning':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-8 transition-colors duration-200 animate-slide-in"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Projects
        </Link>

        {/* Hero Section */}
        <div className="glass-effect-strong rounded-2xl overflow-hidden mb-12 animate-slide-in">
          <div className="relative h-96">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <div className="flex items-center mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </span>
                <span className="ml-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                  {project.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-gray-200 max-w-2xl">{project.description}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Overview */}
            <div className="glass-effect-strong rounded-xl p-8 animate-float">
              <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
              <p className="text-blue-100 text-lg leading-relaxed">{project.description}</p>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-effect-strong rounded-xl p-6 animate-float">
                <div className="flex items-center mb-4">
                  <div className="bg-red-500/30 p-2 rounded-lg mr-3">
                    <TrendingUp className="h-6 w-6 text-red-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Challenge</h3>
                </div>
                <p className="text-blue-100">{project.challenge}</p>
              </div>

              <div className="glass-effect-strong rounded-xl p-6 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center mb-4">
                  <div className="bg-green-500/30 p-2 rounded-lg mr-3">
                    <Lightbulb className="h-6 w-6 text-green-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Solution</h3>
                </div>
                <p className="text-blue-100">{project.solution}</p>
              </div>
            </div>

            {/* Key Features */}
            <div className="glass-effect-strong rounded-xl p-8 animate-float" style={{ animationDelay: '2s' }}>
              <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-100">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="glass-effect-strong rounded-xl p-8 animate-float" style={{ animationDelay: '3s' }}>
              <h2 className="text-2xl font-bold text-white mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/30 text-blue-200 px-4 py-2 rounded-lg font-medium border border-blue-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Results & Impact */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Results & Impact</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.results.map((result, index) => (
                  <div key={index} className="flex items-start">
                    <TrendingUp className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{result}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Testimonial */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Client Testimonial</h2>
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "{project.testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {project.testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{project.testimonial.author}</div>
                  <div className="text-gray-600">{project.testimonial.position}</div>
                </div>
              </div>
            </div>

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.gallery.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${project.title} gallery ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-200"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Next Steps */}
            <div className="bg-blue-50 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
              <p className="text-gray-700">{project.nextSteps}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Project Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <div className="text-sm text-gray-600">Client</div>
                    <div className="font-medium text-gray-900">{project.client}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <div className="text-sm text-gray-600">Duration</div>
                    <div className="font-medium text-gray-900">{project.duration}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <div className="text-sm text-gray-600">Team Size</div>
                    <div className="font-medium text-gray-900">{project.team}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <div className="text-sm text-gray-600">Budget</div>
                    <div className="font-medium text-gray-900">{project.budget}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <div className="text-sm text-gray-600">Completion</div>
                    <div className="font-medium text-gray-900">{project.completionDate}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-4">Interested in Similar Solutions?</h3>
              <p className="text-blue-100 mb-6">
                Let's discuss how we can transform your business with AI and digital innovation.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                Start Your Project
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Related Projects */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Projects</h3>
              <div className="space-y-4">
                {projects.filter(p => p.id !== project.id).slice(0, 2).map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    to={`/projects/${relatedProject.id}`}
                    className="block group"
                  >
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <img
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                          {relatedProject.title}
                        </h4>
                        <p className="text-sm text-gray-600">{relatedProject.client}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;