import "../styles/about.css";

export function About() {
  return (
    <section className="about-container" id="sobre">
      <h2 className="about-title">Sobre mim</h2>

      <div className="about-card">
        <p>
          Sou Analista de Suporte com experiência em análise de sistemas,
          investigação de incidentes e resolução de problemas. Comecei minha
          trajetória no suporte e, ao longo do tempo, fui ampliando minha visão
          sobre tecnologia, sistemas e infraestrutura.
        </p>

        <p>
          Tenho um perfil voltado para entender a causa dos problemas antes de
          buscar uma solução. Gosto de identificar tarefas repetitivas,
          simplificar processos e criar automações que tornem o trabalho mais
          eficiente. Também valorizo muito o trabalho em equipe, a troca de
          conhecimento e a colaboração para alcançar melhores resultados.
        </p>

        <p>
          Atualmente, estou aprofundando meus conhecimentos em desenvolvimento,
          Linux, Docker, Git, AWS, CI/CD e infraestrutura, buscando conectar
          esses conhecimentos à experiência prática que já adquiri em suporte.
        </p>

        <p>
          Meu objetivo é evoluir profissionalmente na área de DevOps,
          desenvolvendo tanto minhas habilidades técnicas quanto minhas
          competências de liderança. No longo prazo, quero assumir
          responsabilidades de gestão de equipes, ajudando pessoas a se
          desenvolverem, fortalecendo a colaboração e contribuindo para a
          construção de times eficientes e de alta performance.
        </p>

        <div className="about-tags">
          <span>Suporte N2</span>
          <span>DevOps</span>
          <span>Automação</span>
          <span>Linux</span>
          <span>Docker</span>
          <span>Git</span>
          <span>AWS</span>
          <span>CI/CD</span>
          <span>Infraestrutura</span>
          <span>Trabalho em equipe</span>
          <span>Liderança</span>
        </div>
      </div>
    </section>
  );
}