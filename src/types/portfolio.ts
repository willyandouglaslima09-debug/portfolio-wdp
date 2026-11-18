export type SectionTheme = 'dark' | 'light';

export type ParodyThemeId =
  | 'all'
  | 'vida-academica'
  | 'percepcao-argumentacao'
  | 'autoria-inovacao'
  | 'leitura-escrita-oralidade'
  | 'refroes';

export interface UploadedMedia {
  url: string;
  type: 'image' | 'video';
  fileName: string;
}

export interface SlideMeta {
  id: string;
  code: string;
  shortLabel: string;
  fullTitle: string;
  theme: SectionTheme;
}

export interface EncounterDetailCard {
  title: string;
  body: string;
  bullets?: string[];
}

export interface SecondaryMediaConfig {
  id: string;
  headerTag: string;
  placeholderTitle: string;
  caption: string;
  subCaption?: string;
}

export interface AvaQuestionItem {
  num: string;
  title: string;
  question: string;
  answer: string;
}

export interface AvaActivitySection {
  id: string;
  badgeTitle: string;
  subtitle: string;
  intro: string;
  questions: AvaQuestionItem[];
  mediaSlot: SecondaryMediaConfig;
}

export interface EncounterData {
  id: string;
  code: string;
  number: string;
  theme: SectionTheme;
  kicker: string;
  dateBadge: string;
  visualDate?: string;
  title: string;
  subtitle: string;
  classroomHappened: string;
  notesHeading?: string;
  personalNotes: string;
  visualPlaceholderTitle: string;
  visualCaption: string;
  visualSubCaption?: string;
  takeaway: string;
  linkToAppendix?: boolean;
  defaultMedia?: UploadedMedia;
  detailCards?: EncounterDetailCard[];
  extraReference?: string;
  closingNote?: string;
  secondaryMediaSlot?: SecondaryMediaConfig;
  avaSection?: AvaActivitySection;
}

export interface LightboxState {
  isOpen: boolean;
  encounterNumber: string;
  title: string;
  dateLabel: string;
  caption: string;
  media: UploadedMedia | null;
}
