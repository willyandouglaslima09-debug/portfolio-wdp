import { useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  List,
  Menu,
  X,
} from 'lucide-react';
import type {
  EncounterData,
  LightboxState,
  ParodyThemeId,
  UploadedMedia,
} from './types/portfolio';
import {
  ENCOUNTERS_DATA,
  SLIDES_META,
  STUDENT_PROFILE,
} from './data/portfolioData';
import { MediaLightboxModal } from './components/MediaSlotCard';
import { CoverSection } from './components/CoverSection';
import {
  CourseOverviewSection,
  EncounterSection,
  SynthesisSection,
  ParodyAppendixSection,
} from './components/PortfolioSections';

const STORAGE_NAME_KEY = 'wdp_portfolio_student_name_v1';
const STORAGE_MEDIA_KEY = 'wdp_portfolio_media_map_v1';
const STORAGE_COVER_KEY = 'wdp_portfolio_cover_photo_v1';

export default function App() {
  const [studentName, setStudentName] = useState<string>(() => {
    try {
      return (
        localStorage.getItem(STORAGE_NAME_KEY) || STUDENT_PROFILE.defaultName
      );
    } catch {
      return STUDENT_PROFILE.defaultName;
    }
  });

  const [coverPhoto, setCoverPhoto] = useState<UploadedMedia | null>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_COVER_KEY);
      if (raw) return JSON.parse(raw) as UploadedMedia;
    } catch {
      // ignora erro de leitura
    }
    return STUDENT_PROFILE.coverPhotoPath
      ? {
          url: STUDENT_PROFILE.coverPhotoPath,
          type: 'image',
          fileName: 'capa.jpg',
        }
      : null;
  });

  const [mediaMap, setMediaMap] = useState<Record<string, UploadedMedia>>(() => {
    const initial: Record<string, UploadedMedia> = {};
    ENCOUNTERS_DATA.forEach((enc) => {
      if (enc.defaultMedia) {
        initial[enc.id] = enc.defaultMedia;
      }
    });
    try {
      const raw = localStorage.getItem(STORAGE_MEDIA_KEY);
      if (raw) {
        return {
          ...initial,
          ...(JSON.parse(raw) as Record<string, UploadedMedia>),
        };
      }
    } catch {
      // ignora erro de leitura
    }
    return initial;
  });

  const [activeSectionId, setActiveSectionId] = useState<string>('wdp-01');
  const [isPresentationMode, setIsPresentationMode] = useState<boolean>(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [activeParodyTheme, setActiveParodyTheme] =
    useState<ParodyThemeId>('all');
  const [lightboxTargetId, setLightboxTargetId] = useState<string | null>(null);
  const [lightboxState, setLightboxState] = useState<LightboxState>({
    isOpen: false,
    encounterNumber: '',
    title: '',
    dateLabel: '',
    caption: '',
    media: null,
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  const handleUpdateStudentName = useCallback((newName: string) => {
    setStudentName(newName);
    try {
      localStorage.setItem(STORAGE_NAME_KEY, newName);
    } catch {
      // ignora quota
    }
  }, []);

  const handleCoverPhotoUpload = useCallback((file: File) => {
    const objectUrl = URL.createObjectURL(file);
    const previewItem: UploadedMedia = {
      url: objectUrl,
      type: 'image',
      fileName: file.name,
    };
    setCoverPhoto(previewItem);
    setLightboxState((prev) =>
      prev.isOpen ? { ...prev, media: previewItem } : prev
    );

    if (file.size <= 3.5 * 1024 * 1024) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          const persisted: UploadedMedia = {
            url: reader.result,
            type: 'image',
            fileName: file.name,
          };
          setCoverPhoto(persisted);
          try {
            localStorage.setItem(STORAGE_COVER_KEY, JSON.stringify(persisted));
          } catch {
            // ignora quota
          }
        }
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleCoverPhotoRemove = useCallback(() => {
    setCoverPhoto(null);
    try {
      localStorage.removeItem(STORAGE_COVER_KEY);
    } catch {
      // ignora
    }
  }, []);

  const handleMediaUpload = useCallback((encounterId: string, file: File) => {
    const isVideo = file.type.startsWith('video/');
    const objectUrl = URL.createObjectURL(file);
    const newItem: UploadedMedia = {
      url: objectUrl,
      type: isVideo ? 'video' : 'image',
      fileName: file.name,
    };

    setMediaMap((prev) => {
      const updated = { ...prev, [encounterId]: newItem };
      if (!isVideo && file.size <= 2.5 * 1024 * 1024) {
        const reader = new FileReader();
        reader.onload = () => {
          if (typeof reader.result === 'string') {
            try {
              const raw = localStorage.getItem(STORAGE_MEDIA_KEY);
              const parsed = raw ? JSON.parse(raw) : {};
              parsed[encounterId] = {
                url: reader.result,
                type: 'image',
                fileName: file.name,
              };
              localStorage.setItem(STORAGE_MEDIA_KEY, JSON.stringify(parsed));
            } catch {
              // ignora quota
            }
          }
        };
        reader.readAsDataURL(file);
      }
      return updated;
    });

    setLightboxState((prev) =>
      prev.isOpen ? { ...prev, media: newItem } : prev
    );
  }, []);

  const handleMediaRemove = useCallback((encounterId: string) => {
    setMediaMap((prev) => {
      const copy = { ...prev };
      delete copy[encounterId];
      try {
        localStorage.setItem(STORAGE_MEDIA_KEY, JSON.stringify(copy));
      } catch {
        // ignora
      }
      return copy;
    });
  }, []);

  const handleOpenCoverLightbox = useCallback(() => {
    setLightboxTargetId('cover');
    setLightboxState({
      isOpen: true,
      encounterNumber: '01',
      title: studentName,
      dateLabel: STUDENT_PROFILE.semester,
      caption: `${STUDENT_PROFILE.institution} · ${STUDENT_PROFILE.registration}`,
      media: coverPhoto,
    });
  }, [studentName, coverPhoto]);

  const handleOpenEncounterLightbox = useCallback(
    (encounter: EncounterData) => {
      setLightboxTargetId(encounter.id);
      setLightboxState({
        isOpen: true,
        encounterNumber: encounter.number,
        title: encounter.title,
        dateLabel: encounter.visualDate || encounter.dateBadge,
        caption: encounter.visualCaption,
        media: mediaMap[encounter.id] || encounter.defaultMedia || null,
      });
    },
    [mediaMap]
  );

  const handleUploadFromModal = useCallback(
    (file: File) => {
      if (lightboxTargetId === 'cover') {
        handleCoverPhotoUpload(file);
      } else if (lightboxTargetId) {
        handleMediaUpload(lightboxTargetId, file);
      }
    },
    [lightboxTargetId, handleCoverPhotoUpload, handleMediaUpload]
  );

  const navigateToSection = useCallback(
    (id: string) => {
      setMobileMenuOpen(false);
      const idx = SLIDES_META.findIndex((s) => s.id === id);
      if (idx !== -1) {
        setActiveSlideIndex(idx);
        setActiveSectionId(id);
      }
      if (!isPresentationMode) {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    },
    [isPresentationMode]
  );

  useEffect(() => {
    if (isPresentationMode) return;
    const observers: IntersectionObserver[] = [];

    SLIDES_META.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSectionId(sec.id);
              const idx = SLIDES_META.findIndex((s) => s.id === sec.id);
              if (idx !== -1) setActiveSlideIndex(idx);
            }
          });
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isPresentationMode]);

  useEffect(() => {
    if (!isPresentationMode) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (lightboxState.isOpen) return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        setActiveSlideIndex((prev) =>
          Math.min(SLIDES_META.length - 1, prev + 1)
        );
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        setActiveSlideIndex((prev) => Math.max(0, prev - 1));
      } else if (e.key === 'Escape') {
        setIsPresentationMode(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isPresentationMode, lightboxState.isOpen]);

  useEffect(() => {
    const current = SLIDES_META[activeSlideIndex];
    if (current) setActiveSectionId(current.id);
  }, [activeSlideIndex]);

  const currentNavMeta =
    SLIDES_META.find((s) => s.id === activeSectionId) || SLIDES_META[0];

  const shouldRenderSlide = (slideId: string) =>
    !isPresentationMode || SLIDES_META[activeSlideIndex]?.id === slideId;

  return (
    <div className="min-h-screen bg-[#101722] text-[#F0F1EC] selection:bg-[#CAFA65] selection:text-[#101722]">
      {!isPresentationMode && (
        <motion.div
          style={{ scaleX: smoothProgress }}
          className="fixed top-0 left-0 right-0 h-[3px] bg-[#CAFA65] origin-left z-50"
        />
      )}

      <header className="fixed top-0 left-0 right-0 z-40 h-14 bg-[#090D14]/90 backdrop-blur-md border-b border-[#25313F]/80 px-4 sm:px-8 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <button
            type="button"
            onClick={() => navigateToSection('wdp-01')}
            className="flex items-center gap-2 text-left group cursor-pointer"
          >
            <span className="inline-block w-2.5 h-2.5 bg-[#CAFA65] rounded-[1px] shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#F0F1EC] truncate">
              WDP · 2026
            </span>
          </button>
          <span className="hidden md:inline-block text-[#34404D]">|</span>
          <span className="hidden md:inline-block text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A6AFBC] truncate">
            {currentNavMeta.code} — {currentNavMeta.shortLabel}
          </span>
        </div>

        <nav
          aria-label="Navegação das lâminas"
          className="hidden xl:flex items-center gap-1 overflow-x-auto no-scrollbar"
        >
          {SLIDES_META.map((item, idx) => {
            const isActive = item.id === activeSectionId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => navigateToSection(item.id)}
                className={`px-2.5 py-1 rounded-[2px] text-[10px] font-bold uppercase tracking-[0.08em] transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#CAFA65] text-[#101722]'
                    : 'text-[#A6AFBC] hover:text-[#F0F1EC] hover:bg-[#141D29]'
                }`}
              >
                {String(idx + 1).padStart(2, '0')}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setIsPresentationMode((prev) => !prev)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] text-[11px] font-extrabold uppercase tracking-[0.08em] border transition-colors cursor-pointer ${
              isPresentationMode
                ? 'bg-[#CAFA65] text-[#101722] border-[#CAFA65]'
                : 'bg-[#141D29] text-[#F0F1EC] border-[#25313F] hover:border-[#CAFA65]'
            }`}
          >
            {isPresentationMode ? (
              <>
                <List className="w-3.5 h-3.5" />
                <span>Modo Rolagem</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5 text-[#CAFA65]" />
                <span>Modo Slides</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Abrir índice de lâminas"
            className="xl:hidden p-1.5 rounded-[2px] bg-[#141D29] border border-[#25313F] text-[#F0F1EC] hover:border-[#CAFA65] cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-14 z-30 bg-[#090D14]/98 border-b border-[#25313F] p-4 sm:p-6 xl:hidden backdrop-blur-md">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#CAFA65] mb-3">
            Índice das 11 Lâminas
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-[65vh] overflow-y-auto">
            {SLIDES_META.map((item) => {
              const isActive = item.id === activeSectionId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigateToSection(item.id)}
                  className={`flex items-center justify-between px-3 py-2 rounded-[2px] text-left text-xs font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#CAFA65] text-[#101722]'
                      : 'bg-[#141D29] text-[#F0F1EC] hover:bg-[#25313F]'
                  }`}
                >
                  <span className="truncate">{item.fullTitle}</span>
                  <span
                    className={`text-[10px] font-extrabold ml-2 ${
                      isActive ? 'text-[#101722]' : 'text-[#A6AFBC]'
                    }`}
                  >
                    {item.code}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <main className={isPresentationMode ? 'pt-14' : ''}>
        {shouldRenderSlide('wdp-01') && (
          <CoverSection
            studentName={studentName}
            onUpdateStudentName={handleUpdateStudentName}
            coverPhoto={coverPhoto}
            onUploadCoverPhoto={handleCoverPhotoUpload}
            onRemoveCoverPhoto={handleCoverPhotoRemove}
            onOpenCoverLightbox={handleOpenCoverLightbox}
            onNavigate={navigateToSection}
            isPresentationMode={isPresentationMode}
          />
        )}

        {shouldRenderSlide('wdp-02') && (
          <CourseOverviewSection
            mediaMap={mediaMap}
            onUpload={handleMediaUpload}
            onRemove={handleMediaRemove}
            onOpenLightbox={handleOpenEncounterLightbox}
            onNavigate={navigateToSection}
            isPresentationMode={isPresentationMode}
          />
        )}

        {ENCOUNTERS_DATA.map(
          (enc) =>
            shouldRenderSlide(enc.id) && (
              <EncounterSection
                key={enc.id}
                encounter={enc}
                mediaMap={mediaMap}
                uploadedMedia={mediaMap[enc.id] || enc.defaultMedia || null}
                onUpload={handleMediaUpload}
                onRemove={handleMediaRemove}
                onOpenLightbox={handleOpenEncounterLightbox}
                onNavigate={navigateToSection}
                isPresentationMode={isPresentationMode}
              />
            )
        )}

        {shouldRenderSlide('wdp-08') && (
          <SynthesisSection isPresentationMode={isPresentationMode} />
        )}

        {(['wdp-09', 'wdp-10', 'wdp-11'] as const).map(
          (slideId) =>
            shouldRenderSlide(slideId) && (
              <ParodyAppendixSection
                key={slideId}
                slideId={slideId}
                activeTheme={activeParodyTheme}
                onSelectTheme={setActiveParodyTheme}
                onNavigate={navigateToSection}
                isPresentationMode={isPresentationMode}
              />
            )
        )}
      </main>

      {isPresentationMode && (
        <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-[#090D14]/95 border border-[#25313F] p-1.5 rounded-[2px] shadow-2xl backdrop-blur-md">
          <button
            type="button"
            disabled={activeSlideIndex === 0}
            onClick={() => setActiveSlideIndex((prev) => Math.max(0, prev - 1))}
            aria-label="Lâmina anterior"
            className="p-2 rounded-[2px] bg-[#141D29] text-[#F0F1EC] disabled:opacity-35 hover:bg-[#25313F] transition-colors cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="px-2.5 text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#CAFA65]">
            {String(activeSlideIndex + 1).padStart(2, '0')} /{' '}
            {String(SLIDES_META.length).padStart(2, '0')}
          </span>
          <button
            type="button"
            disabled={activeSlideIndex === SLIDES_META.length - 1}
            onClick={() =>
              setActiveSlideIndex((prev) =>
                Math.min(SLIDES_META.length - 1, prev + 1)
              )
            }
            aria-label="Próxima lâmina"
            className="p-2 rounded-[2px] bg-[#141D29] text-[#F0F1EC] disabled:opacity-35 hover:bg-[#25313F] transition-colors cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      <MediaLightboxModal
        state={lightboxState}
        onClose={() =>
          setLightboxState((prev) => ({ ...prev, isOpen: false }))
        }
        onUploadFromModal={handleUploadFromModal}
      />
    </div>
  );
}
