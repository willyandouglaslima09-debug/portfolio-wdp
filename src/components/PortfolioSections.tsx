import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Compass,
  Disc,
  Filter,
  Music,
  Sparkles,
  Users,
} from 'lucide-react';
import type {
  EncounterData,
  ParodyThemeId,
  UploadedMedia,
} from '../types/portfolio';
import {
  OVERVIEW_ENCOUNTERS,
  OVERVIEW_OBJECTIVES,
  PARODY_FILTERS,
  STUDENT_PROFILE,
  SYNTHESIS_CARDS,
} from '../data/portfolioData';
import { MediaSlotCard } from './MediaSlotCard';
import {
  SectionFooter,
  TextReveal,
  staggerContainerVariants,
  staggerItemVariants,
} from './MotionPrimitives';

interface CourseOverviewSectionProps {
  onNavigate: (targetId: string) => void;
  isPresentationMode: boolean;
}

export const CourseOverviewSection: React.FC<CourseOverviewSectionProps> = ({
  onNavigate,
  isPresentationMode,
}) => {
  return (
    <section
      id="wdp-02"
      className={`bg-[#F0F1EC] text-[#101722] px-5 sm:px-10 lg:px-16 flex flex-col justify-between border-b border-[#CBD0C8] ${
        isPresentationMode
          ? 'min-h-[calc(100vh-3.5rem)] py-8 sm:py-10'
          : 'py-20 sm:py-28'
      }`}
    >
      <div className="max-w-[1360px] w-full mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#53606A]">
            <Compass className="w-3.5 h-3.5 text-[#101722]" />
            PERCURSO ACADÊMICO / INTRODUÇÃO E OBJETIVOS
          </span>
          <span className="px-2.5 py-1 rounded-[2px] bg-[#E3E6DE] border border-[#CBD0C8] text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#101722]">
            {STUDENT_PROFILE.semester}
          </span>
        </div>

        <TextReveal>
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-[-0.03em] leading-[1.04] text-[#101722] max-w-4xl">
            Construindo uma bússola ética para a vida acadêmica e profissional
          </h2>
        </TextReveal>

        <p className="mt-4 editorial-body text-[#53606A] max-w-3xl leading-relaxed">
          A disciplina <strong className="text-[#101722]">Relações, Princípios e Valores</strong> conectou autoconhecimento, convivência, responsabilidade social e expressão criativa ao longo de cinco encontros presenciais.
        </p>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {OVERVIEW_OBJECTIVES.map((obj) => (
            <motion.div
              key={obj.num}
              variants={staggerItemVariants}
              className="bg-[#E3E6DE]/85 border border-[#CBD0C8] p-5 rounded-[2px] flex flex-col justify-between hover:border-[#101722] transition-colors"
            >
              <div>
                <span className="inline-block px-2 py-0.5 rounded-[2px] bg-[#101722] text-[#CAFA65] text-[11px] font-extrabold tracking-[0.08em]">
                  {obj.num}
                </span>
                <h3 className="mt-4 text-lg font-extrabold tracking-[-0.01em] text-[#101722]">
                  {obj.title}
                </h3>
                <p className="mt-2 text-sm text-[#53606A] leading-relaxed">
                  {obj.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 bg-[#101722] text-[#F0F1EC] p-6 sm:p-8 rounded-[2px] border border-[#25313F]">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#CAFA65]">
              LINHA DO TEMPO DOS 5 ENCONTROS
            </span>
            <span className="text-[11px] text-[#A6AFBC]">
              Clique em um encontro para navegar
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {OVERVIEW_ENCOUNTERS.map((item, idx) => (
              <button
                key={item.targetId}
                type="button"
                onClick={() => onNavigate(item.targetId)}
                className="group text-left bg-[#141D29] border border-[#25313F] hover:border-[#CAFA65] p-4 rounded-[2px] transition-all flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#CAFA65]">
                      0{idx + 1} · {item.date}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A6AFBC] group-hover:text-[#CAFA65] group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="mt-2.5 text-xs sm:text-sm font-bold text-[#F0F1EC] leading-snug">
                    {item.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <SectionFooter code="WDP / 02" theme="light" extraLeftTag="VISÃO GERAL" />
    </section>
  );
};

interface EncounterSectionProps {
  encounter: EncounterData;
  uploadedMedia: UploadedMedia | null;
  onUpload: (encounterId: string, file: File) => void;
  onRemove: (encounterId: string, silent?: boolean) => void;
  onOpenLightbox: (encounter: EncounterData) => void;
  onNavigate: (targetId: string) => void;
  isPresentationMode: boolean;
}

export const EncounterSection: React.FC<EncounterSectionProps> = ({
  encounter,
  uploadedMedia,
  onUpload,
  onRemove,
  onOpenLightbox,
  onNavigate,
  isPresentationMode,
}) => {
  const isDark = encounter.theme === 'dark';

  return (
    <section
      id={encounter.id}
      className={`px-5 sm:px-10 lg:px-16 flex flex-col justify-between border-b ${
        isDark
          ? 'bg-[#101722] text-[#F0F1EC] border-[#25313F]/80'
          : 'bg-[#F0F1EC] text-[#101722] border-[#CBD0C8]'
      } ${
        isPresentationMode
          ? 'min-h-[calc(100vh-3.5rem)] py-8 sm:py-10'
          : 'py-20 sm:py-28'
      }`}
    >
      <div className="max-w-[1360px] w-full mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <span
            className={`text-[11px] font-extrabold uppercase tracking-[0.14em] ${
              isDark ? 'text-[#CAFA65]' : 'text-[#53606A]'
            }`}
          >
            {encounter.kicker}
          </span>
          <span
            className={`px-3 py-1 rounded-[2px] text-[11px] font-extrabold uppercase tracking-[0.1em] border ${
              isDark
                ? 'bg-[#141D29] text-[#F0F1EC] border-[#25313F]'
                : 'bg-[#E3E6DE] text-[#101722] border-[#CBD0C8]'
            }`}
          >
            {encounter.dateBadge}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-baseline gap-3">
                <span
                  className={`text-sm font-black uppercase tracking-[0.1em] px-2 py-0.5 rounded-[2px] ${
                    isDark
                      ? 'bg-[#CAFA65] text-[#101722]'
                      : 'bg-[#101722] text-[#CAFA65]'
                  }`}
                >
                  #{encounter.number}
                </span>
                <TextReveal>
                  <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black tracking-[-0.03em] leading-[1.08]">
                    {encounter.title}
                  </h2>
                </TextReveal>
              </div>

              <p
                className={`mt-3 text-base sm:text-lg font-medium leading-relaxed ${
                  isDark ? 'text-[#A6AFBC]' : 'text-[#53606A]'
                }`}
              >
                {encounter.subtitle}
              </p>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  className={`p-5 rounded-[2px] border ${
                    isDark
                      ? 'bg-[#141D29] border-[#25313F]'
                      : 'bg-[#E3E6DE]/80 border-[#CBD0C8]'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2.5">
                    <BookOpen
                      className={`w-4 h-4 ${
                        isDark ? 'text-[#CAFA65]' : 'text-[#101722]'
                      }`}
                    />
                    <h3 className="text-[11px] font-extrabold uppercase tracking-[0.12em]">
                      O QUE ACONTECEU EM SALA
                    </h3>
                  </div>
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? 'text-[#F0F1EC]/90' : 'text-[#101722]/90'
                    }`}
                  >
                    {encounter.classroomHappened}
                  </p>
                </div>

                <div
                  className={`p-5 rounded-[2px] border ${
                    isDark
                      ? 'bg-[#141D29] border-[#25313F]'
                      : 'bg-[#E3E6DE]/80 border-[#CBD0C8]'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2.5">
                    <Users
                      className={`w-4 h-4 ${
                        isDark ? 'text-[#CAFA65]' : 'text-[#101722]'
                      }`}
                    />
                    <h3 className="text-[11px] font-extrabold uppercase tracking-[0.12em]">
                      MINHAS PERCEPÇÕES E NOTAS
                    </h3>
                  </div>
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? 'text-[#F0F1EC]/90' : 'text-[#101722]/90'
                    }`}
                  >
                    {encounter.personalNotes}
                  </p>
                </div>
              </div>
            </div>

            <blockquote
              className={`mt-5 p-4 sm:p-5 rounded-[2px] border-l-4 border-[#CAFA65] ${
                isDark
                  ? 'bg-[#090D14]/85 text-[#F0F1EC]'
                  : 'bg-[#101722] text-[#F0F1EC]'
              }`}
            >
              <span className="block text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#CAFA65] mb-1">
                SÍNTESE DO ENCONTRO {encounter.number}
              </span>
              <p className="text-sm sm:text-base font-semibold leading-snug">
                {encounter.takeaway}
              </p>
            </blockquote>
          </div>

          <div className="lg:col-span-5">
            <MediaSlotCard
              encounter={encounter}
              uploadedMedia={uploadedMedia}
              onUpload={onUpload}
              onRemove={onRemove}
              onOpenLightbox={onOpenLightbox}
              onNavigate={onNavigate}
            />
          </div>
        </div>
      </div>

      <SectionFooter
        code={encounter.code}
        theme={encounter.theme}
        extraLeftTag={`ENCONTRO ${encounter.number}`}
      />
    </section>
  );
};

interface SynthesisSectionProps {
  isPresentationMode: boolean;
}

export const SynthesisSection: React.FC<SynthesisSectionProps> = ({
  isPresentationMode,
}) => {
  return (
    <section
      id="wdp-08"
      className={`bg-[#101722] text-[#F0F1EC] px-5 sm:px-10 lg:px-16 flex flex-col justify-between border-b border-[#25313F]/80 ${
        isPresentationMode
          ? 'min-h-[calc(100vh-3.5rem)] py-8 sm:py-10'
          : 'py-20 sm:py-28'
      }`}
    >
      <div className="max-w-[1360px] w-full mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#CAFA65]">
            <Sparkles className="w-3.5 h-3.5" />
            SÍNTESE DO PERCURSO / CONSOLIDAÇÃO
          </span>
          <span className="px-2.5 py-1 rounded-[2px] bg-[#141D29] border border-[#25313F] text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#A6AFBC]">
            04 PILARES FORMATIVOS
          </span>
        </div>

        <TextReveal>
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-[-0.03em] leading-[1.04] max-w-4xl">
            Principais aprendizados da jornada
          </h2>
        </TextReveal>

        <p className="mt-4 editorial-body text-[#A6AFBC] max-w-3xl leading-relaxed">
          O que permanece após os cinco encontros: princípios que orientam minhas relações, escolhas profissionais e trabalho em equipe na Engenharia de Software.
        </p>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {SYNTHESIS_CARDS.map((card) => (
            <motion.div
              key={card.num}
              variants={staggerItemVariants}
              className={`p-6 sm:p-8 rounded-[2px] border transition-colors ${
                card.featured
                  ? 'figma-grid-card border-[#CAFA65] shadow-[0_0_30px_rgba(202,250,101,0.08)]'
                  : 'bg-[#141D29] border-[#25313F] hover:border-[#34404D]'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`px-2.5 py-1 rounded-[2px] text-xs font-black tracking-[0.1em] ${
                    card.featured
                      ? 'bg-[#CAFA65] text-[#101722]'
                      : 'bg-[#090D14] text-[#CAFA65] border border-[#25313F]'
                  }`}
                >
                  {card.num}
                </span>
                {card.featured && (
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#CAFA65]">
                    EIXO CENTRAL
                  </span>
                )}
              </div>

              <h3 className="mt-5 text-2xl sm:text-3xl font-black tracking-[-0.02em] text-[#F0F1EC]">
                {card.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#A6AFBC] leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <SectionFooter code="WDP / 08" theme="dark" extraLeftTag="APRENDIZADOS" />
    </section>
  );
};

interface ParodyAppendixSectionProps {
  slideId: 'wdp-09' | 'wdp-10' | 'wdp-11';
  activeTheme: ParodyThemeId;
  onSelectTheme: (theme: ParodyThemeId) => void;
  onNavigate: (targetId: string) => void;
  isPresentationMode: boolean;
}

const PARODY_VERSES = [
  {
    id: 'v1',
    axis: 'vida-academica' as ParodyThemeId,
    tag: 'ESTROFE 01 · VIDA ACADÊMICA',
    title: 'Chegada e propósito na faculdade',
    lines: [
      'Entrei na sala com sonhos pra realizar,',
      'Código na tela e muito pra caminhar.',
      'Na UniCatólica aprendi a enxergar:',
      'Não basta saber fazer, é preciso se importar.',
    ],
  },
  {
    id: 'refrao-1',
    axis: 'refroes' as ParodyThemeId,
    tag: 'REFRÃO PRINCIPAL',
    title: 'O chamado da formação crítica',
    lines: [
      'Lê, lê, pra aprender,',
      'Argumenta pra convencer!',
      'Cria, inova, dá opinião,',
      'Ética e valores na profissão!',
    ],
  },
  {
    id: 'v2',
    axis: 'percepcao-argumentacao' as ParodyThemeId,
    tag: 'ESTROFE 02 · PERCEPÇÃO E ARGUMENTAÇÃO',
    title: 'Escuta ativa e olhar crítico',
    lines: [
      'Cada encontro trouxe uma nova visão,',
      'Ouvir o outro amplia a razão.',
      'Com argumento firme e respeito no olhar,',
      'Construo escolhas prontas pra transformar.',
    ],
  },
  {
    id: 'v3',
    axis: 'autoria-inovacao' as ParodyThemeId,
    tag: 'ESTROFE 03 · AUTORIA E INOVAÇÃO',
    title: 'Protagonismo e criação em equipe',
    lines: [
      'Sair da zona de conforto faz crescer,',
      'Unir talentos multiplica o saber.',
      'Na autoria nasce a inovação,',
      'Com compromisso, ética e cooperação.',
    ],
  },
  {
    id: 'v4',
    axis: 'leitura-escrita-oralidade' as ParodyThemeId,
    tag: 'ESTROFE 04 · LEITURA, ESCRITA E ORALIDADE',
    title: 'Expressão que conecta ideias e pessoas',
    lines: [
      'Da leitura atenta à escrita com clareza,',
      'Na oralidade a ideia ganha firmeza.',
      'Comunicar valores é construir ponte,',
      'Levando princípios além do horizonte.',
    ],
  },
];

export const ParodyAppendixSection: React.FC<ParodyAppendixSectionProps> = ({
  slideId,
  activeTheme,
  onSelectTheme,
  onNavigate,
  isPresentationMode,
}) => {
  if (slideId === 'wdp-09') {
    const filteredVerses =
      activeTheme === 'all'
        ? PARODY_VERSES
        : PARODY_VERSES.filter((v) => v.axis === activeTheme);

    return (
      <section
        id="wdp-09"
        className={`bg-[#F0F1EC] text-[#101722] px-5 sm:px-10 lg:px-16 flex flex-col justify-between border-b border-[#CBD0C8] ${
          isPresentationMode
            ? 'min-h-[calc(100vh-3.5rem)] py-8 sm:py-10'
            : 'py-20 sm:py-28'
        }`}
      >
        <div className="max-w-[1360px] w-full mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#53606A]">
              <Music className="w-3.5 h-3.5 text-[#101722]" />
              APÊNDICE CRIATIVO / PARÓDIA — LETRA E REFRÕES
            </span>
            <button
              type="button"
              onClick={() => onNavigate('wdp-07')}
              className="text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#101722] underline underline-offset-4 hover:opacity-75 cursor-pointer"
            >
              Ver registro em vídeo (Encontro 05)
            </button>
          </div>

          <TextReveal>
            <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] leading-[1.05] max-w-4xl">
              Paródia: síntese cantada da disciplina
            </h2>
          </TextReveal>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#53606A] mr-1">
              <Filter className="w-3 h-3" />
              Filtrar por eixo:
            </span>
            {PARODY_FILTERS.map((f) => {
              const selected = activeTheme === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => onSelectTheme(f.id)}
                  className={`px-3 py-1.5 rounded-[2px] text-[11px] font-extrabold uppercase tracking-[0.08em] border transition-colors cursor-pointer ${
                    selected
                      ? 'bg-[#101722] text-[#CAFA65] border-[#101722]'
                      : 'bg-[#E3E6DE] text-[#101722] border-[#CBD0C8] hover:border-[#101722]'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredVerses.map((v) => {
              const isChorus = v.axis === 'refroes';
              return (
                <div
                  key={v.id}
                  className={`p-6 rounded-[2px] border flex flex-col justify-between ${
                    isChorus
                      ? 'bg-[#101722] text-[#F0F1EC] border-[#101722]'
                      : 'bg-[#E3E6DE]/90 text-[#101722] border-[#CBD0C8]'
                  }`}
                >
                  <div>
                    <span
                      className={`inline-block text-[10px] font-extrabold uppercase tracking-[0.12em] ${
                        isChorus ? 'text-[#CAFA65]' : 'text-[#53606A]'
                      }`}
                    >
                      {v.tag}
                    </span>
                    <h3 className="mt-2 text-lg font-extrabold">{v.title}</h3>
                    <div className="mt-4 space-y-1.5 font-medium text-sm sm:text-base leading-relaxed">
                      {v.lines.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <SectionFooter code="WDP / 09" theme="light" extraLeftTag="PARÓDIA · LETRA" />
      </section>
    );
  }

  if (slideId === 'wdp-10') {
    const competencies = [
      {
        code: 'EIXO 01',
        title: 'Percepção e Argumentação',
        desc: 'Capacidade de ler contextos humanos, identificar dilemas éticos e sustentar posicionamentos fundamentados com respeito ao contraditório.',
      },
      {
        code: 'EIXO 02',
        title: 'Autoria e Inovação',
        desc: 'Transformar repertório teórico em produção original — unindo criatividade artística, colaboração em grupo e resolução de problemas.',
      },
      {
        code: 'EIXO 03',
        title: 'Leitura, Escrita e Oralidade',
        desc: 'Articular reflexão escrita e expressão oral diante da turma, vencendo a timidez e comunicando ideias com clareza e propósito.',
      },
    ];

    return (
      <section
        id="wdp-10"
        className={`bg-[#101722] text-[#F0F1EC] px-5 sm:px-10 lg:px-16 flex flex-col justify-between border-b border-[#25313F]/80 ${
          isPresentationMode
            ? 'min-h-[calc(100vh-3.5rem)] py-8 sm:py-10'
            : 'py-20 sm:py-28'
        }`}
      >
        <div className="max-w-[1360px] w-full mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#CAFA65]">
              <Disc className="w-3.5 h-3.5" />
              APÊNDICE CRIATIVO / EIXOS FORMATIVOS DA PARÓDIA
            </span>
            <span className="px-2.5 py-1 rounded-[2px] bg-[#141D29] border border-[#25313F] text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#A6AFBC]">
              COMPETÊNCIAS MOBILIZADAS
            </span>
          </div>

          <TextReveal>
            <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] leading-[1.05] max-w-4xl">
              Análise dos eixos expressos na composição
            </h2>
          </TextReveal>

          <p className="mt-4 editorial-body text-[#A6AFBC] max-w-3xl leading-relaxed">
            Mais do que um exercício musical, a construção coletiva da paródia consolidou competências comunicativas e éticas essenciais à formação superior.
          </p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
            {competencies.map((item) => (
              <div
                key={item.code}
                className="figma-grid-card p-6 sm:p-8 rounded-[2px] border border-[#25313F] flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-[2px] bg-[#CAFA65] text-[#101722] text-[10px] font-black uppercase tracking-[0.12em]">
                    {item.code}
                  </span>
                  <h3 className="mt-5 text-2xl font-black tracking-[-0.02em] text-[#F0F1EC]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[#A6AFBC] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#25313F]/80 flex items-center gap-2 text-xs font-bold text-[#CAFA65]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Aplicado na apresentação em grupo</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SectionFooter code="WDP / 10" theme="dark" extraLeftTag="PARÓDIA · EIXOS" />
      </section>
    );
  }

  return (
    <section
      id="wdp-11"
      className={`bg-[#090D14] text-[#F0F1EC] px-5 sm:px-10 lg:px-16 flex flex-col justify-between ${
        isPresentationMode
          ? 'min-h-[calc(100vh-3.5rem)] py-8 sm:py-10'
          : 'py-20 sm:py-28'
      }`}
    >
      <div className="max-w-[1360px] w-full mx-auto">
        <span className="inline-block text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#CAFA65] mb-5">
          ENCERRAMENTO / SÍNTESE FINAL
        </span>

        <TextReveal>
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-black tracking-[-0.03em] leading-[1.04] max-w-4xl">
            Técnica com consciência, valores e propósito
          </h2>
        </TextReveal>

        <p className="mt-5 editorial-body text-[#A6AFBC] max-w-3xl leading-relaxed">
          Concluo a disciplina <strong className="text-[#F0F1EC]">Relações, Princípios e Valores</strong> com a convicção de que desenvolver software de excelência começa por cultivar relações éticas, escuta genuína e compromisso humano.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#141D29] border border-[#25313F] p-6 sm:p-8 rounded-[2px]">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#A6AFBC]">
              DISCENTE
            </span>
            <p className="mt-1 text-sm font-bold text-[#F0F1EC]">
              {STUDENT_PROFILE.defaultName}
            </p>
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#A6AFBC]">
              MATRÍCULA
            </span>
            <p className="mt-1 text-sm font-bold text-[#CAFA65]">
              {STUDENT_PROFILE.registration}
            </p>
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#A6AFBC]">
              DOCENTE
            </span>
            <p className="mt-1 text-sm font-bold text-[#F0F1EC]">
              Prof. {STUDENT_PROFILE.professor}
            </p>
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#A6AFBC]">
              INSTITUIÇÃO
            </span>
            <p className="mt-1 text-sm font-bold text-[#F0F1EC]">
              {STUDENT_PROFILE.institution}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <button
            type="button"
            onClick={() => onNavigate('wdp-01')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-[2px] bg-[#CAFA65] text-[#101722] text-xs font-black uppercase tracking-[0.1em] hover:brightness-95 transition-all cursor-pointer"
          >
            <span>Voltar ao início do portfólio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <SectionFooter code="WDP / 11" theme="dark" extraLeftTag="ENCERRAMENTO" />
    </section>
  );
};