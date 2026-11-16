import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, Edit3, Maximize2, Trash2, Upload } from 'lucide-react';
import { STUDENT_PROFILE } from '../data/portfolioData';
import type { UploadedMedia } from '../types/portfolio';
import { SectionFooter, TextReveal } from './MotionPrimitives';

interface CoverSectionProps {
  studentName: string;
  onUpdateStudentName: (val: string) => void;
  coverPhoto: UploadedMedia | null;
  onUploadCoverPhoto: (file: File) => void;
  onRemoveCoverPhoto: (silent?: boolean) => void;
  onOpenCoverLightbox: () => void;
  onNavigate: (targetId: string) => void;
  isPresentationMode: boolean;
}

export const CoverSection: React.FC<CoverSectionProps> = ({
  studentName,
  onUpdateStudentName,
  coverPhoto,
  onUploadCoverPhoto,
  onRemoveCoverPhoto,
  onOpenCoverLightbox,
  onNavigate,
  isPresentationMode,
}) => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [draftName, setDraftName] = useState(studentName);
  const [isDraggingPhoto, setIsDraggingPhoto] = useState(false);
  const photoInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setDraftName(studentName);
  }, [studentName]);

  const handleSaveName = () => {
    const trimmed = draftName.trim();
    onUpdateStudentName(trimmed || STUDENT_PROFILE.defaultName);
    setIsEditingName(false);
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onUploadCoverPhoto(file);
    e.target.value = '';
  };

  const handlePhotoDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingPhoto(false);
    const file = e.dataTransfer.files?.[0];
    if (file) onUploadCoverPhoto(file);
  };

  const polaroidDisplayName = studentName
    .split(/\s+/)
    .slice(0, 2)
    .join(' ')
    .toUpperCase();

  return (
    <section
      id="wdp-01"
      className="min-h-[calc(100vh-3.5rem)] bg-[#101722] text-[#F0F1EC] flex flex-col justify-between px-6 sm:px-10 lg:px-[64px] py-8 lg:py-10"
    >
      <div className="max-w-[1360px] w-full mx-auto">
        <TextReveal isPresentationMode={isPresentationMode}>
          <div className="w-full pb-4 mb-6 lg:mb-8 border-b border-[#25313F] flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.12em]">
            <span className="text-[#F0F1EC]">{STUDENT_PROFILE.institution}</span>
            <span className="text-[#A6AFBC] font-bold">{STUDENT_PROFILE.semester}</span>
          </div>
        </TextReveal>
      </div>

      <div className="max-w-[1360px] w-full mx-auto my-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.85fr] gap-10 lg:gap-14 items-center">
        <div>
          <TextReveal isPresentationMode={isPresentationMode}>
            <p className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.12em] text-[#CAFA65] mb-4">
              PORTFÓLIO ACADÊMICO / REGISTROS DE AULA
            </p>
          </TextReveal>

          <TextReveal delay={0.06} isPresentationMode={isPresentationMode}>
            <h1 className="text-4xl sm:text-6xl lg:text-[72px] xl:text-[76px] font-black uppercase tracking-[-0.035em] leading-[0.98] text-[#F0F1EC] mb-6">
              RELAÇÕES,
              <br />
              PRINCÍPIOS
              <br />
              E VALORES.
            </h1>
          </TextReveal>

          <TextReveal delay={0.12} isPresentationMode={isPresentationMode}>
            <p className="text-base sm:text-lg lg:text-[20px] text-[#A6AFBC] max-w-xl leading-relaxed font-normal mb-8">
              Vivências em sala, reflexões pessoais e aprendizados para além da técnica.
            </p>
          </TextReveal>

          <TextReveal delay={0.18} isPresentationMode={isPresentationMode}>
            <div className="bg-[#141D29] border border-[#25313F] rounded-[2px] p-5 sm:p-6 max-w-xl">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#CAFA65]">
                  ALUNO
                </span>
                {!isEditingName && (
                  <button
                    type="button"
                    onClick={() => setIsEditingName(true)}
                    title="Editar nome exibido na capa"
                    className="text-[#A6AFBC] hover:text-[#CAFA65] p-1 rounded transition-colors"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {!isEditingName ? (
                <p className="text-lg sm:text-xl font-bold text-[#F0F1EC] tracking-[-0.01em]">
                  {studentName}
                </p>
              ) : (
                <div className="flex flex-wrap items-center gap-2 my-1">
                  <input
                    type="text"
                    value={draftName}
                    onChange={(e) => setDraftName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSaveName();
                      if (e.key === 'Escape') {
                        setDraftName(studentName);
                        setIsEditingName(false);
                      }
                    }}
                    autoFocus
                    className="bg-[#090D14] text-[#F0F1EC] text-sm font-semibold px-3 py-1.5 rounded border border-[#CAFA65] focus:outline-none flex-1 min-w-[220px]"
                  />
                  <button
                    type="button"
                    onClick={handleSaveName}
                    className="inline-flex items-center gap-1 bg-[#CAFA65] text-[#090D14] text-xs font-extrabold uppercase px-3 py-1.5 rounded"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Salvar</span>
                  </button>
                </div>
              )}

              <p className="text-xs sm:text-sm text-[#A6AFBC] mt-1.5">
                Matrícula: {STUDENT_PROFILE.registration} &nbsp;•&nbsp; Professor:{' '}
                {STUDENT_PROFILE.professor}
              </p>
            </div>
          </TextReveal>
        </div>

        <TextReveal delay={0.14} isPresentationMode={isPresentationMode}>
          <div className="w-full max-w-[350px] sm:max-w-[385px] mx-auto lg:ml-auto lg:mr-0 flex flex-col items-center">
            <div
              role="button"
              tabIndex={0}
              aria-label="Retrato de identidade — Clique ou arraste para inserir sua foto"
              onClick={() => {
                if (coverPhoto) onOpenCoverLightbox();
                else photoInputRef.current?.click();
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  if (coverPhoto) onOpenCoverLightbox();
                  else photoInputRef.current?.click();
                }
              }}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDraggingPhoto(true);
              }}
              onDragLeave={() => setIsDraggingPhoto(false)}
              onDrop={handlePhotoDrop}
              className={`w-full bg-[#F0F1EC] p-3.5 sm:p-4 pb-5 sm:pb-6 shadow-[0_24px_60px_rgba(0,0,0,0.65)] rotate-2 hover:rotate-0 transition-all duration-500 cursor-pointer group relative ${
                isDraggingPhoto ? 'ring-4 ring-[#CAFA65] rotate-0' : ''
              }`}
            >
              <input
                ref={photoInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
              />

              <div className="aspect-[4/4.3] w-full bg-[#141D29] figma-grid-card border border-[#25313F]/70 relative overflow-hidden flex flex-col justify-between p-5">
                {!coverPhoto ? (
                  <>
                    <div className="flex items-center justify-between gap-2 z-10">
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#CAFA65]">
                        RETRATO / IDENTIDADE
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#090D14]/80 border border-[#25313F] text-[#B9C1C7] group-hover:border-[#CAFA65] group-hover:text-[#CAFA65] transition-colors">
                        <Upload className="w-3 h-3" />
                        <span>Foto</span>
                      </span>
                    </div>

                    <div className="my-auto z-10">
                      <p className="text-2xl sm:text-[28px] font-black uppercase leading-[1.06] tracking-[-0.02em] text-[#F0F1EC] group-hover:text-[#CAFA65] transition-colors">
                        [INSERIR
                        <br />
                        MINHA FOTO]
                      </p>
                      <p className="text-[11px] text-[#A6AFBC] mt-2 opacity-80 group-hover:opacity-100">
                        Clique ou arraste sua foto aqui
                      </p>
                    </div>

                    <p className="text-xs text-[#A6AFBC] z-10">
                      Retrato com recorte moderno
                    </p>
                  </>
                ) : (
                  <div className="absolute inset-0 bg-[#090D14]">
                    <img
                      src={coverPhoto.url}
                      alt={`${studentName} — Retrato com recorte moderno`}
                      onError={() => onRemoveCoverPhoto(true)}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5 z-20">
                      <span className="bg-[#090D14]/85 border border-[#25313F] text-[#CAFA65] text-[9px] font-extrabold uppercase tracking-[0.1em] px-2 py-0.5 rounded">
                        RETRATO / IDENTIDADE
                      </span>

                      <div className="flex items-center gap-1 opacity-95 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenCoverLightbox();
                          }}
                          title="Ampliar foto"
                          className="p-1.5 rounded bg-[#090D14]/90 hover:bg-[#CAFA65] text-[#F0F1EC] hover:text-[#090D14] border border-[#25313F] transition-colors"
                        >
                          <Maximize2 className="w-3 h-3" />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            photoInputRef.current?.click();
                          }}
                          className="px-2 py-1 rounded bg-[#090D14]/90 hover:bg-[#CAFA65] text-[#F0F1EC] hover:text-[#090D14] border border-[#25313F] text-[9px] font-bold uppercase tracking-wider transition-colors"
                        >
                          Trocar
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onRemoveCoverPhoto();
                          }}
                          title="Remover foto"
                          className="p-1.5 rounded bg-[#090D14]/90 hover:bg-red-600 text-[#F0F1EC] border border-[#25313F] transition-colors"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4 px-0.5 text-left">
                <p className="text-lg sm:text-[21px] font-black uppercase tracking-[-0.02em] text-[#101722] leading-tight">
                  {polaroidDisplayName}
                </p>
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.09em] text-[#53606A] mt-1">
                  PESSOAS, ESCOLHAS E DESENVOLVIMENTO.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('wdp-02')}
              className="mt-5 w-full bg-[#CAFA65] hover:brightness-105 active:scale-[0.99] text-[#090D14] px-4 py-2.5 flex items-center justify-between transition-all shadow-md group"
            >
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.1em]">
                05 ENCONTROS / UMA TRAJETÓRIA
              </span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </TextReveal>
      </div>

      <SectionFooter code="WDP / 01" theme="dark" />
    </section>
  );
};
