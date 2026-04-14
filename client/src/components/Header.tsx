export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-black/90 border-b border-gray-700">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-widest text-white">EF</div>
        <ul className="flex gap-8 list-none">
          <li>
            <button
              onClick={() => scrollToSection('home')}
              className="text-sm uppercase tracking-wider text-white hover:text-gray-400 transition-colors"
            >
              Início
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-sm uppercase tracking-wider text-white hover:text-gray-400 transition-colors"
            >
              Sobre Mim
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('projetos')}
              className="text-sm uppercase tracking-wider text-white hover:text-gray-400 transition-colors"
            >
              Projetos
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-sm uppercase tracking-wider text-white hover:text-gray-400 transition-colors"
            >
              Contato
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
