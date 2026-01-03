'use client'
import ShinyText from '@/components/ShinyText';
import { Heart, StarIcon } from 'lucide-react';
import { GithubIcon } from 'lucide-react';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/clerk-react';
import { useRouter } from 'next/navigation';
import Dashboard from './(dashboard)/dashboard/page';

export default function Home() {
  const { user } = useUser();
  const router = useRouter();

  const handleGetStarted = async () => {
    if (user) {
      router.push('/dashboard')
    }
    else {
      router.push('/sign-in')
    }
  }
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FAFAFA]/95 backdrop-blur-sm border-b border-slate-200/50">
        <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center max-w-6xl">
          <div onClick={() => router.push('/')} className="text-xl sm:text-2xl font-semibold text-slate-900 cursor-pointer">
            कागज़
          </div>
          <div className="flex gap-2 sm:gap-4 items-center">
            <Link
              scroll={false}
              onClick={() => {
                const el = document.getElementById("pricing");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}

              href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors text-xs sm:text-sm font-medium">
              Pricing
            </Link>
            {!user ? (
              <>
                <button onClick={() => router.push('/sign-in')} className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer">
                  Log in
                </button>
                <button onClick={() => router.push('/sign-up')} className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">
                  Get started
                </button>
              </>
            ) : (
              <>
                <button onClick={() => router.push('/dashboard')} className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">
                  Dashboard
                </button>

                <UserButton />
              </>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center max-w-4xl">
        <Link
          href="https://github.com/Angshuman09/axis"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-3 py-1.5 mb-6 sm:mb-8 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all"
        >
          <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellowstar animate-beat transition-colors" />
          <span className="hidden sm:inline">Star on GitHub</span>
          <span className="sm:hidden">Star us</span>
          <div className="w-px h-4 bg-black/10"></div>
          <StarIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
        </Link>


        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-slate-900 tracking-tight leading-tight px-2">
          Your <span className='text-[#D4AF37]'>intelligent</span> notebook <br className="hidden sm:block" />
          <span className="sm:hidden">for </span>
          <span className="hidden sm:inline">for any </span>document.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
          Write, organize, and ask questions. Kagaz turns your notes into answers.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
          <button onClick={handleGetStarted} className="px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all text-sm w-full sm:w-auto cursor-pointer">
            Get started free →
          </button>
          <button className="px-6 py-3 bg-white text-slate-700 font-medium rounded-lg hover:bg-slate-50 border border-slate-200 transition-all text-sm w-full sm:w-auto cursor-pointer">
            See how it works
          </button>
        </div>

        {/* Simple Feature Pills */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mt-8 sm:mt-12 px-4">

          <div className="px-3 sm:px-4 py-2 bg-white border border-black/10 rounded-full text-xs sm:text-sm text-black flex items-center gap-2
                transition-all hover:shadow-sm hover:-translate-y-0.5 hover:border-black/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
            <span className="whitespace-nowrap">Lightning fast</span>
          </div>

          <div className="px-3 sm:px-4 py-2 bg-white border border-black/10 rounded-full text-xs sm:text-sm text-black flex items-center gap-2
                transition-all hover:shadow-sm hover:-translate-y-0.5 hover:border-black/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
            <span className="whitespace-nowrap">Secure & private</span>
          </div>

          <div className="px-3 sm:px-4 py-2 bg-white border border-black/10 rounded-full text-xs sm:text-sm text-black flex items-center gap-2
                transition-all hover:shadow-sm hover:-translate-y-0.5 hover:border-black/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
            <span className="whitespace-nowrap">AI-powered</span>
          </div>

        </div>


      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 max-w-5xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-slate-900">
            Simple pricing
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Start free, upgrade when you need more
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="p-6 sm:p-8 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-all">
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-900">Free</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-bold text-slate-900">$0</span>
                <span className="text-slate-600 text-xs sm:text-sm">forever</span>
              </div>
            </div>

            <button className="w-full py-2.5 mb-6 bg-slate-100 hover:bg-slate-200 text-slate-900 font-medium rounded-lg transition-colors text-xs sm:text-sm">
              Get started
            </button>

            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-2 text-slate-700">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>5 credits per month</span>
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Up to 100 notes</span>
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Basic search</span>
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Community support</span>
              </li>
            </ul>
          </div>

          {/* Pro Tier */}
          <div className="group relative p-6 sm:p-8 bg-amber-50 border border-black/5 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
            {/* Badge */}
            <div className="absolute -top-2.5 sm:-top-3 right-4 px-2 sm:px-2.5 py-0.5 bg-[#D4AF37] text-black text-[9px] sm:text-[10px] font-semibold rounded-full tracking-wide">
              POPULAR
            </div>

            {/* Plan Title + Price */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">Pro</h3>
              <div className="flex items-end gap-1">
                <span className="text-3xl sm:text-4xl font-bold text-black">
                  <ShinyText text="5$" disabled={false} speed={3} className='custom-class' />
                </span>
                <span className="text-xs sm:text-sm text-neutral-500 mb-1">/ year</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full py-2.5 mb-6 sm:mb-8 bg-slate-900 text-white hover:bg-black font-medium rounded-lg transition-all text-xs sm:text-sm">
              Upgrade now
            </button>

            {/* Features */}
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
              {[
                "Unlimited credits",
                "Unlimited notes",
                "Advanced AI search",
                "Priority support",
                "Advanced analytics",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-neutral-700">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Subtle Hover Glow */}
            <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-[#D4AF37]/10"></div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 mt-12 sm:mt-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center text-slate-600">
          <p className="text-xs sm:text-sm flex justify-center items-center gap-2">
            Made with love by Angshu <Heart className='w-4 h-4 sm:w-5 sm:h-5 text-red-400 fill-red-400' />
          </p>
        </div>
      </footer>
    </div>
  );
}