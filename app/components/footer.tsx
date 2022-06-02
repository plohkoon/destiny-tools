import { Link } from "@remix-run/react";

interface LinksType {
  title: string;
  paths: {
    name: string;
    path: string;
    id: string;
  }[]
}
const activeLinks: LinksType[] = [
  {
    title: "Utilities",
    paths: [
      {
        name: "Xurios",
        path: "/utils/xur",
        id: "utils-xur"
      },
      {
        name: "Today",
        path: "/utils/today",
        id: "utils-today"
      }
    ]
  },
  {
    title: "Duality",
    paths: [
      {
        name: "Loot",
        path: "/duality/loot",
        id: "duality-loot"
      },
      {
        name: "Maps",
        path: "/duality/maps",
        id: "duality-maps"
      }
    ]
  },
  {
    title: "Vow of the Disciple",
    paths: [
      {
        name: "Symbol Locations",
        path: "/vow/symbol_locations",
        id: "vow-sym-loc"
      },
      {
        name: "Symbol Names",
        path: "/vow/symbol_names",
        id: "vow-sym-name"
      }
    ]
  },
  {
    title: "Vault of Glass",
    paths: [
      {
        name: "Oracles",
        path: "/vault/oracles",
        id: "vault-oracles"
      }
    ]
  },
  {
    title: "Deep Stone Crypt",
    paths: [
      {
        name: "Sparrow Map",
        path: "/dsc/sparrow",
        id: "dsc-sparrow"
      }
    ]
  },
  {
    title: "Last Wish",
    paths: [
      {
        name: "Wishes",
        path: "/wish/wishes",
        id: "wish-wishes"
      },
      {
        name: "Riven Eyes",
        path: "/wish/eyes",
        id: "wish-eyes"
      },
      {
        name: "Vault",
        path: "/wish/vault",
        id: "wish-vault"
      }
    ]
  },
  {
    title: "Pit of Heresy",
    paths: [
      {
        name: "The Harrow",
        path: "/pit/harrow",
        id: "pit-harrow"
      }
    ]
  }
]

const archivedLinks: LinksType[] = [
  {
    title: "Leviathan",
    paths: [
      {
        name: "Map",
        path: "/leviathan/map",
        id: "levi-map"
      }
    ]
  },
  {
    title: "Scourge of the Past",
    paths: [
      {
        name: "Pipes",
        path: "/scourge/pipes",
        id: "scourge-pipes"
      }
    ]
  },
  {
    title: "Zero Hour",
    paths: [
      {
        name: "Maze",
        path: "/zero/maze",
        id: "zero-maze"
      }
    ]
  },
  {
    title: "Menagerie",
    paths: [
      {
        name: "Chalice",
        path: "/menagerie/chalice",
        id: "menagerie-chalice"
      }
    ]
  }
]

const FooterLinkSection = ({ links }: { links: LinksType }) => {
  return (
    <div className="col-span-1 pb-20">
      <h4 className="text-lg underline font-bold">{ links.title }</h4>
      <ul className="ml-2">
        { links.paths.map(p => (
          <li key={p.id}>
            <Link to={p.path} className="text-white hover:text-gray-300 hover:underline my-2">
              { p.name }
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="bg-greyn text-white py-4 px-8 grid grid-cols-1 sm:grid-cols-[25vw_1fr]">
      <section className="col-span-1">
        <img src="/favicon.ico" alt="Destiny Tools" className="h-32 mx-auto my-4" />
      </section>
      <section className="col-span-1">
        <h3 className="text-2xl underline my-2 font-black">Links</h3>
        <div className="grid grid-cols-2 md:grid-cols-3">
          { activeLinks.map(l => <FooterLinkSection key={l.title} links={l} />)}
        </div>
        <h3 className="text-2xl underline my-2 font-black">Archived Links</h3>
        <div className="grid grid-cols-2 md:grid-cols-3">
          { archivedLinks.map(l => <FooterLinkSection key={l.title} links={l} />)}
        </div>
      </section>
    </footer>
  )
}

export default Footer;