import { Calendar, Users, Trophy, Heart, Lightbulb, Globe } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      id: 1,
      title: 'Annual Tech Innovation Summit 2024',
      date: 'March 15, 2024',
      type: 'Conference',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Our flagship event bringing together technology leaders, innovators, and entrepreneurs to discuss the future of tech.',
      participants: '500+',
      highlights: [
        'Keynote speeches from industry leaders',
        'Interactive workshops on emerging technologies',
        'Networking opportunities with tech professionals',
        'Startup pitch competition with $50K prize pool'
      ]
    },
    {
      id: 2,
      title: 'Community Coding Bootcamp',
      date: 'February 20, 2024',
      type: 'Education',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Free coding bootcamp for local students and professionals looking to upskill in modern web development.',
      participants: '150+',
      highlights: [
        '6-week intensive program',
        'Focus on React, Node.js, and cloud technologies',
        'Mentorship from senior developers',
        'Job placement assistance for graduates'
      ]
    },
    {
      id: 3,
      title: 'Green Tech Initiative Launch',
      date: 'January 10, 2024',
      type: 'Sustainability',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Launching our commitment to sustainable technology solutions and carbon-neutral operations.',
      participants: '200+',
      highlights: [
        'Partnership with local environmental organizations',
        'Introduction of green coding practices',
        'Solar-powered office infrastructure',
        'Employee sustainability training programs'
      ]
    },
    {
      id: 4,
      title: 'Digital Literacy Program',
      date: 'December 5, 2023',
      type: 'Community Outreach',
      image: 'https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Teaching digital skills to underserved communities, focusing on basic computer literacy and internet safety.',
      participants: '300+',
      highlights: [
        'Free computer classes for seniors',
        'Mobile app development for small businesses',
        'Internet safety workshops for parents',
        'Digital banking and e-commerce training'
      ]
    },
    {
      id: 5,
      title: 'Innovation Lab Opening',
      date: 'November 18, 2023',
      type: 'Facility',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Grand opening of our state-of-the-art innovation lab equipped with the latest technology and development tools.',
      participants: '250+',
      highlights: [
        'VR/AR development stations',
        '3D printing and prototyping equipment',
        'AI and machine learning research lab',
        'Collaborative workspace for startups'
      ]
    },
    {
      id: 6,
      title: 'Hackathon for Good',
      date: 'October 14, 2023',
      type: 'Competition',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: '48-hour hackathon focused on developing solutions for social and environmental challenges.',
      participants: '120+',
      highlights: [
        'Teams from 20+ universities',
        'Focus on healthcare and education solutions',
        'Mentorship from industry experts',
        'Winning solutions implemented in real projects'
      ]
    }
  ];

  const upcomingEvents = [
    {
      title: 'AI & Machine Learning Workshop',
      date: 'April 20, 2024',
      type: 'Workshop',
      description: 'Hands-on workshop covering the latest in AI and ML technologies.'
    },
    {
      title: 'Cybersecurity Awareness Week',
      date: 'May 5-9, 2024',
      type: 'Education',
      description: 'Week-long series of events focused on cybersecurity best practices.'
    },
    {
      title: 'Startup Investor Meetup',
      date: 'June 15, 2024',
      type: 'Networking',
      description: 'Connect local startups with potential investors and mentors.'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'conference':
        return <Users className="h-5 w-5" />;
      case 'education':
        return <Lightbulb className="h-5 w-5" />;
      case 'sustainability':
        return <Globe className="h-5 w-5" />;
      case 'community outreach':
        return <Heart className="h-5 w-5" />;
      case 'competition':
        return <Trophy className="h-5 w-5" />;
      default:
        return <Calendar className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'conference':
        return 'bg-blue-100 text-blue-800';
      case 'education':
        return 'bg-green-100 text-green-800';
      case 'sustainability':
        return 'bg-emerald-100 text-emerald-800';
      case 'community outreach':
        return 'bg-pink-100 text-pink-800';
      case 'competition':
        return 'bg-purple-100 text-purple-800';
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
            Our Activities
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-slide-in">
            Discover the events, initiatives, and community programs that drive our mission
            to foster innovation and make a positive impact.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="glass-effect-strong p-6 rounded-xl text-center animate-float">
            <div className="text-3xl font-bold text-blue-300 mb-2">25+</div>
            <div className="text-blue-100">Events Hosted</div>
          </div>
          <div className="glass-effect-strong p-6 rounded-xl text-center animate-float" style={{ animationDelay: '1s' }}>
            <div className="text-3xl font-bold text-green-300 mb-2">2000+</div>
            <div className="text-blue-100">Participants</div>
          </div>
          <div className="glass-effect-strong p-6 rounded-xl text-center animate-float" style={{ animationDelay: '2s' }}>
            <div className="text-3xl font-bold text-purple-300 mb-2">50+</div>
            <div className="text-blue-100">Partners</div>
          </div>
          <div className="glass-effect-strong p-6 rounded-xl text-center animate-float" style={{ animationDelay: '3s' }}>
            <div className="text-3xl font-bold text-orange-300 mb-2">15+</div>
            <div className="text-blue-100">Countries</div>
          </div>
        </div>

        {/* Past Activities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 animate-slide-in">Recent Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <div key={activity.id} className="glass-effect-strong rounded-xl overflow-hidden hover:bg-blue-500/20 transition-all duration-300 animate-float">
                <div className="relative">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(activity.type)}`}>
                      {getTypeIcon(activity.type)}
                      <span className="ml-1">{activity.type}</span>
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-blue-200 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {activity.date}
                    <span className="mx-2">•</span>
                    <Users className="h-4 w-4 mr-2" />
                    {activity.participants} participants
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{activity.title}</h3>
                  <p className="text-blue-100 mb-4">{activity.description}</p>

                  <div>
                    <h4 className="font-semibold text-white mb-2">Key Highlights:</h4>
                    <ul className="text-sm text-blue-200 space-y-1">
                      {activity.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-300 mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 animate-slide-in">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="glass-effect-strong p-6 rounded-xl border-l-4 border-blue-400 animate-float hover:bg-blue-500/20 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-blue-300 mr-2" />
                  <span className="text-sm text-blue-200">{event.date}</span>
                  <span className="ml-auto text-xs bg-blue-500/30 text-blue-200 px-2 py-1 rounded-full">
                    {event.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                <p className="text-blue-100">{event.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Community Impact */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Making a Difference Together</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our activities are more than just events – they're opportunities to learn, connect, 
              and create positive change in our community and beyond.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Heart className="h-12 w-12 text-pink-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Community First</h3>
                <p className="text-blue-100">We prioritize giving back to our community through education and outreach programs.</p>
              </div>
              <div className="text-center">
                <Lightbulb className="h-12 w-12 text-yellow-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovation Hub</h3>
                <p className="text-blue-100">Creating spaces where ideas flourish and innovation thrives through collaboration.</p>
              </div>
              <div className="text-center">
                <Globe className="h-12 w-12 text-green-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
                <p className="text-blue-100">Working toward solutions that benefit not just our community, but the world.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Activities;