import React from 'react';

const Content = ({ title, date, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-md p-4 m-4">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{date}</p>
      <p className="text-gray-800">{description}</p>
    </div>
  );
};

export default Content;
