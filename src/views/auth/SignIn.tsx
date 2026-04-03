"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

export default function SignIn() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [focused, setFocused] = useState<Record<string, boolean>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      toast({ title: "Welcome back!", description: "Signed in successfully. Redirecting…" });
      setTimeout(() => router.push("/dashboard"), 500);
    } catch {
      toast({ title: "Error", description: "Failed to sign in. Please try again.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="zee-auth-root">
      {/* Subtle background decoration */}
      <div className="zee-auth-bg-ring zee-auth-bg-ring-1" />
      <div className="zee-auth-bg-ring zee-auth-bg-ring-2" />

      <div className="zee-auth-container">
        {/* ── Left branding panel ── */}
        <div className="zee-auth-left">
          <div className="zee-auth-left-inner">
            {/* Brand */}
            <Link href="/" className="zee-auth-brand">
              <div className="zee-auth-brand-icon">Z</div>
              <span className="zee-auth-brand-name">ZEE OPTICS</span>
            </Link>

            {/* Content */}
            <div className="zee-auth-left-body">
              <p className="zee-auth-eyebrow">Welcome Back</p>
              <h1 className="zee-auth-headline">
                Your vision,<br />
                <span className="zee-auth-headline-accent">our expertise.</span>
              </h1>
              <p className="zee-auth-left-desc">
                Access your account to manage prescriptions, track orders, and discover new collections curated just for you.
              </p>

              <div className="zee-auth-features">
                {[
                  { icon: "👓", title: "200+ Frame Styles", desc: "Curated collections updated monthly" },
                  { icon: "🔬", title: "Precision Eye Tests", desc: "State-of-the-art diagnostic equipment" },
                  { icon: "🚚", title: "Free Express Delivery", desc: "On all orders over $100" },
                ].map((f) => (
                  <div key={f.title} className="zee-auth-feature">
                    <span className="zee-auth-feature-emoji">{f.icon}</span>
                    <div>
                      <div className="zee-auth-feature-title">{f.title}</div>
                      <div className="zee-auth-feature-desc">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badge */}
            <div className="zee-auth-trust">
              <div className="zee-auth-trust-avatars">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="zee-auth-trust-avatar" style={{ backgroundColor: ['#00AEEF', '#003366', '#0088cc', '#005599'][i] }} />
                ))}
              </div>
              <div className="zee-auth-trust-text">
                <span className="zee-auth-trust-bold">12,000+</span> customers trust Zee Optics
              </div>
            </div>
          </div>
        </div>

        {/* ── Right form panel ── */}
        <div className="zee-auth-right">
          <div className="zee-auth-form-card">
            {/* Mobile brand */}
            <Link href="/" className="zee-auth-mobile-brand">
              <div className="zee-auth-brand-icon">Z</div>
              <span className="zee-auth-brand-name">ZEE OPTICS</span>
            </Link>

            <div className="zee-auth-form-header">
              <h2 className="zee-auth-form-title">Sign In</h2>
              <p className="zee-auth-form-subtitle">
                New to Zee Optics?{" "}
                <Link href="/signup" className="zee-auth-link">Create an account</Link>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="zee-auth-form" noValidate>
              {/* Email */}
              <div className={`zee-field ${focused.email ? "focused" : ""} ${errors.email ? "error" : ""}`}>
                <label htmlFor="signin-email" className="zee-field-label">Email Address</label>
                <div className="zee-field-input-wrap">
                  <svg className="zee-field-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M2 6l7 5 7-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                  <input
                    id="signin-email" name="email" type="email"
                    placeholder="you@example.com"
                    value={formData.email} onChange={handleChange}
                    onFocus={() => setFocused((p) => ({ ...p, email: true }))}
                    onBlur={() => setFocused((p) => ({ ...p, email: false }))}
                    disabled={isLoading} autoComplete="email"
                    className="zee-field-input"
                  />
                </div>
                {errors.email && <p className="zee-field-error">{errors.email}</p>}
              </div>

              {/* Password */}
              <div className={`zee-field ${focused.password ? "focused" : ""} ${errors.password ? "error" : ""}`}>
                <div className="zee-field-label-row">
                  <label htmlFor="signin-password" className="zee-field-label">Password</label>
                  <Link href="/forgot-password" className="zee-auth-link zee-auth-link-sm">Forgot password?</Link>
                </div>
                <div className="zee-field-input-wrap">
                  <svg className="zee-field-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="4" y="8" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M6 8V6a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    <circle cx="9" cy="12" r="1" fill="currentColor" />
                  </svg>
                  <input
                    id="signin-password" name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password} onChange={handleChange}
                    onFocus={() => setFocused((p) => ({ ...p, password: true }))}
                    onBlur={() => setFocused((p) => ({ ...p, password: false }))}
                    disabled={isLoading} autoComplete="current-password"
                    className="zee-field-input"
                  />
                  <button type="button" className="zee-field-eye" onClick={() => setShowPassword((v) => !v)} tabIndex={-1} aria-label={showPassword ? "Hide password" : "Show password"}>
                    {showPassword ? (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 9s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" stroke="currentColor" strokeWidth="1.3"/><circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.3"/><path d="M3 3l12 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 9s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" stroke="currentColor" strokeWidth="1.3"/><circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.3"/></svg>
                    )}
                  </button>
                </div>
                {errors.password && <p className="zee-field-error">{errors.password}</p>}
              </div>

              {/* Submit */}
              <button type="submit" className="zee-auth-submit" disabled={isLoading}>
                {isLoading ? (
                  <span className="zee-auth-spinner-wrap">
                    <span className="zee-auth-spinner" />
                    Signing in…
                  </span>
                ) : (
                  <>
                    Sign In
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="zee-auth-btn-arrow">
                      <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </button>

              {/* Divider */}
              <div className="zee-auth-divider">
                <span className="zee-auth-divider-line" />
                <span className="zee-auth-divider-text">or continue with</span>
                <span className="zee-auth-divider-line" />
              </div>

              {/* Social/Guest */}
              <button type="button" className="zee-auth-guest" onClick={() => router.push("/shop")} disabled={isLoading}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 9h12M9 3v12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                Continue as Guest
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ── Root ── */
        .zee-auth-root {
          position: relative;
          min-height: 100vh;
          background: #ffffff;
          overflow: hidden;
          display: flex;
          font-family: 'Inter', system-ui, sans-serif;
        }

        /* ── Bg decoration ── */
        .zee-auth-bg-ring {
          position: fixed;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }
        .zee-auth-bg-ring-1 {
          width: 600px; height: 600px;
          top: -200px; right: -200px;
          border: 1px solid rgba(0, 174, 239, 0.06);
          animation: ringPulse 20s ease-in-out infinite;
        }
        .zee-auth-bg-ring-2 {
          width: 400px; height: 400px;
          bottom: -150px; left: -100px;
          border: 1px solid rgba(0, 51, 102, 0.04);
          animation: ringPulse 15s ease-in-out infinite reverse;
        }
        @keyframes ringPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.6; }
        }

        /* ── Layout ── */
        .zee-auth-container {
          position: relative;
          z-index: 1;
          display: flex;
          width: 100%;
          min-height: 100vh;
        }

        /* ── Left panel ── */
        .zee-auth-left {
          display: none;
          flex: 0 0 50%;
          position: relative;
          background: linear-gradient(160deg, #003366, #002244);
          overflow: hidden;
        }
        @media (min-width: 960px) {
          .zee-auth-left { display: flex; }
        }
        .zee-auth-left::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 30% 70%, rgba(0,174,239,0.15), transparent 60%),
                      radial-gradient(ellipse at 80% 20%, rgba(0,174,239,0.08), transparent 50%);
        }
        .zee-auth-left::after {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E");
        }

        .zee-auth-left-inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2.5rem 3rem;
          height: 100%;
          width: 100%;
        }

        /* brand */
        .zee-auth-brand {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          text-decoration: none;
        }
        .zee-auth-brand-icon {
          width: 38px; height: 38px;
          border-radius: 10px;
          background: #00AEEF;
          display: flex; align-items: center; justify-content: center;
          color: #fff;
          font-size: 1.1rem;
          font-weight: 800;
          flex-shrink: 0;
        }
        .zee-auth-brand-name {
          font-size: 1.1rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #fff;
        }

        /* left body */
        .zee-auth-left-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2.5rem 0;
        }
        .zee-auth-eyebrow {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #00AEEF;
          margin-bottom: 1rem;
        }
        .zee-auth-headline {
          font-size: clamp(2rem, 3vw, 2.8rem);
          font-weight: 800;
          line-height: 1.15;
          color: #fff;
          margin-bottom: 1.25rem;
          letter-spacing: -0.02em;
        }
        .zee-auth-headline-accent {
          color: #00AEEF;
        }
        .zee-auth-left-desc {
          font-size: 0.92rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.6);
          max-width: 360px;
          margin-bottom: 2.5rem;
        }

        /* features */
        .zee-auth-features {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .zee-auth-feature {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .zee-auth-feature-emoji {
          font-size: 1.5rem;
          width: 44px; height: 44px;
          background: rgba(255,255,255,0.08);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .zee-auth-feature-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.15rem;
        }
        .zee-auth-feature-desc {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.5);
        }

        /* trust */
        .zee-auth-trust {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          backdrop-filter: blur(8px);
        }
        .zee-auth-trust-avatars {
          display: flex;
        }
        .zee-auth-trust-avatar {
          width: 30px; height: 30px;
          border-radius: 50%;
          border: 2px solid #003366;
          margin-left: -8px;
        }
        .zee-auth-trust-avatar:first-child { margin-left: 0; }
        .zee-auth-trust-text {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.65);
        }
        .zee-auth-trust-bold {
          font-weight: 700;
          color: #00AEEF;
        }

        /* ── Right panel ── */
        .zee-auth-right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.5rem;
          background: #fff;
        }

        /* ── Mobile brand ── */
        .zee-auth-mobile-brand {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          text-decoration: none;
          margin-bottom: 2rem;
        }
        .zee-auth-mobile-brand .zee-auth-brand-name {
          color: #003366;
        }
        @media (min-width: 960px) {
          .zee-auth-mobile-brand { display: none; }
        }

        /* ── Form card ── */
        .zee-auth-form-card {
          width: 100%;
          max-width: 420px;
          animation: formSlideUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @keyframes formSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .zee-auth-form-header {
          margin-bottom: 2rem;
        }
        .zee-auth-form-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: #003366;
          letter-spacing: -0.03em;
          margin-bottom: 0.4rem;
        }
        .zee-auth-form-subtitle {
          font-size: 0.88rem;
          color: #64748b;
        }

        /* ── Fields ── */
        .zee-auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .zee-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .zee-field-label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .zee-field-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: #334155;
          transition: color 0.2s;
        }
        .zee-field.focused .zee-field-label { color: #00AEEF; }
        .zee-field.error .zee-field-label { color: #ef4444; }

        .zee-field-input-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }
        .zee-field-icon {
          position: absolute;
          left: 0.875rem;
          color: #94a3b8;
          display: flex;
          pointer-events: none;
          transition: color 0.2s;
        }
        .zee-field.focused .zee-field-icon { color: #00AEEF; }
        .zee-field.error .zee-field-icon { color: #ef4444; }

        .zee-field-input {
          width: 100%;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          padding: 0.8rem 1rem 0.8rem 2.75rem;
          font-size: 0.9rem;
          color: #0f172a;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
          font-family: inherit;
        }
        .zee-field-input::placeholder { color: #94a3b8; }
        .zee-field-input:focus {
          border-color: #00AEEF;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(0, 174, 239, 0.1);
        }
        .zee-field.error .zee-field-input {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.08);
        }
        .zee-field-input:disabled { opacity: 0.5; cursor: not-allowed; }

        .zee-field-eye {
          position: absolute;
          right: 0.875rem;
          background: none; border: none; cursor: pointer;
          color: #94a3b8; display: flex; padding: 0;
          transition: color 0.2s;
        }
        .zee-field-eye:hover { color: #00AEEF; }

        .zee-field-error {
          font-size: 0.76rem;
          color: #ef4444;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        .zee-field-error::before {
          content: '';
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #ef4444;
          flex-shrink: 0;
        }

        /* ── Link ── */
        .zee-auth-link {
          color: #00AEEF;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s;
        }
        .zee-auth-link:hover { color: #0096ce; text-decoration: underline; }
        .zee-auth-link-sm { font-size: 0.78rem; }

        /* ── Submit ── */
        .zee-auth-submit {
          width: 100%;
          padding: 0.85rem 1.5rem;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-size: 0.92rem;
          font-weight: 700;
          color: #fff;
          background: #003366;
          display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          position: relative;
          overflow: hidden;
          transition: background 0.15s, transform 0.1s, box-shadow 0.2s;
          box-shadow: 0 4px 14px rgba(0, 51, 102, 0.2);
          font-family: inherit;
          margin-top: 0.25rem;
        }
        .zee-auth-submit:hover:not(:disabled) {
          background: #002244;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(0, 51, 102, 0.3);
        }
        .zee-auth-submit:active:not(:disabled) { transform: translateY(0); }
        .zee-auth-submit:disabled { opacity: 0.6; cursor: not-allowed; }
        .zee-auth-btn-arrow { transition: transform 0.2s; }
        .zee-auth-submit:hover:not(:disabled) .zee-auth-btn-arrow { transform: translateX(3px); }

        /* Spinner */
        .zee-auth-spinner-wrap { display: flex; align-items: center; gap: 0.6rem; }
        .zee-auth-spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* ── Divider ── */
        .zee-auth-divider {
          display: flex; align-items: center; gap: 0.75rem;
        }
        .zee-auth-divider-line {
          flex: 1; height: 1px; background: #e2e8f0;
        }
        .zee-auth-divider-text {
          font-size: 0.75rem; color: #94a3b8; font-weight: 500; white-space: nowrap;
        }

        /* Guest */
        .zee-auth-guest {
          width: 100%;
          padding: 0.8rem 1.5rem;
          border-radius: 10px;
          border: 1.5px solid #e2e8f0;
          background: #fff;
          font-size: 0.875rem;
          font-weight: 600;
          color: #475569;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s, background 0.2s, box-shadow 0.2s;
          font-family: inherit;
          display: flex; align-items: center; justify-content: center; gap: 0.5rem;
        }
        .zee-auth-guest:hover:not(:disabled) {
          border-color: #00AEEF;
          color: #003366;
          background: #f0f9ff;
          box-shadow: 0 2px 8px rgba(0, 174, 239, 0.08);
        }
        .zee-auth-guest:disabled { opacity: 0.5; cursor: not-allowed; }
      `}</style>
    </div>
  );
}
