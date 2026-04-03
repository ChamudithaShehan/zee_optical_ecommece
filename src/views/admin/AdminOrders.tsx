import { useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { Search } from 'lucide-react';

const orders = [
  { id: '#LS-1847', customer: 'Alex Morgan', email: 'alex@mail.com', product: 'Eclipse Aviator', customization: 'Polarized, Gold Mirror, Scratch Resistant', amount: '$264', date: 'Mar 28, 2026', status: 'Delivered' },
  { id: '#LS-1846', customer: 'Sarah Chen', email: 'sarah@mail.com', product: 'Luna Cat-Eye', customization: 'Blue Light, Rose, Anti-Glare', amount: '$229', date: 'Mar 27, 2026', status: 'Processing' },
  { id: '#LS-1845', customer: 'James Wilson', email: 'james@mail.com', product: 'Vertex Square', customization: 'Photochromic, Gray, Water Resistant', amount: '$319', date: 'Mar 26, 2026', status: 'Pending' },
  { id: '#LS-1844', customer: 'Emily Davis', email: 'emily@mail.com', product: 'Surge Sport', customization: 'UV400, Blue, Premium Case', amount: '$279', date: 'Mar 25, 2026', status: 'Delivered' },
  { id: '#LS-1843', customer: 'Michael Brown', email: 'michael@mail.com', product: 'Orbit Round', customization: 'Standard, Brown, Engraving: "MB"', amount: '$209', date: 'Mar 24, 2026', status: 'Processing' },
  { id: '#LS-1842', customer: 'Lisa Taylor', email: 'lisa@mail.com', product: 'Classic Wayfarer', customization: 'Polarized, Green', amount: '$219', date: 'Mar 23, 2026', status: 'Delivered' },
];

const statusOptions = ['Pending', 'Processing', 'Delivered'];

const AdminOrders = () => {
  const [search, setSearch] = useState('');
  const [statuses, setStatuses] = useState<Record<string, string>>(
    Object.fromEntries(orders.map((o) => [o.id, o.status]))
  );

  const filtered = orders.filter(
    (o) =>
      o.customer.toLowerCase().includes(search.toLowerCase()) ||
      o.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout title="Order Management">
      <div className="space-y-6">
        <div className="flex items-center gap-2 bg-gray-100 dark:bg-slate-800 rounded-lg px-3 py-2 w-full sm:w-80 border border-gray-200 dark:border-slate-700">
          <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <input
            placeholder="Search orders…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent text-sm text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none w-full"
          />
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-600 dark:text-gray-400 text-xs tracking-wide border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-700/50">
                  <th className="text-left py-3 px-4">Order ID</th>
                  <th className="text-left py-3 px-4">Customer</th>
                  <th className="text-left py-3 px-4">Product</th>
                  <th className="text-left py-3 px-4 hidden lg:table-cell">Customization</th>
                  <th className="text-left py-3 px-4">Amount</th>
                  <th className="text-left py-3 px-4 hidden md:table-cell">Date</th>
                  <th className="text-left py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((order) => (
                  <tr key={order.id} className="border-b border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">{order.id}</td>
                    <td className="py-3 px-4">
                      <div>
                        <p className="text-gray-900 dark:text-white">{order.customer}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{order.email}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-900 dark:text-gray-100">{order.product}</td>
                    <td className="py-3 px-4 text-xs text-gray-600 dark:text-gray-400 hidden lg:table-cell max-w-[200px] truncate">
                      {order.customization}
                    </td>
                    <td className="py-3 px-4 font-semibold text-[#00AEEF]">{order.amount}</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400 hidden md:table-cell">{order.date}</td>
                    <td className="py-3 px-4">
                      <select
                        value={statuses[order.id]}
                        onChange={(e) => setStatuses((p) => ({ ...p, [order.id]: e.target.value }))}
                        className={`text-xs px-2.5 py-1 rounded-full font-medium border-0 focus:outline-none focus:ring-2 focus:ring-[#00AEEF]/50 cursor-pointer transition-colors ${
                          statuses[order.id] === 'Delivered' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                          statuses[order.id] === 'Processing' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' :
                          'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400'
                        }`}
                      >
                        {statusOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
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

export default AdminOrders;
