import React from 'react';

const Image = ({ src, alt }) => {
  return <img src={src} alt={alt} className="mx-auto max-w-2xl rounded-lg shadow-lg my-8" />;
};

export default Image;
