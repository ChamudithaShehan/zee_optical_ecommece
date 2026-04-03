"use client";

import { ReactNode } from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import { Bell, Search } from 'lucide-react';
import { useAdmin } from '@/app/admin-context';

const AdminLayout = ({ children, title }: { children: ReactNode; title?: string }) => {
  const { session } = useAdmin();

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-slate-950">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-gray-200 dark:border-slate-700 flex items-center justify-between px-6 sticky top-0 z-10 bg-white dark:bg-slate-900">
          <h1 className="text-lg font-bold text-[#003366] dark:text-white">{title || 'Admin Dashboard'}</h1>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 bg-gray-100 dark:bg-slate-800 rounded-lg px-3 py-2 border border-gray-200 dark:border-slate-700">
              <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <input 
                placeholder="Search…" 
                className="bg-transparent text-sm text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none w-40" 
              />
            </div>
            <button className="relative p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-[#003366] dark:hover:text-[#00AEEF] hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#00AEEF]" />
            </button>
            <div className="flex flex-col items-end">
              <div className="w-8 h-8 rounded-full bg-[#00AEEF]/20 dark:bg-[#00AEEF]/30 flex items-center justify-center text-xs font-bold text-[#003366] dark:text-[#00AEEF]">
                {session?.email?.[0]?.toUpperCase() || 'A'}
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{session?.email}</span>
            </div>
          </div>
        </header>
        <main className="flex-1 p-6 max-w-7xl w-full mx-auto">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
