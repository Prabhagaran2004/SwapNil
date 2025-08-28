import Link from "next/link";
import {Zap} from "lucide-react"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-white">SwapZilla</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-lg text-white/80 hover:text-white px-4 py-2 rounded transition">
            Swap
          </Link>
          <Link href="/intent" className="text-lg text-white/80 hover:text-white px-4 py-2 rounded transition">
            Intent
          </Link>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
            Connect Wallet
          </button>
        </div>
       </div>
     </nav>
  );
}