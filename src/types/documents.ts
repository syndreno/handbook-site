export interface DocumentHeading {
  depth: number;
  text: string;
  slug: string;
}

export interface DocumentSection {
  name: string;
  slug: string;
  path: string;
  sourceDirectory: string;
}

export interface DocumentMetadata {
  title: string;
  description: string;
  sourcePath: string;
  repositoryPath: string;
  absolutePath: string;
  sourceUrl: string;
  sourceDirectory: string;
  route: string;
  slug: string;
  category: string;
  categorySlug: string;
  subcategory?: string;
  sections: DocumentSection[];
  tags: string[];
  order?: number;
  headings: DocumentHeading[];
  headingCount: number;
  wordCount: number;
  readingMinutes: number;
  codeExamples: number;
}

export interface SectionMetadata extends DocumentSection {
  directDocuments: DocumentMetadata[];
  children: SectionMetadata[];
  documents: DocumentMetadata[];
  wordCount: number;
}

export interface CategoryMetadata extends SectionMetadata {
}
