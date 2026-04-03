"use client";

import Link from 'next/link';
import { ArrowRight, MapPin, CalendarClock, Stethoscope, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-sunglasses.jpg';
import { frames } from '@/lib/data';

const HeroSection = () => (
  <section className="relative min-h-screen pt-20 flex items-center overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">

    {/* ── Animated mesh background ── */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#00AEEF]/15 to-transparent dark:from-[#00AEEF]/8 blur-3xl" style={{ animation: 'orbDrift1 18s ease-in-out infinite' }} />
      <div className="absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#003366]/10 to-transparent dark:from-[#00AEEF]/5 blur-3xl" style={{ animation: 'orbDrift2 22s ease-in-out infinite' }} />
      <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(#003366 1px, transparent 1px), linear-gradient(90deg, #003366 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
    </div>

    <div className="relative z-10 w-full container-luxury px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-5rem)] py-16 lg:py-0">

        {/* ── Left: Copy ── */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

          {/* Pulsing live badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#00AEEF]/30 bg-[#00AEEF]/8 dark:bg-[#00AEEF]/12 dark:border-[#00AEEF]/40 mb-8 animate-fade-up">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00AEEF] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00AEEF]" />
            </span>
            <span className="text-[#00AEEF] font-bold text-xs tracking-[0.18em] uppercase">Clinical Precision · Fashion Forward</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-black tracking-tight leading-[1.05] mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-[#003366] dark:text-white">See The World</span>
            <br />
            <span className="bg-gradient-to-r from-[#00AEEF] via-sky-400 to-blue-500 dark:from-[#00AEEF] dark:via-cyan-300 dark:to-sky-400 bg-clip-text text-transparent">
              In Perfect Clarity.
            </span>
          </h1>

          {/* Sub-copy */}
          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-lg mb-10 animate-fade-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Premium frames meet clinical expertise. Book a free eye test or explore 200+ curated collections — all under one roof.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-14 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link href="/shop"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-[#003366] dark:bg-[#00AEEF] text-white dark:text-[#003366] font-bold text-base shadow-lg shadow-[#003366]/20 dark:shadow-[#00AEEF]/20 hover:bg-[#002244] dark:hover:bg-cyan-400 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl">
              Explore Collections
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#eye-test"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full border-2 border-[#00AEEF] text-[#00AEEF] font-bold text-base bg-white dark:bg-slate-950 hover:bg-[#00AEEF]/8 dark:hover:bg-[#00AEEF]/12 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
              <CalendarClock className="w-5 h-5" />
              Book Eye Test
            </Link>
          </div>

          {/* Trust stats */}
          <div className="flex items-center animate-fade-up" style={{ animationDelay: '0.45s' }}>
            {[
              { value: '10K+', label: 'Happy Patients' },
              { value: '200+', label: 'Frame Styles' },
              { value: '15+', label: 'Years Trusted' },
            ].map((stat, i) => (
              <div key={stat.value} className="flex items-center">
                {i > 0 && <div className="w-px h-10 bg-gradient-to-b from-transparent via-[#00AEEF]/40 to-transparent mx-6 flex-shrink-0" />}
                <div className="text-center sm:text-left">
                  <p className="text-2xl font-black text-[#003366] dark:text-white leading-none">{stat.value}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Visual panel ── */}
        <div className="relative order-1 lg:order-2 flex items-center justify-center lg:justify-end animate-fade-up" style={{ animationDelay: '0.15s' }}>
          <div className="relative w-full max-w-[460px] lg:max-w-none">
            {/* BG glow shape */}
            <div className="absolute inset-[5%] bg-gradient-to-br from-[#003366] via-[#004488] to-[#00AEEF] rounded-[2.5rem] opacity-80 dark:opacity-70 blur-sm" />
            {/* Image card */}
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[9/10] shadow-2xl shadow-[#003366]/30 dark:shadow-black/60">
              <img
                src={heroImage.src}
                alt="Zee Optics premium eyewear collection"
                className="w-full h-full object-cover object-center scale-[1.02] hover:scale-[1.06] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/60 via-transparent to-transparent dark:from-slate-950/60" />
            </div>

            {/* Floating: Rating */}
            <div className="absolute -left-8 top-10 bg-white dark:bg-slate-900 rounded-2xl px-4 py-3 shadow-xl shadow-black/12 border border-gray-100 dark:border-slate-700 flex items-center gap-3" style={{ animation: 'decoFloat 6s ease-in-out infinite' }}>
              <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/10 dark:bg-[#00AEEF]/20 flex items-center justify-center text-[#00AEEF] font-black text-sm">4.9</div>
              <div>
                <p className="text-yellow-400 text-sm leading-none mb-0.5">★★★★★</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">2,400+ Reviews</p>
              </div>
            </div>

            {/* Floating: New arrival */}
            <div className="absolute -right-6 bottom-28 bg-white dark:bg-slate-900 rounded-2xl px-4 py-3 shadow-xl shadow-black/12 border border-gray-100 dark:border-slate-700 flex items-center gap-3" style={{ animation: 'decoFloat 5s ease-in-out 1.2s infinite' }}>
              <div className="w-9 h-9 rounded-xl bg-[#003366] dark:bg-[#00AEEF] flex items-center justify-center text-white dark:text-[#003366] text-[10px] font-black">NEW</div>
              <div>
                <p className="text-xs font-bold text-[#003366] dark:text-white">Spring 2026</p>
                <p className="text-xs text-gray-400 dark:text-gray-500">Collection Arrived</p>
              </div>
            </div>

            {/* Floating: Certified */}
            <div className="absolute -left-5 bottom-14 bg-[#003366] dark:bg-[#00AEEF] rounded-2xl px-4 py-2.5 shadow-xl flex items-center gap-2" style={{ animation: 'decoFloat 7s ease-in-out 0.6s infinite' }}>
              <span className="text-[#00AEEF] dark:text-[#003366] font-black">✓</span>
              <p className="text-xs font-bold text-white dark:text-[#003366]">Optometrist Certified</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    {/* Floating badge keyframes */}
    <style jsx>{`
      @keyframes orbDrift1 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(-30px, 40px) scale(1.05); }
        66% { transform: translate(20px, -20px) scale(0.97); }
      }
      @keyframes orbDrift2 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        40% { transform: translate(40px, -30px) scale(1.08); }
        70% { transform: translate(-20px, 20px) scale(0.95); }
      }
      @keyframes decoFloat {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
      }
    `}</style>
  </section>
);

const LatestCollections = () => {
  const featured = frames.filter((f) => f.featured).slice(0, 4);
  return (
    <section className="section-padding bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 transition-colors">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-[#00AEEF] mb-2 uppercase">New Arrivals</p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#003366] dark:text-white">Latest Collections</h2>
          </div>
          <Link href="/shop" className="text-sm font-semibold text-[#003366] dark:text-[#00AEEF] hover:text-[#00AEEF] dark:hover:text-cyan-300 flex items-center gap-1 group transition-colors">
            View Full Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((frame, i) => (
            <div
              key={frame.id}
              className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up cursor-pointer hover:border-[#00AEEF] dark:hover:border-[#00AEEF]"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative overflow-hidden bg-gray-100 dark:bg-slate-700 aspect-[4/3] p-6 flex items-center justify-center">
                <img
                  src={frame.image}
                  alt={frame.name}
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur text-[#003366] dark:text-[#00AEEF] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  New
                </div>
              </div>
              <div className="p-5 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-[#003366] dark:text-white text-lg">{frame.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 capitalize">{frame.type || 'Premium Frame'}</p>
                </div>
                <div className="text-right">
                  <p className="font-black text-[#00AEEF] text-lg">${frame.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EyeTestingServices = () => {
  return (
    <section id="eye-test" className="section-padding bg-white dark:bg-slate-950 relative overflow-hidden transition-colors">
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-[#00AEEF]/5 dark:bg-[#00AEEF]/8 blur-3xl pointer-events-none" />
      
      <div className="container-luxury relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <div className="bg-[#003366] dark:bg-[#003d7a] p-8 rounded-3xl text-white transform translate-y-8 shadow-xl">
              <Stethoscope className="w-10 h-10 text-[#00AEEF] mb-4" />
              <h3 className="font-bold text-xl mb-2">Comprehensive Exam</h3>
              <p className="text-white/80 text-sm leading-relaxed">Full digital retinal imaging and advanced glaucoma screening included.</p>
            </div>
            <div className="bg-[#00AEEF]/10 dark:bg-[#00AEEF]/15 p-8 rounded-3xl border border-[#00AEEF]/20 dark:border-[#00AEEF]/25">
              <CalendarClock className="w-10 h-10 text-[#00AEEF] mb-4" />
              <h3 className="font-bold text-[#003366] dark:text-white text-xl mb-2">Easy Scheduling</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Book online instantly. Weekend and evening slots available.</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <p className="text-sm font-bold tracking-[0.2em] text-[#00AEEF] mb-2 uppercase">Clinical Care</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#003366] dark:text-white mb-6 leading-tight">
              State-of-the-Art<br />Eye Testing Services
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              Your vision is our priority. Our resident optometrists use the latest diagnostic technology to ensure your prescription is perfectly accurate.
            </p>
            <ul className="space-y-4 mb-10">
              {['Digital eye strain assessment', 'Contact lens fitting & trials', 'Pediatric eye examinations', 'Precision lens tailoring'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00AEEF]/20 dark:bg-[#00AEEF]/25 flex items-center justify-center text-[#00AEEF] text-sm font-bold flex-shrink-0">✓</div>
                  <span className="font-medium text-[#003366] dark:text-gray-200">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="bg-[#00AEEF] hover:bg-[#0096ce] text-white rounded-full px-8 py-6 shadow-lg shadow-[#00AEEF]/30 text-base font-bold transition-all hover:scale-105 active:scale-95">
              Book Your Appointment Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const StoreLocator = () => {
  return (
    <section className="section-padding bg-[#003366] dark:bg-slate-900 dark:border-t dark:border-slate-800 text-white overflow-hidden relative transition-colors">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#00AEEF 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
      
      <div className="container-luxury relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <MapPin className="w-12 h-12 text-[#00AEEF] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Find a Zee Optics Near You</h2>
          <p className="text-white/80 text-lg">Visit one of our clinical boutiques to try on frames in person or consult with our eyewear stylists.</p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 p-3 rounded-full flex items-center shadow-2xl shadow-black/20 mb-16">
          <div className="flex-1 flex items-center pl-4 pr-2">
            <Search className="w-5 h-5 text-gray-400 mr-3 hidden sm:block" />
            <input 
              type="text" 
              placeholder="Enter your zip code or city..." 
              className="w-full bg-transparent border-none outline-none text-[#003366] dark:text-white font-medium placeholder:text-gray-400 text-base"
            />
          </div>
          <Button className="bg-[#003366] dark:bg-[#00AEEF] hover:bg-[#002244] dark:hover:bg-cyan-400 text-white dark:text-[#003366] rounded-full px-8 py-6 font-bold">
            Search
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {['Downtown Clinic', 'Westside Mall', 'Uptown Boutique'].map((store, i) => (
            <div key={i} className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 text-center hover:bg-white/15 dark:hover:bg-white/8 transition-colors cursor-pointer group">
              <h3 className="font-bold text-xl mb-2 group-hover:text-[#00AEEF] transition-colors">{store}</h3>
              <p className="text-sm text-white/70 mb-4">{1234 + i} Medical Center Blvd<br/>Suite {100 + i * 10}</p>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF]">View Details</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Index = () => (
  <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
    <HeroSection />
    <LatestCollections />
    <EyeTestingServices />
    <StoreLocator />
  </div>
);

export default Index;
