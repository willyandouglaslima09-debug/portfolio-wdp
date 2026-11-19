import type {
  EncounterData,
  ParodyThemeId,
  SecondaryMediaConfig,
  SlideMeta,
} from '../types/portfolio';

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
  { id: 'wdp-02', code: 'WDP / 02', shortLabel: '02 Percurso & 05/08', fullTitle: '02 · Apresentação, objetivos e aula 05/08', theme: 'light' },
  { id: 'wdp-03', code: 'WDP / 03', shortLabel: '03 Encontro 1 (12/08)', fullTitle: '03 · Encontro 1 — Integração, identidade e vínculos', theme: 'dark' },
  { id: 'wdp-04', code: 'WDP / 04', shortLabel: '04 Encontro 2 (26/08)', fullTitle: '04 · Encontro 2 — Competências, escolhas e felicidade', theme: 'light' },
  { id: 'wdp-05', code: 'WDP / 05', shortLabel: '05 Encontro 3 & AVA', fullTitle: '05 · Encontro 3 (09/09) — Ética, moral e AVA (23/09)', theme: 'dark' },
  { id: 'wdp-06', code: 'WDP / 06', shortLabel: '06 Encontro 4 (21/10)', fullTitle: '06 · Encontro 4 — Competências e formação de equipes', theme: 'light' },
  { id: 'wdp-07', code: 'WDP / 07', shortLabel: '07 Encontro 5 (04/11)', fullTitle: '07 · Encontro 5 — Apresentação da paródia', theme: 'dark' },
  { id: 'wdp-08', code: 'WDP / 08', shortLabel: '08 Considerações', fullTitle: '08 · Considerações finais e síntese pessoal', theme: 'dark' },
  { id: 'wdp-09', code: 'WDP / 09', shortLabel: '09 Paródia · 01', fullTitle: '09 · Apêndice — Nossa Paródia 01 (Letra 1 de 3)', theme: 'light' },
  { id: 'wdp-10', code: 'WDP / 10', shortLabel: '10 Paródia · 02', fullTitle: '10 · Apêndice — Nossa Paródia 02 (Letra 2 de 3)', theme: 'dark' },
  { id: 'wdp-11', code: 'WDP / 11', shortLabel: '11 Paródia · 03', fullTitle: '11 · Apêndice — Nossa Paródia 03 (Letra 3 de 3)', theme: 'dark' },
];

export const OVERVIEW_OBJECTIVES = [
  {
    num: '01',
    title: 'Projeto de vida',
    description: 'Reconhecer minha trajetória e o profissional que desejo ser.',
  },
  {
    num: '02',
    title: 'Valores',
    description: 'Orientar escolhas pelo respeito e pela responsabilidade.',
  },
  {
    num: '03',
    title: 'Competências',
    description: 'Mobilizar conhecimentos, habilidades e atitudes.',
  },
  {
    num: '04',
    title: 'Habilidades',
    description: 'Exercitar leitura, criação, escrita e expressão oral.',
  },
];

export const OVERVIEW_ENCOUNTERS = [
  { date: '05/08', title: 'Introdução · ausência justificada', targetId: 'wdp-02' },
  { date: '12/08', title: 'Integração, identidade e vínculos', targetId: 'wdp-03' },
  { date: '26/08', title: 'Competências, escolhas e felicidade', targetId: 'wdp-04' },
  { date: '09/09', title: 'Gincana da Ética e Moral', targetId: 'wdp-05' },
  { date: '23/09', title: 'AVA · responsabilidade profissional', targetId: 'wdp-05' },
  { date: '21/10', title: 'Criação da paródia em equipe', targetId: 'wdp-06' },
  { date: '04/11', title: 'Apresentação e avaliação', targetId: 'wdp-07' },
];

export const INTRO_CLASS_MEDIA_SLOT: SecondaryMediaConfig = {
  id: 'wdp-02-intro',
  headerTag: '05/08',
  placeholderTitle: '[INSERIR FOTO OU VÍDEO DA AULA]',
  caption:
    'Material introdutório ou registro cedido pelo professor ou por colegas, com identificação da origem.',
  subCaption:
    'Não corresponde a uma fotografia da minha presença neste encontro.',
  defaultMedia: {
    url: '/media/encontro - 05.07.jpeg',
    type: 'image',
    fileName: 'encontro - 05.07.jpeg',
  },
};

