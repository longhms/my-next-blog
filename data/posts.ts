import type { Fixture, Post, StandingRow } from "@/types/content";

export const posts: Post[] = [
  {
    slug: "manchester-united-five-star-window",
    title: {
      en: "Manchester United Ignite the Window With a Five-Name Power Move",
      vi: "Manchester United đốt nóng phiên chợ bằng kế hoạch 5 bom tấn",
    },
    strapline: {
      en: "Adam Wharton, Lucas Bergvall, Kenan Yildiz, Ayyoub Bouaddi, and Pau Cubarsi headline an audacious summer projection.",
      vi: "Adam Wharton, Lucas Bergvall, Kenan Yildiz, Ayyoub Bouaddi và Pau Cubarsí tạo thành kịch bản mùa hè đầy tham vọng.",
    },
    excerpt: {
      en: "United's transfer pitch is built around control, youth, and long-term upside: Wharton for rhythm, Bergvall and Bouaddi for midfield depth, Yildiz for attacking variety, and Cubarsi as the elite defensive swing.",
      vi: "Đề án chuyển nhượng của MU được xây quanh khả năng kiểm soát, tuổi trẻ và tiềm năng dài hạn: Wharton cho nhịp chơi, Bergvall và Bouaddi cho chiều sâu tuyến giữa, Yildiz cho sự đa dạng tấn công, còn Cubarsí là nước cờ phòng ngự đỉnh cao.",
    },
    category: "Transfers",
    league: "Premier League",
    publishedAt: "2026-04-01",
    readTime: 9,
    featured: true,
    heroImage: "/images/united-transfer-window.svg",
    author: {
      name: "Noah Mercer",
      role: {
        en: "Transfer Notebook",
        vi: "Sổ tay chuyển nhượng",
      },
      initials: "NM",
    },
    tags: [
      "Manchester United",
      { en: "Transfer Window", vi: "Phiên chợ chuyển nhượng" },
      "Adam Wharton",
      "Lucas Bergvall",
      "Kenan Yildiz",
      "Ayyoub Bouaddi",
      "Pau Cubarsí",
    ],
    keyMoments: [
      {
        en: "Wharton is the tempo controller who would change United's first pass under pressure.",
        vi: "Wharton là người điều nhịp có thể thay đổi chất lượng đường chuyền đầu tiên của MU khi bị ép pressing.",
      },
      {
        en: "Yildiz brings left-footed creativity between winger and second striker zones.",
        vi: "Yildiz bổ sung sự sáng tạo chân trái giữa vai trò chạy cánh và hộ công.",
      },
      {
        en: "Cubarsi is the ceiling move: a defender who upgrades both buildup and recovery defending.",
        vi: "Cubarsí là bản hợp đồng nâng tầm hệ thống: một trung vệ nâng cấp cả khả năng triển khai bóng lẫn phòng ngự trạng thái.",
      },
    ],
    metrics: [
      {
        label: { en: "Targets profiled", vi: "Số mục tiêu" },
        value: "5",
      },
      {
        label: { en: "Average age", vi: "Tuổi trung bình" },
        value: "19.8",
      },
      {
        label: { en: "Squad lines upgraded", vi: "Tuyến được nâng cấp" },
        value: "3",
      },
    ],
    sections: [
      {
        heading: {
          en: "Why this shortlist feels coherent",
          vi: "Vì sao danh sách rút gọn này có tính hệ thống",
        },
        body: [
          {
            en: "This is not a random pile of famous names. It is a recruitment map that targets three problems at once: buildup control, attacking unpredictability, and defensive ceiling.",
            vi: "Đây không phải một danh sách các tên tuổi ngẫu nhiên. Đây là bản đồ tuyển mộ nhằm giải quyết cùng lúc ba vấn đề: kiểm soát triển khai bóng, sự khó lường trong tấn công và trần năng lực phòng ngự.",
          },
          {
            en: "Adam Wharton gives United cleaner exits, Lucas Bergvall and Ayyoub Bouaddi deepen the midfield age curve, Kenan Yildiz offers line-breaking flair, and Pau Cubarsi changes the defensive profile of the whole squad.",
            vi: "Adam Wharton giúp MU thoát pressing gọn hơn, Lucas Bergvall và Ayyoub Bouaddi làm dày lớp tuổi trẻ cho tuyến giữa, Kenan Yildiz đem đến khả năng phá vỡ tuyến phòng thủ, còn Pau Cubarsí thay đổi hoàn toàn bộ nhận diện phòng ngự của toàn đội.",
          },
        ],
        callout: {
          en: "If United really moved on all five, this would be less a transfer spree and more a structural reset.",
          vi: "Nếu MU thực sự chiêu mộ cả 5 mục tiêu này, đây sẽ không còn là một kỳ mua sắm đơn thuần mà là một cú tái thiết cấu trúc đội hình.",
        },
      },
      {
        heading: {
          en: "The midfield logic",
          vi: "Logic của tuyến giữa",
        },
        body: [
          {
            en: "Wharton is the immediate fit because he speeds up circulation without turning every possession into risk. Bergvall and Bouaddi are different bets: one more advanced and elastic, the other more about timing, press resistance, and long-term midfield command.",
            vi: "Wharton là mảnh ghép phù hợp tức thì vì cậu ấy đẩy nhịp luân chuyển bóng nhanh hơn mà không biến mỗi pha cầm bóng thành một canh bạc. Bergvall và Bouaddi là hai cuộc đặt cược khác nhau: một người thiên về tấn công và cơ động, người còn lại nổi bật ở khả năng căn thời gian, thoát pressing và tiềm năng điều khiển tuyến giữa dài hạn.",
          },
        ],
      },
      {
        heading: {
          en: "Why Yildiz and Cubarsi are headline names",
          vi: "Vì sao Yildiz và Cubarsí là hai cái tên gây chú ý nhất",
        },
        body: [
          {
            en: "Kenan Yildiz changes the front line because he can receive in crowded interior zones and still attack the next defender. Pau Cubarsi changes everything behind the ball because he already plays with elite calm in possession and reads danger early.",
            vi: "Kenan Yildiz thay đổi hàng công vì có thể nhận bóng trong không gian hẹp ở trung lộ và vẫn đối mặt thành công hậu vệ tiếp theo. Pau Cubarsí thay đổi toàn bộ hệ thống phía sau trái bóng vì đã sở hữu sự bình tĩnh thượng thặng khi cầm bóng và khả năng đọc tình huống cực sớm.",
          },
          {
            en: "Together they point to a United side that wants to look younger, cleaner, and much more intentional in every phase.",
            vi: "Đặt cạnh nhau, họ vẽ ra hình ảnh một MU trẻ hơn, gọn gàng hơn và có chủ đích rõ ràng hơn trong mọi pha bóng.",
          },
        ],
      },
    ],
  },
  {
    slug: "manchester-united-rest-attacks",
    title: "Manchester United cuối cùng đã có cấu trúc rõ ràng trong rest attack",
    strapline: "Khoảng cách gọn hơn phía sau bóng đang giúp United duy trì sức ép tốt hơn",
    excerpt:
      "Manchester United tạo ra nhiều pha tấn công tiếp diễn chất lượng hơn vì cấu trúc sau đợt tấn công đầu tiên không còn vỡ vụn. Cự ly ngắn hơn, cấu trúc rest attack sạch hơn, và pha counter-press đến đúng lúc.",
    category: "Tactics",
    league: "Premier League",
    publishedAt: "2026-03-31",
    readTime: 8,
    featured: true,
    heroImage: "/images/united-rest-attack.svg",
    author: {
      name: "Isla Bennett",
      role: "Tác giả chiến thuật",
      initials: "IB",
    },
    tags: ["Manchester United", "Rest attack", "Pressing"],
    keyMoments: [
      "Hậu vệ biên xa bóng giờ bó vào trong sớm hơn để kiểm soát bóng hai.",
      "Bruno nhận bóng cao hơn vì cặp pivot giữ vị trí ổn định.",
      "United có thể thua pha tranh chấp đầu tiên mà vẫn ép đối thủ lùi sâu.",
    ],
    metrics: [
      { label: "Thu hồi bóng 1/3 cuối sân", value: "9.7" },
      { label: "Đợt tấn công duy trì", value: "20" },
      { label: "Độ nghiêng sân", value: "64%" },
    ],
    sections: [
      {
        heading: "Cấu trúc phía sau đợt tấn công",
        body: [
          "Cải tiến quan trọng nhất của United không nằm ở đường chuyền cuối cùng. Nó nằm ở tổ chức còn lại phía sau trái bóng khi đợt tấn công đầu tiên bị chặn lại.",
          "Bằng cách giữ hai điểm tựa thấp hơn và bó hẹp biên xa bóng sớm hơn, United giờ lao vào các pha bóng hai nhanh hơn rất nhiều.",
        ],
        callout:
          "Lần đầu sau khá lâu, hình dáng tấn công của United trông như được thiết kế cho hành động tiếp theo chứ không chỉ cho tình huống hiện tại.",
      },
      {
        heading: "Vì sao điều này giải phóng Bruno",
        body: [
          "Khi rest attack được bảo vệ, Bruno Fernandes có thể ở lại giữa các tuyến thay vì phải lùi quá sâu để khởi động lại pha bóng.",
          "Điều đó đồng nghĩa với việc cú chạm đầu tiên của anh diễn ra gần vòng cấm hơn, nơi tầm chuyền của Bruno thực sự thay đổi trận đấu.",
        ],
      },
      {
        heading: "Tác động đến cuộc đua vô địch",
        body: [
          "Điều này quan trọng vì cuộc đua vô địch thường thuộc về những đội có thể giữ sức ép trong thời gian dài mà không mở cửa cho đối thủ phản công.",
          "United đang bắt đầu làm được điều đó theo cách có tính lặp lại cao, vì thế chuỗi phong độ gần đây của họ thuyết phục hơn rất nhiều so với trước.",
        ],
      },
    ],
  },
  {
    slug: "bruno-fernandes-control-zone",
    title: "Bruno Fernandes đã biến half-space phải thành phòng điều khiển của United",
    strapline: "Nhịp độ tấn công nhanh hơn vì bản đồ xung quanh Bruno cuối cùng đã có logic",
    excerpt:
      "Những pha tấn công tốt nhất của United giờ chạy qua Bruno ở half-space bên phải, nơi anh có thể nhận bóng trong lúc di chuyển, nối kết với các pha chạy chỗ và vẫn kịp xuất hiện ở bóng hai.",
    category: "Matchday",
    league: "Premier League",
    publishedAt: "2026-03-29",
    readTime: 6,
    featured: false,
    heroImage: "/images/united-control-zone.svg",
    author: {
      name: "Owen Shaw",
      role: "Phân tích trận đấu",
      initials: "OS",
    },
    tags: ["Manchester United", "Bruno Fernandes", "Kiến tạo cơ hội"],
    keyMoments: [
      "Bruno nhận bóng khi đang di chuyển thay vì đứng yên nhận bóng.",
      "Cầu thủ chạy cánh phải giữ độ rộng đủ lâu để mở hành lang trong.",
      "United giờ có thể tái chế đợt tấn công mà không kéo Bruno ra khỏi zone 14.",
    ],
    metrics: [
      { label: "Đường chuyền mở khóa", value: "4.8" },
      { label: "Đường chuyền tịnh tiến", value: "11" },
      { label: "Chạm bóng ở zone 14", value: "9" },
    ],
    sections: [
      {
        heading: "Bản đồ gọn gàng hơn",
        body: [
          "Bruno luôn nhìn ra những đường chuyền người khác bỏ lỡ, nhưng United trước đây quá thường xuyên bắt anh phải giải quyết mọi pha bóng từ mọi khu vực.",
          "Giờ đây đội bóng trao cho anh một phòng điều khiển ổn định: half-space bên phải, một hậu vệ cánh ở gần và một cầu thủ chạy vượt tuyến.",
        ],
      },
      {
        heading: "Lợi ích ẩn sau",
        body: [
          "Vì United có thể tái sử dụng quyền kiểm soát bóng phía sau anh, Bruno không còn phải ép đường bóng mạo hiểm ngay lập tức trong mọi tình huống. Anh có thể đợi nửa nhịp mà vẫn giữ đợt tấn công sống.",
          "Sự thay đổi đó làm cho khả năng sáng tạo của United bớt hoảng hốt và có chủ đích hơn rất nhiều.",
        ],
      },
    ],
  },
  {
    slug: "arsenal-rest-defense-blueprint",
    title: "Arsenal biến rest defense thành công cụ kiểm soát lãnh thổ như thế nào",
    strapline: "Khoảng cách chặt, counter-press sớm và các pha đảo vị trí đầy kiên nhẫn",
    excerpt:
      "Pha bóng hay nhất của Arsenal không còn là đường chuyền cuối. Đó là ba giây sau khi họ mất bóng, khi rest defense giúp họ khóa chặt pha transition trước khi đối thủ kịp thở.",
    category: "Tactics",
    league: "Premier League",
    publishedAt: "2026-03-27",
    readTime: 8,
    featured: true,
    heroImage: "/images/arsenal-rest-defense.svg",
    author: {
      name: "Liam Carter",
      role: "Tác giả chiến thuật",
      initials: "LC",
    },
    tags: ["Pressing", "Positional play", "Arsenal"],
    keyMoments: [
      "Cặp pivot giữ liên kết khi hậu vệ cánh chồng biên.",
      "Số 8 bên rộng lao lên khóa half-space ngay sau khi mất bóng.",
      "Hai trung vệ phòng ngự về phía trước thay vì lùi sớm.",
    ],
    metrics: [
      { label: "Thu hồi bóng tầm cao", value: "11.8" },
      { label: "Độ nghiêng sân", value: "68%" },
      { label: "Sút sau thu hồi bóng", value: "3.1" },
    ],
    sections: [
      {
        heading: "Vì sao cấu trúc này quan trọng",
        body: [
          "Về cấu trúc khi cầm bóng của Arsenal trông rất tấn công, nhưng chi tiết quan trọng nằm ở chỗ khoảng cách giữa hàng thủ, pivot và các tiền vệ dâng cao là rất ngắn khi mất bóng.",
          "Khoảng cách đó khiến pha tranh chấp đầu tiên sau turnover hiếm khi bị cô lập. Hậu vệ thứ hai có thể đến ngay lập tức, biến bóng 50-50 thành một cái bẫy.",
        ],
        callout: "Rest defense ở đây không phải lớp bảo hiểm bị động. Nó là sân phóng cho đợt tấn công tiếp theo.",
      },
      {
        heading: "Cú quá tải bên trái",
        body: [
          "Khi hậu vệ trái dâng cao và cánh giữ độ rộng, số 8 bên trái của Arsenal bó vào một túi half-space. Tam giác này được thiết kế để tạo quá tải khi cầm bóng và che bóng khi chuyển trạng thái (transition).",
          "Vì ba cầu thủ gần bóng nhất đã được xếp lệch tầng sẵn, counter-press bắt đầu trước khi đối thủ kịp đảo cánh.",
        ],
      },
      {
        heading: "Điều này thay đổi gì trong giai đoạn nước rút",
        body: [
          "Trước các khối đội hình thấp, cấu trúc này giữ sức ép ổn định và cắt các pha phản công rẻ tiền. Trước đối thủ mạnh, nó giúp Arsenal duy trì lãnh thổ mà không bắt hai trung vệ phải chạy lùi quá dài.",
          "Đó là dạng cơ chế kiểm soát có tính lặp lại để giúp đội bóng thắng trong cuộc đua vô địch vào tháng Tư và tháng Năm.",
        ],
      },
    ],
  },
  {
    slug: "real-madrid-transition-monster",
    title: "Real Madrid vẫn thắng trận trong khoảng trống giữa hai cấu trúc",
    strapline: "Cỗ máy transition của họ vẫn sống sót qua mọi lần điều chỉnh chiến thuật",
    excerpt:
      "Real Madrid vẫn đáng sợ vì họ không cần kiểm soát trận đấu quá lâu. Họ chỉ cần một cấu trúc vỡ ra và một đường chạy rộng.",
    category: "Matchday",
    league: "Champions League",
    publishedAt: "2026-03-25",
    readTime: 7,
    featured: true,
    heroImage: "/images/madrid-transition.svg",
    author: {
      name: "Marta Nunez",
      role: "Phân tích trận đấu",
      initials: "MN",
    },
    tags: ["Transition", "Real Madrid", "Champions League"],
    keyMoments: [
      "Đường chuyền chéo sân sớm được kích hoạt ngay sau khi thu hồi bóng ở giữa sân.",
      "Bộ ba tuyến đầu tấn công nhiều hành lang khác nhau gần như không cần chạm thử.",
      "Hậu vệ cánh đối thủ ngập ngừng vì Madrid đe dọa cả chiều sâu lẫn vùng cutback.",
    ],
    metrics: [
      { label: "Đợt tấn công trực diện", value: "6.4" },
      { label: "xG transition", value: "0.92" },
      { label: "Pha đưa bóng thẳng", value: "18" },
    ],
    sections: [
      {
        heading: "Vũ khí theo trạng thái trận đấu",
        body: [
          "Sức đe dọa chuyển trạng thái của Madrid tăng theo mức độ hỗn loạn. Trận đấu càng bị kéo giãn, các tiền đạo của họ càng có nhiều lựa chọn vào hành lang gây sát thương nhất.",
          "Vì thế những đội đá thấy thoải mái trong 20 phút vẫn có thể đột nhiên lộ ra trong 5 phút tiếp theo.",
        ],
      },
      {
        heading: "Đường chuyền đầu tiên chính là đợt tấn công",
        body: [
          "Sai lầm lớn nhất là xem Madrid như một đội bóng chỉ sống nhờ các pha tăng tốc hỗn loạn. Lợi thế thật của họ nằm ở độ chính xác và tốc độ của đường thoát bóng đầu tiên sau khi giành lại bóng.",
          "Khi đường bóng đó xuyên qua tuyến đầu, người nhận đã lao vào một hàng thủ đang bị mất thăng bằng.",
        ],
      },
      {
        heading: "Cái giá đối thủ phải trả",
        body: [
          "Nếu bạn đẩy nhiều người lên để ép Madrid lùi sâu, bạn có nguy cơ mất bóng khi phía sau còn quá nhiều khoảng trống. Nếu bạn lùi xuống, họ chiếm lãnh thổ và để các nhà sáng tạo của mình điều khiển nhịp độ.",
          "Tình thế tiến thoái lưỡng nan đó là lý do Madrid không cần một kế hoạch trận đấu hoàn hảo mà vẫn nguy hiểm.",
        ],
      },
    ],
  },
  {
    slug: "bologna-pressing-notebook",
    title: "Bologna đã xây một bài pressing giống như được đo thủ công",
    strapline: "Hàng đầu hẹp hơn và hai trung vệ đầy can đảm đã thay đổi toàn bộ sắc thái",
    excerpt:
      "Bài pressing của Bologna hiệu quả vì mỗi tình huống kích hoạt (trigger) đều đi kèm một chuyển động bọc lót rất quyết liệt ở phía sau, không phải vì họ chỉ đơn giản chạy nhiều hơn.",
    category: "Scouting",
    league: "Serie A",
    publishedAt: "2026-03-21",
    readTime: 6,
    featured: false,
    heroImage: "/images/bologna-press.svg",
    author: {
      name: "Theo Marsh",
      role: "Biên tập tuyển trạch",
      initials: "TM",
    },
    tags: ["Bologna", "Pressing", "Serie A"],
    keyMoments: [
      "Hàng tiền đạo cong đường chạy để chặn lối thoát trung lộ.",
      "Trung vệ gần bóng đẩy vào giữa sân để giữ độ chặt chẽ.",
      "Cầu thủ chạy cánh xa bóng bó vào sớm thay vì đuổi theo hậu vệ biên quá muộn.",
    ],
    metrics: [
      { label: "PPDA", value: "8.9" },
      { label: "Turnover giành được", value: "14" },
      { label: "Cú sút open play", value: "15" },
    ],
    sections: [
      {
        heading: "Sức ép có bản đồ định sẵn",
        body: [
          "Bologna không bao giờ pressing chỉ để biểu diễn. Các tín hiệu của họ được phối hợp quanh bên yếu của đối thủ và góc nhận bóng của tiền vệ nhận bóng.",
          "Vì thế cái bẫy thường trông rất rõ trên replay, nhưng chỉ vì các chuyển động hỗ trợ phía sau pha lao lên đầu tiên quá sạch sẽ.",
        ],
      },
      {
        heading: "Vì sao hàng thủ là trung tâm",
        body: [
          "Bài press chỉ hoạt động được vì hai trung vệ chấp nhận các tình huống một đối một phía sau nó. Nếu thiếu sự gan dạ đó, đội bóng sẽ buộc phải để khoảng cách an toàn hơn và bài press mất đi độ sắc.",
          "Theo nghĩa đó, hậu vệ không phải là lưới an toàn. Họ là trigger cuối cùng của sức ép.",
        ],
      },
    ],
  },
  {
    slug: "set-piece-lab-champions-league",
    title: "Bên trong phòng thí nghiệm set-piece đang quyết định biên độ Champions League",
    strapline: "Blocking pattern, bóng hai và vùng rebound đang trở thành chuyên đề trung tâm",
    excerpt:
      "Những cặp đấu knock-out đỉnh cao ngày càng được định hình bởi pha chạm bóng đầu tiên và sự hỗn loạn theo sau. Vùng rebound là nơi các ban huấn luyện giỏi nhất đang đào sâu giá trị.",
    category: "Data Lab",
    league: "Champions League",
    publishedAt: "2026-03-18",
    readTime: 5,
    featured: false,
    heroImage: "/images/set-piece-lab.svg",
    author: {
      name: "Nina Silva",
      role: "Trưởng nhóm dữ liệu",
      initials: "NS",
    },
    tags: ["Set-piece", "Phân tích dữ liệu", "Châu Âu"],
    keyMoments: [
      "Người chạy cột gần giờ nhắm vào làn bóng hai nhiều hơn là nhắm vào cú sút.",
      "Routine tốt nhất là cô lập người cản (blocker) yếu nhất, không phải người kèm người yếu nhất.",
      "Kiểm soát rebound đang trở thành một bài tập riêng.",
    ],
    metrics: [
      { label: "Tỷ trọng xG set-piece", value: "31%" },
      { label: "Cú sút từ bóng hai", value: "2.3" },
      { label: "Pha screen", value: "9" },
    ],
    sections: [
      {
        heading: "Vùng rebound",
        body: [
          "Phần lớn hàng thủ tập trung cho pha tranh chấp đầu tiên. Ít đội tập vào khoảng hai yard nơi các pha phá bóng rơi xuống sau một cú chạy bị chặn hoặc một cú đánh đầu lập bập.",
          "Khoảng nhỏ đó giờ đang được nhiều đội chiếm dụng có chủ đích vì họ biết pha chạm bóng đầu tiên ngày càng bị tranh chấp dữ dội.",
        ],
      },
      {
        heading: "Cuộc đua của các ban huấn luyện",
        body: [
          "Khi một CLB biến các hành động thứ cấp thành vũ khí, tất cả đội còn lại đều buộc phải phản ứng. Đó là lý do set-piece đã chuyển từ một dự án phụ của chuyên gia thành một trụ cột chiến thuật hàng tuần.",
        ],
      },
    ],
  },
  {
    slug: "brighton-recruitment-engine",
    title: "Cỗ máy tuyển mộ của Brighton vẫn tìm ra lợi thế mà đội khác bỏ lỡ",
    strapline: "Độ khớp profile quan trọng hơn nhiều so với các highlight đẹp mắt",
    excerpt:
      "Những nước đi thông minh nhất của CLB đến từ việc kết hợp scouting theo vai trò với mô hình huấn luyện biết rõ cách phát triển những cầu thủ chưa hoàn thiện.",
    category: "Transfers",
    league: "Premier League",
    publishedAt: "2026-03-15",
    readTime: 6,
    featured: false,
    heroImage: "/images/brighton-recruitment.svg",
    author: {
      name: "Daniel Kwesi",
      role: "Sổ tay chuyển nhượng",
      initials: "DK",
    },
    tags: ["Tuyển mộ", "Brighton", "Giao dịch cầu thủ"],
    keyMoments: [
      "Độ hợp vai trò được kiểm tra qua ba trạng thái chiến thuật.",
      "Trần năng lực thể chất được đánh giá song song với tính lặp lại kỹ thuật.",
      "Lộ trình ra sân là một phần của mô hình đánh giá.",
    ],
    metrics: [
      { label: "Tuổi trung bình", value: "22.7" },
      { label: "Chu kỳ lợi nhuận", value: "3 năm" },
      { label: "Tỷ lệ tái sử dụng", value: "82%" },
    ],
    sections: [
      {
        heading: "Vì sao mô hình này vẫn đi trước",
        body: [
          "Brighton không chỉ mua cầu thủ có tài. Họ mua những cầu thủ mà điểm mạnh của họ phù hợp với các bài toán chiến thuật mà ban huấn luyện đã biết cách rèn.",
          "Điều đó rút ngắn thời gian thích nghi và đồng thời nâng giá trị bán lại.",
        ],
      },
      {
        heading: "Biến số bị đánh giá thấp",
        body: [
          "Lộ trình số phút ra sân rất quan trọng. Brighton liên tục đưa cầu thủ vào những đội hình có sẵn số phút phát triển mà không bắt họ phải là người định đoạt trận đấu ngay lập tức.",
        ],
      },
    ],
  },
  {
    slug: "golden-boot-run-in",
    title: "Cuộc đua Golden Boot sẽ được quyết định bởi chất lượng cú sút, không phải số lượng",
    strapline: "Độ dao động khâu dứt điểm cuối mùa đi theo kiểu cấp bóng",
    excerpt:
      "Các tay săn bàn hàng đầu giờ tách nhóm bởi profile cơ hội. Tap-in, cutback và cú sút transition đang quan trọng hơn số lượng cú sút thuần túy khi cuộc đua vô địch nóng lên.",
    category: "Data Lab",
    league: "Premier League",
    publishedAt: "2026-03-12",
    readTime: 4,
    featured: false,
    heroImage: "/images/golden-boot.svg",
    author: {
      name: "Ava Grant",
      role: "Ban dữ liệu",
      initials: "AG",
    },
    tags: ["Tiền đạo", "Chất lượng cú sút", "Cuộc đua"],
    keyMoments: [
      "Cutback trung lộ vẫn là nguồn cơ hội giá trị nhất.",
      "Tổng số cú sút giảm trong tháng Tư, nhưng số lần chạm bóng trong box của các tay săn bàn hay vẫn giữ nguyên.",
      "Độ hiện diện trong vòng cấm bền bỉ hơn những chuỗi sút xa ăn may.",
    ],
    metrics: [
      { label: "NPxG/cú sút", value: "0.19" },
      { label: "Chạm bóng trong box", value: "10.6" },
      { label: "Cú sút trúng đích", value: "41%" },
    ],
    sections: [
      {
        heading: "Vì sao profile cơ hội mới là then chốt",
        body: [
          "Khi trận đấu trở nên chặt chẽ hơn, tiền đạo sẽ có ít tổng cú sút hơn. Người vẫn xuất hiện ở những cơ hội giá trị cao sẽ tiếp tục ghi bàn bất chấp dao động.",
          "Vì thế kiểu cấp bóng quan trọng hơn tổng cú sút trên tiêu đề trong chặng cuối của mùa giải.",
        ],
      },
      {
        heading: "Đọc vị những ứng viên cuối cùng",
        body: [
          "Hãy nhìn xem tiền đạo nào vẫn tiếp tục được nhận cutback và các pha nhả bóng cột gần. Những hành động đó ổn định hơn rất nhiều so với tổng số cú sút tầm xa trong một chuỗi trận ngắn.",
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
    id: "pl-mun-new",
    competition: "Premier League",
    homeTeam: "Manchester United",
    awayTeam: "Newcastle",
    kickoff: "2026-04-05T15:30:00.000Z",
    venue: "Old Trafford",
    broadcast: "NBC Sports",
    status: "Upcoming",
  },
];

export const standings: StandingRow[] = [
  {
    team: "Manchester United",
    played: 30,
    won: 22,
    drawn: 5,
    lost: 3,
    goalsFor: 65,
    goalsAgainst: 25,
    points: 71,
    form: ["W", "W", "W", "D", "W"],
    badgeTone: "from-red-600 to-[#7a0f16]",
  },
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
];