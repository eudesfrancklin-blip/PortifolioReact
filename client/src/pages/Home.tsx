import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Sobre from '@/components/Sobre';
import Projetos from '@/components/Projetos';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Sobre />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
}
