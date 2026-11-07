import Link from "next/link";
import { ArrowLeft, Home, Calendar, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md w-full space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#33a9b1]/15 text-[#33a9b1] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Dentique Dental Clinic</span>
        </div>

        <h1 className="text-7xl sm:text-8xl font-extrabold text-[#050c14] tracking-tight">
          4<span className="text-[#33a9b1]">0</span>4
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-[#050c14]">
          Page Not Found
        </h2>

        <p className="text-sm sm:text-base text-[#47697b] leading-relaxed">
          The dental page or article you are looking for does not exist or may have been moved.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#33a9b1] hover:bg-[#288c93] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/#blog"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#f5f7fa] hover:bg-[#dee8de] text-[#050c14] font-semibold text-sm border border-[#d8dde1] transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Read Dental Blog</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

