"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, Package, Heart, Settings, LogOut, ArrowLeft } from 'lucide-react';

const userLinks = [
  { name: 'Profile', path: '/dashboard', icon: User },
  { name: 'Orders', path: '/dashboard/orders', icon: Package },
  { name: 'Saved Designs', path: '/dashboard/saved', icon: Heart },
  { name: 'Settings', path: '/dashboard/settings', icon: Settings },
];

const UserDashboardLayout = ({ children, title }: { children: React.ReactNode; title: string }) => {
  const pathname = usePathname();
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div className="pt-20 min-h-screen">
      <div className="container-luxury section-padding">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Store
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">{title}</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="md:w-56 shrink-0">
            <button
              onClick={() => setMobileNav(!mobileNav)}
              className="md:hidden w-full text-left glass-card p-3 text-sm font-medium mb-2"
            >
              Menu ▾
            </button>
            <nav className={`glass-card p-3 space-y-1 ${mobileNav ? 'block' : 'hidden md:block'}`}>
              {userLinks.map((link) => {
                const active = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setMobileNav(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      active ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    }`}
                  >
                    <link.icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
              <Link
                href="/"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Log Out</span>
              </Link>
            </nav>
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardLayout;
