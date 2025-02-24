import { Clock } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  id: number
  image: string
  category: string
  date: string //pozniej na Date trzeba zmienic
  title: string
  excerpt: string
}

const NewsCard = ({id, image, category, date, title, excerpt}: Props) => {
  return (
    <Link
      to={`/blog/${id}`}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48">
        <img
          src={image}
          alt={''}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          {category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <Clock className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <span className="text-blue-600 hover:text-blue-700 font-medium">
          Read More →
        </span>
      </div>
    </Link>
  );
};

export default NewsCard;
