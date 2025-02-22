import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Higher Education in 2024",
    excerpt: "Exploring emerging trends and innovations shaping university education...",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
    date: "March 15, 2024",
    category: "Education"
  },
  {
    id: 2,
    title: "Student Success Stories: Class of 2024",
    excerpt: "Meet our outstanding graduates and their remarkable achievements...",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80",
    date: "March 10, 2024",
    category: "Student Life"
  },
  {
    id: 3,
    title: "Research Breakthrough in Quantum Computing",
    excerpt: "Our research team makes significant advances in quantum computing...",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80",
    date: "March 5, 2024",
    category: "Research"
  },
  // Add more blog posts as needed
];

function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.id}
              to={`/blog/${post.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img 
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-blue-600">{post.category}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>
                <span className="inline-block mt-4 text-blue-600 hover:text-blue-700">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;