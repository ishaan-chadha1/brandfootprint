import React from 'react';
import Header from './header';
import Content from './content';
import List from './list';
import Image from './image';
import Footer from './footer';

const seminars = [
  { id: 1, title: 'Seminar 1', date: '2023-04-10', description: 'A description of Seminar 1' },
  { id: 2, title: 'Seminar 2', date: '2023-04-15', description: 'A description of Seminar 2' },
  // Add more seminars here
];
const LandingPage = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <>
      <Header />
      <main>
        <Content title="Welcome to My Company" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam ac justo molestie fermentum. Pellentesque quis erat vitae ipsum tempor convallis." />
        <div>
      <h1 className="text-4xl font-bold">Upcoming Seminars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 mb-8">
        {seminars.map((seminar) => (
          <Content key={seminar.id} {...seminar} />
        ))}
      </div>
    </div>
        <List items={items} />
        <Image src="https://picsum.photos/420/640?grayscale" alt="Placeholder Image" />
        <Content title="Who are We?" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam ac justo molestie fermentum. Pellentesque quis erat vitae ipsum tempor convallis."></Content>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
