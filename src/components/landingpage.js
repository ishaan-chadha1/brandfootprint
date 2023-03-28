import React from 'react';
import header from './header';
import content from './content';
import list from './list';
import image from './image';
import footer from './footer';

const LandingPage = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <>
      <header />
      <main>
        <content title="Welcome to My Company" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam ac justo molestie fermentum. Pellentesque quis erat vitae ipsum tempor convallis." />
        <list items={items} />
        <image src="https://via.placeholder.com/640x360" alt="Placeholder Image" />
      </main>
      <footer />
    </>
  );
};

export default LandingPage;
