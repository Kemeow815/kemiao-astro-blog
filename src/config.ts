export const SITE = {
  website: "https://myblogs.kemiao.online/", // replace this with your deployed domain
  author: "克喵爱吃卤面",
  profile: "https://myblogs.kemiao.online/",
  desc: "愿你看清一切真相后，依旧热爱你的家人和朋友。",
  title: "喵落阁",
  ogImage: "touxiang.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "",
    url: "",
  },
  dynamicOgImage: true,
  lang: "zh-CN", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
