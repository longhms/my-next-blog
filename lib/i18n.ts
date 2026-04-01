import type { Category, Fixture, League, Locale, MaybeLocalizedText } from "@/types/content";

export const defaultLocale: Locale = "vi";

export function normalizeLocale(value?: string | null): Locale {
  return value === "vi" ? "vi" : "en";
}

export function resolveText(value: MaybeLocalizedText, locale: Locale) {
  if (typeof value === "string") {
    return value;
  }

  return value[locale] ?? value.en;
}

export function translateLeague(league: League, locale: Locale) {
  const labels: Record<League, { en: string; vi: string }> = {
    "Premier League": { en: "Premier League", vi: "Ngoại hạng Anh" },
    "Champions League": { en: "Champions League", vi: "Champions League" },
    "La Liga": { en: "La Liga", vi: "La Liga" },
    "Serie A": { en: "Serie A", vi: "Serie A" },
    Bundesliga: { en: "Bundesliga", vi: "Bundesliga" },
  };

  return labels[league][locale];
}

export function translateCategory(category: Category, locale: Locale) {
  const labels: Record<Category, { en: string; vi: string }> = {
    Tactics: { en: "Tactics", vi: "Chiến thuật" },
    Transfers: { en: "Transfers", vi: "Chuyển nhượng" },
    Scouting: { en: "Scouting", vi: "Tuyển trạch" },
    "Data Lab": { en: "Data Lab", vi: "Phòng dữ liệu" },
    Matchday: { en: "Matchday", vi: "Ngày thi đấu" },
  };

  return labels[category][locale];
}

export function translateFixtureStatus(status: Fixture["status"], locale: Locale) {
  const labels: Record<Fixture["status"], { en: string; vi: string }> = {
    Upcoming: { en: "Upcoming", vi: "Sắp diễn ra" },
    Live: { en: "Live", vi: "Đang diễn ra" },
    Final: { en: "Final", vi: "Chung cuộc" },
  };

  return labels[status][locale];
}

export function translateFormResult(result: "W" | "D" | "L", locale: Locale) {
  if (locale === "en") {
    return result;
  }

  if (result === "W") return "T";
  if (result === "D") return "H";
  return "B";
}

