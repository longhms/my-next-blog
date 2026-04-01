import type { Fixture, Post, StandingRow } from "@/types/content";

export const posts: Post[] = [
  {
    slug: "arsenal-rest-defense-blueprint",
    title: "How Arsenal Turn Rest Defense Into Territory Control",
    strapline: "Compact spacing, early counter-pressure, and patient rotations.",
    excerpt:
      "Arsenal's best phase is no longer the final pass. It is the three seconds after they lose the ball, when their rest defense lets them trap transitions before they breathe.",
    category: "Tactics",
    league: "Premier League",
    publishedAt: "2026-03-27",
    readTime: 8,
    featured: true,
    heroImage: "/images/arsenal-rest-defense.svg",
    author: {
      name: "Liam Carter",
      role: "Tactics Writer",
      initials: "LC",
    },
    tags: ["Pressing", "Positional Play", "Arsenal"],
    keyMoments: [
      "Double pivot stays connected under fullback overlap.",
      "Wide eight jumps to lock the half-space after turnovers.",
      "Center backs defend forward instead of retreating early.",
    ],
    metrics: [
      { label: "High regains", value: "11.8" },
      { label: "Field tilt", value: "68%" },
      { label: "Shots after regain", value: "3.1" },
    ],
    sections: [
      {
        heading: "Why the structure matters",
        body: [
          "Arsenal's possession shell looks aggressive, but the important detail is how little distance exists between the back line, pivot, and advanced midfielders when the ball is lost.",
          "That spacing means the first duel after a turnover is rarely isolated. A second defender can arrive instantly, which turns a 50-50 ball into a cage.",
        ],
        callout: "Rest defense is not passive insurance here. It is the launch platform for the next attack.",
      },
      {
        heading: "The left-side overload",
        body: [
          "When the left back steps high and the winger holds width, Arsenal's left eight tucks into a half-space pocket. That triangle is designed to create overloads in possession and cover shadows in transition.",
          "Because the nearest three players are already staggered, the counter-press starts before the opponent can switch play.",
        ],
      },
      {
        heading: "What this changes for the run-in",
        body: [
          "Against lower blocks, the structure keeps pressure constant and stops cheap counters. Against top sides, it allows Arsenal to sustain territory without exposing their center backs to long recovery runs.",
          "It is the kind of repeatable control mechanism that wins title races in April and May.",
        ],
      },
    ],
  },
  {
    slug: "real-madrid-transition-monster",
    title: "Real Madrid Still Win Games in the Space Between Shapes",
    strapline: "The transition machine survives every tactical tweak.",
    excerpt:
      "Real Madrid remain terrifying because they do not need long spells of control. They only need one broken structure and a runway.",
    category: "Matchday",
    league: "Champions League",
    publishedAt: "2026-03-25",
    readTime: 7,
    featured: true,
    heroImage: "/images/madrid-transition.svg",
    author: {
      name: "Marta Nunez",
      role: "Match Analyst",
      initials: "MN",
    },
    tags: ["Transitions", "Madrid", "Champions League"],
    keyMoments: [
      "Early diagonal triggers after midfield regain.",
      "Front three attack different lanes with almost no extra touch.",
      "Fullbacks hesitate because Madrid threaten both depth and cutback zones.",
    ],
    metrics: [
      { label: "Direct attacks", value: "6.4" },
      { label: "Transition xG", value: "0.92" },
      { label: "Vertical entries", value: "18" },
    ],
    sections: [
      {
        heading: "A game state weapon",
        body: [
          "Madrid's transition threat scales with chaos. The more stretched the game becomes, the more their attackers can choose the lane that hurts most.",
          "That is why opponents who feel comfortable for 20 minutes can suddenly look exposed for the next five.",
        ],
      },
      {
        heading: "The first pass is the attack",
        body: [
          "The biggest mistake is framing Madrid as a dribbling side first. Their real advantage is the accuracy and speed of the first release pass after recovery.",
          "Once that pass breaks the first line, the receiving player is already running at a tilted back line.",
        ],
      },
      {
        heading: "The tradeoff opponents face",
        body: [
          "If you commit numbers to pin Madrid deep, you risk losing the ball with too much field behind you. If you sit off, they establish territory and let their creators dictate rhythm.",
          "That tactical dilemma is why Madrid never need the perfect match plan to stay dangerous.",
        ],
      },
    ],
  },
  {
    slug: "bologna-pressing-notebook",
    title: "Bologna Built a Press That Feels Handcrafted",
    strapline: "A narrow front line and brave center backs changed the tone.",
    excerpt:
      "Bologna's press works because every trigger is paired with an aggressive cover movement behind it, not because they simply run harder.",
    category: "Scouting",
    league: "Serie A",
    publishedAt: "2026-03-21",
    readTime: 6,
    featured: false,
    heroImage: "/images/bologna-press.svg",
    author: {
      name: "Theo Marsh",
      role: "Scouting Editor",
      initials: "TM",
    },
    tags: ["Bologna", "Pressing", "Serie A"],
    keyMoments: [
      "Front line curves runs to deny central exits.",
      "Nearest center back squeezes into midfield to keep compactness.",
      "The far winger narrows early instead of chasing the fullback late.",
    ],
    metrics: [
      { label: "PPDA", value: "8.9" },
      { label: "Turnovers won", value: "14" },
      { label: "Open-play shots", value: "15" },
    ],
    sections: [
      {
        heading: "Pressure with a map",
        body: [
          "Bologna are never pressing for the sake of theater. Their cues are coordinated around the opponent's weak side and the passing angle of the receiving midfielder.",
          "That means the trap often looks obvious on replay, but only because the supporting movements behind the first run are so clean.",
        ],
      },
      {
        heading: "Why the back line is essential",
        body: [
          "The press only works because the center backs accept one-versus-one duels behind it. Without that aggression, the team would be forced to leave safer distances and the press would lose bite.",
          "In that sense, the defenders are not a safety net. They are the final pressure trigger.",
        ],
      },
    ],
  },
  {
    slug: "set-piece-lab-champions-league",
    title: "Inside the Set-Piece Lab Deciding Champions League Margins",
    strapline: "Blocking patterns, second balls, and the rebound zone.",
    excerpt:
      "Elite knockout ties are increasingly shaped by the first contact and the chaos that follows it. The rebound zone is where the smartest coaching staffs now hunt value.",
    category: "Data Lab",
    league: "Champions League",
    publishedAt: "2026-03-18",
    readTime: 5,
    featured: false,
    heroImage: "/images/set-piece-lab.svg",
    author: {
      name: "Nina Silva",
      role: "Data Lab Lead",
      initials: "NS",
    },
    tags: ["Set Pieces", "Analytics", "Europe"],
    keyMoments: [
      "Near-post runners now target second-contact lanes more often than shots.",
      "The best routines isolate the weakest blocker, not the weakest marker.",
      "Rebound control is becoming a separate training block.",
    ],
    metrics: [
      { label: "Set-piece xG share", value: "31%" },
      { label: "Second-ball shots", value: "2.3" },
      { label: "Screen actions", value: "9" },
    ],
    sections: [
      {
        heading: "The rebound zone",
        body: [
          "Most defenses train the first duel. Fewer train the two-yard pocket where clearances land after a blocked run or glancing header.",
          "That tiny space is now being occupied deliberately by teams who know the first contact is increasingly contested.",
        ],
      },
      {
        heading: "A coaching race",
        body: [
          "Once one club weaponizes secondary actions, everyone else is forced to react. That is why set-piece work has shifted from a specialist side project into a weekly tactical pillar.",
        ],
      },
    ],
  },
  {
    slug: "brighton-recruitment-engine",
    title: "Brighton's Recruitment Engine Still Finds Edges Others Miss",
    strapline: "Profile fit matters more than highlight reels.",
    excerpt:
      "The club's smartest moves come from marrying role-specific scouting with a coaching model that knows exactly how to develop incomplete players.",
    category: "Transfers",
    league: "Premier League",
    publishedAt: "2026-03-15",
    readTime: 6,
    featured: false,
    heroImage: "/images/brighton-recruitment.svg",
    author: {
      name: "Daniel Kwesi",
      role: "Transfer Notebook",
      initials: "DK",
    },
    tags: ["Recruitment", "Brighton", "Player Trading"],
    keyMoments: [
      "Role fit is tested against three tactical game states.",
      "Athletic upside is priced alongside technical repeatability.",
      "Minutes pathway is part of the valuation model.",
    ],
    metrics: [
      { label: "Average age", value: "22.7" },
      { label: "Profit cycle", value: "3 yrs" },
      { label: "Reuse rate", value: "82%" },
    ],
    sections: [
      {
        heading: "Why the model stays ahead",
        body: [
          "Brighton are not merely buying talented players. They are buying players whose strengths fit future tactical tasks the coaching staff already knows it can rehearse.",
          "That shortens the adaptation window and increases resale value at the same time.",
        ],
      },
      {
        heading: "The underrated variable",
        body: [
          "Minutes pathway matters. Brighton repeatedly place players into squads where developmental minutes exist without the player needing to be match-winning on day one.",
        ],
      },
    ],
  },
  {
    slug: "golden-boot-run-in",
    title: "The Golden Boot Race Will Be Decided by Shot Quality, Not Volume",
    strapline: "Late-season finishing swings follow service patterns.",
    excerpt:
      "Top scorers are separating through chance profile now. Tap-ins, cutbacks, and transition shots are outranking pure shot volume as the title race tightens.",
    category: "Data Lab",
    league: "Premier League",
    publishedAt: "2026-03-12",
    readTime: 4,
    featured: false,
    heroImage: "/images/golden-boot.svg",
    author: {
      name: "Ava Grant",
      role: "Numbers Desk",
      initials: "AG",
    },
    tags: ["Strikers", "Shot Quality", "Race"],
    keyMoments: [
      "Central cutbacks remain the premium chance source.",
      "Volume drops in April, but box touches from elite scorers hold.",
      "Penalty area presence outlasts streaky long-range finishing.",
    ],
    metrics: [
      { label: "NPxG/shot", value: "0.19" },
      { label: "Box touches", value: "10.6" },
      { label: "Shots on target", value: "41%" },
    ],
    sections: [
      {
        heading: "Why chance profile wins",
        body: [
          "When matches get tighter, forwards get fewer total shots. The ones still arriving on high-value chances keep scoring through the variance dip.",
          "That is why service patterns matter more than headline shot totals in the final stretch of a season.",
        ],
      },
      {
        heading: "Reading the finalists",
        body: [
          "Watch which strikers continue receiving cutbacks and near-post layoffs. Those actions are far more stable than long-range shot volume over a small run of matches.",
        ],
      },
    ],
  },
];

