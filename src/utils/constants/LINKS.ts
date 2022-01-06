/**
 * Type for linker som skal brukes på nettsiden
 */
type TLinkType = {
  id: number;
  url: string;
  text: string;
  external: boolean;
}[];

/**
 * Konstant med linker som skal brukes på nettsiden
 */
const LINKS: TLinkType = [
  {
    id: 1,
    url: "/",
    text: "Hjem",
    external: false
  },
  {
    id: 2,
    url: "/prosjekter",
    text: "Prosjekter",
    external: false
  },
  {
    id: 3,
    url: "/cv",
    text: "CV",
    external: false
  },
  {
    id: 4,
    url: "https://www.github.com/w3bdesign",
    text: "Github",
    external: true
  },
  {
    id: 5,
    url: "/kontakt",
    text: "Kontakt",
    external: false
  }
];

export default LINKS;
