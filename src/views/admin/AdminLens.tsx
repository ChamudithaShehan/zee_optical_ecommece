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
        <div className="glass-card p-6">
          <h3 className="text-sm font-semibold tracking-wide mb-5">LENS TYPES</h3>
          <div className="space-y-3">
            {lensTypes.map((lens) => (
              <div key={lens.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary/20 transition-colors">
                <div className="flex items-center gap-4">
                  <Switch
                    checked={enabledLens[lens.id]}
                    onCheckedChange={(v) => setEnabledLens((p) => ({ ...p, [lens.id]: v }))}
                  />
                  <div>
                    <p className="text-sm font-medium">{lens.name}</p>
                    <p className="text-xs text-muted-foreground">{lens.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-primary">
                    {lens.price > 0 ? `+$${lens.price}` : 'Included'}
                  </span>
                  <button className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                    <Pencil className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6">
          <h3 className="text-sm font-semibold tracking-wide mb-5">ADD-ONS</h3>
          <div className="space-y-3">
            {addOns.map((addon) => (
              <div key={addon.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary/20 transition-colors">
                <div className="flex items-center gap-4">
                  <Switch
                    checked={enabledAddOns[addon.id]}
                    onCheckedChange={(v) => setEnabledAddOns((p) => ({ ...p, [addon.id]: v }))}
                  />
                  <p className="text-sm font-medium">{addon.name}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-primary">+${addon.price}</span>
                  <button className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
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
