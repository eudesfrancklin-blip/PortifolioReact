export default function Sobre() {
  return (
    <section id="sobre" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center uppercase tracking-widest text-white mb-12 pb-4 border-b border-gray-300 inline-block">
          Sobre Mim
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <div className="flex justify-center">
            <img
              src="/perfil.png"
              alt="Eudes Franklin Alves Lisboa"
              className="w-80 h-80 rounded-full border-4 border-gray-200 shadow-2xl"
              style={{
                boxShadow: '0 0 30px rgba(255, 255, 255, 0.2), inset 0 0 20px rgba(0, 0, 0, 0.3)',
              }}
            />
          </div>

          <div className="text-gray-300">
            <p className="text-lg leading-relaxed mb-6 text-justify">
              Sou profissional da área da Educação há mais de 10 anos, com grande interesse e afinidade pelo uso da tecnologia como ferramenta de transformação social e pedagógica. Busco constantemente integrar práticas educacionais a soluções tecnológicas, visando inovação e melhoria nos processos de ensino e aprendizagem.
            </p>

            <h3 className="text-xl font-bold uppercase tracking-widest text-gray-400 mb-4">
              Formação Acadêmica
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-gray-500 mr-3">{'>'}</span>
                <span>Especialista em Gestão e Supervisão Escolar</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-3">{'>'}</span>
                <span>Especialista em Informática na Educação</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-3">{'>'}</span>
                <span>Licenciatura em Matemática – IFPI</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-3">{'>'}</span>
                <span>Bacharelado em Administração Pública – UESPI/UAPI</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-3">{'>'}</span>
                <span>Cursando Sistemas para Internet – UESPI/UAPI</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
