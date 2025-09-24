import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in">
            Get In Touch
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-slide-in">
            Ready to start your next project? We'd love to hear from you.
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="glass-effect-strong rounded-2xl p-8 h-fit animate-float">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/30 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="text-blue-100">+968 7111 1040</p>
                    
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-500/30 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-green-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-blue-100">futureinnvoeam@gmail.com</p>

                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/30 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Address</h3>
                    <p className="text-blue-100">
                      Al Shadaah City Mall<br />
                      Salalah, Oman
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500/30 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-orange-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Business Hours</h3>
                    <p className="text-blue-100">
                      Sunday - Thursday: 8:00 AM - 6:00 PM<br />
                      Friday - Saturday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-blue-400/30">
                <h3 className="font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-blue-500/30 rounded-lg flex items-center justify-center text-blue-200 font-bold border border-blue-400/30 hover:bg-blue-500/50 transition-all duration-200">
                    Li
                  </div>
                  <div className="w-10 h-10 bg-blue-500/30 rounded-lg flex items-center justify-center text-blue-200 font-bold border border-blue-400/30 hover:bg-blue-500/50 transition-all duration-200">
                    Tw
                  </div>
                  <div className="w-10 h-10 bg-blue-500/30 rounded-lg flex items-center justify-center text-blue-200 font-bold border border-blue-400/30 hover:bg-blue-500/50 transition-all duration-200">
                    Fb
                  </div>
                  <div className="w-10 h-10 bg-red-500/30 rounded-lg flex items-center justify-center text-red-200 font-bold border border-red-400/30 hover:bg-red-500/50 transition-all duration-200">
                    In
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-effect-strong rounded-2xl p-8 animate-float" style={{ animationDelay: '1s' }}>
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 bg-blue-500/20 border border-blue-400/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors text-white placeholder-blue-200"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                      className="w-full px-4 py-3 bg-blue-500/20 border border-blue-400/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors text-white placeholder-blue-200"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="project">Project Discussion</option>
                      <option value="partnership">Partnership</option>
                      <option value="support">Technical Support</option>
                      <option value="career">Career Opportunity</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Tell us about your project or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                
                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="glass-effect-strong rounded-2xl overflow-hidden animate-slide-in">
            <div className="p-6 bg-gradient-to-br from-blue-500/30 to-purple-500/30">
              <div className="text-center text-white mb-6">
                <MapPin className="h-12 w-12 mx-auto mb-4 animate-pulse-glow" />
                <h3 className="text-2xl font-bold mb-2">Visit Our Office</h3>
                <p className="text-blue-100 mb-4">Al Shadaah City Mall, Salalah, Oman</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://maps.app.goo.gl/cnZvoUm5Qhb12VVG7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 glass-effect-strong text-white font-semibold rounded-lg hover:bg-blue-500/30 transition-all duration-200 animate-pulse-glow"
                  >
                    <MapPin className="mr-2 h-5 w-5" />
                    Open in Google Maps
                  </a>
                  <button
                    onClick={() => {
                      if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(
                          (position) => {
                            const { latitude, longitude } = position.coords;
                            const destination = "17.0194,54.0924"; // Al Shadaah City Mall coordinates
                            const url = `https://www.google.com/maps/dir/${latitude},${longitude}/${destination}`;
                            window.open(url, '_blank');
                          },
                          () => {
                            // Fallback if geolocation fails
                            window.open("https://maps.app.goo.gl/cnZvoUm5Qhb12VVG7", '_blank');
                          }
                        );
                      } else {
                        window.open("https://maps.app.goo.gl/cnZvoUm5Qhb12VVG7", '_blank');
                      }
                    }}
                    className="inline-flex items-center px-6 py-3 glass-effect text-white font-semibold rounded-lg border border-blue-400/30 hover:bg-blue-500/20 transition-all duration-200"
                  >
                    <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Get Directions
                  </button>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="relative h-96 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.8234567890123!2d54.0924!3d17.0194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDAxJzA5LjgiTiA1NMKwMDUnMzIuNiJF!5e0!3m2!1sen!2som!4v1234567890123!5m2!1sen!2som"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                  title="Al Shadaah City Mall Location"
                ></iframe>

                {/* Overlay for better integration */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-blue-900/20 to-transparent rounded-xl"></div>
              </div>

              {/* Additional Location Info */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="glass-effect p-4 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-300 mx-auto mb-2" />
                  <h4 className="font-semibold text-white mb-1">Business Hours</h4>
                  <p className="text-blue-100 text-sm">Sun-Thu: 9AM-7PM</p>
                </div>
                <div className="glass-effect p-4 rounded-lg">
                  <Phone className="h-6 w-6 text-green-300 mx-auto mb-2" />
                  <h4 className="font-semibold text-white mb-1">Call Us</h4>
                  <p className="text-blue-100 text-sm">+968 7111 1040</p>
                </div>
                <div className="glass-effect p-4 rounded-lg">
                  <MapPin className="h-6 w-6 text-purple-300 mx-auto mb-2" />
                  <h4 className="font-semibold text-white mb-1">Parking</h4>
                  <p className="text-blue-100 text-sm">Free parking available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;