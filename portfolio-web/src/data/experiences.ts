/* ========================================
   ESTRUTURA DE CADA EXPERIÊNCIA
   ======================================== */

export interface Experience {
  /* Identificador único da experiência */
  id: string;

  /* Nome da empresa, curso ou instituição */
  title: string;

  /* Cargo, função ou formação */
  subtitle: string;

  /* Período da experiência */
  period: string;

  /* Descrição curta exibida no card */
  description: string;

  /* Descrição completa exibida no modal */
  details: string;

  /* Principais atividades realizadas */
  activities: string[];

  /* Tecnologias, ferramentas e competências */
  technologies: string[];

  /* Categoria da experiência */
  type: "profissional" | "academico";
}


/* ========================================
   DADOS DA SEÇÃO "MINHA JORNADA"
   ======================================== */

export const initialExperiences: Experience[] = [

  /* ========================================
     LINX
     ======================================== */

  {
    id: "1",

    title: "Linx",

    subtitle: "Analista de Suporte / Atuação atual",

    period: "Atual",

    /* Resumo exibido no card */
    description:
      "Atuação em suporte técnico, diagnóstico de problemas e automação de rotinas.",

    /* Informações detalhadas exibidas no modal */
    details:
      "Atuação em suporte N2, análise de sistemas e investigação de incidentes. Trabalho com diagnóstico de problemas, SQL, PostgreSQL, análise de XMLs fiscais e apoio na resolução de situações complexas. Também participo da melhoria de processos, treinamento de analistas e criação de automações para tarefas repetitivas.",

    /* Principais atividades realizadas */
    activities: [
      "Atendimento e suporte técnico N2",
      "Investigação e diagnóstico de incidentes",
      "Análise de sistemas e identificação de causa raiz",
      "Consultas e análise de dados utilizando SQL e PostgreSQL",
      "Análise de XMLs e processos fiscais",
      "Automação de tarefas repetitivas",
      "Apoio e treinamento de novos analistas",
      "Melhoria e otimização de processos da equipe",
    ],

    /* Tecnologias e competências */
    technologies: [
      "PostgreSQL",
      "SQL",
      "XML",
      "Linux",
      "Git",
      "Automação",
    ],

    type: "profissional",
  },


  /* ========================================
     +DEV2BLU - 2026
     ======================================== */

  {
    id: "2",

    title: "Curso +Dev2Blu",

    subtitle: "DevOps",

    period: "2026",

    /* Resumo exibido no card */
    description:
      "Especialização focada em práticas de integração e entrega contínua, infraestrutura e automação.",

    /* Informações detalhadas exibidas no modal */
    details:
      "Formação voltada ao desenvolvimento de conhecimentos em DevOps, abordando conceitos de infraestrutura, containers, integração e entrega contínua, automação e ferramentas utilizadas no ciclo de desenvolvimento e operação de aplicações.",

    /* Principais atividades */
    activities: [
      "Estudo de conceitos e práticas DevOps",
      "Criação e gerenciamento de containers",
      "Configuração de ambientes de desenvolvimento",
      "Estudo de pipelines CI/CD",
      "Automação de processos",
      "Introdução à infraestrutura como código",
      "Estudo de ambientes em nuvem",
    ],

    /* Tecnologias e competências */
    technologies: [
      "Docker",
      "Git",
      "CI/CD",
      "Linux",
      "AWS",
      "Kubernetes",
    ],

    type: "academico",
  },


  /* ========================================
     SERASA EXPERIAN
     ======================================== */

  {
    id: "3",

    title: "Serasa Experian",

    subtitle: "Experiência Profissional",

    period: "Ago/2023 - Fev/2024 (7 meses)",

    /* Resumo exibido no card */
    description:
      "Atuação na área de tecnologia e suporte a sistemas.",

    /* Informações detalhadas exibidas no modal */
    details:
      "Experiência profissional envolvendo suporte e tecnologia, contribuindo para o atendimento de demandas, análise de problemas e manutenção da operação dos sistemas.",

    /* Principais atividades */
    activities: [
      "Atendimento de demandas técnicas",
      "Suporte aos usuários e sistemas",
      "Análise e investigação de problemas",
      "Acompanhamento de incidentes",
      "Apoio na manutenção da operação dos sistemas",
    ],

    /* Tecnologias e competências */
    technologies: [
      "Suporte técnico",
      "Análise de sistemas",
      "Tecnologia",
    ],

    type: "profissional",
  },


  /* ========================================
     +DEV2BLU - 2022
     ======================================== */

  {
    id: "4",

    title: "Curso +Dev2Blu",

    subtitle: "DevOps",

    period: "2022",

    /* Resumo exibido no card */
    description:
      "Formação inicial em fundamentos de DevOps e desenvolvimento de software.",

    /* Informações detalhadas exibidas no modal */
    details:
      "Primeiro contato estruturado com conceitos de DevOps e desenvolvimento de software, proporcionando uma base para posteriormente aprofundar conhecimentos em automação, infraestrutura e integração entre desenvolvimento e operações.",

    /* Principais atividades */
    activities: [
      "Introdução aos conceitos de DevOps",
      "Fundamentos de desenvolvimento de software",
      "Estudo de automação",
      "Introdução ao controle de versões",
      "Integração entre desenvolvimento e operações",
    ],

    /* Tecnologias e competências */
    technologies: [
      "DevOps",
      "Git",
      "Desenvolvimento",
      "Automação",
    ],

    type: "academico",
  },
];