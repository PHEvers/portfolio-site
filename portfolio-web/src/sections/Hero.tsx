import "../styles/hero.css";
import heroImg from "../assets/hero.png";
import foto_perfil from "../assets/foto_perfil.png";

export function Hero() {
  return (
    <section className="hero-container">
      <img src={foto_perfil} alt="Ilustração Pedro Evers" className="hero-image" />
      <div className="hero-content">
        <p className="hero-greeting">Olá! Eu sou</p>
        <h1 className="hero-title">Pedro Evers</h1>
        <h2 className="hero-subtitle">
          Analista de Suporte • DevOps • Automação
        </h2>
        <p className="hero-description">
          Gosto de resolver problemas, automatizar tarefas repetitivas
          e aprender algo novo todos os dias.
        </p>
        
        {/* Adicionando os botões da seção */}
        <div className="hero-buttons">
          <a href="#contato" className="btn btn-primary">
            Entrar em contato
          </a>
          <a href="#projetos" className="btn btn-secondary">
            Ver projetos
          </a>
        </div>
      </div>
    </section>
  );
}