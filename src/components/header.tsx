import Link from "next/link"
import { MountainIcon } from "lucide-react"

export default function Header() {
  return (
    <header className="flex items-center justify-between h-16 px-4 md:px-8 lg:px-16 border-b bg-white">
      <Link className="flex items-center gap-2" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="text-lg font-semibold">KJ Accounting & Tax Professional Corporation</span>
      </Link>
      <nav className="hidden md:flex gap-6">
        <Link className="text-gray-600 hover:text-gray-900" href="#/collection">
          Collection
        </Link>
        <Link className="text-gray-600 hover:text-gray-900" href="#/About">
          About
        </Link>
        <Link className="text-gray-600 hover:text-gray-900" href="#/Contact">
          Contact
        </Link>
      </nav>
      <div className="md:hidden">
        {/* Mobile menu icon/button can go here if needed */}
        {/* For simplicity, not adding a full mobile menu dropdown in this step */}
      </div>
    </header>
  )
}