export const fixtures: Fixture[] = [
  {
    id: "pl-ars-mci",
    competition: "Premier League",
    homeTeam: "Arsenal",
    awayTeam: "Manchester City",
    kickoff: "2026-04-04T18:30:00.000Z",
    venue: "Emirates Stadium",
    broadcast: "Sky Sports",
    status: "Upcoming",
  },
  {
    id: "ucl-rma-bay",
    competition: "Champions League",
    homeTeam: "Real Madrid",
    awayTeam: "Bayern Munich",
    kickoff: "2026-04-08T19:00:00.000Z",
    venue: "Santiago Bernabeu",
    broadcast: "TNT Sports",
    status: "Upcoming",
  },
  {
    id: "sa-int-bol",
    competition: "Serie A",
    homeTeam: "Inter",
    awayTeam: "Bologna",
    kickoff: "2026-04-06T18:45:00.000Z",
    venue: "San Siro",
    broadcast: "DAZN",
    status: "Upcoming",
  },
  {
    id: "pl-bha-tot",
    competition: "Premier League",
    homeTeam: "Brighton",
    awayTeam: "Tottenham",
    kickoff: "2026-04-05T13:00:00.000Z",
    venue: "Amex Stadium",
    broadcast: "NBC Sports",
    status: "Upcoming",
  },
];

