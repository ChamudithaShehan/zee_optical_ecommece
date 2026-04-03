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
  { label: 'Total Revenue', value: '$124,800', change: '+12.5%', icon: DollarSign },
  { label: 'Total Orders', value: '1,847', change: '+8.2%', icon: ShoppingBag },
  { label: 'Active Users', value: '3,291', change: '+15.3%', icon: Users },
  { label: 'Conversion Rate', value: '4.8%', change: '+2.1%', icon: TrendingUp },
];

const AdminDashboard = () => (
  <AdminLayout title="Dashboard">
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-card p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-muted-foreground font-medium tracking-wide">{stat.label}</span>
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-4 h-4 text-primary" />
              </div>
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-xs text-green-400 mt-1">{stat.change} from last month</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card p-6">
          <h3 className="text-sm font-semibold tracking-wide mb-4">SALES OVERVIEW</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={salesData}>
              <defs>
                <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(43 74% 49%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(43 74% 49%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 10% 20%)" />
              <XAxis dataKey="month" stroke="hsl(220 10% 40%)" fontSize={12} />
              <YAxis stroke="hsl(220 10% 40%)" fontSize={12} />
              <Tooltip
                contentStyle={{ background: 'hsl(220 15% 12%)', border: '1px solid hsl(220 10% 20%)', borderRadius: '8px', color: '#fff' }}
              />
              <Area type="monotone" dataKey="sales" stroke="hsl(43 74% 49%)" fill="url(#salesGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-sm font-semibold tracking-wide mb-4">TOP PRODUCTS</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 10% 20%)" />
              <XAxis type="number" stroke="hsl(220 10% 40%)" fontSize={12} />
              <YAxis dataKey="name" type="category" stroke="hsl(220 10% 40%)" fontSize={11} width={100} />
              <Tooltip
                contentStyle={{ background: 'hsl(220 15% 12%)', border: '1px solid hsl(220 10% 20%)', borderRadius: '8px', color: '#fff' }}
              />
              <Bar dataKey="sold" fill="hsl(43 74% 49%)" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="glass-card p-6">
        <h3 className="text-sm font-semibold tracking-wide mb-4">RECENT ORDERS</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-muted-foreground text-xs tracking-wide border-b border-border">
                <th className="text-left py-3 px-2">Order ID</th>
                <th className="text-left py-3 px-2">Customer</th>
                <th className="text-left py-3 px-2">Product</th>
                <th className="text-left py-3 px-2">Amount</th>
                <th className="text-left py-3 px-2">Status</th>
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
                <tr key={order.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                  <td className="py-3 px-2 font-medium">{order.id}</td>
                  <td className="py-3 px-2">{order.customer}</td>
                  <td className="py-3 px-2 text-muted-foreground">{order.product}</td>
                  <td className="py-3 px-2 font-semibold">{order.amount}</td>
                  <td className="py-3 px-2">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      order.status === 'Delivered' ? 'bg-green-500/10 text-green-400' :
                      order.status === 'Processing' ? 'bg-primary/10 text-primary' :
                      'bg-orange-500/10 text-orange-400'
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