export const ENCOUNTERS_DATA: EncounterData[] = [
  {
    id: 'wdp-03',
    code: 'WDP / 03',
    number: '01',
    theme: 'dark',
    kicker: 'ENCONTRO 01 / REGISTRO DE AULA',
    dateBadge: '12 DE AGOSTO · 2026',
    visualDate: '12/08',
    title: 'INTEGRAÇÃO, IDENTIDADE E VÍNCULOS.',
    subtitle: 'Conexão interpessoal, autoconhecimento e valoração',
    classroomHappened:
      'O professor escreveu números de 1 a 6 nas mãos dos estudantes. Quem recebeu o mesmo número reuniu-se à mesma mesa. Estive com Kauan Aefra, Bruna Leão, Arthur Schinn, Maxssuel e Gabriel Vidal. Retomamos perguntas da aula anterior e conversamos sobre nossas características e escolhas.',
    notesHeading: 'MINHAS ANOTAÇÕES',
    personalNotes:
      'A dinâmica aproximou colegas e mostrou que conhecer o outro também exige me apresentar com sinceridade. No percurso de integração, refleti sobre amizades, felicidade e um objeto de valor pessoal. Essas respostas revelam prioridades que desejo preservar na vida universitária e profissional.',
    visualPlaceholderTitle: '[INSERIR FOTO OU VÍDEO DA AULA]',
    visualCaption: 'Foto com os amigos e das mãos numeradas de 1 a 6.',
    visualSubCaption: '12/08 / Integração e formação dos grupos',
    takeaway:
      'Escutar, organizar e comunicar com respeito também são competências de engenharia.',
    defaultMedia: {
      url: '/media/encontro - 12.07.jpeg',
      type: 'image',
      fileName: 'encontro - 12.07.jpeg',
    },
    detailCards: [
      {
        title: 'PONTOS FORTES E ASPECTO A DESENVOLVER',
        body: 'Reconheço a comunicação, a convivência e a organização como pontos fortes. Meu desafio é a honestidade excessivamente direta: não preciso abrir mão da sinceridade, mas aprender a expressá-la com empatia, cuidado com o contexto e respeito ao tempo do outro. Ser claro não significa ser insensível.',
      },
      {
        title: 'AMIZADES E MEU CONCEITO DE FELICIDADE',
        body: 'Respondi que consigo contar mais de dez amigos e aprofundar essas relações. Para mim, felicidade é estar com família e amigos, dançar, rir alto e de piadas ruins, assistir a séries de magia, filmes de heróis e animes. Também desejo estabilidade financeira: vejo nela segurança e liberdade, sem reduzir a felicidade ao dinheiro.',
      },
      {
        title: 'POR QUE A UNICATÓLICA E ESTE CURSO?',
        body: 'Escolhi a Unicatólica por sua reputação e pela viabilidade de estudar na instituição. Minha primeira opção era Direito, mas a preocupação com minha dicção influenciou a decisão. A afinidade com tecnologia me aproximou da Engenharia de Software. Hoje percebo que desenvolver a expressão oral continua importante em qualquer profissão.',
      },
      {
        title: 'O RELÓGIO COMO OBJETO SIMBÓLICO',
        body: 'Levei um relógio que ganhei no meu aniversário de 20 anos. Ao apresentá-lo como símbolo de felicidade, reconheço que seu significado não se limita ao preço ou à utilidade: ele guarda a memória de uma fase da minha vida. É o vínculo com a experiência que torna esse objeto pessoalmente valioso.',
      },
      {
        title: 'CONEXÃO COM A ENGENHARIA DE SOFTWARE',
        body: 'Comunicar bem ajuda a compreender requisitos, negociar prioridades e explicar decisões técnicas. Organização favorece o acompanhamento de tarefas; convivência e escuta sustentam a colaboração. Quero transformar essas disposições em atitudes consistentes, inclusive ao dar feedback sobre o trabalho de um colega.',
      },
    ],
    secondaryMediaSlot: {
      id: 'wdp-03-watch',
      headerTag: 'REGISTRO DO OBJETO / MEMÓRIA AFETIVA',
      placeholderTitle: '[INSERIR FOTO OU VÍDEO DA AULA]',
      caption:
        'Detalhe do relógio recebido no aniversário de 20 anos ou trecho da apresentação do objeto.',
      subCaption: 'Objeto simbólico de felicidade apresentado em sala',
      defaultMedia: {
        url: '/media/objeto-memoria_afetiva.JPEG',
        type: 'image',
        fileName: 'objeto-memoria_afetiva.JPEG',
      },
    },
  },
  {
    id: 'wdp-04',
    code: 'WDP / 04',
    number: '02',
    theme: 'light',
    kicker: 'ENCONTRO 02 / REGISTRO DE AULA',
    dateBadge: '26 DE AGOSTO · 2026',
    visualDate: '26/08',
    title: 'COMPETÊNCIAS, ESCOLHAS E FELICIDADE.',
    subtitle: 'Parcerias estratégicas, gestão de carreira e filosofia da vida',
    classroomHappened:
      'O professor articulou vídeos, casos empresariais e perguntas sobre habilidades, competências e projeto de vida. Os exemplos envolvendo Louis Vuitton/LVMH e Benz abriram uma discussão sobre parcerias, persistência e os efeitos das escolhas profissionais.',
    notesHeading: 'MINHAS ANOTAÇÕES',
    personalNotes:
      'Reconheci o raciocínio lógico, a facilidade com tecnologia e a comunicação interpessoal como recursos para o curso. A aula também aproximou felicidade, alegria e tristeza: o valor da vida não se resume ao sucesso profissional nem à acumulação de bens.',
    visualPlaceholderTitle: '[INSERIR FOTO OU VÍDEO DA AULA]',
    visualCaption: 'Discussão dos casos empresariais ou anotações da aula.',
    visualSubCaption: '26/08 / Escolhas, competências e sentido da formação',
    takeaway:
      'Quero construir uma carreira competente sem perder de vista o sentido da vida que desejo.',
    defaultMedia: {
      url: '/media/encontro - 26.08.png',
      type: 'image',
      fileName: 'encontro - 26.08.png',
    },
    detailCards: [
      {
        title: 'CASOS EMPRESARIAIS / ESCOLHER PARCERIAS',
        body: 'Na discussão sobre Louis Vuitton/LVMH, o professor destacou disputas de controle e o cuidado necessário ao escolher parceiros. Meu aprendizado não é uma condenação simplista de uma empresa, mas a importância de avaliar interesses, acordos e consequências. Confiança precisa caminhar com análise crítica e clareza de responsabilidades.',
      },
      {
        title: 'HABILIDADE NÃO É AINDA COMPETÊNCIA',
        body: 'Ter facilidade com tecnologia não garante, por si só, uma entrega de qualidade. Entendo habilidade como saber realizar uma tarefa; competência é mobilizar conhecimentos, habilidades e atitudes em uma situação concreta. Meu raciocínio lógico se torna competência quando o aplico para resolver um problema, testar a solução e explicar minhas decisões.',
      },
      {
        title: 'BENZ / PERSISTÊNCIA E APRENDIZAGEM',
        body: 'Na trajetória de Benz e na discussão sobre a origem da marca Mercedes, identifiquei resiliência, dedicação e paciência. Esses atributos ajudam a sustentar projetos que exigem tempo e revisão. Na Engenharia de Software, também preciso lidar com tentativas que falham, buscar alternativas e melhorar uma solução sem abandonar o rigor.',
      },
      {
        title: 'FELICIDADE, ALEGRIA E TRISTEZA',
        body: 'A aula apresentou a felicidade como um instante de vida que vale por si e relacionou a alegria ao aumento da potência de agir. Interpreto essas ideias como um convite a perceber o valor das experiências, não como a obrigação de estar sempre feliz. A tristeza faz parte da existência; reconhecê-la não retira o sentido dos vínculos, do prazer e dos projetos.',
      },
      {
        title: 'MERCADO DE TRABALHO / OLHAR PARA O FUTURO',
        body: 'O Future of Jobs Report 2025, do Fórum Econômico Mundial, situa desenvolvedores de software e aplicações entre as ocupações de crescimento mais rápido até 2030. No conjunto das profissões, destaca pensamento analítico, resiliência e letramento tecnológico. A leitura reforça meu objetivo de unir formação técnica, adaptação e colaboração, sem tratar projeções como garantias individuais.',
      },
      {
        title: 'MEU PLANO DE DESENVOLVIMENTO',
        body: 'Quero transformar minhas facilidades em entregas observáveis: resolver problemas com programação, praticar testes, documentar decisões e participar de projetos em grupo. Pretendo organizar estudos no AVA e em outras plataformas, pedir feedback e exercitar a comunicação. Estabilidade financeira é parte do meu projeto, mas não deve exigir abrir mão da ética ou das relações que valorizo.',
      },
    ],
    extraReference:
      'Referência complementar: World Economic Forum. The Future of Jobs Report 2025, seção "Skills outlook".',
  },
  {
    id: 'wdp-05',
    code: 'WDP / 05',
    number: '03',
    theme: 'dark',
    kicker: 'ENCONTRO 03 / REGISTRO DE AULA',
    dateBadge: '09 DE SETEMBRO · 2026',
    visualDate: '09/09',
    title: 'ÉTICA, MORAL E CONSCIÊNCIA HUMANA.',
    subtitle: 'Gincana, confiança e responsabilidade individual e coletiva',
    classroomHappened:
      'Na Gincana da Ética e Moral, conversamos em duplas, frente a frente. O professor pediu que falássemos com o colega diante de nós, alguém em quem pudéssemos confiar. As perguntas abordaram o que fizemos, pensamos em fazer ou deixamos de fazer por considerar imoral ou antiético.',
    notesHeading: 'REFLEXÃO PESSOAL',
    personalNotes:
      'A moral reúne normas e valores construídos social e culturalmente. A ética examina criticamente essas referências e as consequências das ações. A atividade mostrou que agir com responsabilidade exige mais do que acompanhar o que um grupo considera aceitável.',
    visualPlaceholderTitle: '[INSERIR FOTO OU VÍDEO DA AULA]',
    visualCaption: 'Conversa em duplas ou captura da nuvem de palavras.',
    visualSubCaption:
      '09/09 / Preservar a privacidade dos relatos compartilhados',
    takeaway:
      'Não basta evitar uma punição: preciso compreender e assumir as consequências do que faço.',
    defaultMedia: {
      url: '/media/encontro - 09.09.png',
      type: 'image',
      fileName: 'encontro - 09.09.png',
    },
    detailCards: [
      {
        title: 'PERGUNTAS EM DUPLAS / MORAL',
        bullets: [
          '1. O que você fez de imoral?',
          '2. O que já pensou em fazer de imoral?',
          '3. O que deixou de fazer por considerar imoral?',
        ],
        body: 'Essas perguntas me fizeram distinguir a intenção, a ação e a decisão de me conter. Também convidaram a reconhecer como normas aprendidas influenciam meus julgamentos.',
      },
      {
        title: 'PERGUNTAS EM DUPLAS / ÉTICA',
        bullets: [
          '1. O que você fez de antiético?',
          '2. O que já pensou em fazer de antiético?',
          '3. O que deixou de fazer por considerar antiético?',
        ],
        body: 'A reflexão exige perguntar quem pode ser prejudicado, que princípio está em jogo e se consigo justificar minha escolha para além da conveniência pessoal.',
      },
      {
        title: 'CONFIANÇA, ESCUTA E LIMITES DO REGISTRO',
        body: 'Conversar sobre contradições pessoais requer escuta sem exposição ou julgamento precipitado. As situações individuais compartilhadas não foram transcritas nas minhas anotações; por isso, não as reconstruo como se fossem respostas literais. Registro o aprendizado: reconhecer um conflito é o início da responsabilidade, não a sua conclusão.',
      },
      {
        title: 'A NUVEM DE PALAVRAS / SÍNTESE COLETIVA',
        body: 'Ao final, o professor pediu que acessássemos um site e escrevêssemos uma palavra sobre o que significa ser moral. As contribuições compuseram uma nuvem de palavras, reunindo percepções individuais em uma síntese da turma. Vejo nesse fechamento uma passagem da conversa reservada em duplas para a elaboração coletiva de sentidos.',
      },
      {
        title: 'DA REGRA À REFLEXÃO CRÍTICA',
        body: 'Uma conduta não se torna justa apenas por ser comum. Para mim, a diferença entre moral e ética ficou mais clara ao pensar que costumes podem ser questionados quando desrespeitam pessoas. Integridade, respeito e responsabilidade funcionam como referências para analisar minhas decisões; não são aqui uma transcrição das palavras enviadas pela turma.',
      },
      {
        title: 'CONEXÃO COM A ENGENHARIA DE SOFTWARE',
        body: 'Em uma equipe, "sempre fizemos assim" não justifica expor dados, ocultar falhas ou excluir usuários. Quero reconhecer riscos, comunicar problemas e discutir alternativas com transparência. Assim como na gincana, preciso analisar o que faço, o que considero fazer e aquilo a que renuncio para proteger quem confia no meu trabalho.',
      },
    ],
    avaSection: {
      id: 'wdp-05-ava',
      badgeTitle: '23/09 ATIVIDADE DE LEITURA E REFLEXÃO NO AVA',
      subtitle: 'Conhecimento que se torna responsabilidade.',
      intro:
        'Após a leitura dos materiais indicados pelo professor, respondi a quatro questões sobre formação, escolhas, inclusão e projeto de vida. Retomo abaixo minhas respostas, relacionando o compromisso de estudar ao impacto social do software.',
      questions: [
        {
          num: '01',
          title: 'CONHECIMENTO E FORMAÇÃO ÉTICA',
          question:
            'Por que estudar com dedicação importa, e qual o risco de apenas "empurrar com a barriga"?',
          answer:
            'Para mim, ler os materiais do AVA e estudar com regularidade não serve apenas para obter aprovação. É uma forma de construir critérios, reconhecer limites e aprender a justificar decisões. Como a tecnologia interfere na vida das pessoas, lacunas de formação podem se transformar em riscos reais. Um diploma, sozinho, não garante competência ou ética. Quero desenvolver ambas, evitando a postura de cumprir tarefas sem compreender o que estou construindo.',
        },
        {
          num: '02',
          title: 'QUANDO UM BUG SE TORNA UM PROBLEMA ÉTICO?',
          question:
            'Até que ponto a falta de atenção ou preparo ao programar deixa de ser um simples erro?',
          answer:
            'Uma falha em um aplicativo com dados pessoais pode expor usuários a prejuízos financeiros, constrangimento e uso indevido de informações. Nem todo bug caracteriza, por si só, negligência: importa como o risco foi prevenido e tratado. A responsabilidade ética é comprometida quando ignoro cuidados previsíveis, omito um problema conhecido ou deixo de agir para reduzir danos. Meu dever não começa apenas depois do vazamento; inclui preparo, testes, revisão e comunicação transparente.',
        },
        {
          num: '03',
          title: 'PRINCÍPIOS, VALORES E ACESSIBILIDADE',
          question:
            'Por que incluir pessoas com deficiência e com menor familiaridade tecnológica desde o início?',
          answer:
            'A palavra que orienta minha resposta é empatia. Um aplicativo de serviços públicos pode ser a porta de acesso a direitos; se desconsidera parte da população, amplia barreiras em vez de removê-las. Acessibilidade não é um favor nem uma exceção posterior. Quero considerá-la nos requisitos, na interface e nos testes, com linguagem compreensível, navegação acessível e participação de usuários diversos. Reconhecer o outro significa projetar para necessidades reais, não apenas para quem usa tecnologia como eu.',
        },
        {
          num: '04',
          title: 'PROJETO DE VIDA E ROTINA DE ESTUDOS',
          question:
            'Como minha disciplina e o uso das ferramentas de ensino me aproximam do profissional que desejo ser?',
          answer:
            'Procuro não limitar minha aprendizagem ao conteúdo apresentado em sala: também busco outras fontes e plataformas de estudo. Vejo o AVA como apoio para retomar conceitos e organizar a formação, não apenas entregar atividades. Quero tornar essa busca mais consistente, com tempo reservado para leitura, prática e revisão. Meu projeto é ser competente, ético e capaz de criar soluções úteis. A excelência que desejo depende de escolhas diárias, abertura ao feedback e disposição para continuar aprendendo.',
        },
      ],
      mediaSlot: {
        id: 'wdp-05-ava',
        headerTag: 'REGISTRO VISUAL / AVA 23.09',
        placeholderTitle: '[INSERIR FOTO OU VÍDEO DA AULA]',
        caption:
          'Captura dos materiais ou da atividade no AVA, sem expor dados pessoais de colegas.',
        defaultMedia: {
          url: '/media/encontro- 23.09.jpeg',
          type: 'image',
          fileName: 'encontro- 23.09.jpeg',
        },
      },
    },
  },
  {
    id: 'wdp-06',
    code: 'WDP / 06',
    number: '04',
    theme: 'light',
    kicker: 'ENCONTRO 04 / REGISTRO DE AULA',
    dateBadge: '21 DE OUTUBRO · 2026',
    visualDate: '21/10',
    title: 'COMPETÊNCIAS DIFERENTES. UM MESMO DESAFIO.',
    subtitle: 'Habilidades, criatividade e formação de equipes',
    classroomHappened:
      'O professor propôs uma competição e organizou as equipes a partir das capacidades que cada estudante reconhecia em si: gostar de ler, ter criatividade ou facilidade para falar. Cada grupo reuniu duas pessoas de cada perfil. O desafio era criar e apresentar uma paródia, articulando essas contribuições.',
    notesHeading: 'MINHAS ANOTAÇÕES',
    personalNotes:
      'A divisão tornou visível que ninguém precisa dominar tudo para contribuir. Ao mesmo tempo, meu perfil inicial não pode virar um limite: desenvolver competência exige cooperar e experimentar tarefas que ainda me deixam desconfortável. Ler, criar e falar precisavam servir à mesma produção.',
    visualPlaceholderTitle: '[INSERIR FOTO OU VÍDEO DA AULA]',
    visualCaption: 'Formação das equipes ou elaboração coletiva da letra.',
    visualSubCaption: '21/10 / Da identificação de capacidades à produção em grupo',
    takeaway:
      'Uma equipe se fortalece quando diferenças se tornam colaboração, não hierarquia de valor.',
    defaultMedia: {
      url: '/media/encontro - 21.10.png',
      type: 'image',
      fileName: 'encontro - 21.10.png',
    },
    detailCards: [
      {
        title: 'LEITURA, CRIAÇÃO E EXPRESSÃO / OS PAPÉIS',
        body: 'Na organização proposta, quem gostava de ler ajudaria a escolher a base musical; os integrantes criativos contribuiriam para a letra; quem tinha facilidade para falar assumiria o canto na apresentação. Duas pessoas de cada perfil formaram uma equipe de seis integrantes. A divisão distribuiu responsabilidades sem dispensar a colaboração entre todos.',
      },
      {
        title: 'A ESCOLHA DA MÚSICA E DA LINGUAGEM',
        body: 'Meu grupo escolheu "Ela é amiga da minha mulher" como base. A melodia passou a sustentar uma paródia sobre a vida universitária em Engenharia de Software. O desafio de autoria foi transformar conteúdos estudados em versos que pudessem ser cantados: não bastava trocar palavras, era necessário comunicar uma ideia e manter coerência com a proposta.',
      },
      {
        title: 'A CONSTRUÇÃO COLETIVA DA PARÓDIA',
        body: 'A letra reuniu vida acadêmica, percepção e argumentação, autoria e inovação, além de leitura, escrita e oralidade. Referências a códigos, bugs, testes, projetos e prazos aproximaram esses eixos da nossa graduação. Criar em grupo exigiu conciliar contribuições em uma mesma música; a versão registrada no apêndice preserva essa produção coletiva.',
      },
      {
        title: 'CONEXÃO COM A ENGENHARIA DE SOFTWARE',
        body: 'Uma equipe de desenvolvimento também combina capacidades: compreender necessidades, criar alternativas, implementar, testar e comunicar. A dinâmica me ajudou a perceber que distribuir tarefas não basta; é preciso integrar os resultados. Quero colaborar sem reduzir colegas a rótulos, reconhecer suas contribuições e desenvolver habilidades além daquelas em que já tenho facilidade.',
      },
    ],
    closingNote:
      'A apresentação ficou para 04/11. Quatro colegas da turma atuariam como juradas; a experiência permitiria colocar a criação à prova diante de outras pessoas.',
  },
  {
    id: 'wdp-07',
    code: 'WDP / 07',
    number: '05',
    theme: 'dark',
    kicker: 'ENCONTRO 05 / REGISTRO DE AULA',
    dateBadge: '04 DE NOVEMBRO · 2026',
    visualDate: '04/11',
    title: 'CRIATIVIDADE QUE GANHA VOZ.',
    subtitle:
      'Apresentação da paródia, trabalho em grupo e superação da zona de conforto',
    classroomHappened:
      'Apresentamos a paródia de "Ela é amiga da minha mulher", desenvolvida a partir da dinâmica de 21/10. Cantamos diante da turma uma letra sobre a vida acadêmica em Engenharia de Software. A proposta colocou em prática criatividade, expressão oral e cooperação, levando a produção coletiva para além do texto escrito.',
    notesHeading: 'APRENDIZADO PESSOAL',
    personalNotes:
      'Cantar em sala exigiu sair da zona de conforto e assumir, junto aos colegas, a autoria do que criamos. Percebi que comunicar uma ideia depende tanto do conteúdo quanto da disposição de apresentá-la. O resultado das juradas foi importante, mas não resume o valor do processo.',
    visualPlaceholderTitle: '[INSERIR VÍDEO DA APRESENTAÇÃO]',
    visualCaption: 'Vídeo da paródia cantada pelo grupo em sala.',
    visualSubCaption:
      '04/11 / Apresentação coletiva · letra integral no apêndice',
    linkToAppendix: true,
    takeaway:
      'Aprendi que criar, colaborar e apresentar são práticas que se fortalecem quando exercitadas.',
    defaultMedia: {
      url: '/media/encontro - 04.11.png',
      type: 'image',
      fileName: 'encontro - 04.11.png',
    },
    detailCards: [
      {
        title: 'O RESULTADO / DUAS DAS QUATRO JURADAS',
        body: 'Quatro colegas atuaram como juradas. Conforme minhas anotações, duas delas se viraram para o nosso grupo durante a apresentação; nos demais grupos, nenhuma se virou. Esse é o resultado observado que posso registrar. Não há nota numérica nem justificativa detalhada de cada avaliação nas anotações, por isso não atribuo pontuações ou critérios que não foram documentados.',
      },
      {
        title: 'CRIATIVIDADE COM SENTIDO ACADÊMICO',
        body: 'O humor aproximou o conteúdo da nossa realidade: pressão por prazos, códigos que precisam ser revistos, bugs, testes e projetos. A paródia também defendeu a leitura, a argumentação e a inovação. Entendo que a atividade não substitui o estudo técnico; ela oferece outra forma de elaborar e comunicar aquilo que estamos aprendendo.',
      },
      {
        title: 'EXPRESSÃO ORAL E AUTORIA COMPARTILHADA',
        body: 'A apresentação deu continuidade aos papéis propostos na formação da equipe. Leitura, criação e fala precisaram funcionar de maneira articulada para que a letra se tornasse uma apresentação coletiva. Para mim, foi uma oportunidade de exercitar comunicação sem esperar segurança absoluta e de reconhecer que o trabalho final depende das contribuições de outras pessoas.',
      },
      {
        title: 'CONEXÃO COM A ENGENHARIA DE SOFTWARE',
        body: 'Apresentar uma solução, demonstrar um sistema e explicar escolhas técnicas também exigem clareza e presença. Quero levar dessa experiência a disposição para preparar melhor minhas falas, ouvir avaliações e compartilhar responsabilidades. Saber programar é essencial; tornar uma ideia compreensível e colaborar para que ela funcione são partes da mesma formação.',
      },
    ],
  },
];

