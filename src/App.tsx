// App.tsx
import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';
import HistorySection from './components/HistorySection';
import image from './heather.jpg'

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <HeroSection name="Heather Hoffman" jobTitle="Marketing/Communications Specalist" imageUrl={image} />
      <HistorySection />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default App;
