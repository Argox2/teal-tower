export const SITE = {
  website: "https://alessandrorojo.com/", // replace this with your deployed domain
  author: "Alessandro Rojo",
  title: "Rojo",
  desc: "Jardín digital de Alessandro Rojo", // 🔧 nueva línea
  profile: "https://alessandrorojo.com/", // 🔧 nueva línea o la ruta que uses
  ogImage: "",
  lightAndDarkMode: false,
  postPerIndex: 3,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "es", // html lang code. Set this empty and default will be "en"
  timezone: "America/Mexico_City", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
