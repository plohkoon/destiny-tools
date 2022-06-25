import { Link } from "@remix-run/react"
import { type ReactNode } from "react"
import NewBadge from "~/components/new_badge"

const HeaderLink = ({ to, children, isNew }: { to: string, children: ReactNode, isNew?: boolean }) => {
  return (
    <Link to={to} className="pl-8 py-4 h-16 text-xl text-white relative whitespace-nowrap hover:text-gray-200 hover:underline">
      {children}
      {isNew ? <NewBadge /> : null }
    </Link>
  )
}
const Header = () => {
  return (
    <header className="bg-greyn text-white p-4 grid items-center space-x-5 gap-4 grid-cols-1 sm:grid-cols-[225px_0.99fr]">
      <Link to="/" className="flex flex-row items-center">
        <img src="/favicon.ico" alt="Destiny Tools" className="h-16" />
        <h1 className="text-3xl pl-4 whitespace-nowrap">Destiny Tools</h1>
      </Link>
      <div className="w-full flex flex-row overflow-x-scroll overflow-y-visible no-scrollbar">
        <HeaderLink to="/utils/xur">
          Xur
        </HeaderLink>
        <HeaderLink to="/duality/maps" isNew>
          Duality Maps
        </HeaderLink>
        <HeaderLink to="/duality/loot" isNew>
          Duality Loots
        </HeaderLink>
        <HeaderLink to="/vow/symbol_locations">
          Vow Symbol Locations
        </HeaderLink>
        <HeaderLink to="/vow/symbol_names">
          Vow Symbol Names
        </HeaderLink>
        <p className="pl-8 py-4 h-16 text-md text-gray-200 relative whitespace-nowrap">See the footer for more (and older) resources</p>
      </div>
    </header>
  )
}

export default Header