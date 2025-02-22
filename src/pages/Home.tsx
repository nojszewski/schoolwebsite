import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { 
  GraduationCap, 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Maximize2,
  Trophy,
  Users,
  Calendar,
  BookOpen,
  GraduationCap as GradIcon,
  Building2,
  Award,
  Clock
} from 'lucide-react';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);
  const [videoId, setVideoId] = useState('PcQVfwy2AuI');

  const latestArticles = [
    {
      id: 1,
      title: "New Research Center Opening",
      excerpt: "State-of-the-art facility to advance scientific research...",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80",
      date: "March 20, 2024",
      category: "Campus News"
    },
    {
      id: 2,
      title: "Student Achievement Awards",
      excerpt: "Celebrating outstanding academic and extracurricular achievements...",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80",
      date: "March 18, 2024",
      category: "Student Life"
    },
    {
      id: 3,
      title: "International Partnership",
      excerpt: "New collaboration with leading universities worldwide...",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
      date: "March 15, 2024",
      category: "Partnerships"
    },
    {
      id: 4,
      title: "Innovation in Teaching",
      excerpt: "Implementing new educational technologies and methodologies...",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80",
      date: "March 14, 2024",
      category: "Education"
    },
    {
      id: 5,
      title: "Sports Championship Victory",
      excerpt: "Our team's remarkable journey to the national title...",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80",
      date: "March 12, 2024",
      category: "Sports"
    },
    {
      id: 6,
      title: "Community Outreach Program",
      excerpt: "Making a difference in our local community through education...",
      image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80",
      date: "March 10, 2024",
      category: "Community"
    }
  ];

  const companies = [
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
    { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <GraduationCap className="h-10 w-10 text-blue-600" />
              <span className="ml-2 text-2xl font-semibold">Academia</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
              
              {/* Dropdown Menu with improved hover behavior */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => {
                  setTimeout(() => {
                    setIsDropdownOpen(false);
                    setIsSubDropdownOpen(false);
                  }, 700);
                }}
              >
                <button className="flex items-center text-gray-700 hover:text-blue-600">
                  <span>Programs</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                
                <div className={`absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 transition-opacity duration-200 ${isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Undergraduate</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Graduate</a>
                  
                  {/* Level 2 Dropdown */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsSubDropdownOpen(true)}
                    onMouseLeave={() => setIsSubDropdownOpen(false)}
                  >
                    <button className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-blue-50">
                      <span>Special Programs</span>
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </button>
                    
                    <div className={`absolute left-full top-0 w-48 bg-white rounded-lg shadow-lg py-2 transition-opacity duration-200 ${isSubDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Summer School</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Exchange Programs</a>
                      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Research Projects</a>
                    </div>
                  </div>
                  
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Online Courses</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">Professional Development</a>
                </div>
              </div>
              
              <a href="#" className="text-gray-700 hover:text-blue-600">Student Life</a>
              <Link to="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
              <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
            </nav>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <ChevronDown className={`h-6 w-6 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 bg-white shadow-lg z-40">
          <nav className="flex flex-col p-4">
            <Link to="/" className="py-2 text-gray-700 hover:text-blue-600">Home</Link>
            <a href="#" className="py-2 text-gray-700 hover:text-blue-600">About</a>
            <a href="#" className="py-2 text-gray-700 hover:text-blue-600">Programs</a>
            <a href="#" className="py-2 text-gray-700 hover:text-blue-600">Student Life</a>
            <Link to="/blog" className="py-2 text-gray-700 hover:text-blue-600">Blog</Link>
            <a href="#" className="py-2 text-gray-700 hover:text-blue-600">Contact</a>
          </nav>
        </div>
      )}

      {/* Hero Section with YouTube Video */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Shape Your Future with Us</h1>
            <p className="text-xl md:text-2xl mb-8">Discover a world of opportunities at our prestigious institution</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Button
              </button>
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <Trophy className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Years of Excellence</div>
            </div>
            <div>
              <Users className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <div className="text-lg">Students Enrolled</div>
            </div>
            <div>
              <BookOpen className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-lg">Courses Offered</div>
            </div>
            <div>
              <Award className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-lg">Graduate Employment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest News & Updates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <Link 
                key={article.id}
                to={`/blog/${article.id}`}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {article.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <span className="text-blue-600 hover:text-blue-700 font-medium">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Academic Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Business Administration",
                description: "Develop essential business skills and knowledge for the modern corporate world.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
                icon: Building2
              },
              {
                title: "Computer Science",
                description: "Learn cutting-edge technologies and software development practices.",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80",
                icon: BookOpen
              },
              {
                title: "Engineering",
                description: "Solve complex problems and design innovative solutions for tomorrow.",
                image: "https://images.unsplash.com/photo-1581094794329-c8112c37ffae?auto=format&fit=crop&q=80",
                icon: GradIcon
              }
            ].map((program, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <program.icon className="h-16 w-16 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We Work With */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">We Work With</h2>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className="py-8"
          >
            {companies.map((company, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm h-24">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>info@academia.edu</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>123 University Ave, City, State</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Programs</a></li>
                <li><a href="#" className="hover:text-blue-400">Admissions</a></li>
                <li><a href="#" className="hover:text-blue-400">Campus Life</a></li>
                <li><a href="#" className="hover:text-blue-400">Research</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Management</h3>
              <ul className="space-y-2">
                <li>Principal</li>
                <li>Vice Principal</li>
                <li>Dean of Students</li>
                <li>Department Heads</li>
                <li>Administrative Staff</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-blue-400">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 Academia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;