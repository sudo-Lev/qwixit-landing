export type LegalKind = "privacy" | "terms";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type LegalDocument = {
  title: string;
  intro: string;
  sections: LegalSection[];
};

export type LegalLocale = {
  back: string;
  language: string;
  contents: string;
  effective: string;
  contact: string;
  other: Record<LegalKind, string>;
  documents: Record<LegalKind, LegalDocument>;
};
