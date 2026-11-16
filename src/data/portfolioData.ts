import type { EncounterData, ParodyThemeId, SlideMeta } from '../types/portfolio';

export const STUDENT_PROFILE = {
  defaultName: 'Willian Douglas Lima R. Pugas',
  registration: 'FC20261810',
  professor: 'Antônio Cesar',
  institution: 'UNICATÓLICA / ENGENHARIA DE SOFTWARE',
  semester: '2º SEMESTRE - 2026',
  coverPhotoPath: '/media/capa.jpg',
};

export const SLIDES_META: SlideMeta[] = [
  { id: 'wdp-01', code: 'WDP / 01', shortLabel: '01 Capa', fullTitle: '01 · Capa', theme: 'dark' },
  { id: 'wdp-02', code: 'WDP / 02', shortLabel: '02 Percurso', fullTitle: '02 · Introdução e objetivos', theme: 'light' },
  { id: 'wdp-03', code: 'WDP / 03', shortLabel: '03 Encontro 1', fullTitle: '03 · Encontro 1 — Integração, identidade e vínculos', theme: 'dark' },
  { id: 'wdp-04', code: 'WDP / 04', shortLabel: '04 Encontro 2', fullTitle: '04 · Encontro 2 — Competências, escolhas e felicidade', theme: 'light' },
  { id: 'wdp-05', code: 'WDP / 05', shortLabel: '05 Encontro 3', fullTitle: '05 · Encontro 3 — Ética, moral e consciência humana', theme: 'dark' },
  { id: 'wdp-06', code: 'WDP / 06', shortLabel: '06 Encontro 4', fullTitle: '06 · Encontro 4 — Competências em equipe', theme: 'light' },
  { id: 'wdp-07', code: 'WDP / 07', shortLabel: '07 Encontro 5', fullTitle: '07 · Encontro 5 — Paródia: criatividade e expressão', theme: 'dark' },
  { id: 'wdp-08', code: 'WDP / 08', shortLabel: '08 Aprendizados', fullTitle: '08 · Síntese e principais aprendizados', theme: 'dark' },
  { id: 'wdp-09', code: 'WDP / 09', shortLabel: '09 Paródia · Letra', fullTitle: '09 · Apêndice — Paródia: letra e refrões', theme: 'light' },
  { id: 'wdp-10', code: 'WDP / 10', shortLabel: '10 Paródia · Eixos', fullTitle: '10 · Apêndice — Paródia: eixos formativos', theme: 'dark' },
  { id: 'wdp-11', code: 'WDP / 11', shortLabel: '11 Encerramento', fullTitle: '11 · Encerramento e síntese final', theme: 'dark' },
];

export const OVERVIEW_OBJECTIVES = [
  {
    num: '01',
    title: 'Habilidades e competências',
    description: 'Reconhecer meus recursos e aprender a aplicá-los.',
  },
  {
    num: '02',
    title: 'Ética e moral',
    description: 'Analisar condutas, valores e dilemas do cotidiano.',
  },
  {
    num: '03',
    title: 'Decisões e parcerias',
    description: 'Compreender como as relações influenciam o futuro.',
  },
  {
    num: '04',
    title: 'Felicidade e ação',
    description: 'Refletir sobre alegria, vínculos e potência do agir.',
  },
];

export const OVERVIEW_ENCOUNTERS = [
  { date: '12/07', title: 'Integração, identidade e vínculos', targetId: 'wdp-03' },
  { date: '26/08', title: 'Competências, escolhas e felicidade', targetId: 'wdp-04' },
  { date: '09/09', title: 'Ética, moral e consciência humana', targetId: 'wdp-05' },
  { date: '21/10', title: 'Competências em equipe', targetId: 'wdp-06' },
  { date: '04/11', title: 'Paródia: criatividade e expressão', targetId: 'wdp-07' },
];

