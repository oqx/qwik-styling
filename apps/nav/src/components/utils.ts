import type { Links } from "./types";

export const isLinks = (links: unknown): links is Links =>
  !!links &&
  Array.isArray(links) &&
  links.length > 0 &&
  "title" in links[0] &&
  "url" in links[0];

export const LINKS = [
  {
    title: "Services",
    url: "https://www.curbee.com/services-and-rates",
    children: [],
  },
  {
    title: "Enterprise",
    url: "https://www.curbee.com/enterprise",
    children: [
      {
        title: "Fleet",
        url: "https://www.curbee.com/fleet",
        children: [],
      },
      {
        title: "Corporate",
        url: "https://www.curbee.com/corporate-programs",
        children: [],
      },
    ],
  },
  {
    title: "About",
    url: "https://www.curbee.com/about",
    children: [
      {
        title: "Service Areas",
        url: "https://www.curbee.com/service-area",
        children: [],
      },
      {
        title: "Blog",
        url: "https://www.curbee.com/blog",
        children: [],
      },
    ],
  },
];

export const LOGGED_IN_LINKS = [
  {
    title: "Dashboard",
    url: "/",
    children: [],
  },
  {
    title: "Services",
    url: "https://www.curbee.com/services-and-rates",
    children: [],
  },
];
