import AdminLayout from '@/components/AdminLayout';
import { Search, Eye } from 'lucide-react';
import { useState } from 'react';

const users = [
  { id: 1, name: 'Alex Morgan', email: 'alex@mail.com', joined: 'Jan 15, 2026', orders: 12, spent: '$2,840' },
  { id: 2, name: 'Sarah Chen', email: 'sarah@mail.com', joined: 'Feb 3, 2026', orders: 8, spent: '$1,920' },
  { id: 3, name: 'James Wilson', email: 'james@mail.com', joined: 'Feb 18, 2026', orders: 5, spent: '$1,245' },
  { id: 4, name: 'Emily Davis', email: 'emily@mail.com', joined: 'Mar 1, 2026', orders: 3, spent: '$687' },
  { id: 5, name: 'Michael Brown', email: 'michael@mail.com', joined: 'Mar 10, 2026', orders: 7, spent: '$1,610' },
  { id: 6, name: 'Lisa Taylor', email: 'lisa@mail.com', joined: 'Mar 20, 2026', orders: 2, spent: '$438' },
];

const AdminUsers = () => {
  const [search, setSearch] = useState('');
  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout title="Users">
      <div className="space-y-6">
        <div className="flex items-center gap-2 bg-secondary rounded-lg px-3 py-2 w-full sm:w-80">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            placeholder="Search users…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none w-full"
          />
        </div>

        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-muted-foreground text-xs tracking-wide border-b border-border">
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Email</th>
                  <th className="text-left py-3 px-4 hidden md:table-cell">Joined</th>
                  <th className="text-left py-3 px-4">Orders</th>
                  <th className="text-left py-3 px-4">Total Spent</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((user) => (
                  <tr key={user.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                          {user.name.split(' ').map((n) => n[0]).join('')}
                        </div>
                        <span className="font-medium">{user.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">{user.email}</td>
                    <td className="py-3 px-4 text-muted-foreground hidden md:table-cell">{user.joined}</td>
                    <td className="py-3 px-4">{user.orders}</td>
                    <td className="py-3 px-4 font-semibold text-primary">{user.spent}</td>
                    <td className="py-3 px-4">
                      <button className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminUsers;
