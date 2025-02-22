import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

const blogPost = {
  id: 1,
  title: "The Future of Higher Education in 2024",
  content: `
    <p>The landscape of higher education is rapidly evolving, driven by technological advancements, changing student needs, and global challenges. In this comprehensive analysis, we explore the key trends and innovations that are shaping the future of university education in 2024 and beyond.</p>

    <h2>1. Hybrid Learning Models</h2>
    <p>The integration of online and in-person learning continues to evolve, creating more flexible and accessible education options. Universities are developing sophisticated hybrid models that combine the best of both worlds, offering students greater flexibility while maintaining the benefits of face-to-face interaction.</p>

    <h2>2. AI-Enhanced Learning</h2>
    <p>Artificial Intelligence is revolutionizing how students learn and how educators teach. From personalized learning paths to automated grading systems, AI is making education more efficient and effective.</p>

    <h2>3. Focus on Soft Skills</h2>
    <p>While technical knowledge remains crucial, there's an increasing emphasis on developing soft skills such as critical thinking, emotional intelligence, and adaptability. These skills are becoming essential in the modern workplace.</p>
  `,
  image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
  date: "March 15, 2024",
  author: "Dr. Jane Smith",
  category: "Education",
  readTime: "5 min read"
};

function BlogPost() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-[400px] object-cover"
          />
          
          <div className="p-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center text-gray-600">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <User className="h-4 w-4 mr-2" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Tag className="h-4 w-4 mr-2" />
                <span>{blogPost.category}</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-6">{blogPost.title}</h1>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </div>
        </article>
      </div>
    </div>
  );
}

export default BlogPost;