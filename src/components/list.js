import React from 'react';

const List = ({ items }) => {
  return (
    <ul className="list-disc list-inside mx-auto max-w-2xl py-8">
      {items.map((item, index) => (
        <li key={index} className="text-lg text-gray-700 mb-4">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
