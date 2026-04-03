import { useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/button';
import { frames as initialFrames } from '@/lib/data';
import { Plus, Pencil, Trash2, Search } from 'lucide-react';

const AdminFrames = () => {
  const [search, setSearch] = useState('');
  const filtered = initialFrames.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout title="Frame Management">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 bg-secondary rounded-lg px-3 py-2 w-full sm:w-auto">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              placeholder="Search frames…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none w-full sm:w-60"
            />
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" /> Add Frame
          </Button>
        </div>

        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-muted-foreground text-xs tracking-wide border-b border-border">
                  <th className="text-left py-3 px-4">Image</th>
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Type</th>
                  <th className="text-left py-3 px-4">Price</th>
                  <th className="text-left py-3 px-4">Gender</th>
                  <th className="text-left py-3 px-4">Stock</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((frame, i) => (
                  <tr key={frame.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                    <td className="py-3 px-4">
                      <img src={frame.image} alt={frame.name} className="w-12 h-12 rounded-lg object-cover" />
                    </td>
                    <td className="py-3 px-4 font-medium">{frame.name}</td>
                    <td className="py-3 px-4 text-muted-foreground capitalize">{frame.type}</td>
                    <td className="py-3 px-4 font-semibold text-primary">${frame.price}</td>
                    <td className="py-3 px-4 capitalize text-muted-foreground">{frame.gender}</td>
                    <td className="py-3 px-4">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        (50 + i * 17) > 40 ? 'bg-green-500/10 text-green-400' : 'bg-orange-500/10 text-orange-400'
                      }`}>
                        {50 + i * 17} units
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                          <Pencil className="w-3.5 h-3.5" />
                        </button>
                        <button className="p-1.5 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
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

export default AdminFrames;
