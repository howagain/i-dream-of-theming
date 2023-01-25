export const SITE = {
  title: "I Dream Of Theming",
  description: "How to use CSS variables and JS to build a themeable website.",
  defaultLanguage: "en-us",
} as const;

export const KNOWN_LANGUAGES = {
  English: "en",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  en: {
    "CSS Variables": [
      { text: "Introduction", link: "introduction" },
      { text: "Under The Hood", link: "under-the-hood" },
      { text: "Building With Variables", link: "building-with-css-variables" },
      {
        text: "Using Javascript WIth Variables",
        link: "using-javascript-with-variables",
      },
      { text: "Building Accessible Designs", link: "accessibility" },
      { text: "Wha's Next", link: "whats-next" },
    ],
  },
};