export const SYNTHESIS_CARDS = [
  {
    num: '01',
    title: 'VÍNCULOS',
    body: 'Família, amizades e experiências significativas dão sentido ao meu projeto de vida.',
    featured: false,
  },
  {
    num: '02',
    title: 'ESCOLHAS',
    body: 'Escolher parceiros e definir prioridades exige cuidado com os efeitos das minhas decisões.',
    featured: false,
  },
  {
    num: '03',
    title: 'ÉTICA',
    body: 'Proteger dados, prevenir riscos e incluir usuários são compromissos humanos e técnicos.',
    featured: true,
  },
  {
    num: '04',
    title: 'COLABORAÇÃO',
    body: 'Ler, criar e apresentar em grupo mostrou que capacidades diferentes precisam se integrar.',
    featured: false,
  },
];

export const PARODY_FILTERS: {
  id: ParodyThemeId;
  label: string;
  targetSlideId?: string;
}[] = [
  { id: 'all', label: 'Todos os Eixos' },
  { id: 'vida-academica', label: 'Vida Acadêmica', targetSlideId: 'wdp-09' },
  {
    id: 'percepcao-argumentacao',
    label: 'Percepção e Argumentação',
    targetSlideId: 'wdp-10',
  },
  {
    id: 'autoria-inovacao',
    label: 'Autoria e Inovação',
    targetSlideId: 'wdp-10',
  },
  {
    id: 'leitura-escrita-oralidade',
    label: 'Leitura, Escrita e Oralidade',
    targetSlideId: 'wdp-10',
  },
  { id: 'refroes', label: 'Refrões', targetSlideId: 'wdp-09' },
];

