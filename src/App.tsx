import { Toaster } from 'sonner';
import ErrorBoundary from '@/components/ErrorBoundary';
import Hero from '@/sections/Hero';
import Services from '@/sections/Services';
import About from '@/sections/About';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <main>
          <Hero />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
        <Toaster 
          position="top-center"
          richColors
          closeButton
          toastOptions={{
            style: {
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            },
          }}
        />
      </div>
    </ErrorBoundary>
  );
}

export default App;
