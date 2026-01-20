import React from 'react';
import Navigation from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import BlogGrid from './sections/BlogGrid/BlogGrid';
import SubBanner from './sections/Sub_Banner/SubBanner';
import MidFooter from './sections/MidFooter/MidFooter';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <BlogGrid />
        <SubBanner/>
        <MidFooter/>
        <Footer/>
      </main>
    </>
  );
};

export default App;