export function getDictionary(locale: Locale) {
  const dictionaries = {
    en: {
      header: {
        topLine: "Pitchside Press | Soccer analysis, scouting notes, and matchday context",
        freshness: "Fresh updates every match week",
        subtitle: "Editorial football notebook built on Next.js",
        home: "Home",
        blog: "Blog",
        search: "Search",
        contact: "Contact",
      },
      footer: {
        title: "A soccer blog tuned for tactics, data, and match texture",
        description:
          "Built as a spec-driven Next.js product with App Router pages, mock APIs, component separation, and editorial storytelling around football.",
        routes: "Routes",
        homepage: "Homepage",
        blogListing: "Blog Listing",
        search: "Search",
        contact: "Contact",
        buildNotes: "Build Notes",
        notes: [
          "Server and client components are split by behavior.",
          "Forms submit to mock route handlers with validation.",
          "Search and filtering run on typed mock content utilities.",
        ],
      },
      common: {
        read: "Read",
        save: "Save",
        saved: "Saved",
        readNow: "Read now",
        openStory: "Open story",
        minRead: (minutes: number) => `${minutes} min read`,
        updating: "Updating...",
        search: "Search",
        searching: "Searching...",
        quickResults: "Quick results",
        noResults: "No stories found",
        noResultsDescription:
          "Try clearing one filter, switching league, or broadening the search query.",
        comments: "Comments",
        joinDiscussion: "Join the discussion",
        keyMoments: "Key Moments",
        tags: "Tags",
        relatedReads: "Related Reads",
        keepThreadGoing: "Keep the thread going",
        storyNotFound: "Story not found",
        backToBlog: "Back to blog",
        english: "EN",
        vietnamese: "VI",
        switchLanguage: "Language",
      },
      home: {
        heroKicker: "Match Week Briefing",
        heroTitle: "Soccer stories with shape, speed, and edge",
        heroDescription:
          "Pitchside Press translates football into readable structure: tactical breakdowns, scouting notes, transfer context, and matchday reactions.",
        exploreStories: "Explore stories",
        searchArchive: "Search the archive",
        leadNotebook: "Lead notebook",
        visualIdentity: "Visual identity",
        visualTitle: "Pitch maps meet editorial cards",
        featuredFollowUp: "Featured follow-up",
        featuredStories: "Featured Stories",
        featuredStoriesTitle: "The stories setting the football agenda",
        featuredStoriesDescription:
          "Long-form breakdowns on tactical patterns, squad design, and elite match detail.",
        fixtureRadar: "Fixture Radar",
        nextOnCalendar: "Next on the calendar",
        fixtureDescription:
          "A quick scan of the matches likely to move the title race, European places, or tactical conversation over the next week.",
        powerTable: "Power Table",
        pressureTitle: "Premier League pressure points",
        pressureDescription:
          "Top-six snapshot with recent form to keep the home page anchored in current competition context.",
        freshNotebook: "Fresh Notebook",
        freshTitle: "More reporting from the archive",
        freshDescription:
          "Recent posts keep the homepage connected to the broader blog listing and search flow.",
        editorialCta: "Editorial CTA",
        editorialTitle: "Need a custom scouting brief or editorial collaboration?",
        editorialDescription:
          "The contact route is wired to a mock API so the product demonstrates form handling, validation, and response states without needing a backend.",
        editorialBullets: [
          "Best for course projects, portfolio pieces, and editorial prototypes.",
          "Includes searchable posts, dynamic article routes, and componentized UI blocks.",
        ],
        openContact: "Open contact form",
      },
      blog: {
        kicker: "Blog Listing",
        title: "Editorial stories organized for fast scanning",
        description:
          "Filter by league, category, featured status, or a free-text query to move through the archive.",
        results: "Results",
        matchedStories: (count: number) => `${count} stories matched the current filters.`,
        searchLabel: "Search",
        searchPlaceholder: "Search title, excerpt, author, tag...",
        leagueLabel: "League",
        allLeagues: "All leagues",
        categoryLabel: "Category",
        allCategories: "All categories",
        featuredOnly: "Featured only",
      },
      searchPage: {
        kicker: "Search",
        title: "Find stories by team, theme, or tactical idea",
        description:
          "The search flow combines a client-side input with a mock search API for quick suggestions and a server-rendered results page.",
        inputLabel: "Search the archive",
        placeholder: "Arsenal, scouting, data lab, transitions...",
        resultsFor: (query: string) => `Results for "${query}"`,
        resultCount: (count: number) => `${count} matching stories in the archive.`,
        noMatchesTitle: "No direct matches yet",
        noMatchesDescription:
          "Try a broader term like pressing, scouting, Premier League, or transitions.",
        startTypingTitle: "Start typing to explore the archive",
        startTypingDescription:
          "Suggestions appear after two characters and route into full article pages.",
      },
      contactPage: {
        kicker: "Contact",
        title: "Send an editorial or scouting request",
        description:
          "This page satisfies the contact form requirement from the spec and posts to a mock route handler with validation.",
        responseStyle: "Response style",
        responseText:
          "Clear briefs get the best reply: what you need, who it is for, and the timeline.",
        useCases: "Use cases",
        useCaseItems: [
          "Custom match analysis",
          "Editorial partnership",
          "Portfolio review or product critique",
        ],
      },
      contactForm: {
        name: "Name",
        email: "Email",
        topic: "Topic",
        message: "Message",
        namePlaceholder: "Your name",
        emailPlaceholder: "you@example.com",
        topicPlaceholder: "Partnership, scouting brief, editorial inquiry...",
        messagePlaceholder: "Tell us what you need.",
        sending: "Sending...",
        send: "Send request",
        fallbackError: "Something went wrong.",
        fallbackSuccess: "Request sent.",
      },
      commentForm: {
        name: "Name",
        email: "Email",
        comment: "Comment",
        namePlaceholder: "Analyst name",
        emailPlaceholder: "editor@club.com",
        commentPlaceholder: "Share your read on the article.",
        posting: "Posting...",
        post: "Post comment",
        fallbackError: "Something went wrong.",
        fallbackSuccess: "Comment submitted.",
      },
      notFound: {
        title: "Story not found",
        description:
          "The route exists in the app, but the specific article slug does not. Head back to the archive and pick another notebook.",
      },
    },
    vi: {
      header: {
        topLine: "Pitchside Press | Phân tích bóng đá, ghi chú tuyển trạch và nhịp trận đấu",
        freshness: "Cập nhật mới mỗi tuần thi đấu",
        subtitle: "Sổ tay bóng đá xây dựng bằng Next.js",
        home: "Trang chủ",
        blog: "Blog",
        search: "Tìm kiếm",
        contact: "Liên hệ",
      },
      footer: {
        title: "Một blog bóng đá tập trung vào chiến thuật, dữ liệu và nhịp trận",
        description:
          "Sản phẩm được xây dựng theo spec bằng Next.js App Router, mock API, tách component rõ ràng và kể chuyện theo phong cách editorial.",
        routes: "Điều hướng",
        homepage: "Trang chủ",
        blogListing: "Danh sách bài viết",
        search: "Tìm kiếm",
        contact: "Liên hệ",
        buildNotes: "Ghi chú kỹ thuật",
        notes: [
          "Server component và client component được tách theo hành vi.",
          "Form gửi vào mock route handler có kiểm tra dữ liệu.",
          "Tìm kiếm và lọc bài viết chạy trên bộ utility dữ liệu typed.",
        ],
      },
      common: {
        read: "Đọc",
        save: "Lưu",
        saved: "Đã lưu",
        readNow: "Đọc ngay",
        openStory: "Mở bài viết",
        minRead: (minutes: number) => `${minutes} phút đọc`,
        updating: "Đang cập nhật...",
        search: "Tìm",
        searching: "Đang tìm...",
        quickResults: "Kết quả nhanh",
        noResults: "Không tìm thấy bài viết",
        noResultsDescription:
          "Hãy bỏ bớt một bộ lọc, đổi giải đấu hoặc mở rộng từ khóa tìm kiếm.",
        comments: "Bình luận",
        joinDiscussion: "Tham gia thảo luận",
        keyMoments: "Điểm nhấn",
        tags: "Thẻ",
        relatedReads: "Đọc tiếp",
        keepThreadGoing: "Nối dài mạch câu chuyện",
        storyNotFound: "Không tìm thấy bài viết",
        backToBlog: "Quay lại blog",
        english: "EN",
        vietnamese: "VI",
        switchLanguage: "Ngôn ngữ",
      },
      home: {
        heroKicker: "Bản tin tuần đấu",
        heroTitle: "Những câu chuyện bóng đá có cấu trúc, tốc độ và điểm nhấn",
        heroDescription:
          "Pitchside Press biến bóng đá thành một dòng chảy dễ đọc: chiến thuật, tuyển trạch, chuyển nhượng và phân tích trận đấu.",
        exploreStories: "Khám phá bài viết",
        searchArchive: "Tìm trong kho bài",
        leadNotebook: "Bài nổi bật",
        visualIdentity: "Nhận diện hình ảnh",
        visualTitle: "Pitch map kết hợp cùng thẻ editorial",
        featuredFollowUp: "Bài nổi bật tiếp theo",
        featuredStories: "Bài nổi bật",
        featuredStoriesTitle: "Những câu chuyện đang định hình nghị trình bóng đá",
        featuredStoriesDescription:
          "Các bài phân tích dài hơi về chiến thuật, cấu trúc đội hình và chi tiết trận đấu đỉnh cao.",
        fixtureRadar: "Lịch đấu đáng chú ý",
        nextOnCalendar: "Trận đấu sắp tới",
        fixtureDescription:
          "Danh sách nhanh những trận có thể tác động đến cuộc đua vô địch, top châu Âu hoặc tranh luận chiến thuật trong tuần tới.",
        powerTable: "Bảng phong độ",
        pressureTitle: "Những điểm nóng của Ngoại hạng Anh",
        pressureDescription:
          "Bức tranh top đầu cùng phong độ gần đây để giữ homepage bám vào bối cảnh cạnh tranh hiện tại.",
        freshNotebook: "Sổ tay mới",
        freshTitle: "Thêm nhiều bài viết từ kho lưu trữ",
        freshDescription:
          "Những bài mới giữ homepage gắn kết với trang danh sách bài viết và luồng tìm kiếm.",
        editorialCta: "Lời mời editorial",
        editorialTitle: "Cần một scouting brief riêng hoặc hợp tác editorial?",
        editorialDescription:
          "Route liên hệ được nối với mock API để sản phẩm thể hiện rõ xử lý form, validation và trạng thái phản hồi mà không cần backend.",
        editorialBullets: [
          "Phù hợp cho bài tập khóa học, portfolio và prototype editorial.",
          "Có tìm kiếm bài viết, route bài viết động và bộ UI tách thành component.",
        ],
        openContact: "Mở form liên hệ",
      },
      blog: {
        kicker: "Danh sách bài viết",
        title: "Bài editorial được sắp xếp để quét nhanh",
        description:
          "Lọc theo giải đấu, chủ đề, trạng thái nổi bật hoặc từ khóa tự do để di chuyển trong kho bài viết.",
        results: "Kết quả",
        matchedStories: (count: number) => `${count} bài viết phù hợp với bộ lọc hiện tại.`,
        searchLabel: "Tìm kiếm",
        searchPlaceholder: "Tìm tiêu đề, mô tả ngắn, tác giả, thẻ...",
        leagueLabel: "Giải đấu",
        allLeagues: "Tất cả giải đấu",
        categoryLabel: "Chủ đề",
        allCategories: "Tất cả chủ đề",
        featuredOnly: "Chỉ hiện bài nổi bật",
      },
      searchPage: {
        kicker: "Tìm kiếm",
        title: "Tìm bài theo đội bóng, chủ đề hoặc ý tưởng chiến thuật",
        description:
          "Trang tìm kiếm kết hợp input client-side và mock search API để gợi ý nhanh, đồng thời render server cho trang kết quả.",
        inputLabel: "Tìm trong kho bài viết",
        placeholder: "Manchester United, tuyển trạch, chuyển nhượng, pressing...",
        resultsFor: (query: string) => `Kết quả cho "${query}"`,
        resultCount: (count: number) => `${count} bài viết phù hợp trong kho.`,
        noMatchesTitle: "Chưa có kết quả trực tiếp",
        noMatchesDescription:
          "Thử từ khóa rộng hơn như pressing, tuyển trạch, Ngoại hạng Anh hoặc transition.",
        startTypingTitle: "Bắt đầu gõ để khám phá kho bài viết",
        startTypingDescription:
          "Gợi ý sẽ hiện sau hai ký tự và dẫn đến các trang bài viết chi tiết.",
      },
      contactPage: {
        kicker: "Liên hệ",
        title: "Gửi yêu cầu editorial hoặc scouting",
        description:
          "Trang này đáp ứng yêu cầu contact form trong spec và gửi dữ liệu đến mock route handler có validation.",
        responseStyle: "Cách phản hồi",
        responseText: "Brief rõ ràng sẽ nhận được phản hồi tốt nhất: bạn cần gì, cho ai và timeline ra sao.",
        useCases: "Tình huống sử dụng",
        useCaseItems: [
          "Phân tích trận đấu theo yêu cầu",
          "Hợp tác editorial",
          "Review portfolio hoặc sản phẩm",
        ],
      },
      contactForm: {
        name: "Tên",
        email: "Email",
        topic: "Chủ đề",
        message: "Nội dung",
        namePlaceholder: "Tên của bạn",
        emailPlaceholder: "ban@example.com",
        topicPlaceholder: "Hợp tác, scouting brief, yêu cầu editorial...",
        messagePlaceholder: "Cho chúng tôi biết bạn cần gì.",
        sending: "Đang gửi...",
        send: "Gửi yêu cầu",
        fallbackError: "Đã có lỗi xảy ra.",
        fallbackSuccess: "Đã gửi yêu cầu.",
      },
      commentForm: {
        name: "Tên",
        email: "Email",
        comment: "Bình luận",
        namePlaceholder: "Tên người bình luận",
        emailPlaceholder: "editor@club.com",
        commentPlaceholder: "Chia sẻ góc nhìn của bạn về bài viết.",
        posting: "Đang đăng...",
        post: "Đăng bình luận",
        fallbackError: "Đã có lỗi xảy ra.",
        fallbackSuccess: "Đã gửi bình luận.",
      },
      notFound: {
        title: "Không tìm thấy bài viết",
        description:
          "Route có tồn tại trong app, nhưng slug bài viết này không có. Hãy quay lại kho bài viết và chọn bài khác.",
      },
    },
  };

  return dictionaries[locale];
}
