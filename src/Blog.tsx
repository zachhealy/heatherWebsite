// App.tsx
import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HistorySection from './components/HistorySection';

const Blog: React.FC = () => {
  return (
    <div>
      <NavBar />
      <HistorySection />
      <Footer />
    </div>
  );
};

export default Blog;
