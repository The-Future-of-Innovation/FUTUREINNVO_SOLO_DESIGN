import { useState } from 'react';
import { Calendar, User, Clock, Tag, ArrowRight, Search } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Software Development',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and maintain software applications.',
      content: 'Artificial Intelligence is transforming software development in unprecedented ways...',
      author: 'Dr. Sarah Johnson',
      date: 'March 20, 2024',
      readTime: '8 min read',
      category: 'Technology',
      tags: ['AI', 'Software Development', 'Innovation'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 2,
      title: 'Building Sustainable Tech Solutions',
      excerpt: 'How we can create technology that not only solves problems but also protects our environment.',
      content: 'Sustainability in technology is no longer optional...',
      author: 'Michael Chen',
      date: 'March 15, 2024',
      readTime: '6 min read',
      category: 'Sustainability',
      tags: ['Green Tech', 'Environment', 'Innovation'],
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 3,
      title: 'Remote Work: Lessons from the Digital Transformation',
      excerpt: 'Key insights and best practices we\'ve learned from the global shift to remote work.',
      content: 'The pandemic accelerated digital transformation...',
      author: 'Emily Rodriguez',
      date: 'March 10, 2024',
      readTime: '5 min read',
      category: 'Business',
      tags: ['Remote Work', 'Digital Transformation', 'Productivity'],
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity in the Age of IoT',
      excerpt: 'Understanding the security challenges and solutions in our increasingly connected world.',
      content: 'As IoT devices proliferate, cybersecurity becomes more critical...',
      author: 'David Kim',
      date: 'March 5, 2024',
      readTime: '7 min read',
      category: 'Security',
      tags: ['Cybersecurity', 'IoT', 'Privacy'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 5,
      title: 'The Rise of Low-Code Development Platforms',
      excerpt: 'How low-code platforms are democratizing software development and accelerating innovation.',
      content: 'Low-code development is changing who can build software...',
      author: 'Lisa Wang',
      date: 'February 28, 2024',
      readTime: '6 min read',
      category: 'Technology',
      tags: ['Low-Code', 'Development', 'Accessibility'],
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 6,
      title: 'Data Privacy: Building Trust in the Digital Age',
      excerpt: 'Best practices for protecting user data and building trust with your customers.',
      content: 'Data privacy is fundamental to building lasting customer relationships...',
      author: 'Robert Thompson',
      date: 'February 25, 2024',
      readTime: '9 min read',
      category: 'Privacy',
      tags: ['Data Privacy', 'GDPR', 'Trust'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    }
  ];

  const categories = ['All', 'Technology', 'Business', 'Security', 'Sustainability', 'Privacy'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in">
            Blog & Insights
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-slide-in">
            Stay updated with the latest trends, insights, and innovations in technology and business.
            Share knowledge, learn from experts, and join the conversation.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300 h-5 w-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-blue-900/30 border border-blue-400/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-blue-900/30 text-blue-200 hover:bg-blue-500/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'All' && !searchTerm && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>
            <div className="glass-effect-strong rounded-2xl overflow-hidden hover:bg-blue-500/20 transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="ml-3 text-blue-200 text-sm">{featuredPost.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                  <p className="text-blue-100 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-blue-200">
                      <User className="h-4 w-4 mr-2" />
                      {featuredPost.author}
                      <Calendar className="h-4 w-4 ml-4 mr-2" />
                      {featuredPost.date}
                      <Clock className="h-4 w-4 ml-4 mr-2" />
                      {featuredPost.readTime}
                    </div>
                    <button className="flex items-center text-blue-300 hover:text-white transition-colors">
                      Read More <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article key={post.id} className="glass-effect-strong rounded-xl overflow-hidden hover:bg-blue-500/20 transition-all duration-300 animate-float">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-blue-200 mb-3">
                  <User className="h-4 w-4 mr-2" />
                  {post.author}
                  <Calendar className="h-4 w-4 ml-4 mr-2" />
                  {post.date}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 hover:text-blue-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-blue-100 mb-4">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-blue-200">
                    <Clock className="h-4 w-4 mr-2" />
                    {post.readTime}
                  </div>
                  <button className="flex items-center text-blue-300 hover:text-white transition-colors">
                    Read More <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>

                <div className="mt-4 pt-4 border-t border-blue-400/20">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="inline-flex items-center text-xs bg-blue-900/50 text-blue-200 px-2 py-1 rounded-full">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-blue-200 text-lg">No articles found matching your criteria.</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest insights, trends, and innovations.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
