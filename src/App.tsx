import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Platforms from './components/Platforms';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Enable dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Platforms />
      </main>
      <Footer />
    </div>
  );
}

export default App;