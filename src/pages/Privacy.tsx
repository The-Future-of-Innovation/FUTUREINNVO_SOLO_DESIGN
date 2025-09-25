import { Shield, Lock, Eye, FileText, Mail, Phone } from 'lucide-react';

const Privacy = () => {
  const lastUpdated = "March 1, 2024";

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in">
            Privacy Policy & Terms
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-slide-in">
            Your privacy and trust are important to us. Learn how we protect your data and what terms govern our services.
          </p>
          <p className="text-blue-200 mt-4">Last updated: {lastUpdated}</p>
        </div>

        {/* Quick Navigation */}
        <div className="glass-effect-strong rounded-xl p-6 mb-12">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center">
            <FileText className="h-5 w-5 mr-2" />
            Quick Navigation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="#privacy-policy" className="text-blue-300 hover:text-white transition-colors">• Privacy Policy</a>
            <a href="#terms-of-service" className="text-blue-300 hover:text-white transition-colors">• Terms of Service</a>
            <a href="#data-collection" className="text-blue-300 hover:text-white transition-colors">• Data Collection</a>
            <a href="#cookies" className="text-blue-300 hover:text-white transition-colors">• Cookie Policy</a>
            <a href="#user-rights" className="text-blue-300 hover:text-white transition-colors">• Your Rights</a>
            <a href="#contact" className="text-blue-300 hover:text-white transition-colors">• Contact Us</a>
          </div>
        </div>

        {/* Privacy Policy Section */}
        <section id="privacy-policy" className="mb-12">
          <div className="glass-effect-strong rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Shield className="h-6 w-6 mr-3 text-blue-300" />
              Privacy Policy
            </h2>
            
            <div className="space-y-6 text-blue-100">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Our Commitment to Privacy</h3>
                <p>
                  At FUTUREINNVO, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                  or use our services.
                </p>
              </div>

              <div id="data-collection">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Eye className="h-5 w-5 mr-2" />
                  Information We Collect
                </h3>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide</li>
                  <li>• <strong>Usage Data:</strong> Information about how you interact with our website and services</li>
                  <li>• <strong>Technical Data:</strong> IP address, browser type, device information, and operating system</li>
                  <li>• <strong>Communication Data:</strong> Records of your communications with us</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">How We Use Your Information</h3>
                <ul className="space-y-2 ml-4">
                  <li>• To provide and maintain our services</li>
                  <li>• To communicate with you about our services</li>
                  <li>• To improve our website and user experience</li>
                  <li>• To comply with legal obligations</li>
                  <li>• To protect against fraud and security threats</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Lock className="h-5 w-5 mr-2" />
                  Data Security
                </h3>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, 
                  and regular security assessments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms of Service Section */}
        <section id="terms-of-service" className="mb-12">
          <div className="glass-effect-strong rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FileText className="h-6 w-6 mr-3 text-blue-300" />
              Terms of Service
            </h2>
            
            <div className="space-y-6 text-blue-100">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Acceptance of Terms</h3>
                <p>
                  By accessing and using our website and services, you accept and agree to be bound by the terms and provision 
                  of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Use License</h3>
                <p>
                  Permission is granted to temporarily download one copy of the materials on FUTUREINNVO's website for personal, 
                  non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="space-y-2 ml-4 mt-3">
                  <li>• Modify or copy the materials</li>
                  <li>• Use the materials for any commercial purpose or for any public display</li>
                  <li>• Attempt to reverse engineer any software contained on the website</li>
                  <li>• Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Disclaimer</h3>
                <p>
                  The materials on FUTUREINNVO's website are provided on an 'as is' basis. FUTUREINNVO makes no warranties, 
                  expressed or implied, and hereby disclaims and negates all other warranties including without limitation, 
                  implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement 
                  of intellectual property or other violation of rights.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Limitations</h3>
                <p>
                  In no event shall FUTUREINNVO or its suppliers be liable for any damages (including, without limitation, 
                  damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
                  to use the materials on FUTUREINNVO's website, even if FUTUREINNVO or an authorized representative has been 
                  notified orally or in writing of the possibility of such damage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Policy Section */}
        <section id="cookies" className="mb-12">
          <div className="glass-effect-strong rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Cookie Policy</h2>
            
            <div className="space-y-6 text-blue-100">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">What Are Cookies</h3>
                <p>
                  Cookies are small text files that are stored on your device when you visit our website. They help us provide 
                  you with a better experience by remembering your preferences and analyzing how you use our site.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Types of Cookies We Use</h3>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Essential Cookies:</strong> Required for the website to function properly</li>
                  <li>• <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li>• <strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                  <li>• <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Managing Cookies</h3>
                <p>
                  You can control and/or delete cookies as you wish. You can delete all cookies that are already on your 
                  computer and you can set most browsers to prevent them from being placed. However, if you do this, 
                  you may have to manually adjust some preferences every time you visit a site.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* User Rights Section */}
        <section id="user-rights" className="mb-12">
          <div className="glass-effect-strong rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Your Rights</h2>
            
            <div className="space-y-4 text-blue-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-900/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Right to Access</h3>
                  <p className="text-sm">Request copies of your personal data</p>
                </div>
                <div className="bg-blue-900/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Right to Rectification</h3>
                  <p className="text-sm">Request correction of inaccurate data</p>
                </div>
                <div className="bg-blue-900/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Right to Erasure</h3>
                  <p className="text-sm">Request deletion of your personal data</p>
                </div>
                <div className="bg-blue-900/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Right to Portability</h3>
                  <p className="text-sm">Request transfer of your data</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Questions About Privacy or Terms?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              If you have any questions about this Privacy Policy or our Terms of Service, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:privacy@futureinnvo.com" className="flex items-center text-blue-100 hover:text-white transition-colors">
                <Mail className="h-5 w-5 mr-2" />
                privacy@futureinnvo.com
              </a>
              <a href="tel:+1234567890" className="flex items-center text-blue-100 hover:text-white transition-colors">
                <Phone className="h-5 w-5 mr-2" />
                +1 (234) 567-8900
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