export const PARODY_FULL_LYRICS = {
  page01: [
    {
      id: 'intro',
      axis: 'vida-academica' as ParodyThemeId,
      tag: 'INTRODUÇÃO',
      title: 'Abertura da paródia',
      highlightNote:
        'CRIAÇÃO COLETIVA — Conteúdos acadêmicos transformados em música, humor e expressão.',
      lines: [
        'Na faculdade é assim,',
        'Pois é, pois é!',
        'Tem quatro temas pra aprender,',
        'Enfim, enfim!',
        'Vida acadêmica e argumentação,',
        'Autoria e inovação,',
        'Leitura, escrita e oralidade,',
        'Tudo isso é formação!',
      ],
    },
    {
      id: 'parte-1',
      axis: 'vida-academica' as ParodyThemeId,
      tag: 'PARTE 1 / VIDA ACADÊMICA',
      title: 'Rotina de código, bugs e prazos',
      lines: [
        'Na faculdade é pressão,',
        'Pois é, pois é!',
        'Tem código pra resolver,',
        'Enfim, enfim!',
        'Se fosse só leitura tava tudo certo,',
        'Mas tem código pra decifrar!',
        'Se fosse só teoria tava tudo certo,',
        'Mas tem bug que não quer funcionar!',
        'Tem que ler, tem que escrever,',
        'Tem que testar pra não quebrar!',
        'Se o código dá erro na tela,',
        'Meu amigo, é melhor revisar!',
        'Se deixar pra programar,',
        'Aí complicou, complicou!',
        'Tem trabalho e tem projeto,',
        'E o prazo já chegou!',
      ],
    },
    {
      id: 'refrao-1',
      axis: 'refroes' as ParodyThemeId,
      tag: 'REFRÃO',
      title: 'Os quatro eixos da formação',
      isChorus: true,
      lines: [
        'Lê, lê, pra aprender,',
        'Argumenta pra convencer!',
        'Cria, inova, dá opinião,',
        'E apresenta sua conclusão!',
        'Vida acadêmica é dedicação,',
        'Percepção e argumentação!',
        'Autoria, leitura e inovação,',
        'Escrita e oralidade na formação!',
      ],
    },
  ],
  page02: [
    {
      id: 'parte-2',
      axis: 'percepcao-argumentacao' as ParodyThemeId,
      tag: 'PARTE 2 / PERCEPÇÃO E ARGUMENTAÇÃO',
      title: 'Observar, questionar e justificar',
      lines: [
        'Tem que saber observar,',
        'E as ideias questionar,',
        'Se tiver um bom argumento,',
        'Sua opinião apresentar!',
        'Não adianta só falar,',
        'Tem que saber explicar,',
        'Perceber e propor ideias,',
        'E saber argumentar!',
        'Se fosse só dar opinião tava tudo certo,',
        'Mas tem que saber justificar!',
        'Se fosse só falar qualquer coisa tava tudo certo,',
        'Tem que ter argumento pra convencer!',
      ],
    },
    {
      id: 'parte-3',
      axis: 'autoria-inovacao' as ParodyThemeId,
      tag: 'PARTE 3 / AUTORIA E INOVAÇÃO',
      title: 'Criar com originalidade',
      highlightNote:
        'AUTORIA EM PRÁTICA — Transformar o conteúdo estudado em uma produção do grupo.',
      lines: [
        'Se fosse só copiar tava tudo certo,',
        'Mas tem que criar e imaginar!',
        'Se fosse só seguir o modelo tava tudo certo,',
        'Mas tem que ter ideia pra inovar!',
        'Tem que criar, tem que inventar,',
        'Uma ideia original apresentar!',
        'Autoria e inovação,',
        'É usar a criatividade na criação!',
      ],
    },
    {
      id: 'parte-4',
      axis: 'leitura-escrita-oralidade' as ParodyThemeId,
      tag: 'PARTE 4 / LEITURA E ESCRITA',
      title: 'Interpretação e expressão oral',
      lines: [
        'Se fosse só ler tava tudo certo,',
        'Mas tem texto pra interpretar!',
        'Se fosse só escrever tava tudo certo,',
        'Mas tem apresentação pra encarar!',
        'Tem que ler, tem que escrever,',
        'E na hora de falar, não pode se esconder!',
        'Leitura e oralidade,',
        'Escrita com dedicação!',
        'Se o texto é complicado,',
        'Tem que ter interpretação!',
        'Pra falar na frente da turma,',
        'Tem que ter comunicação!',
      ],
    },
  ],
  page03: [
    {
      id: 'final-todos',
      axis: 'vida-academica' as ParodyThemeId,
      tag: 'FINAL / TODOS JUNTOS',
      title: 'Encerramento coletivo do grupo',
      lines: [
        'É código, é criação,',
        'É leitura e expressão!',
        'Tem que ter criatividade,',
        'E também argumentação!',
        'Observa, propõe,',
        'Tem que saber escrever!',
        'Com ideias inovadoras,',
        'A gente vai crescer!',
        'Lê, lê, tem que estudar!',
        'Escreve, escreve, pra apresentar!',
        'Argumenta e inova também,',
        'Quatro temas que fazem a gente ir além!',
        'É faculdade, é faculdade!',
        'Tem desafio e dedicação!',
        'Entre códigos e trabalhos,',
        'A gente busca formação!',
      ],
    },
    {
      id: 'refrao-final',
      axis: 'refroes' as ParodyThemeId,
      tag: 'REFRÃO FINAL / REPETIR COM TODOS',
      title: 'Síntese cantada por toda a equipe',
      isChorus: true,
      lines: [
        'Lê, lê, pra aprender,',
        'Argumenta pra convencer!',
        'Cria, inova, dá opinião,',
        'E apresenta sua conclusão!',
        'É faculdade, é faculdade!',
        'É esforço e dedicação!',
        'Quatro temas na cabeça,',
        'Pra garantir nossa formação!',
      ],
    },
  ],
};