export const ENCOUNTERS_DATA: EncounterData[] = [
  {
    id: 'wdp-03',
    code: 'WDP / 03',
    number: '01',
    theme: 'dark',
    kicker: 'ENCONTRO 01 / REGISTRO DE AULA',
    dateBadge: '12 DE JULHO · 2026',
    visualDate: '12/07/2026',
    title: 'Integração, identidade e vínculos',
    subtitle: 'Primeiro encontro da disciplina: apresentação pessoal, escuta ativa e construção de pertencimento na turma.',
    classroomHappened:
      'Dinâmica inicial de apresentação entre os acadêmicos, alinhamento da proposta da disciplina com o Prof. Antônio Cesar e reflexão sobre como cada história individual contribui para o ambiente coletivo.',
    personalNotes:
      'Percebi que iniciar a graduação em Engenharia de Software vai além da técnica: criar conexões genuínas desde o primeiro dia torna o aprendizado mais colaborativo e humano.',
    visualPlaceholderTitle: 'Registro visual · Encontro 01',
    visualCaption: 'Dinâmica de integração e apresentação inicial — 12/07/2026',
    visualSubCaption: 'Turma de Engenharia de Software · UniCatólica',
    takeaway: '“Conhecer a própria identidade e respeitar a história do outro é o primeiro passo para construir vínculos sólidos.”',
    defaultMedia: {
      url: '/media/encontro-01.png',
      type: 'image',
      fileName: 'encontro-01.png',
    },
  },
  {
    id: 'wdp-04',
    code: 'WDP / 04',
    number: '02',
    theme: 'light',
    kicker: 'ENCONTRO 02 / REGISTRO DE AULA',
    dateBadge: '26 DE AGOSTO · 2026',
    visualDate: '26/08/2026',
    title: 'Competências, escolhas e felicidade',
    subtitle: 'Mapeamento de habilidades pessoais, responsabilidade nas escolhas e o sentido da felicidade como potência de ação.',
    classroomHappened:
      'Discussão orientada sobre competências técnicas e socioemocionais, análise de como nossas decisões diárias moldam nossa trajetória e debate sobre felicidade ativa.',
    personalNotes:
      'Refleti sobre a importância de escolher bem as parcerias e ambientes em que me insiro, reconhecendo minhas fortalezas para superar desafios acadêmicos.',
    visualPlaceholderTitle: 'Registro visual · Encontro 02',
    visualCaption: 'Atividade sobre competências, escolhas e felicidade — 26/08/2026',
    visualSubCaption: 'Mapeamento de recursos pessoais e parcerias',
    takeaway: '“Nossas escolhas e parcerias definem o alcance das nossas competências e a qualidade da nossa caminhada.”',
    defaultMedia: {
      url: '/media/encontro-02.png',
      type: 'image',
      fileName: 'encontro-02.png',
    },
  },
  {
    id: 'wdp-05',
    code: 'WDP / 05',
    number: '03',
    theme: 'dark',
    kicker: 'ENCONTRO 03 / REGISTRO DE AULA',
    dateBadge: '09 DE SETEMBRO · 2026',
    visualDate: '09/09/2026',
    title: 'Ética, moral e consciência humana',
    subtitle: 'Distinção conceitual entre ética e moral aplicada a dilemas reais da sociedade e da tecnologia.',
    classroomHappened:
      'Exposição dialogada e estudo de casos sobre princípios éticos, normas morais, responsabilidade individual e impacto das decisões profissionais na vida coletiva.',
    personalNotes:
      'Na área de tecnologia, cada linha de código carrega impacto humano. Compreender a ética como reflexão crítica me dá segurança para agir com integridade.',
    visualPlaceholderTitle: 'Registro visual · Encontro 03',
    visualCaption: 'Debate sobre ética, moral e consciência humana — 09/09/2026',
    visualSubCaption: 'Análise de dilemas cotidianos e responsabilidade social',
    takeaway: '“A técnica sem bússola ética perde o sentido; integridade e justiça devem guiar toda decisão profissional.”',
    defaultMedia: {
      url: '/media/encontro-03.png',
      type: 'image',
      fileName: 'encontro-03.png',
    },
  },
  {
    id: 'wdp-06',
    code: 'WDP / 06',
    number: '04',
    theme: 'light',
    kicker: 'ENCONTRO 04 / REGISTRO DE AULA',
    dateBadge: '21 DE OUTUBRO · 2026',
    visualDate: '21/10/2026',
    title: 'Competências em equipe',
    subtitle: 'Cooperação, divisão de papéis, comunicação assertiva e superação de desafios na construção coletiva.',
    classroomHappened:
      'Trabalho colaborativo em grupos para planejar e estruturar a produção criativa final da disciplina, exercitando negociação, escuta e organização de tarefas.',
    personalNotes:
      'Trabalhar em equipe exigiu sair do individualismo, ouvir ideias diferentes e combinar habilidades complementares para alcançar um resultado superior.',
    visualPlaceholderTitle: 'Registro visual · Encontro 04',
    visualCaption: 'Planejamento colaborativo em equipe — 21/10/2026',
    visualSubCaption: 'Construção conjunta e alinhamento de papéis',
    takeaway: '“Cooperar é somar talentos distintos em torno de um propósito comum, transformando diferenças em força.”',
    defaultMedia: {
      url: '/media/encontro-04.png',
      type: 'image',
      fileName: 'encontro-04.png',
    },
  },
  {
    id: 'wdp-07',
    code: 'WDP / 07',
    number: '05',
    theme: 'dark',
    kicker: 'ENCONTRO 05 / CULMINÂNCIA CRIATIVA',
    dateBadge: '04 DE NOVEMBRO · 2026',
    visualDate: '04/11/2026',
    title: 'Paródia: criatividade e expressão',
    subtitle: 'Apresentação musical em grupo sintetizando os conceitos de ética, argumentação, autoria e vida acadêmica.',
    classroomHappened:
      'Apresentação das paródias criadas pelas equipes diante da turma, integrando leitura, escrita, oralidade e expressão artística como síntese da disciplina.',
    personalNotes:
      'Enfrentar o palco e apresentar nossa composição mostrou na prática como criatividade, coragem e trabalho em equipe consolidam o aprendizado.',
    visualPlaceholderTitle: 'Registro em vídeo · Encontro 05',
    visualCaption: 'Apresentação da paródia em grupo — 04/11/2026',
    visualSubCaption: 'Culminância criativa da disciplina · Veja a letra nas lâminas 09 e 10',
    linkToAppendix: true,
    takeaway: '“Lê, lê, pra aprender, / Argumenta pra convencer! / Cria, inova, dá opinião...”',
    defaultMedia: {
      url: '/media/encontro-05.MP4',
      type: 'video',
      fileName: 'encontro-05.MP4',
    },
  },
];

