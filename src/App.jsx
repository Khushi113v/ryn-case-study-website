import Header from './components/Header';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Works from './components/Works';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ClientsMarquee from './components/ClientsMarquee';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Expertise />
        <Works />
        <Experience />
        <Blog />
        <Testimonials />
        <ClientsMarquee />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;