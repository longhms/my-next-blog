export type Locale = "en" | "vi";

export interface LocalizedText {
  en: string;
  vi: string;
}

export type MaybeLocalizedText = string | LocalizedText;

export type League =
  | "Premier League"
  | "Champions League"
  | "La Liga"
  | "Serie A"
  | "Bundesliga";

export type Category =
  | "Tactics"
  | "Transfers"
  | "Scouting"
  | "Data Lab"
  | "Matchday";

export interface Author {
  name: string;
  role: MaybeLocalizedText;
  initials: string;
}

export interface ContentSection {
  heading: MaybeLocalizedText;
  body: MaybeLocalizedText[];
  callout?: MaybeLocalizedText;
}

export interface PostMetric {
  label: MaybeLocalizedText;
  value: string;
}

export interface Post {
  slug: string;
  title: MaybeLocalizedText;
  strapline: MaybeLocalizedText;
  excerpt: MaybeLocalizedText;
  category: Category;
  league: League;
  publishedAt: string;
  readTime: number;
  featured: boolean;
  heroImage: string;
  author: Author;
  tags: MaybeLocalizedText[];
  keyMoments: MaybeLocalizedText[];
  metrics: PostMetric[];
  sections: ContentSection[];
}

export interface Fixture {
  id: string;
  competition: string;
  homeTeam: string;
  awayTeam: string;
  kickoff: string;
  venue: string;
  broadcast: string;
  status: "Upcoming" | "Live" | "Final";
}

export interface StandingRow {
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
  form: Array<"W" | "D" | "L">;
  badgeTone: string;
}

export interface SearchResult {
  slug: string;
  title: string;
  excerpt: string;
  league: string;
  category: string;
}

export interface ResolvedAuthor {
  name: string;
  role: string;
  initials: string;
}

export interface ResolvedContentSection {
  heading: string;
  body: string[];
  callout?: string;
}

export interface ResolvedPostMetric {
  label: string;
  value: string;
}

export interface ResolvedPost {
  slug: string;
  title: string;
  strapline: string;
  excerpt: string;
  category: Category;
  categoryLabel: string;
  league: League;
  leagueLabel: string;
  publishedAt: string;
  readTime: number;
  featured: boolean;
  heroImage: string;
  author: ResolvedAuthor;
  tags: string[];
  keyMoments: string[];
  metrics: ResolvedPostMetric[];
  sections: ResolvedContentSection[];
}

export interface ContactPayload {
  name: string;
  email: string;
  topic: string;
  message: string;
}

export interface CommentPayload {
  name: string;
  email: string;
  comment: string;
  postSlug: string;
}