export const SYNTHESIS_CARDS = [
  {
    num: '01',
    title: 'VÍNCULOS',
    body: 'Cultivar relações autênticas e reconhecer o que me faz feliz fortalece minha base pessoal e emocional.',
    featured: false,
  },
  {
    num: '02',
    title: 'ESCOLHAS',
    body: 'Parcerias exigem visão crítica, resiliência e responsabilidade: as pessoas com quem caminho influenciam meu futuro.',
    featured: false,
  },
  {
    num: '03',
    title: 'ÉTICA',
    body: 'A técnica precisa de uma bússola: integridade, respeito e justiça orientam minha atuação diante da sociedade.',
    featured: true,
  },
  {
    num: '04',
    title: 'COLABORAÇÃO',
    body: 'Criar e me apresentar em grupo mostrou a importância de unir capacidades e enfrentar o desconforto de aprender.',
    featured: false,
  },
];

export const PARODY_FILTERS: { id: ParodyThemeId; label: string; targetSlideId?: string }[] = [
  { id: 'all', label: 'Todos os Eixos' },
  { id: 'vida-academica', label: 'Vida Acadêmica', targetSlideId: 'wdp-09' },
  { id: 'percepcao-argumentacao', label: 'Percepção e Argumentação', targetSlideId: 'wdp-10' },
  { id: 'autoria-inovacao', label: 'Autoria e Inovação', targetSlideId: 'wdp-10' },
  { id: 'leitura-escrita-oralidade', label: 'Leitura, Escrita e Oralidade', targetSlideId: 'wdp-10' },
  { id: 'refroes', label: 'Refrões', targetSlideId: 'wdp-09' },
];