export const standings: StandingRow[] = [
  {
    team: "Arsenal",
    played: 30,
    won: 21,
    drawn: 6,
    lost: 3,
    goalsFor: 63,
    goalsAgainst: 24,
    points: 69,
    form: ["W", "W", "D", "W", "W"],
    badgeTone: "from-red-500 to-red-700",
  },
  {
    team: "Manchester City",
    played: 30,
    won: 20,
    drawn: 7,
    lost: 3,
    goalsFor: 67,
    goalsAgainst: 28,
    points: 67,
    form: ["W", "D", "W", "W", "W"],
    badgeTone: "from-sky-400 to-sky-600",
  },
  {
    team: "Liverpool",
    played: 30,
    won: 19,
    drawn: 8,
    lost: 3,
    goalsFor: 66,
    goalsAgainst: 31,
    points: 65,
    form: ["W", "W", "L", "W", "D"],
    badgeTone: "from-rose-500 to-red-800",
  },
  {
    team: "Aston Villa",
    played: 30,
    won: 17,
    drawn: 7,
    lost: 6,
    goalsFor: 54,
    goalsAgainst: 36,
    points: 58,
    form: ["D", "W", "W", "L", "W"],
    badgeTone: "from-violet-500 to-sky-700",
  },
  {
    team: "Brighton",
    played: 30,
    won: 16,
    drawn: 8,
    lost: 6,
    goalsFor: 52,
    goalsAgainst: 38,
    points: 56,
    form: ["W", "D", "W", "W", "L"],
    badgeTone: "from-cyan-400 to-blue-700",
  },
  {
    team: "Tottenham",
    played: 30,
    won: 16,
    drawn: 6,
    lost: 8,
    goalsFor: 58,
    goalsAgainst: 44,
    points: 54,
    form: ["L", "W", "D", "W", "L"],
    badgeTone: "from-slate-300 to-slate-600",
  },
];
