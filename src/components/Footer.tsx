import Link from "next/link"
import { MountainIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 px-4 md:px-8 lg:px-16 h-52">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <MountainIcon className="h-6 w-6 text-gray-400" />
          <span className="text-lg font-semibold">KJ Accounting & Tax Professional Corporation</span>
        </div>
        <nav className="flex gap-6">
          <Link className="text-gray-400 hover:text-white" href="#">
            Privacy Policy
          </Link>
          <Link className="text-gray-400 hover:text-white" href="#">
            Terms of Service
          </Link>
          <Link className="text-gray-400 hover:text-white" href="#">
            Returns
          </Link>
        </nav>
        <p className="text-sm text-gray-400">© 2025 KJ Accounting & Tax Professional Corporation. All rights reserved.</p>
      </div>
    </footer>
  )
}
