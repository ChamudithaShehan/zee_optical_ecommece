import { ReactNode } from 'react';
import AdminSidebar from '@/components/AdminSidebar';
import { Bell, Search } from 'lucide-react';

const AdminLayout = ({ children, title }: { children: ReactNode; title: string }) => (
  <div className="flex min-h-screen">
    <AdminSidebar />
    <div className="flex-1 flex flex-col">
      <header className="h-16 border-b border-border flex items-center justify-between px-6 sticky top-0 z-10" style={{ background: 'hsl(220 15% 8%)' }}>
        <h1 className="text-lg font-semibold">{title}</h1>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 bg-secondary rounded-lg px-3 py-2">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input placeholder="Search…" className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none w-40" />
          </div>
          <button className="relative text-muted-foreground hover:text-foreground transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary" />
          </button>
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
            A
          </div>
        </div>
      </header>
      <main className="flex-1 p-6">{children}</main>
    </div>
  </div>
);

export default AdminLayout;
