"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ShoppingBag, User, Menu, X, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useStore } from '@/lib/store';
import { useTheme } from '@/app/theme-provider';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const cart = useStore((s) => s.cart);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === 'dark';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-gray-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="container-luxury flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity">
          <div className="w-9 h-9 bg-[#00AEEF] rounded-xl flex items-center justify-center text-white font-black text-lg shadow-md shadow-[#00AEEF]/30">Z</div>
          <span className="text-xl font-black tracking-tighter text-[#003366] dark:text-white">ZEE OPTICS</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-semibold tracking-wide transition-all duration-200 hover:text-[#00AEEF] relative group ${
                pathname === link.path
                  ? 'text-[#00AEEF]'
                  : 'text-[#003366] dark:text-gray-300'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#00AEEF] transition-all duration-200 ${
                pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-1">
          {/* Search */}
          <button className="p-2.5 rounded-lg text-gray-500 dark:text-gray-400 hover:text-[#00AEEF] hover:bg-gray-100 dark:hover:bg-slate-800 transition-all">
            <Search className="w-5 h-5" />
          </button>

          {/* Dark/Light Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-lg text-gray-500 dark:text-gray-400 hover:text-[#00AEEF] hover:bg-gray-100 dark:hover:bg-slate-800 transition-all"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {mounted ? (
              isDark
                ? <Sun className="w-5 h-5 text-yellow-400" />
                : <Moon className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5 opacity-0" />
            )}
          </button>

          {/* Cart */}
          <Link href="/cart" className="p-2.5 rounded-lg text-gray-500 dark:text-gray-400 hover:text-[#00AEEF] hover:bg-gray-100 dark:hover:bg-slate-800 transition-all relative">
            <ShoppingBag className="w-5 h-5" />
            {cart.length > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#00AEEF] text-white text-[9px] font-black flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>

          {/* User */}
          <Link href="/dashboard" className="p-2.5 rounded-lg text-gray-500 dark:text-gray-400 hover:text-[#00AEEF] hover:bg-gray-100 dark:hover:bg-slate-800 transition-all">
            <User className="w-5 h-5" />
          </Link>

          {/* Auth Divider + Buttons */}
          <div className="flex items-center gap-2 ml-3 pl-3 border-l border-gray-200 dark:border-slate-700">
            <Button asChild variant="ghost" size="sm" className="text-[#003366] dark:text-gray-300 hover:text-[#00AEEF] hover:bg-transparent font-semibold px-3">
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button asChild size="sm" className="bg-[#003366] dark:bg-[#00AEEF] text-white dark:text-[#003366] hover:bg-[#002244] dark:hover:bg-cyan-400 rounded-full px-5 font-bold shadow-md transition-all hover:scale-105 active:scale-95">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition-all"
            aria-label="Toggle theme"
          >
            {mounted ? (
              isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />
            ) : <Moon className="w-5 h-5 opacity-0" />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-[#003366] dark:text-gray-400"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800 shadow-xl animate-fade-up">
          <div className="flex flex-col px-6 py-5 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileOpen(false)}
                className={`text-base font-semibold transition-colors py-1 ${
                  pathname === link.path
                    ? 'text-[#00AEEF]'
                    : 'text-[#003366] dark:text-gray-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2.5 pt-4 border-t border-gray-100 dark:border-slate-800">
              <Button asChild variant="outline" size="sm" className="w-full border-gray-300 dark:border-slate-600 text-[#003366] dark:text-gray-200">
                <Link href="/signin" onClick={() => setMobileOpen(false)}>Sign In</Link>
              </Button>
              <Button asChild size="sm" className="w-full bg-[#003366] dark:bg-[#00AEEF] text-white dark:text-[#003366] font-bold">
                <Link href="/signup" onClick={() => setMobileOpen(false)}>Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
