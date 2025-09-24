import React from 'react';
import { Users, Award, Linkedin, Mail, Code, Palette, Database, Brain, Shield, Rocket } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Ahmed Al-Rashid',
      position: 'Chief Executive Officer',
      department: 'Leadership',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Visionary leader with 15+ years in AI and digital transformation. Former tech executive at major corporations.',
      expertise: ['Strategic Planning', 'AI Strategy', 'Business Development', 'Innovation Management'],
      achievements: [
        'Led digital transformation for 50+ companies',
        'Published researcher in AI applications',
        'TEDx speaker on future of technology'
      ],
      social: {
        linkedin: '#',
        email: 'ahmed@futureinnvo.com'
      }
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Chief Technology Officer',
      department: 'Technology',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'AI expert and software architect with deep expertise in machine learning and cloud technologies.',
      expertise: ['Machine Learning', 'Cloud Architecture', 'System Design', 'AI Development'],
      achievements: [
        'Built AI systems serving 1M+ users',
        'AWS Certified Solutions Architect',
        'Open source contributor with 10K+ stars'
      ],
      social: {
        linkedin: '#',
        email: 'sarah@futureinnvo.com'
      }
    },
    {
      id: 3,
      name: 'Mohammed Al-Balushi',
      position: 'Head of AI Research',
      department: 'Research',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'PhD in Computer Science specializing in natural language processing and computer vision applications.',
      expertise: ['Natural Language Processing', 'Computer Vision', 'Deep Learning', 'Research'],
      achievements: [
        'Published 25+ research papers',
        'PhD from Stanford University',
        'Winner of AI Innovation Award 2023'
      ],
      social: {
        linkedin: '#',
        email: 'mohammed@futureinnvo.com'
      }
    },
    {
      id: 4,
      name: 'Emily Chen',
      position: 'Lead UX/UI Designer',
      department: 'Design',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creative designer passionate about creating intuitive user experiences for complex AI-powered applications.',
      expertise: ['UI/UX Design', 'Design Systems', 'User Research', 'Prototyping'],
      achievements: [
        'Designed interfaces for 100+ applications',
        'Winner of Design Excellence Award',
        'Featured in top design publications'
      ],
      social: {
        linkedin: '#',
        email: 'emily@futureinnvo.com'
      }
    },
    {
      id: 5,
      name: 'Omar Al-Zahra',
      position: 'Senior Full Stack Developer',
      department: 'Development',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Full-stack developer with expertise in modern web technologies and scalable application architecture.',
      expertise: ['React', 'Node.js', 'Python', 'DevOps', 'Microservices'],
      achievements: [
        '8+ years of development experience',
        'Built applications serving millions',
        'Certified Kubernetes Administrator'
      ],
      social: {
        linkedin: '#',
        email: 'omar@futureinnvo.com'
      }
    },
    {
      id: 6,
      name: 'Lisa Rodriguez',
      position: 'Data Science Lead',
      department: 'Analytics',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Data scientist with expertise in predictive analytics and business intelligence solutions.',
      expertise: ['Data Science', 'Machine Learning', 'Statistical Analysis', 'Business Intelligence'],
      achievements: [
        'MS in Data Science from MIT',
        'Built predictive models for Fortune 500',
        'Kaggle Grandmaster status'
      ],
      social: {
        linkedin: '#',
        email: 'lisa@futureinnvo.com'
      }
    },
    {
      id: 7,
      name: 'Khalid Al-Mamari',
      position: 'Cybersecurity Specialist',
      department: 'Security',
      image: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Cybersecurity expert ensuring our AI solutions meet the highest security and compliance standards.',
      expertise: ['Cybersecurity', 'Compliance', 'Risk Assessment', 'Security Architecture'],
      achievements: [
        'CISSP and CISM certified',
        'Secured systems for government clients',
        'Expert in AI security frameworks'
      ],
      social: {
        linkedin: '#',
        email: 'khalid@futureinnvo.com'
      }
    },
    {
      id: 8,
      name: 'Anna Kowalski',
      position: 'Product Manager',
      department: 'Product',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Product strategist focused on bringing AI innovations to market and ensuring customer success.',
      expertise: ['Product Strategy', 'Market Research', 'Agile Methodology', 'Customer Success'],
      achievements: [
        'Launched 15+ successful products',
        'MBA from Wharton Business School',
        'Product Management certification'
      ],
      social: {
        linkedin: '#',
        email: 'anna@futureinnvo.com'
      }
    }
  ];

  const departments = [
    { name: 'Leadership', icon: Rocket, color: 'text-blue-300', count: 1 },
    { name: 'Technology', icon: Code, color: 'text-green-300', count: 2 },
    { name: 'Research', icon: Brain, color: 'text-purple-300', count: 1 },
    { name: 'Design', icon: Palette, color: 'text-pink-300', count: 1 },
    { name: 'Development', icon: Database, color: 'text-orange-300', count: 1 },
    { name: 'Analytics', icon: Award, color: 'text-yellow-300', count: 1 },
    { name: 'Security', icon: Shield, color: 'text-red-300', count: 1 },
    { name: 'Product', icon: Users, color: 'text-indigo-300', count: 1 }
  ];

  const getDepartmentIcon = (department: string) => {
    switch (department.toLowerCase()) {
      case 'leadership':
        return <Rocket className="h-6 w-6 text-blue-300" />;
      case 'technology':
        return <Code className="h-6 w-6 text-green-300" />;
      case 'research':
        return <Brain className="h-6 w-6 text-purple-300" />;
      case 'design':
        return <Palette className="h-6 w-6 text-pink-300" />;
      case 'development':
        return <Database className="h-6 w-6 text-orange-300" />;
      case 'analytics':
        return <Award className="h-6 w-6 text-yellow-300" />;
      case 'security':
        return <Shield className="h-6 w-6 text-red-300" />;
      case 'product':
        return <Users className="h-6 w-6 text-indigo-300" />;
      default:
        return <Users className="h-6 w-6 text-blue-300" />;
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in">
            Meet Our <span className="text-blue-300 animate-pulse-glow">Team</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-slide-in">
            Our diverse team of experts combines deep technical knowledge with creative innovation 
            to deliver cutting-edge AI and digital transformation solutions.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="glass-effect-strong p-6 rounded-xl text-center animate-float">
            <div className="text-3xl font-bold text-blue-300 mb-2">50+</div>
            <div className="text-blue-100">Team Members</div>
          </div>
          <div className="glass-effect-strong p-6 rounded-xl text-center animate-float" style={{ animationDelay: '1s' }}>
            <div className="text-3xl font-bold text-green-300 mb-2">8</div>
            <div className="text-blue-100">Departments</div>
          </div>
          <div className="glass-effect-strong p-6 rounded-xl text-center animate-float" style={{ animationDelay: '2s' }}>
            <div className="text-3xl font-bold text-purple-300 mb-2">15+</div>
            <div className="text-blue-100">Years Experience</div>
          </div>
          <div className="glass-effect-strong p-6 rounded-xl text-center animate-float" style={{ animationDelay: '3s' }}>
            <div className="text-3xl font-bold text-orange-300 mb-2">25+</div>
            <div className="text-blue-100">Certifications</div>
          </div>
        </div>

        {/* Departments Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center animate-slide-in">Our Departments</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {departments.map((dept, index) => {
              const IconComponent = dept.icon;
              return (
                <div 
                  key={dept.name} 
                  className="glass-effect-strong p-6 rounded-xl text-center hover:bg-blue-500/20 transition-all duration-300 animate-float"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <IconComponent className={`h-8 w-8 ${dept.color} mx-auto mb-3 animate-pulse-glow`} />
                  <h3 className="font-semibold text-white mb-1">{dept.name}</h3>
                  <p className="text-blue-200 text-sm">{dept.count} member{dept.count > 1 ? 's' : ''}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Team Members */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center animate-slide-in">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className="glass-effect-strong rounded-2xl overflow-hidden hover:bg-blue-500/20 transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    {getDepartmentIcon(member.department)}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-300 font-medium mb-2">{member.position}</p>
                  <p className="text-blue-200 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2 text-sm">Expertise:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="glass-effect text-blue-200 px-2 py-1 rounded-full text-xs border border-blue-400/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2 text-sm">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {member.achievements.slice(0, 2).map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-xs text-blue-200">
                          <span className="text-green-300 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={member.social.linkedin}
                      className="glass-effect p-2 rounded-lg hover:bg-blue-500/30 transition-colors duration-200"
                    >
                      <Linkedin className="h-4 w-4 text-blue-300" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="glass-effect p-2 rounded-lg hover:bg-blue-500/30 transition-colors duration-200"
                    >
                      <Mail className="h-4 w-4 text-blue-300" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Company Culture */}
        <section className="mb-16">
          <div className="glass-effect-strong animate-gradient bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-blue-600/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6 animate-slide-in">Our Culture</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto animate-slide-in">
              We foster an environment of innovation, collaboration, and continuous learning where every team member 
              can thrive and contribute to shaping the future of technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-float">
                <Brain className="h-12 w-12 text-purple-300 mx-auto mb-4 animate-pulse-glow" />
                <h3 className="text-xl font-semibold text-white mb-2">Innovation First</h3>
                <p className="text-blue-200">We encourage creative thinking and breakthrough solutions in everything we do.</p>
              </div>
              <div className="text-center animate-float" style={{ animationDelay: '1s' }}>
                <Users className="h-12 w-12 text-green-300 mx-auto mb-4 animate-pulse-glow" />
                <h3 className="text-xl font-semibold text-white mb-2">Collaborative Spirit</h3>
                <p className="text-blue-200">We believe the best solutions come from diverse perspectives working together.</p>
              </div>
              <div className="text-center animate-float" style={{ animationDelay: '2s' }}>
                <Rocket className="h-12 w-12 text-orange-300 mx-auto mb-4 animate-pulse-glow" />
                <h3 className="text-xl font-semibold text-white mb-2">Growth Mindset</h3>
                <p className="text-blue-200">We invest in our people's development and celebrate continuous learning.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section>
          <div className="glass-effect-strong rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 animate-slide-in">Join Our Team</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-slide-in">
              Ready to be part of the future? We're always looking for talented individuals who share our passion for innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glass-effect-strong text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/30 transition-all duration-200 animate-pulse-glow">
                View Open Positions
              </button>
              <button className="glass-effect text-white px-8 py-3 rounded-lg font-semibold border border-blue-400/30 hover:glass-effect-strong transition-all duration-200">
                Send Your Resume
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;