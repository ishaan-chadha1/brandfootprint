import React from 'react';
import Header from './header';
import Content from './content';
import List from './list';
import Image from './image';
import Footer from './footer';

const LandingPage = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <>
      <Header />
      <main>
        <Content title="Welcome to My Company" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam ac justo molestie fermentum. Pellentesque quis erat vitae ipsum tempor convallis." />
        <List items={items} />
        <Image src="https://picsum.photos/420/640?grayscale" alt="Placeholder Image" />
        <Content title="Who are We?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam ac justo molestie fermentum. Pellentesque quis erat vitae ipsum tempor convallis."></Content>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
