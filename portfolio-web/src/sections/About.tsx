import "../styles/about.css";

export function About() {
  return (
    <section className="about-container" id="sobre">
      <h2 className="about-title">Sobre mim</h2>
      <div className="about-card">
        <p>
          Sou Analista de Suporte com foco em DevOps e Automação. 
          Gosto de entender a fundo os problemas, simplificar processos 
          e criar soluções que facilitem o dia a dia.
        </p>
        <p>
          Atualmente, estou aprofundando meus conhecimentos em desenvolvimento web, 
          mecanismos de CI/CD e infraestrutura.
        </p>
      </div>
    </section>
  );
}