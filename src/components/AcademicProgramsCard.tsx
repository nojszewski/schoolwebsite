import React from "react";

type Props = {
  image: string
  title: string
  Icon: any
  description: string
}

const AcademicProgramsCard = ({image, title, Icon, description}: Props) => {
  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48 hover:cursor-pointer">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <Icon className="h-16 w-16 text-white" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="text-blue-600 hover:text-blue-700 font-medium">
          Learn More →
        </button>
      </div>
    </div>
  );
};

export default AcademicProgramsCard;
