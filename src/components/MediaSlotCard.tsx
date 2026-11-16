import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Maximize2, Trash2, X, Image as ImageIcon, Film, ArrowRight } from 'lucide-react';
import type { EncounterData, LightboxState, UploadedMedia } from '../types/portfolio';

interface MediaSlotCardProps {
  encounter: EncounterData;
  uploadedMedia: UploadedMedia | null;
  onUpload: (encounterId: string, file: File) => void;
  onRemove: (encounterId: string, silent?: boolean) => void;
  onOpenLightbox: (encounter: EncounterData) => void;
  onNavigate?: (targetId: string) => void;
}

export const MediaSlotCard: React.FC<MediaSlotCardProps> = ({
  encounter,
  uploadedMedia,
  onUpload,
  onRemove,
  onOpenLightbox,
  onNavigate,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onUpload(encounter.id, file);
    e.target.value = '';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) onUpload(encounter.id, file);
  };

  const subCaptionColor = encounter.theme === 'dark' ? 'text-[#A6AFBC]' : 'text-[#53606A]';

  return (
    <div className="flex flex-col h-full">
      <div
        role="button"
        tabIndex={0}
        aria-label={`Registro Visual ${encounter.visualDate} - ${encounter.visualCaption}`}
        onClick={() => {
          if (uploadedMedia) onOpenLightbox(encounter);
          else fileInputRef.current?.click();
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (uploadedMedia) onOpenLightbox(encounter);
            else fileInputRef.current?.click();
          }
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`figma-grid-card relative flex-1 min-h-[260px] sm:min-h-[305px] rounded-[2px] border transition-all duration-200 overflow-hidden cursor-pointer group flex flex-col justify-between p-6 ${
          isDragging
            ? 'border-[#CAFA65] ring-2 ring-[#CAFA65]/40'
            : 'border-[#25313F] hover:border-[#CAFA65]'
        }`}
      >
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 w-[52px] h-[3px] bg-[#CAFA65] z-20"
        />

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,video/*"
          onChange={handleFileChange}
          className="hidden"
        />

        {!uploadedMedia ? (
          <>
            <div className="flex items-center justify-between gap-2 z-10">
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#CAFA65]">
                REGISTRO VISUAL / {encounter.visualDate}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#090D14]/80 border border-[#25313F] text-[#B9C1C7] group-hover:border-[#CAFA65] group-hover:text-[#CAFA65] transition-colors">
                <Upload className="w-3 h-3" />
                <span>Anexar mídia</span>
              </span>
            </div>

            <div className="my-auto py-5 z-10">
              <p className="text-2xl sm:text-[30px] font-black uppercase leading-[1.08] tracking-[-0.02em] text-[#F0F1EC] group-hover:text-[#CAFA65] transition-colors whitespace-pre-line">
                {encounter.visualPlaceholderTitle}
              </p>
              <p className="text-xs text-[#A6AFBC] mt-2.5">
                Clique ou arraste uma foto/vídeo para pré-visualizar no portfólio
              </p>
            </div>

            <div className="flex items-center justify-between gap-3 z-10">
              <p className="text-xs sm:text-sm text-[#A6AFBC] font-normal">
                {encounter.visualCaption}
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenLightbox(encounter);
                }}
                className="text-[11px] font-semibold text-[#B9C1C7] hover:text-[#CAFA65] underline underline-offset-4 shrink-0"
              >
                Detalhes
              </button>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 bg-[#090D14] z-10">
            {uploadedMedia.type === 'image' ? (
              <img
                src={uploadedMedia.url}
                alt={encounter.visualCaption}
                onError={() => onRemove(encounter.id, true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={uploadedMedia.url}
                controls
                playsInline
                onError={() => onRemove(encounter.id, true)}
                onClick={(e) => e.stopPropagation()}
                className="w-full h-full object-cover bg-black"
              />
            )}

            <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-20 pointer-events-none">
              <span className="bg-[#090D14]/90 border border-[#25313F] text-[#CAFA65] text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded pointer-events-auto">
                REGISTRO VISUAL / {encounter.visualDate}
              </span>

              <div className="flex items-center gap-1.5 pointer-events-auto">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenLightbox(encounter);
                  }}
                  title="Ampliar em tela cheia"
                  className="p-1.5 rounded bg-[#090D14]/90 hover:bg-[#CAFA65] text-[#F0F1EC] hover:text-[#090D14] border border-[#25313F] transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                  className="px-2.5 py-1 rounded bg-[#090D14]/90 hover:bg-[#CAFA65] text-[#F0F1EC] hover:text-[#090D14] border border-[#25313F] text-[10px] font-bold uppercase tracking-wider transition-colors"
                >
                  Trocar
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemove(encounter.id);
                  }}
                  title="Remover mídia"
                  className="p-1.5 rounded bg-[#090D14]/90 hover:bg-red-600 text-[#F0F1EC] border border-[#25313F] transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-2.5 flex items-center justify-between gap-2">
        {encounter.linkToAppendix && onNavigate ? (
          <button
            type="button"
            onClick={() => onNavigate('wdp-09')}
            className={`text-left text-[11px] sm:text-xs font-medium ${subCaptionColor} hover:text-[#CAFA65] transition-colors inline-flex items-center gap-1.5 group`}
          >
            <span>{encounter.visualSubCaption}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        ) : (
          <p className={`text-[11px] sm:text-xs font-medium ${subCaptionColor}`}>
            {encounter.visualSubCaption}
          </p>
        )}
      </div>
    </div>
  );
};

export const MediaLightboxModal: React.FC<{
  state: LightboxState;
  onClose: () => void;
  onUploadFromModal: (file: File) => void;
}> = ({ state, onClose, onUploadFromModal }) => {
  const modalInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!state.isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [state.isOpen, onClose]);

  return (
    <AnimatePresence>
      {state.isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-[#090D14]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#101722] border border-[#25313F] rounded-[4px] w-full max-w-4xl overflow-hidden shadow-2xl"
          >
            <div className="px-5 py-4 bg-[#090D14] border-b border-[#25313F] flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#CAFA65] block">
                  {state.encounterNumber === 'CAPA'
                    ? 'CAPA · RETRATO / IDENTIDADE'
                    : `ENCONTRO ${state.encounterNumber} · REGISTRO VISUAL / ${state.dateLabel}`}
                </span>
                <h3 className="text-sm sm:text-base font-black uppercase text-[#F0F1EC]">
                  {state.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <input
                  ref={modalInputRef}
                  type="file"
                  accept="image/*,video/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) onUploadFromModal(file);
                    e.target.value = '';
                  }}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => modalInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 bg-[#CAFA65] hover:brightness-105 text-[#090D14] text-xs font-extrabold uppercase tracking-wider px-3.5 py-2 rounded-[2px] transition-all"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>{state.media ? 'Trocar Arquivo' : 'Selecionar Arquivo'}</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Fechar janela"
                  className="p-2 rounded bg-[#141D29] hover:bg-[#25313F] text-[#A6AFBC] hover:text-[#F0F1EC] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              {state.media ? (
                <div className="bg-[#090D14] border border-[#25313F] rounded-[2px] overflow-hidden max-h-[65vh] flex items-center justify-center">
                  {state.media.type === 'image' ? (
                    <img
                      src={state.media.url}
                      alt={state.caption}
                      className="max-h-[65vh] w-auto object-contain"
                    />
                  ) : (
                    <video
                      src={state.media.url}
                      controls
                      autoPlay
                      playsInline
                      className="max-h-[65vh] w-full bg-black"
                    />
                  )}
                </div>
              ) : (
                <div className="figma-grid-card border border-[#25313F] rounded-[2px] p-10 text-center flex flex-col items-center justify-center min-h-[280px]">
                  <div className="flex items-center gap-3 text-[#CAFA65] mb-3">
                    <ImageIcon className="w-6 h-6" />
                    <Film className="w-6 h-6" />
                  </div>
                  <p className="text-lg sm:text-xl font-black uppercase text-[#F0F1EC] mb-2">
                    Slot de Registro Visual Aguardando Arquivo
                  </p>
                  <p className="text-xs sm:text-sm text-[#A6AFBC] max-w-md mb-5">
                    Este espaço corresponde ao registro de <strong>{state.caption}</strong>. Você pode anexar uma foto (.jpg, .png, .webp) ou vídeo curto (.mp4, .webm) diretamente do seu dispositivo.
                  </p>
                  <button
                    type="button"
                    onClick={() => modalInputRef.current?.click()}
                    className="inline-flex items-center gap-2 bg-[#CAFA65] text-[#090D14] text-xs font-extrabold uppercase tracking-wider px-5 py-2.5 rounded-[2px]"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Escolher Foto ou Vídeo</span>
                  </button>
                </div>
              )}

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-[#A6AFBC]">
                <span>{state.caption}</span>
                {state.media && (
                  <span className="font-mono text-[11px] text-[#B9C1C7]">
                    Arquivo: {state.media.fileName}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
