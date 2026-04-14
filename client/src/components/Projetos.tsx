import { useState } from 'react';

interface Projeto {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  link: string;
  nomeBotao: string;
  emConstrucao?: boolean;
}

const projetos: Projeto[] = [
  {
    titulo: 'Sistema de Gestão Escolar',
    descricao: 'Desenvolvimento de sistema para registro diário online, lançamento de notas e controle de frequência. Focado em otimizar a rotina escolar e transparência na gestão.',
    tecnologias: ['HTML', 'CSS', 'JS', 'Gestão Educacional'],
    link: 'https://edu-flow-f3f5d793.base44.app',
    nomeBotao: 'Acessar Sistema',
  },
  {
    titulo: 'Inovação Pedagógica',
    descricao: 'Integração de ferramentas tecnológicas no processo de ensino-aprendizagem de Matemática na rede pública municipal.',
    tecnologias: ['Tecnologia Educacional', 'Matemática', 'Inovação'],
    link: 'https://github.com/eudesfrancklin-blip',
    nomeBotao: 'Ver no GitHub',
  },
  {
    titulo: 'Análise de Dados Educacionais',
    descricao: 'Supervisão de estatísticas para a Secretaria Municipal de Educação, utilizando tecnologia para análise de indicadores educacionais.',
    tecnologias: ['Estatística', 'Educação', 'Dados'],
    link: '#',
    nomeBotao: 'Em Construção',
    emConstrucao: true,
  },
];

export default function Projetos() {
  const [showMessage, setShowMessage] = useState(false);

  const handleProjetoClick = (projeto: Projeto, e: React.MouseEvent) => {
    if (projeto.emConstrucao) {
      e.preventDefault();
      alert('Projeto em construção! Em breve, estará disponível.');
    }
  };

  return (
    <section id="projetos" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center uppercase tracking-widest text-white mb-12 pb-4 border-b border-gray-300 inline-block">
          Meus Projetos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projetos.map((projeto, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 p-8 rounded-lg hover:border-gray-200 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{projeto.titulo}</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow">{projeto.descricao}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {projeto.tecnologias.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-800 border border-gray-600 px-2.5 py-1 rounded text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={projeto.link}
                target={!projeto.emConstrucao ? '_blank' : undefined}
                rel={!projeto.emConstrucao ? 'noopener noreferrer' : undefined}
                onClick={(e) => handleProjetoClick(projeto, e)}
                className="btn-tech text-xs py-2 px-4"
              >
                {projeto.nomeBotao}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
