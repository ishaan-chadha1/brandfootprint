import React from 'react';

const content = ({ title, text }) => {
  return (
    <div className="mx-auto max-w-2xl py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700 leading-6">{text}</p>
    </div>
  );
};

export default content;
