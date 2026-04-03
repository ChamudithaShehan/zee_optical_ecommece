import AdminLayout from '@/components/AdminLayout';
import { DollarSign, ShoppingBag, Users, TrendingUp } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const salesData = [
  { month: 'Jan', sales: 4200 }, { month: 'Feb', sales: 5800 }, { month: 'Mar', sales: 7200 },
  { month: 'Apr', sales: 6100 }, { month: 'May', sales: 8900 }, { month: 'Jun', sales: 11200 },
  { month: 'Jul', sales: 9800 }, { month: 'Aug', sales: 12400 }, { month: 'Sep', sales: 10600 },
  { month: 'Oct', sales: 13100 }, { month: 'Nov', sales: 15200 }, { month: 'Dec', sales: 18400 },
];

const productData = [
  { name: 'Eclipse Aviator', sold: 342 }, { name: 'Vertex Square', sold: 287 },
  { name: 'Surge Sport', sold: 256 }, { name: 'Orbit Round', sold: 198 },
  { name: 'Luna Cat-Eye', sold: 176 },
];

const stats = [
  { label: 'Total Revenue', value: '$124,800', change: '+12.5%', icon: DollarSign, color: 'text-[#00AEEF]' },
  { label: 'Total Orders', value: '1,847', change: '+8.2%', icon: ShoppingBag, color: 'text-blue-500' },
  { label: 'Active Users', value: '3,291', change: '+15.3%', icon: Users, color: 'text-purple-500' },
  { label: 'Conversion Rate', value: '4.8%', change: '+2.1%', icon: TrendingUp, color: 'text-green-500' },
];

const AdminDashboard = () => (
  <AdminLayout title="Dashboard">
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 p-5 hover:shadow-lg dark:hover:shadow-lg hover:shadow-gray-300 dark:hover:shadow-slate-900 transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-600 dark:text-gray-400 font-medium tracking-wide uppercase">{stat.label}</span>
              <div className={`w-8 h-8 rounded-lg ${stat.color}/10 flex items-center justify-center`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-1 font-medium">{stat.change} from last month</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-sm font-bold text-[#003366] dark:text-white tracking-wide mb-4 uppercase">Sales Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={salesData}>
              <defs>
                <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00AEEF" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#00AEEF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
              <YAxis stroke="#6b7280" fontSize={12} />
              <Tooltip
                contentStyle={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', color: '#000' }}
              />
              <Area type="monotone" dataKey="sales" stroke="#00AEEF" fill="url(#salesGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-sm font-bold text-[#003366] dark:text-white tracking-wide mb-4 uppercase">Top Products</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" stroke="#6b7280" fontSize={12} />
              <YAxis dataKey="name" type="category" stroke="#6b7280" fontSize={11} width={100} />
              <Tooltip
                contentStyle={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', color: '#000' }}
              />
              <Bar dataKey="sold" fill="#00AEEF" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-sm font-bold text-[#003366] dark:text-white tracking-wide mb-4 uppercase">Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-600 dark:text-gray-400 text-xs tracking-wide border-b border-gray-200 dark:border-slate-700">
                <th className="text-left py-3 px-4">Order ID</th>
                <th className="text-left py-3 px-4">Customer</th>
                <th className="text-left py-3 px-4">Product</th>
                <th className="text-left py-3 px-4">Amount</th>
                <th className="text-left py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: '#LS-1847', customer: 'Alex Morgan', product: 'Eclipse Aviator', amount: '$264', status: 'Delivered' },
                { id: '#LS-1846', customer: 'Sarah Chen', product: 'Luna Cat-Eye', amount: '$229', status: 'Processing' },
                { id: '#LS-1845', customer: 'James Wilson', product: 'Vertex Square', amount: '$319', status: 'Pending' },
                { id: '#LS-1844', customer: 'Emily Davis', product: 'Surge Sport', amount: '$279', status: 'Delivered' },
                { id: '#LS-1843', customer: 'Michael Brown', product: 'Orbit Round', amount: '$209', status: 'Processing' },
              ].map((order) => (
                <tr key={order.id} className="border-b border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">{order.id}</td>
                  <td className="py-3 px-4 text-gray-900 dark:text-gray-100">{order.customer}</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{order.product}</td>
                  <td className="py-3 px-4 font-semibold text-[#00AEEF]">{order.amount}</td>
                  <td className="py-3 px-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      order.status === 'Delivered' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                      order.status === 'Processing' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' :
                      'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400'
                    }`}>
                      {order.status}
                    </span>
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

export default AdminDashboard;
