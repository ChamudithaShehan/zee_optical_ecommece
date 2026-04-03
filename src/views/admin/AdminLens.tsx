import { useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { Switch } from '@/components/ui/switch';
import { lensTypes, addOns } from '@/lib/data';
import { Pencil } from 'lucide-react';

const AdminLens = () => {
  const [enabledLens, setEnabledLens] = useState<Record<string, boolean>>(
    Object.fromEntries(lensTypes.map((l) => [l.id, true]))
  );
  const [enabledAddOns, setEnabledAddOns] = useState<Record<string, boolean>>(
    Object.fromEntries(addOns.map((a) => [a.id, true]))
  );

  return (
    <AdminLayout title="Lens & Options">
      <div className="space-y-8">
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-sm font-bold text-[#003366] dark:text-white tracking-wide mb-5 uppercase">Lens Types</h3>
          <div className="space-y-3">
            {lensTypes.map((lens) => (
              <div key={lens.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                <div className="flex items-center gap-4">
                  <Switch
                    checked={enabledLens[lens.id]}
                    onCheckedChange={(v) => setEnabledLens((p) => ({ ...p, [lens.id]: v }))}
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{lens.name}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{lens.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-[#00AEEF]">
                    {lens.price > 0 ? `+$${lens.price}` : 'Included'}
                  </span>
                  <button className="p-1.5 rounded-md text-gray-600 dark:text-gray-400 hover:text-[#003366] dark:hover:text-[#00AEEF] hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors">
                    <Pencil className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-sm font-bold text-[#003366] dark:text-white tracking-wide mb-5 uppercase">Add-Ons</h3>
          <div className="space-y-3">
            {addOns.map((addon) => (
              <div key={addon.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                <div className="flex items-center gap-4">
                  <Switch
                    checked={enabledAddOns[addon.id]}
                    onCheckedChange={(v) => setEnabledAddOns((p) => ({ ...p, [addon.id]: v }))}
                  />
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{addon.name}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-[#00AEEF]">+${addon.price}</span>
                  <button className="p-1.5 rounded-md text-gray-600 dark:text-gray-400 hover:text-[#003366] dark:hover:text-[#00AEEF] hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors">
                    <Pencil className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminLens;
