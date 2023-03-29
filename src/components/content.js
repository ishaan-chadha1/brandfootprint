import React from 'react';

const Content = ({ title, text }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  );
};

export default Content;