"use client";

import { createContext, useContext, useState, useEffect } from "react";
import type { AdminSession } from "@/lib/admin-auth";
import { getAdminSession, saveAdminSession, logoutAdmin as performLogout } from "@/lib/admin-auth";

interface AdminContextType {
  session: AdminSession | null;
  isAuthenticated: boolean;
  login: (session: AdminSession) => void;
  logout: () => void;
  loading: boolean;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<AdminSession | null>(null);
  const [loading, setLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const existingSession = getAdminSession();
    setSession(existingSession);
    setLoading(false);
  }, []);

  const login = (newSession: AdminSession) => {
    setSession(newSession);
    saveAdminSession(newSession);
  };

  const logout = () => {
    setSession(null);
    performLogout();
  };

  return (
    <AdminContext.Provider value={{ session, isAuthenticated: !!session, login, logout, loading }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error("useAdmin must be used within AdminProvider");
  }
  return context;
}
