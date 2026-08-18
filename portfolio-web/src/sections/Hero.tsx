import "../styles/hero.css";
import foto_perfil from "../assets/foto_perfil.png";

export function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-card">

        {/* Foto de apresentação */}
        <div className="hero-image-container">
          <img
            src={foto_perfil}
            alt="Ilustração Pedro Evers"
            className="hero-image"
          />
        </div>

        {/* Conteúdo principal */}
        <div className="hero-content">
          <p className="hero-greeting">Olá! Eu sou</p>

          <h1 className="hero-title">
            Pedro Evers
          </h1>

          <h2 className="hero-subtitle">
            Analista de Suporte • DevOps • Automações
          </h2>

          <p className="hero-description">
            Profissional de tecnologia com experiência em suporte,
            análise de sistemas e automação. Atualmente, direcionando
            minha evolução para DevOps, infraestrutura e liderança de equipes.
          </p>

          {/* Ações principais */}
          <div className="hero-buttons">
            <a href="#contato" className="btn btn-primary">
              Entrar em contato
            </a>

            <a href="#experiencias" className="btn btn-secondary">
              Ver experiências
            </a>

            <a
              href="https://pedroevers-bucket-geral.s3.sa-east-1.amazonaws.com/Curr%C3%ADculo+(1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Download Currículo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}