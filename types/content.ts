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
  role: string;
  initials: string;
}

export interface ContentSection {
  heading: string;
  body: string[];
  callout?: string;
}

export interface PostMetric {
  label: string;
  value: string;
}

export interface Post {
  slug: string;
  title: string;
  strapline: string;
  excerpt: string;
  category: Category;
  league: League;
  publishedAt: string;
  readTime: number;
  featured: boolean;
  heroImage: string;
  author: Author;
  tags: string[];
  keyMoments: string[];
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
  league: League;
  category: Category;
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
