import UserDashboardLayout from '@/components/UserDashboardLayout';
import { Eye } from 'lucide-react';

const orders = [
  { id: '#LS-1847', product: 'Eclipse Aviator', customization: 'Polarized, Gold Mirror, Scratch Resistant', amount: '$264', date: 'Mar 28, 2026', status: 'Delivered' },
  { id: '#LS-1840', product: 'Vertex Square', customization: 'Photochromic, Gray', amount: '$319', date: 'Mar 15, 2026', status: 'Processing' },
  { id: '#LS-1832', product: 'Surge Sport', customization: 'UV400, Blue, Premium Case', amount: '$279', date: 'Feb 28, 2026', status: 'Delivered' },
  { id: '#LS-1820', product: 'Orbit Round', customization: 'Blue Light, Brown, Anti-Glare', amount: '$214', date: 'Feb 10, 2026', status: 'Delivered' },
  { id: '#LS-1805', product: 'Classic Wayfarer', customization: 'Standard, Green', amount: '$169', date: 'Jan 22, 2026', status: 'Pending' },
];

const UserOrders = () => (
  <UserDashboardLayout title="My Orders">
    <div className="space-y-4">
      {orders.map((order) => (
        <div key={order.id} className="glass-card p-5 hover:bg-secondary/20 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-sm font-semibold">{order.id}</span>
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                  order.status === 'Delivered' ? 'bg-green-500/10 text-green-400' :
                  order.status === 'Processing' ? 'bg-primary/10 text-primary' :
                  'bg-orange-500/10 text-orange-400'
                }`}>
                  {order.status}
                </span>
              </div>
              <p className="text-sm font-medium">{order.product}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{order.customization}</p>
              <p className="text-xs text-muted-foreground mt-1">{order.date}</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-lg font-bold text-primary">{order.amount}</p>
              <button className="p-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors">
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </UserDashboardLayout>
);

export default UserOrders;
