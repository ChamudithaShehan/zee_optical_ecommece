"use client";

import UserDashboardLayout from '@/components/UserDashboardLayout';
import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';

const UserProfile = () => (
  <UserDashboardLayout title="My Account">
    <div className="space-y-6">
      {/* Profile Card */}
      <div className="glass-card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
            JD
          </div>
          <button className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
            <Camera className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold">John Doe</h2>
          <p className="text-sm text-muted-foreground">john.doe@email.com</p>
          <p className="text-xs text-muted-foreground mt-1">Member since January 2026</p>
        </div>
        <Button variant="outline" className="border-border text-muted-foreground hover:text-foreground hover:border-primary/50">
          Edit Profile
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Total Orders', value: '12' },
          { label: 'Total Spent', value: '$2,840' },
          { label: 'Saved Designs', value: '5' },
        ].map((stat) => (
          <div key={stat.label} className="glass-card p-5 text-center">
            <p className="text-2xl font-bold gold-text">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Personal Info */}
      <div className="glass-card p-6">
        <h3 className="text-sm font-semibold tracking-wide mb-5">PERSONAL INFORMATION</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: 'First Name', value: 'John' },
            { label: 'Last Name', value: 'Doe' },
            { label: 'Email', value: 'john.doe@email.com' },
            { label: 'Phone', value: '+1 (555) 123-4567' },
            { label: 'Address', value: '123 Main St, New York, NY 10001' },
            { label: 'Country', value: 'United States' },
          ].map((field) => (
            <div key={field.label}>
              <p className="text-xs text-muted-foreground mb-1">{field.label}</p>
              <p className="text-sm font-medium">{field.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </UserDashboardLayout>
);

export default UserProfile;
