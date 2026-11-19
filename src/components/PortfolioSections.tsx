import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Compass,
  FileText,
  Filter,
  Music,
  Sparkles,
  Users,
} from 'lucide-react';
import type {
  EncounterData,
  ParodyThemeId,
  SecondaryMediaConfig,
  SectionTheme,
  UploadedMedia,
} from '../types/portfolio';
import {
  INTRO_CLASS_MEDIA_SLOT,
  OVERVIEW_ENCOUNTERS,
  OVERVIEW_OBJECTIVES,
  PARODY_FILTERS,
  PARODY_FULL_LYRICS,
  SYNTHESIS_CARDS,
} from '../data/portfolioData';
import { MediaSlotCard } from './MediaSlotCard';
import {
  SectionFooter,
  TextReveal,
  staggerContainerVariants,
  staggerItemVariants,
} from './MotionPrimitives';

function buildVirtualEncounter(
  slot: SecondaryMediaConfig,
  code: string,
  number: string,
  theme: SectionTheme,
  kicker: string,
  dateBadge: string
): EncounterData {
  return {
    id: slot.id,
    code,
    number,
    theme,
    kicker,
    dateBadge,
    visualDate: slot.headerTag,
    title: slot.placeholderTitle,
    subtitle: slot.caption,
    classroomHappened: '',
    personalNotes: '',
    visualPlaceholderTitle: slot.placeholderTitle,
    visualCaption: slot.caption,
    visualSubCaption: slot.subCaption,
    takeaway: '',
  };
}

interface CourseOverviewSectionProps {
  mediaMap: Record<string, UploadedMedia>;
  onUpload: (slotId: string, file: File) => void;
  onRemove: (slotId: string, silent?: boolean) => void;
  onOpenLightbox: (encounter: EncounterData) => void;
  onNavigate: (targetId: string) => void;
  isPresentationMode: boolean;
}

