export const SITE = {
  title: "Rede para o Decrescimento",
  description:
    "Num planeta de recursos limitados torna-se imperativo reduzir os níveis de produção e consumo. A Rede para o Decrescimento apela a mudanças individuais, a experiências coletivas, a resistir, a desenvolver projetos políticos e a pensar em futuros diferentes. website description.",
  defaultLanguage: "pt-PT",
} as const;

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

export const KNOWN_LANGUAGES = {
  Português: "pt",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/lpc84/decrescimento_docs/tree/master`;

export const COMMUNITY_INVITE_URL = `https://www.decrescimento.pt`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "XXXXXXXXXX",
  appId: "XXXXXXXXXX",
  apiKey: "XXXXXXXXXX",
};

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  pt: {
    Conceitos: [{ text: "Introdução", link: "pt/conceitos/introduction" }],
    Recursos: [
      { text: "Livros", link: "pt/recursos/livros" },
      { text: "Videos", link: "pt/recursos/videos" },
    ],
  },
};
