export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center pt-16 bg-gradient-to-b from-black via-black to-gray-900"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold tracking-widest text-white mb-4">
          Eudes Franklin Alves Lisboa
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          Professor de Matemática & Supervisor de Estatísticas
        </p>
        <button
          onClick={() => scrollToSection('projetos')}
          className="btn-tech"
        >
          Projetos
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </section>
  );
}
