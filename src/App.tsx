import React, { useEffect, Suspense } from 'react';
import Layout from './components/shared/Layout';
import Loading from './components/shared/Loading';
import ErrorBoundary from './components/shared/ErrorBoundary';
import { ThemeProvider } from './contexts/ThemeContext';
import { container } from './styles/components';
import './styles/global.css';

// Lazy load components for better performance
const Hero = React.lazy(() => import('./components/Hero'));
const Features = React.lazy(() => import('./components/Features'));
const OnlineDemoSection = React.lazy(() => import('./components/OnlineDemoSection'));
const DownloadsSection = React.lazy(() => import('./components/DownloadsSection'));
const SourceCodeSection = React.lazy(() => import('./components/SourceCodeSection'));

function App() {
  useEffect(() => {
    // Check user's preferred color scheme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }

    // Listen for color scheme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Layout>
          <Suspense fallback={<Loading size="lg" className="min-h-[90vh]" />}>
            <Hero />
            <Features />
            <section id="platforms" className="py-16 bg-dark-900">
              <div className={`${container}`}>
                <div id="demo" className="scroll-mt-24">
                  <OnlineDemoSection />
                </div>
                <div id="downloads" className="scroll-mt-24">
                  <DownloadsSection />
                </div>
                <div id="source-code" className="scroll-mt-24">
                  <SourceCodeSection />
                </div>
              </div>
            </section>
          </Suspense>
        </Layout>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;