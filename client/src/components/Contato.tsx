export default function Contato() {
  return (
    <section id="contato" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold uppercase tracking-widest text-white mb-12 pb-4 border-b border-gray-300 inline-block">
          Contato
        </h2>

        <p className="text-gray-400 text-lg mb-12 mt-8">
          Vamos conversar sobre inovação na educação e tecnologia.
        </p>

        <div className="flex justify-center">
          <a
            href="https://wa.me/5589981169050?text=Acessei%20seu%20portf%C3%B3lio%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20de%20um%20projeto.%20%20"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tech"
          >
            <i className="fab fa-whatsapp mr-2"></i> WhatsApp
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </div>
    </section>
  );
}
