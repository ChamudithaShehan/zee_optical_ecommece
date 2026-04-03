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
          <div className="flex items-center gap-2 bg-gray-100 dark:bg-slate-800 rounded-lg px-3 py-2 w-full sm:w-auto border border-gray-200 dark:border-slate-700">
            <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <input
              placeholder="Search frames…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-sm text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none w-full sm:w-60"
            />
          </div>
          <Button className="bg-[#003366] dark:bg-[#00AEEF] text-white dark:text-[#003366] hover:bg-[#002244] dark:hover:bg-[#00AEEF]/90 transition-colors">
            <Plus className="w-4 h-4 mr-2" /> Add Frame
          </Button>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-600 dark:text-gray-400 text-xs tracking-wide border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-700/50">
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
                  <tr key={frame.id} className="border-b border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="py-3 px-4">
                      <img src={frame.image} alt={frame.name} className="w-12 h-12 rounded-lg object-cover shadow-sm" />
                    </td>
                    <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">{frame.name}</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400 capitalize">{frame.type}</td>
                    <td className="py-3 px-4 font-semibold text-[#00AEEF]">${frame.price}</td>
                    <td className="py-3 px-4 capitalize text-gray-600 dark:text-gray-400">{frame.gender}</td>
                    <td className="py-3 px-4">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        (50 + i * 17) > 40 ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' : 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400'
                      }`}>
                        {50 + i * 17} units
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 rounded-md text-gray-600 dark:text-gray-400 hover:text-[#003366] dark:hover:text-[#00AEEF] hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors">
                          <Pencil className="w-3.5 h-3.5" />
                        </button>
                        <button className="p-1.5 rounded-md text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors">
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
