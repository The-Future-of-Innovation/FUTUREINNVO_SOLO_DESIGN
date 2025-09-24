import React, { useState } from 'react';
import { ExternalLink, Calendar, Users, Code, Globe, Smartphone, Database, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Smart City Management Platform',
      category: 'web',
      status: 'completed',
      client: 'Muscat Municipality',
      duration: '18 months',
      team: '12 developers',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive platform for managing city resources, traffic, utilities, and citizen services through IoT integration and real-time analytics.',
      technologies: ['React', 'Node.js', 'MongoDB', 'IoT', 'AWS'],
      features: [
        'Real-time traffic monitoring and optimization',
        'Smart waste management system',
        'Citizen service portal with mobile app',
        'Energy consumption analytics dashboard',
        'Emergency response coordination system'
      ],
      impact: 'Reduced city operational costs by 25% and improved citizen satisfaction scores by 40%'
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      category: 'web',
      status: 'completed',
      client: 'Royal Hospital',
      duration: '14 months',
      team: '10 developers',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete hospital management system with patient records, appointment scheduling, billing, and telemedicine capabilities.',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'WebRTC', 'Docker'],
      features: [
        'Electronic health records (EHR) system',
        'Appointment scheduling and management',
        'Telemedicine video consultations',
        'Billing and insurance integration',
        'Medical inventory management'
      ],
      impact: 'Streamlined hospital operations, reduced waiting times by 35%, and enabled remote consultations for 10,000+ patients'
    },
    {
      id: 3,
      title: 'E-Commerce Marketplace App',
      category: 'mobile',
      status: 'ongoing',
      client: 'OmanShop',
      duration: '12 months',
      team: '8 developers',
      image: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Native mobile marketplace app connecting local businesses with customers, featuring AR product preview and AI-powered recommendations.',
      technologies: ['React Native', 'Firebase', 'TensorFlow', 'AR Kit', 'Stripe'],
      features: [
        'AR product visualization',
        'AI-powered product recommendations',
        'Multi-vendor marketplace support',
        'Real-time order tracking',
        'Integrated payment gateway'
      ],
      impact: 'Expected to onboard 500+ local businesses and serve 50,000+ customers in the first year'
    },
    {
      id: 4,
      title: 'Banking Digital Transformation',
      category: 'web',
      status: 'completed',
      client: 'National Bank of Oman',
      duration: '24 months',
      team: '15 developers',
      image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete digital banking platform with mobile banking, online services, and AI-powered fraud detection system.',
      technologies: ['Vue.js', 'Java', 'Oracle', 'Machine Learning', 'Kubernetes'],
      features: [
        'Online banking portal with advanced security',
        'Mobile banking app with biometric authentication',
        'AI-powered fraud detection system',
        'Personal finance management tools',
        'Investment portfolio management'
      ],
      impact: 'Increased digital banking adoption by 60% and reduced fraud incidents by 80%'
    },
    {
      id: 5,
      title: 'Educational Learning Management System',
      category: 'web',
      status: 'ongoing',
      client: 'Sultan Qaboos University',
      duration: '16 months',
      team: '9 developers',
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern LMS with virtual classrooms, AI-powered assessment tools, and comprehensive analytics for educational institutions.',
      technologies: ['React', 'Python', 'Django', 'WebRTC', 'TensorFlow'],
      features: [
        'Virtual classroom with video conferencing',
        'AI-powered automated grading system',
        'Interactive whiteboard and collaboration tools',
        'Student progress tracking and analytics',
        'Mobile-responsive design for all devices'
      ],
      impact: 'Supporting 15,000+ students and 800+ faculty members with enhanced online learning experience'
    },
    {
      id: 6,
      title: 'Smart Agriculture IoT Platform',
      category: 'iot',
      status: 'completed',
      client: 'Oman Agriculture Development',
      duration: '10 months',
      team: '6 developers',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'IoT-based smart farming solution with sensor networks, automated irrigation, and crop monitoring systems.',
      technologies: ['IoT Sensors', 'Python', 'MQTT', 'InfluxDB', 'Grafana'],
      features: [
        'Soil moisture and nutrient monitoring',
        'Automated irrigation control systems',
        'Weather station integration',
        'Crop health monitoring using drones',
        'Yield prediction using machine learning'
      ],
      impact: 'Improved crop yield by 30% and reduced water consumption by 40% across 500+ farms'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Globe },
    { id: 'web', label: 'Web Applications', icon: Code },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { id: 'iot', label: 'IoT Solutions', icon: Zap },
    { id: 'data', label: 'Data Analytics', icon: Database },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in">
            Our Projects
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-slide-in">
            Explore our portfolio of innovative solutions that have transformed businesses 
            and communities across various industries.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="glass-effect-strong p-6 rounded-xl text-center animate-float">
            <div className="text-3xl font-bold text-blue-300 mb-2">150+</div>
            <div className="text-blue-100">Projects Delivered</div>
          </div>
          <div className="glass-effect-strong p-6 rounded-xl text-center animate-float" style={{ animationDelay: '1s' }}>
            <div className="text-3xl font-bold text-green-300 mb-2">98%</div>
            <div className="text-blue-100">Success Rate</div>
          </div>
          <div className="glass-effect-strong p-6 rounded-xl text-center animate-float" style={{ animationDelay: '2s' }}>
            <div className="text-3xl font-bold text-purple-300 mb-2">50+</div>
            <div className="text-blue-100">Happy Clients</div>
          </div>
          <div className="glass-effect-strong p-6 rounded-xl text-center animate-float" style={{ animationDelay: '3s' }}>
            <div className="text-3xl font-bold text-orange-300 mb-2">12</div>
            <div className="text-blue-100">Industries Served</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === category.id
                    ? 'glass-effect-strong text-white animate-pulse-glow'
                    : 'glass-effect text-blue-100 hover:glass-effect-strong hover:text-white'
                }`}
              >
                <IconComponent className="h-5 w-5 mr-2" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-effect-strong rounded-2xl overflow-hidden hover:bg-blue-500/20 transition-all duration-300 animate-slide-in">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-blue-200 mb-4">{project.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm text-blue-200">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {project.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {project.team}
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-2" />
                    {project.client}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-blue-200">
                        <span className="text-blue-300 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="glass-effect text-blue-200 px-3 py-1 rounded-full text-sm font-medium border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="glass-effect p-4 rounded-lg mb-6 border border-green-400/30">
                  <h4 className="font-semibold text-green-300 mb-2">Impact:</h4>
                  <p className="text-green-200 text-sm">{project.impact}</p>
                </div>
                
                <Link 
                  to={`/projects/${project.id}`}
                  className="w-full glass-effect-strong hover:bg-blue-500/30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center animate-pulse-glow"
                >
                  View Project Details
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 glass-effect-strong animate-gradient bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-blue-600/30 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4 animate-slide-in">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-slide-in">
            Let's discuss how we can bring your vision to life with cutting-edge technology and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="glass-effect-strong text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/30 transition-all duration-200 animate-pulse-glow">
              Start a Project
            </button>
            <button className="glass-effect text-white px-8 py-3 rounded-lg font-semibold border border-blue-400/30 hover:glass-effect-strong transition-all duration-200">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;