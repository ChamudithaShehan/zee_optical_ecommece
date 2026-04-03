"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Eye, EyeOff, Lock, Mail, AlertCircle } from "lucide-react";
import { validateAdminCredentials, createAdminSession } from "@/lib/admin-auth";
import { useAdmin } from "@/app/admin-context";

export default function AdminLogin() {
  const router = useRouter();
  const { login, isAuthenticated } = useAdmin();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/admin");
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Validate credentials
      if (!email || !password) {
        setError("Please enter both email and password");
        setIsLoading(false);
        return;
      }

      if (!validateAdminCredentials(email, password)) {
        setError("Invalid email or password");
        setIsLoading(false);
        return;
      }

      // Create and save session
      const session = createAdminSession(email);
      login(session);

      // Redirect to admin dashboard
      router.push("/admin");
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 flex items-center justify-center px-4 py-12">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-100/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4 hover:opacity-90 transition-opacity">
            <div className="w-12 h-12 bg-[#00AEEF] rounded-lg flex items-center justify-center text-white font-bold text-xl">Z</div>
          </Link>
          <h1 className="text-3xl font-bold text-[#003366] dark:text-white mb-2">Admin Login</h1>
          <p className="text-gray-600 dark:text-gray-400">ZEE OPTICS Management Portal</p>
        </div>

        {/* Login Card */}
        <Card className="bg-white/95 dark:bg-slate-900/95 backdrop-blur border-gray-200 dark:border-slate-800 shadow-xl">
          <div className="p-8">
            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg flex gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-red-800 dark:text-red-300">{error}</p>
                </div>
              </div>
            )}

            {/* Demo Credentials Info */}
            <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">Demo Credentials:</p>
              <div className="space-y-1 text-xs text-blue-700 dark:text-blue-300">
                <div><span className="font-medium">Email:</span> admin@zeeOptics.com</div>
                <div><span className="font-medium">Password:</span> admin@123</div>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-[#003366] dark:text-white mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400 dark:text-gray-500" />
                  <Input
                    type="email"
                    placeholder="admin@zeeOptics.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700 text-[#003366] dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-semibold text-[#003366] dark:text-white mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400 dark:text-gray-500" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700 text-[#003366] dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 dark:text-gray-500 hover:text-[#003366] dark:hover:text-[#00AEEF] transition-colors"
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-[#00AEEF] cursor-pointer"
                  disabled={isLoading}
                />
                <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600 dark:text-gray-400 cursor-pointer">
                  Remember me
                </label>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#003366] hover:bg-[#002244] dark:bg-[#00AEEF] dark:hover:bg-cyan-400 dark:text-[#003366] text-white font-semibold h-10 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Logging in..." : "Login to Admin Panel"}
              </Button>
            </form>

            {/* Divider */}
            <div className="my-6 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-slate-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-slate-900 text-gray-500 dark:text-gray-400">or</span>
              </div>
            </div>

            {/* Back to Home */}
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Not an admin?</p>
              <Link
                href="/"
                className="text-[#00AEEF] hover:text-[#0096ce] dark:hover:text-cyan-300 font-semibold transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </Card>

        {/* Footer Info */}
        <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
          <p>Secure Admin Portal | Credentials are demo-only</p>
        </div>
      </div>
    </div>
  );
}
