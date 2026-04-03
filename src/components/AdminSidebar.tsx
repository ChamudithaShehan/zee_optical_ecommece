"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, Glasses, Layers, Package, Users, Settings, LogOut,
  ChevronLeft, ChevronRight,
} from 'lucide-react';

const adminLinks = [
  { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { name: 'Frames', path: '/admin/frames', icon: Glasses },
  { name: 'Lens & Options', path: '/admin/lens', icon: Layers },
  { name: 'Orders', path: '/admin/orders', icon: Package },
  { name: 'Users', path: '/admin/users', icon: Users },
  { name: 'Settings', path: '/admin/settings', icon: Settings },
];

const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`sticky top-0 h-screen flex flex-col border-r border-gray-200 dark:border-slate-700 transition-all duration-300 bg-white dark:bg-slate-900 ${
        collapsed ? 'w-16' : 'w-60'
      }`}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-slate-700">
        {!collapsed && (
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <div className="w-8 h-8 bg-[#00AEEF] rounded-lg flex items-center justify-center text-white font-bold text-lg">Z</div>
            <span className="text-sm font-black tracking-tighter text-[#003366] dark:text-white">ZEE OPTICS</span>
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-md text-gray-600 dark:text-gray-400 hover:text-[#003366] dark:hover:text-[#00AEEF] hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors ml-auto"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      <nav className="flex-1 py-4 px-2 space-y-1">
        {adminLinks.map((link) => {
          const active = pathname === link.path;
          return (
            <Link
              key={link.path}
              href={link.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                active
                  ? 'bg-[#00AEEF]/10 text-[#003366] dark:bg-[#00AEEF]/20 dark:text-[#00AEEF]'
                  : 'text-gray-700 dark:text-gray-300 hover:text-[#003366] dark:hover:text-[#00AEEF] hover:bg-gray-100 dark:hover:bg-slate-800'
              }`}
            >
              <link.icon className="w-4 h-4 shrink-0" />
              {!collapsed && <span>{link.name}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="p-2 border-t border-gray-200 dark:border-slate-700">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:text-[#003366] dark:hover:text-[#00AEEF] hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
        >
          <LogOut className="w-4 h-4 shrink-0" />
          {!collapsed && <span>Back to Store</span>}
        </Link>
      </div>
    </aside>
  );
};

export default AdminSidebar;