export const CourseOverviewSection: React.FC<CourseOverviewSectionProps> = ({
  mediaMap,
  onUpload,
  onRemove,
  onOpenLightbox,
  onNavigate,
  isPresentationMode,
}) => {
  const introEncounterSlot = buildVirtualEncounter(
    INTRO_CLASS_MEDIA_SLOT,
    'WDP / 02',
    '00',
    'light',
    '05/08 · AULA INTRODUTÓRIA',
    '05 DE AGOSTO · 2026'
  );

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
            APRESENTAÇÃO / OBJETIVOS E PERCURSO
          </span>
          <span className="px-2.5 py-1 rounded-[2px] bg-[#E3E6DE] border border-[#CBD0C8] text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#101722]">
            06 ENCONTROS + ESTUDO NO AVA
          </span>
        </div>

        <TextReveal>
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-[-0.03em] leading-[1.04] text-[#101722] max-w-4xl">
            MEU PERCURSO NA DISCIPLINA.
          </h2>
        </TextReveal>

        <p className="mt-4 editorial-body text-[#53606A] max-w-3xl leading-relaxed">
          Este portfólio reúne registros de{' '}
          <strong className="text-[#101722]">
            Relações, Princípios e Valores
          </strong>
          , na Unicatólica. Reflito sobre as experiências em sala, minhas
          respostas e os estudos no AVA, relacionando a formação humana às
          responsabilidades da Engenharia de Software.
        </p>

        <div className="mt-8">
          <span className="block text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#53606A] mb-3">
            QUATRO EIXOS DA DISCIPLINA
          </span>
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
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
        </div>

        <div className="mt-8 bg-[#101722] text-[#F0F1EC] p-6 sm:p-8 rounded-[2px] border border-[#25313F]">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#CAFA65]">
              CRONOGRAMA · 06 ENCONTROS + ESTUDO NO AVA
            </span>
            <span className="text-[11px] text-[#A6AFBC]">
              Clique para navegar entre os registros
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-2.5">
            {OVERVIEW_ENCOUNTERS.map((item, idx) => (
              <button
                key={`${item.date}-${idx}`}
                type="button"
                onClick={() => onNavigate(item.targetId)}
                className="group text-left bg-[#141D29] border border-[#25313F] hover:border-[#CAFA65] p-3.5 rounded-[2px] transition-all flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#CAFA65]">
                      {item.date}
                    </span>
                    <ArrowRight className="w-3 h-3 text-[#A6AFBC] group-hover:text-[#CAFA65] group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="mt-2 text-xs font-bold text-[#F0F1EC] leading-snug">
                    {item.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bloco 05/07 — Aula Introdutória */}
        <div className="mt-8 pt-8 border-t border-[#CBD0C8] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-[#E3E6DE]/85 border border-[#CBD0C8] p-6 sm:p-8 rounded-[2px]">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="inline-block px-2.5 py-1 rounded-[2px] bg-[#101722] text-[#CAFA65] text-[10px] font-extrabold uppercase tracking-[0.12em]">
                05/07 AULA INTRODUTÓRIA
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#53606A]">
                Ausência justificada
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black tracking-[-0.02em] text-[#101722]">
              O ponto de partida da trajetória.
            </h3>

            <p className="mt-4 text-sm sm:text-base text-[#101722]/90 leading-relaxed">
              Não estive presente na primeira aula, por falta justificada. Por
              isso, não apresento este encontro como uma vivência pessoal.
              Conforme o registro disponível, houve a apresentação do professor
              e da disciplina, organizada em quatro unidades, além da explicação
              da metodologia de avaliação.
            </p>

            <p className="mt-3 text-sm sm:text-base text-[#101722]/90 leading-relaxed">
              A avaliação prevê um portfólio com os acontecimentos de cada aula,
              as dinâmicas, os aprendizados e as respostas aos questionamentos.
              Entendo essa proposta como um exercício de autoria: registrar não
              é apenas descrever atividades, mas reconhecer como elas
              transformam minha maneira de pensar e agir.
            </p>
          </div>

          <div className="lg:col-span-5">
            <MediaSlotCard
              encounter={introEncounterSlot}
              uploadedMedia={mediaMap[INTRO_CLASS_MEDIA_SLOT.id] || null}
              onUpload={onUpload}
              onRemove={onRemove}
              onOpenLightbox={onOpenLightbox}
              onNavigate={onNavigate}
            />
          </div>
        </div>
      </div>

      <SectionFooter
        code="WDP / 02"
        theme="light"
        extraLeftTag="APRESENTAÇÃO E INTRODUÇÃO"
      />
    </section>
  );
};

interface EncounterSectionProps {
  encounter: EncounterData;
  mediaMap: Record<string, UploadedMedia>;
  uploadedMedia: UploadedMedia | null;
  onUpload: (encounterId: string, file: File) => void;
  onRemove: (encounterId: string, silent?: boolean) => void;
  onOpenLightbox: (encounter: EncounterData) => void;
  onNavigate: (targetId: string) => void;
  isPresentationMode: boolean;
}

export const EncounterSection: React.FC<EncounterSectionProps> = ({
  encounter,
  mediaMap,
  uploadedMedia,
  onUpload,
  onRemove,
  onOpenLightbox,
  onNavigate,
  isPresentationMode,
}) => {
  const isDark = encounter.theme === 'dark';

  const secondaryEncounter = encounter.secondaryMediaSlot
    ? buildVirtualEncounter(
        encounter.secondaryMediaSlot,
        encounter.code,
        encounter.number,
        encounter.theme,
        encounter.secondaryMediaSlot.headerTag,
        encounter.dateBadge
      )
    : null;

  const avaEncounter = encounter.avaSection
    ? buildVirtualEncounter(
        encounter.avaSection.mediaSlot,
        encounter.code,
        'AVA',
        encounter.theme,
        encounter.avaSection.mediaSlot.headerTag,
        '23 DE SETEMBRO · 2026'
      )
    : null;

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

        {/* Bloco Principal do Encontro */}
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
                      {encounter.notesHeading || 'MINHAS ANOTAÇÕES'}
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
                O QUE LEVO · ENCONTRO {encounter.number}
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

        {/* Cards Detalhados do Encontro */}
        {encounter.detailCards && encounter.detailCards.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {encounter.detailCards.map((card, index) => (
              <div
                key={index}
                className={`p-5 rounded-[2px] border flex flex-col justify-between ${
                  isDark
                    ? 'bg-[#141D29]/90 border-[#25313F]'
                    : 'bg-[#E3E6DE]/80 border-[#CBD0C8]'
                }`}
              >
                <div>
                  <span
                    className={`block text-[10px] font-extrabold uppercase tracking-[0.12em] mb-2 ${
                      isDark ? 'text-[#CAFA65]' : 'text-[#101722]'
                    }`}
                  >
                    {card.title}
                  </span>

                  {card.bullets && card.bullets.length > 0 && (
                    <ul
                      className={`mb-2.5 space-y-1 text-xs font-bold ${
                        isDark ? 'text-[#F0F1EC]' : 'text-[#101722]'
                      }`}
                    >
                      {card.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}

                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? 'text-[#A6AFBC]' : 'text-[#53606A]'
                    }`}
                  >
                    {card.body}
                  </p>
                </div>
              </div>
            ))}

            {/* Slot Secundário de Mídia (ex: Relógio 12/07) */}
            {secondaryEncounter && encounter.secondaryMediaSlot && (
              <div className="md:col-span-2 lg:col-span-1">
                <MediaSlotCard
                  encounter={secondaryEncounter}
                  uploadedMedia={
                    mediaMap[encounter.secondaryMediaSlot.id] || null
                  }
                  onUpload={onUpload}
                  onRemove={onRemove}
                  onOpenLightbox={onOpenLightbox}
                  onNavigate={onNavigate}
                />
              </div>
            )}
          </div>
        )}

        {/* Nota de Encerramento ou Referência Complementar */}
        {(encounter.closingNote || encounter.extraReference) && (
          <div
            className={`mt-5 p-4 rounded-[2px] border text-xs sm:text-sm ${
              isDark
                ? 'bg-[#141D29]/60 border-[#25313F] text-[#A6AFBC]'
                : 'bg-[#E3E6DE]/60 border-[#CBD0C8] text-[#53606A]'
            }`}
          >
            {encounter.closingNote && <p>{encounter.closingNote}</p>}
            {encounter.extraReference && (
              <p className="italic">{encounter.extraReference}</p>
            )}
          </div>
        )}

        {/* Subseção 23/09 — Atividade de Leitura e Reflexão no AVA */}
        {encounter.avaSection && avaEncounter && (
          <div className="mt-10 pt-8 border-t border-[#25313F]">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[2px] bg-[#CAFA65] text-[#101722] text-[10px] font-black uppercase tracking-[0.12em]">
                <FileText className="w-3.5 h-3.5" />
                {encounter.avaSection.badgeTitle}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black tracking-[-0.02em] text-[#F0F1EC]">
              {encounter.avaSection.subtitle}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#A6AFBC] max-w-4xl leading-relaxed">
              {encounter.avaSection.intro}
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {encounter.avaSection.questions.map((q) => (
                <div
                  key={q.num}
                  className="bg-[#141D29] border border-[#25313F] p-5 rounded-[2px]"
                >
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#CAFA65]">
                    {q.num} / {q.title}
                  </span>
                  <p className="mt-1.5 text-xs sm:text-sm font-bold text-[#F0F1EC]">
                    {q.question}
                  </p>
                  <p className="mt-2.5 text-sm text-[#A6AFBC] leading-relaxed">
                    {q.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 max-w-xl">
              <MediaSlotCard
                encounter={avaEncounter}
                uploadedMedia={
                  mediaMap[encounter.avaSection.mediaSlot.id] || null
                }
                onUpload={onUpload}
                onRemove={onRemove}
                onOpenLightbox={onOpenLightbox}
                onNavigate={onNavigate}
              />
            </div>
          </div>
        )}
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
            CONSIDERAÇÕES FINAIS / SÍNTESE PESSOAL
          </span>
          <span className="px-2.5 py-1 rounded-[2px] bg-[#141D29] border border-[#25313F] text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#A6AFBC]">
            04 PILARES FORMATIVOS
          </span>
        </div>

        <TextReveal>
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-[-0.03em] leading-[1.04] max-w-4xl">
            O QUE ESSA TRAJETÓRIA ME ENSINOU.
          </h2>
        </TextReveal>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {SYNTHESIS_CARDS.map((card) => (
            <motion.div
              key={card.num}
              variants={staggerItemVariants}
              className={`p-6 sm:p-7 rounded-[2px] border transition-colors ${
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

              <h3 className="mt-5 text-2xl font-black tracking-[-0.02em] text-[#F0F1EC]">
                {card.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#A6AFBC] leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 bg-[#141D29] border border-[#25313F] p-6 sm:p-8 rounded-[2px]">
          <p className="text-base sm:text-lg font-bold text-[#F0F1EC]">
            Ser engenheiro de software vai além de dominar linguagens e
            ferramentas.
          </p>
          <p className="mt-2.5 text-sm sm:text-base text-[#A6AFBC] leading-relaxed max-w-4xl">
            Quero unir estudo contínuo, responsabilidade técnica e respeito às
            pessoas. Levo desta trajetória o compromisso de testar minhas
            soluções, comunicar riscos, considerar a acessibilidade desde o
            início e colaborar com abertura ao diálogo. Minha formação se
            constrói nas escolhas que faço todos os dias.
          </p>
        </div>
      </div>

      <SectionFooter
        code="WDP / 08"
        theme="dark"
        extraLeftTag="SÍNTESE PESSOAL"
      />
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

export const ParodyAppendixSection: React.FC<ParodyAppendixSectionProps> = ({
  slideId,
  activeTheme,
  onSelectTheme,
  onNavigate,
  isPresentationMode,
}) => {
  if (slideId === 'wdp-09') {
    const blocks =
      activeTheme === 'all'
        ? PARODY_FULL_LYRICS.page01
        : PARODY_FULL_LYRICS.page01.filter((b) => b.axis === activeTheme);

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
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#53606A]">
              <Music className="w-3.5 h-3.5 text-[#101722]" />
              APÊNDICE / PRODUÇÃO DO GRUPO 04/11 · LETRA COMPLETA 1 DE 3
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
            <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] leading-[1.05]">
              NOSSA PARÓDIA / 01
            </h2>
          </TextReveal>
          <p className="mt-2 text-sm sm:text-base font-medium text-[#53606A]">
            Letra apresentada em sala, a partir de &ldquo;Ela é amiga da minha
            mulher&rdquo;.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#53606A] mr-1">
              <Filter className="w-3 h-3" />
              Filtrar estrofes:
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

          <div className="mt-7 grid grid-cols-1 lg:grid-cols-3 gap-5">
            {blocks.map((block) => (
              <div
                key={block.id}
                className={`p-6 rounded-[2px] border flex flex-col justify-between ${
                  block.isChorus
                    ? 'bg-[#101722] text-[#F0F1EC] border-[#101722]'
                    : 'bg-[#E3E6DE]/90 text-[#101722] border-[#CBD0C8]'
                }`}
              >
                <div>
                  <span
                    className={`inline-block text-[10px] font-extrabold uppercase tracking-[0.12em] ${
                      block.isChorus ? 'text-[#CAFA65]' : 'text-[#53606A]'
                    }`}
                  >
                    {block.tag}
                  </span>
                  <div className="mt-4 space-y-1 font-medium text-sm sm:text-base leading-relaxed">
                    {block.lines.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>

                {block.highlightNote && (
                  <div className="mt-6 pt-3 border-t border-[#CBD0C8] text-xs font-bold text-[#101722]">
                    {block.highlightNote}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <SectionFooter
          code="WDP / 09"
          theme="light"
          extraLeftTag="LETRA COMPLETA 1 DE 3"
        />
      </section>
    );
  }

  if (slideId === 'wdp-10') {
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
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#CAFA65]">
              <Music className="w-3.5 h-3.5" />
              APÊNDICE / PRODUÇÃO DO GRUPO 04/11 · LETRA COMPLETA 2 DE 3
            </span>
          </div>

          <TextReveal>
            <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] leading-[1.05]">
              NOSSA PARÓDIA / 02
            </h2>
          </TextReveal>
          <p className="mt-2 text-sm sm:text-base font-medium text-[#A6AFBC]">
            Percepção e argumentação · Autoria e inovação · Leitura, escrita e
            oralidade
          </p>

          <div className="mt-7 grid grid-cols-1 lg:grid-cols-3 gap-5">
            {PARODY_FULL_LYRICS.page02.map((block) => (
              <div
                key={block.id}
                className="figma-grid-card p-6 rounded-[2px] border border-[#25313F] flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#CAFA65]">
                    {block.tag}
                  </span>
                  <div className="mt-4 space-y-1 font-medium text-sm sm:text-base text-[#F0F1EC]/95 leading-relaxed">
                    {block.lines.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>

                {block.highlightNote && (
                  <div className="mt-6 pt-3 border-t border-[#25313F] text-xs font-bold text-[#CAFA65]">
                    {block.highlightNote}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <SectionFooter
          code="WDP / 10"
          theme="dark"
          extraLeftTag="LETRA COMPLETA 2 DE 3"
        />
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
        <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#CAFA65] mb-4">
          <Music className="w-3.5 h-3.5" />
          APÊNDICE / PRODUÇÃO DO GRUPO 04/11 · LETRA COMPLETA 3 DE 3
        </span>

        <TextReveal>
          <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] leading-[1.05]">
            NOSSA PARÓDIA / 03
          </h2>
        </TextReveal>
        <p className="mt-2 text-sm sm:text-base font-medium text-[#A6AFBC]">
          Encerramento da letra · participação de todo o grupo
        </p>

        <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-5">
          {PARODY_FULL_LYRICS.page03.map((block, idx) => (
            <div
              key={block.id}
              className={`${
                idx === 0 ? 'lg:col-span-5' : 'lg:col-span-4'
              } p-6 rounded-[2px] border flex flex-col justify-between ${
                block.isChorus
                  ? 'bg-[#CAFA65] text-[#101722] border-[#CAFA65]'
                  : 'bg-[#141D29] text-[#F0F1EC] border-[#25313F]'
              }`}
            >
              <div>
                <span
                  className={`inline-block text-[10px] font-extrabold uppercase tracking-[0.12em] ${
                    block.isChorus ? 'text-[#101722]' : 'text-[#CAFA65]'
                  }`}
                >
                  {block.tag}
                </span>
                <div className="mt-4 space-y-1 font-semibold text-sm sm:text-base leading-relaxed">
                  {block.lines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="lg:col-span-3 bg-[#141D29] border border-[#25313F] p-6 rounded-[2px] flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#CAFA65]">
                SÍNTESE FINAL
              </span>
              <h3 className="mt-3 text-2xl font-black tracking-[-0.02em] text-[#F0F1EC]">
                CRIAR. COLABORAR. APRESENTAR.
              </h3>
              <p className="mt-3 text-sm text-[#A6AFBC] leading-relaxed">
                Uma vivência que reuniu criatividade, trabalho em equipe e
                expressão oral.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('wdp-01')}
              className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-[2px] bg-[#CAFA65] text-[#101722] text-xs font-black uppercase tracking-[0.1em] hover:brightness-95 transition-all cursor-pointer"
            >
              <span>Voltar ao início</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <SectionFooter
        code="WDP / 11"
        theme="dark"
        extraLeftTag="LETRA COMPLETA 3 DE 3"
      />
    </section>
  );
};
