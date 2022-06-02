import { Link } from "@remix-run/react"
import { type ReactNode } from "react"
import NewBadge from "~/components/new_badge"

const HeaderLink = ({ to, children, isNew }: { to: string, children: ReactNode, isNew?: boolean }) => {
  return (
    <Link to={to} className="pl-8 py-4 h-16 text-xl text-white relative whitespace-nowrap">
      {children}
      {isNew ? <NewBadge /> : null }
    </Link>
  )
}
const Header = () => {
  return (
    <header className="bg-greyn text-white p-4 grid items-center space-x-5 grid-cols-1 sm:grid-cols-[200px_1fr]">
      <Link to="/" className="flex flex-row items-center">
        <img src="/favicon.ico" alt="Destiny Tools" className="h-16" />
        <h1 className="text-3xl pl-4 whitespace-nowrap">Destiny Tools</h1>
      </Link>
      <div className="w-full flex flex-row px-4 overflow-x-scroll overflow-y-visible no-scrollbar">
        <HeaderLink to="/xurios">
          Xur
        </HeaderLink>
        <HeaderLink to="/duality_loot" isNew>
          Duality Loots
        </HeaderLink>
        <HeaderLink to="/duality_maps" isNew>
          Duality Maps
        </HeaderLink>
        <HeaderLink to="/vow_symbols">
          Vow Symbol Locations
        </HeaderLink>
      </div>
    </header>
  )
}

export default Header