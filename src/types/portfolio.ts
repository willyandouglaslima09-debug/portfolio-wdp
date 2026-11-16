export type SectionTheme = 'dark' | 'light';

export type ParodyThemeId =
  | 'all'
  | 'vida-academica'
  | 'percepcao-argumentacao'
  | 'autoria-inovacao'
  | 'leitura-escrita-oralidade'
  | 'refroes';

export interface SlideMeta {
  id: string;
  code: string;
  shortLabel: string;
  fullTitle: string;
  theme: SectionTheme;
}

export interface UploadedMedia {
  url: string;
  type: 'image' | 'video';
  fileName: string;
}

export interface EncounterData {
  id: string;
  code: string;
  number: string;
  theme: SectionTheme;
  kicker: string;
  dateBadge: string;
  visualDate: string;
  title: string;
  subtitle: string;
  classroomHappened: string;
  personalNotes: string;
  visualPlaceholderTitle: string;
  visualCaption: string;
  visualSubCaption: string;
  linkToAppendix?: boolean;
  takeaway: string;
  defaultMedia?: UploadedMedia;
}

export interface LightboxState {
  isOpen: boolean;
  encounterNumber: string;
  title: string;
  dateLabel: string;
  caption: string;
  media: UploadedMedia | null;
}
