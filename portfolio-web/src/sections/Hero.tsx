import "../styles/hero.css";
import foto_perfil from "../assets/foto_perfil.png";

export function Hero() {
  return (
    <section className="hero-container">
      <img src={foto_perfil} alt="Ilustração Pedro Evers" className="hero-image" />
      <div className="hero-content">
        <p className="hero-greeting">Olá! Eu sou</p>
        <h1 className="hero-title">Pedro Evers</h1>
        <h2 className="hero-subtitle">
          Analista de Suporte • DevOps • Automações
        </h2>
        <p className="hero-description">
      Foco em resolução de problemas, automação de tarefas operacionais e evolução técnica contínua.
        </p>
        
        {/* Adicionando os botões da seção */}
       <div className="hero-buttons">
  {/* Link direto para o seu WhatsApp com mensagem inicial */}
  <a href="#contato" className="btn btn-primary">
    Entrar em contato
  </a>

  <a href="#experiencias" className="btn btn-secondary">
    Ver experiências
  </a>
</div>
      </div>
    </section>
  );
}