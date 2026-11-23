import { HashRouter, Route, Routes } from 'react-router-dom';
import { ContactSection } from './components/layout/ContactSection';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { useTheme } from './hooks/useTheme';
import { Accompany } from './routes/Accompany';
import { Faq } from './routes/Faq';
import { Home } from './routes/Home';
import { Plans } from './routes/Plans';
import { Waitlist } from './routes/Waitlist';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <HashRouter>
      <ScrollToTop />
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planes" element={<Plans />} />
          <Route path="/del-valle-te-acompana" element={<Accompany />} />
          <Route path="/lista-de-espera" element={<Waitlist />} />
          <Route path="/preguntas-frecuentes" element={<Faq />} />
        </Routes>
      </main>
      <ContactSection />
      <Footer />
    </HashRouter>
  );
}
