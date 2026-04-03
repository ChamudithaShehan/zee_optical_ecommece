// Admin authentication utilities
// In a real app, this would connect to a database and use proper security

const ADMIN_CREDENTIALS = {
  email: 'admin@zeeOptics.com',
  password: 'admin@123',
};

const ADMIN_SESSION_KEY = 'admin_session';
const ADMIN_TOKEN_KEY = 'admin_token';

export interface AdminSession {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'super_admin';
  loginTime: number;
  token: string;
}

// Generate mock token
function generateToken(): string {
  return Math.random().toString(36).substr(2) + Date.now().toString(36);
}

// Validate admin credentials
export function validateAdminCredentials(email: string, password: string): boolean {
  return email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password;
}

// Create admin session
export function createAdminSession(email: string): AdminSession {
  const session: AdminSession = {
    id: 'admin_' + Date.now(),
    email,
    name: 'Admin User',
    role: 'super_admin',
    loginTime: Date.now(),
    token: generateToken(),
  };
  return session;
}

// Save session to localStorage
export function saveAdminSession(session: AdminSession): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(session));
    localStorage.setItem(ADMIN_TOKEN_KEY, session.token);
  }
}

// Get session from localStorage
export function getAdminSession(): AdminSession | null {
  if (typeof window === 'undefined') return null;
  
  const sessionData = localStorage.getItem(ADMIN_SESSION_KEY);
  if (!sessionData) return null;
  
  try {
    return JSON.parse(sessionData) as AdminSession;
  } catch {
    return null;
  }
}

// Check if admin is authenticated
export function isAdminAuthenticated(): boolean {
  const session = getAdminSession();
  if (!session) return false;
  
  // Check if session is still valid (less than 24 hours old)
  const sessionAge = Date.now() - session.loginTime;
  const oneDayInMs = 24 * 60 * 60 * 1000;
  
  return sessionAge < oneDayInMs;
}

// Logout admin
export function logoutAdmin(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(ADMIN_SESSION_KEY);
    localStorage.removeItem(ADMIN_TOKEN_KEY);
  }
}

// Get admin token
export function getAdminToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(ADMIN_TOKEN_KEY);
}
