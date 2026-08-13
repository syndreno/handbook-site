export interface DocumentHeading {
  depth: number;
  text: string;
  slug: string;
}

export interface DocumentMetadata {
  title: string;
  description: string;
  sourcePath: string;
  repositoryPath: string;
  absolutePath: string;
  sourceDirectory: string;
  route: string;
  slug: string;
  category: string;
  categorySlug: string;
  subcategory?: string;
  tags: string[];
  order?: number;
  headings: DocumentHeading[];
  wordCount: number;
  readingMinutes: number;
  codeExamples: number;
  rawContent: string;
}

export interface CategoryMetadata {
  name: string;
  slug: string;
  documents: DocumentMetadata[];
  wordCount: number;
}
