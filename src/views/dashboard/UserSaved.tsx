"use client";

import Link from 'next/link';
import UserDashboardLayout from '@/components/UserDashboardLayout';
import { Button } from '@/components/ui/button';
import { Trash2, ShoppingBag } from 'lucide-react';
import { frames } from '@/lib/data';

const savedDesigns = [
  { id: '1', frame: frames[0], lens: 'Polarized', color: 'Gold Mirror', addOns: ['Scratch Resistant'], price: 264, date: 'Mar 20, 2026' },
  { id: '2', frame: frames[2], lens: 'Photochromic', color: 'Classic Gray', addOns: ['Water Resistant', 'Anti-Glare'], price: 319, date: 'Mar 5, 2026' },
  { id: '3', frame: frames[4], lens: 'Blue Light Filter', color: 'Rose', addOns: [], price: 209, date: 'Feb 18, 2026' },
  { id: '4', frame: frames[3], lens: 'UV400', color: 'Ocean Blue', addOns: ['Premium Case'], price: 289, date: 'Feb 2, 2026' },
  { id: '5', frame: frames[5], lens: 'Standard', color: 'Forest Green', addOns: [], price: 169, date: 'Jan 15, 2026' },
];

const UserSaved = () => (
  <UserDashboardLayout title="Saved Designs">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {savedDesigns.map((design) => (
        <div key={design.id} className="glass-card overflow-hidden group">
          <div className="relative overflow-hidden">
            <img
              src={design.frame.image}
              alt={design.frame.name}
              loading="lazy"
              className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold">{design.frame.name}</h3>
            <div className="text-xs text-muted-foreground mt-1 space-y-0.5">
              <p>Lens: {design.lens} • {design.color}</p>
              {design.addOns.length > 0 && <p>Add-ons: {design.addOns.join(', ')}</p>}
              <p>Saved on {design.date}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-lg font-bold text-primary">${design.price}</p>
              <div className="flex gap-2">
                <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href={`/customize?frame=${design.frame.id}`}>
                    <ShoppingBag className="w-3.5 h-3.5 mr-1.5" /> Order
                  </Link>
                </Button>
                <button className="p-2 rounded-lg border border-border text-muted-foreground hover:text-destructive hover:border-destructive/50 transition-colors">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </UserDashboardLayout>
);

export default UserSaved;
