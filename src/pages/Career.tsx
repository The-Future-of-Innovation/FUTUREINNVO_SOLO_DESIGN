import React, { useState } from 'react';
import { MapPin, Clock, Briefcase, Users, ArrowRight } from 'lucide-react';

const Career = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
  });

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'Salalah, Oman',
      type: 'Full-time',
      experience: '5+ years',
      description: 'We are looking for an experienced software engineer to join our dynamic team and work on cutting-edge projects.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '5+ years of software development experience',
        'Proficiency in React, Node.js, and modern web technologies',
        'Strong problem-solving and communication skills',
        'Experience with cloud platforms (AWS, Azure)',
      ],
      responsibilities: [
        'Design and develop scalable web applications',
        'Collaborate with cross-functional teams',
        'Mentor junior developers',
        'Participate in code reviews and technical discussions',
        'Stay up-to-date with emerging technologies',
      ],
    },
    {
      id: 2,
      title: 'Product Manager',
      department: 'Product',
      location: 'Salalah, Oman',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Join our product team to drive innovation and deliver exceptional user experiences.',
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        '3+ years of product management experience',
        'Strong analytical and strategic thinking skills',
        'Experience with Agile methodologies',
        'Excellent communication and leadership abilities',
      ],
      responsibilities: [
        'Define product strategy and roadmap',
        'Gather and prioritize product requirements',
        'Work closely with engineering and design teams',
        'Analyze market trends and user feedback',
        'Drive product launches and go-to-market strategies',
      ],
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Salalah, Oman',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Create beautiful and intuitive user experiences that delight our customers.',
      requirements: [
        'Bachelor\'s degree in Design or related field',
        '2+ years of UI/UX design experience',
        'Proficiency in Figma, Adobe Creative Suite',
        'Strong portfolio demonstrating design skills',
        'Understanding of user-centered design principles',
      ],
      responsibilities: [
        'Design user interfaces for web and mobile applications',
        'Conduct user research and usability testing',
        'Create wireframes, prototypes, and design systems',
        'Collaborate with developers and product managers',
        'Ensure consistent brand experience across products',
      ],
    },
  ];

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle application submission
    alert('Application submitted successfully! We will get back to you soon.');
    setApplicationData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      coverLetter: '',
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in">
            Join Our Team
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-slide-in">
            Build your career with us and be part of shaping the future through innovation and technology.
          </p>
        </div>

        {/* Company Culture */}
        <section className="mb-16">
          <div className="glass-effect-strong rounded-2xl p-8 md:p-12 animate-slide-in">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-float">
                <Users className="h-12 w-12 text-blue-300 mx-auto mb-4 animate-pulse-glow" />
                <h3 className="text-xl font-semibold text-white mb-2">Collaborative Environment</h3>
                <p className="text-blue-100">Work with talented professionals who share your passion for innovation.</p>
              </div>
              <div className="text-center animate-float" style={{ animationDelay: '1s' }}>
                <Briefcase className="h-12 w-12 text-green-300 mx-auto mb-4 animate-pulse-glow" />
                <h3 className="text-xl font-semibold text-white mb-2">Growth Opportunities</h3>
                <p className="text-blue-100">Advance your career with continuous learning and development programs.</p>
              </div>
              <div className="text-center animate-float" style={{ animationDelay: '2s' }}>
                <ArrowRight className="h-12 w-12 text-purple-300 mx-auto mb-4 animate-pulse-glow" />
                <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge Projects</h3>
                <p className="text-blue-100">Work on innovative projects that make a real impact on businesses and society.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center animate-slide-in">Current Openings</h2>
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="glass-effect-strong rounded-xl overflow-hidden animate-float hover:bg-blue-500/20 transition-all duration-300">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-blue-200">
                        <span className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.type}
                        </span>
                        <span className="bg-blue-500/30 text-blue-200 px-2 py-1 rounded">
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                      className="mt-4 md:mt-0 bg-blue-500/30 hover:bg-blue-500/50 text-white px-6 py-2 rounded-lg transition-all duration-200 border border-blue-400/30"
                    >
                      {selectedJob === job.id ? 'Hide Details' : 'View Details'}
                    </button>
                  </div>
                  <p className="text-blue-100">{job.description}</p>
                  
                  {selectedJob === job.id && (
                    <div className="mt-6 pt-6 border-t border-blue-400/30">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-blue-300 mr-2">•</span>
                                <span className="text-blue-100">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Responsibilities</h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-green-300 mr-2">•</span>
                                <span className="text-blue-100">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Application Form */}
        <section>
          <div className="glass-effect-strong rounded-2xl p-8 md:p-12 animate-slide-in">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Apply Now</h2>
            <form onSubmit={handleApplicationSubmit} className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors text-white placeholder-blue-200"
                    value={applicationData.name}
                    onChange={(e) => setApplicationData({ ...applicationData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors text-white placeholder-blue-200"
                    value={applicationData.email}
                    onChange={(e) => setApplicationData({ ...applicationData, email: e.target.value })}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={applicationData.phone}
                    onChange={(e) => setApplicationData({ ...applicationData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                    Position Applied For *
                  </label>
                  <select
                    id="position"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={applicationData.position}
                    onChange={(e) => setApplicationData({ ...applicationData, position: e.target.value })}
                  >
                    <option value="">Select Position</option>
                    {jobOpenings.map((job) => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mt-6">
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience
                </label>
                <select
                  id="experience"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={applicationData.experience}
                  onChange={(e) => setApplicationData({ ...applicationData, experience: e.target.value })}
                >
                  <option value="">Select Experience Level</option>
                  <option value="0-1">0-1 years</option>
                  <option value="2-3">2-3 years</option>
                  <option value="4-5">4-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
              
              <div className="mt-6">
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter *
                </label>
                <textarea
                  id="coverLetter"
                  rows={6}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us why you're the perfect fit for this role..."
                  value={applicationData.coverLetter}
                  onChange={(e) => setApplicationData({ ...applicationData, coverLetter: e.target.value })}
                ></textarea>
              </div>
              
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Career;