"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

export default function SignUp() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [focused, setFocused] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const getPasswordStrength = (pw: string) => {
    if (!pw) return 0;
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[a-z]/.test(pw)) score++;
    if (/\d/.test(pw)) score++;
    if (/[^A-Za-z\d]/.test(pw)) score++;
    return score;
  };

  const pwStrength = getPasswordStrength(formData.password);
  const pwStrengthLabel = ["", "Weak", "Fair", "Good", "Strong", "Excellent"][pwStrength];
  const pwStrengthColor = ["", "#ef4444", "#f97316", "#eab308", "#22c55e", "#10b981"][pwStrength];

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.firstName.trim()) e.firstName = "First name is required";
    if (!formData.lastName.trim()) e.lastName = "Last name is required";
    if (!formData.email) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Please enter a valid email";
    if (!formData.password) e.password = "Password is required";
    else if (formData.password.length < 8) e.password = "At least 8 characters required";
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) e.password = "Include uppercase, lowercase & numbers";
    if (!formData.confirmPassword) e.confirmPassword = "Please confirm your password";
    else if (formData.password !== formData.confirmPassword) e.confirmPassword = "Passwords do not match";
    if (!formData.agreeToTerms) e.agreeToTerms = "You must agree to the terms";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast({ title: "Account Created!", description: "Welcome to Zee Optics! Redirecting…" });
      setTimeout(() => router.push("/dashboard"), 500);
    } catch {
      toast({ title: "Error", description: "Failed to create account. Please try again.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const EyeToggle = ({ show, onClick }: { show: boolean; onClick: () => void }) => (
    <button type="button" className="zee-field-eye" onClick={onClick} tabIndex={-1} aria-label={show ? "Hide" : "Show"}>
      {show ? (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 9s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" stroke="currentColor" strokeWidth="1.3"/><circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.3"/><path d="M3 3l12 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 9s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" stroke="currentColor" strokeWidth="1.3"/><circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.3"/></svg>
      )}
    </button>
  );

  return (
    <div className="zee-auth-root">
      <div className="zee-auth-bg-ring zee-auth-bg-ring-1" />
      <div className="zee-auth-bg-ring zee-auth-bg-ring-2" />

      <div className="zee-auth-container">
        {/* ── Left branding panel ── */}
        <div className="zee-auth-left">
          <div className="zee-auth-left-inner">
            <Link href="/" className="zee-auth-brand">
              <div className="zee-auth-brand-icon">Z</div>
              <span className="zee-auth-brand-name">ZEE OPTICS</span>
            </Link>

            <div className="zee-auth-left-body">
              <p className="zee-auth-eyebrow">Get Started</p>
              <h1 className="zee-auth-headline">
                Discover clarity<br />
                <span className="zee-auth-headline-accent">with confidence.</span>
              </h1>
              <p className="zee-auth-left-desc">
                Create your free account to unlock personalised recommendations, save your favorite frames, and manage your prescriptions.
              </p>

              {/* Steps */}
              <div className="zee-auth-steps">
                {[
                  { num: "1", title: "Create your account", desc: "Takes less than a minute" },
                  { num: "2", title: "Browse & try on", desc: "Virtual try-on with AR technology" },
                  { num: "3", title: "Order & enjoy", desc: "Free delivery within 5–7 business days" },
                ].map((s) => (
                  <div key={s.num} className="zee-auth-step">
                    <div className="zee-auth-step-num">{s.num}</div>
                    <div>
                      <div className="zee-auth-step-title">{s.title}</div>
                      <div className="zee-auth-step-desc">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="zee-auth-testimonial">
              <div className="zee-auth-testimonial-stars">★★★★★</div>
              <p className="zee-auth-testimonial-text">"The quality of both the frames and the eye testing service was exceptional. Highly recommend Zee Optics!"</p>
              <div className="zee-auth-testimonial-author">— Sarah M., Verified Customer</div>
            </div>
          </div>
        </div>

        {/* ── Right form panel ── */}
        <div className="zee-auth-right">
          <div className="zee-auth-form-card">
            {/* Mobile brand */}
            <Link href="/" className="zee-auth-mobile-brand">
              <div className="zee-auth-brand-icon">Z</div>
              <span className="zee-auth-brand-name zee-auth-brand-name-dark">ZEE OPTICS</span>
            </Link>

            <div className="zee-auth-form-header">
              <h2 className="zee-auth-form-title">Create Account</h2>
              <p className="zee-auth-form-subtitle">
                Already have an account?{" "}
                <Link href="/signin" className="zee-auth-link">Sign in</Link>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="zee-auth-form" noValidate>
              {/* Name row */}
              <div className="zee-field-row">
                <div className={`zee-field ${focused.firstName ? "focused" : ""} ${errors.firstName ? "error" : ""}`}>
                  <label htmlFor="signup-fn" className="zee-field-label">First Name</label>
                  <div className="zee-field-input-wrap">
                    <input id="signup-fn" name="firstName" type="text" placeholder="Alex"
                      value={formData.firstName} onChange={handleChange}
                      onFocus={() => setFocused((p) => ({ ...p, firstName: true }))}
                      onBlur={() => setFocused((p) => ({ ...p, firstName: false }))}
                      disabled={isLoading} autoComplete="given-name" className="zee-field-input zee-field-input-plain"
                    />
                  </div>
                  {errors.firstName && <p className="zee-field-error">{errors.firstName}</p>}
                </div>
                <div className={`zee-field ${focused.lastName ? "focused" : ""} ${errors.lastName ? "error" : ""}`}>
                  <label htmlFor="signup-ln" className="zee-field-label">Last Name</label>
                  <div className="zee-field-input-wrap">
                    <input id="signup-ln" name="lastName" type="text" placeholder="Rivera"
                      value={formData.lastName} onChange={handleChange}
                      onFocus={() => setFocused((p) => ({ ...p, lastName: true }))}
                      onBlur={() => setFocused((p) => ({ ...p, lastName: false }))}
                      disabled={isLoading} autoComplete="family-name" className="zee-field-input zee-field-input-plain"
                    />
                  </div>
                  {errors.lastName && <p className="zee-field-error">{errors.lastName}</p>}
                </div>
              </div>

              {/* Email */}
              <div className={`zee-field ${focused.email ? "focused" : ""} ${errors.email ? "error" : ""}`}>
                <label htmlFor="signup-email" className="zee-field-label">Email Address</label>
                <div className="zee-field-input-wrap">
                  <svg className="zee-field-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M2 6l7 5 7-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                  <input id="signup-email" name="email" type="email" placeholder="you@example.com"
                    value={formData.email} onChange={handleChange}
                    onFocus={() => setFocused((p) => ({ ...p, email: true }))}
                    onBlur={() => setFocused((p) => ({ ...p, email: false }))}
                    disabled={isLoading} autoComplete="email" className="zee-field-input"
                  />
                </div>
                {errors.email && <p className="zee-field-error">{errors.email}</p>}
              </div>

              {/* Password */}
              <div className={`zee-field ${focused.password ? "focused" : ""} ${errors.password ? "error" : ""}`}>
                <label htmlFor="signup-pw" className="zee-field-label">Password</label>
                <div className="zee-field-input-wrap">
                  <svg className="zee-field-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="4" y="8" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M6 8V6a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    <circle cx="9" cy="12" r="1" fill="currentColor" />
                  </svg>
                  <input id="signup-pw" name="password" type={showPassword ? "text" : "password"} placeholder="Min 8 characters"
                    value={formData.password} onChange={handleChange}
                    onFocus={() => setFocused((p) => ({ ...p, password: true }))}
                    onBlur={() => setFocused((p) => ({ ...p, password: false }))}
                    disabled={isLoading} autoComplete="new-password" className="zee-field-input"
                  />
                  <EyeToggle show={showPassword} onClick={() => setShowPassword((v) => !v)} />
                </div>
                {formData.password && (
                  <div className="zee-pw-strength">
                    <div className="zee-pw-bars">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <div key={n} className="zee-pw-bar" style={{ background: n <= pwStrength ? pwStrengthColor : "#e2e8f0" }} />
                      ))}
                    </div>
                    <span className="zee-pw-label" style={{ color: pwStrengthColor }}>{pwStrengthLabel}</span>
                  </div>
                )}
                {errors.password && <p className="zee-field-error">{errors.password}</p>}
              </div>

              {/* Confirm Password */}
              <div className={`zee-field ${focused.confirmPassword ? "focused" : ""} ${errors.confirmPassword ? "error" : ""}`}>
                <label htmlFor="signup-cpw" className="zee-field-label">Confirm Password</label>
                <div className="zee-field-input-wrap">
                  <svg className="zee-field-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="4" y="8" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M6 8V6a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    <circle cx="9" cy="12" r="1" fill="currentColor" />
                  </svg>
                  <input id="signup-cpw" name="confirmPassword" type={showConfirmPassword ? "text" : "password"} placeholder="Re-enter password"
                    value={formData.confirmPassword} onChange={handleChange}
                    onFocus={() => setFocused((p) => ({ ...p, confirmPassword: true }))}
                    onBlur={() => setFocused((p) => ({ ...p, confirmPassword: false }))}
                    disabled={isLoading} autoComplete="new-password" className="zee-field-input"
                  />
                  <EyeToggle show={showConfirmPassword} onClick={() => setShowConfirmPassword((v) => !v)} />
                  {formData.confirmPassword && (
                    <span className={`zee-match-badge ${formData.password === formData.confirmPassword ? "match" : "no-match"}`}>
                      {formData.password === formData.confirmPassword ? "✓" : "✗"}
                    </span>
                  )}
                </div>
                {errors.confirmPassword && <p className="zee-field-error">{errors.confirmPassword}</p>}
              </div>

              {/* Terms */}
              <div className="zee-terms-row">
                <label className={`zee-checkbox-label ${errors.agreeToTerms ? "error" : ""}`}>
                  <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} disabled={isLoading} className="zee-checkbox-native" />
                  <span className={`zee-checkbox-box ${formData.agreeToTerms ? "checked" : ""}`}>
                    {formData.agreeToTerms && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    )}
                  </span>
                  <span className="zee-checkbox-text">
                    I agree to the{" "}
                    <Link href="/terms" className="zee-auth-link">Terms & Conditions</Link>
                    {" "}and{" "}
                    <Link href="/privacy" className="zee-auth-link">Privacy Policy</Link>
                  </span>
                </label>
                {errors.agreeToTerms && <p className="zee-field-error">{errors.agreeToTerms}</p>}
              </div>

              {/* Submit */}
              <button type="submit" className="zee-auth-submit" disabled={isLoading}>
                {isLoading ? (
                  <span className="zee-auth-spinner-wrap">
                    <span className="zee-auth-spinner" />
                    Creating account…
                  </span>
                ) : (
                  <>
                    Create Account
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="zee-auth-btn-arrow">
                      <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .zee-auth-root {
          position: relative; min-height: 100vh; background: #fff;
          overflow: hidden; display: flex; font-family: 'Inter', system-ui, sans-serif;
        }
        .zee-auth-bg-ring { position: fixed; border-radius: 50%; pointer-events: none; z-index: 0; }
        .zee-auth-bg-ring-1 {
          width: 600px; height: 600px; top: -200px; right: -200px;
          border: 1px solid rgba(0,174,239,0.06);
          animation: ringPulse 20s ease-in-out infinite;
        }
        .zee-auth-bg-ring-2 {
          width: 400px; height: 400px; bottom: -150px; left: -100px;
          border: 1px solid rgba(0,51,102,0.04);
          animation: ringPulse 15s ease-in-out infinite reverse;
        }
        @keyframes ringPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.6; }
        }

        .zee-auth-container { position: relative; z-index: 1; display: flex; width: 100%; min-height: 100vh; }

        /* Left */
        .zee-auth-left {
          display: none; flex: 0 0 48%; position: relative;
          background: linear-gradient(160deg, #003366, #002244); overflow: hidden;
        }
        @media (min-width: 960px) { .zee-auth-left { display: flex; } }
        .zee-auth-left::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at 30% 70%, rgba(0,174,239,0.15), transparent 60%),
                      radial-gradient(ellipse at 80% 20%, rgba(0,174,239,0.08), transparent 50%);
        }
        .zee-auth-left::after {
          content: ''; position: absolute; inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E");
        }
        .zee-auth-left-inner {
          position: relative; z-index: 1; display: flex; flex-direction: column;
          justify-content: space-between; padding: 2.5rem 3rem; height: 100%; width: 100%;
        }

        .zee-auth-brand { display: flex; align-items: center; gap: 0.65rem; text-decoration: none; }
        .zee-auth-brand-icon {
          width: 38px; height: 38px; border-radius: 10px; background: #00AEEF;
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-size: 1.1rem; font-weight: 800; flex-shrink: 0;
        }
        .zee-auth-brand-name { font-size: 1.1rem; font-weight: 800; letter-spacing: 0.04em; color: #fff; }
        .zee-auth-brand-name-dark { color: #003366; }

        .zee-auth-left-body { flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 2rem 0; }
        .zee-auth-eyebrow { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: #00AEEF; margin-bottom: 1rem; }
        .zee-auth-headline { font-size: clamp(1.9rem, 2.8vw, 2.6rem); font-weight: 800; line-height: 1.15; color: #fff; margin-bottom: 1.1rem; letter-spacing: -0.02em; }
        .zee-auth-headline-accent { color: #00AEEF; }
        .zee-auth-left-desc { font-size: 0.9rem; line-height: 1.7; color: rgba(255,255,255,0.6); max-width: 340px; margin-bottom: 2.25rem; }

        /* Steps */
        .zee-auth-steps { display: flex; flex-direction: column; gap: 1.1rem; }
        .zee-auth-step { display: flex; align-items: flex-start; gap: 0.85rem; }
        .zee-auth-step-num {
          width: 32px; height: 32px; border-radius: 8px; flex-shrink: 0;
          background: rgba(0,174,239,0.15); border: 1px solid rgba(0,174,239,0.3);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.75rem; font-weight: 800; color: #00AEEF;
        }
        .zee-auth-step-title { font-size: 0.85rem; font-weight: 700; color: #fff; margin-bottom: 0.1rem; }
        .zee-auth-step-desc { font-size: 0.75rem; color: rgba(255,255,255,0.5); }

        /* Testimonial */
        .zee-auth-testimonial {
          padding: 1.25rem; border-radius: 16px;
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(8px);
        }
        .zee-auth-testimonial-stars { color: #00AEEF; font-size: 0.85rem; letter-spacing: 0.15em; margin-bottom: 0.5rem; }
        .zee-auth-testimonial-text { font-size: 0.83rem; color: rgba(255,255,255,0.75); line-height: 1.6; font-style: italic; margin-bottom: 0.6rem; }
        .zee-auth-testimonial-author { font-size: 0.72rem; color: rgba(255,255,255,0.45); font-weight: 600; }

        /* Right */
        .zee-auth-right { flex: 1; display: flex; align-items: center; justify-content: center; padding: 2rem 1.5rem; background: #fff; }
        .zee-auth-mobile-brand { display: flex; align-items: center; gap: 0.65rem; text-decoration: none; margin-bottom: 1.5rem; }
        @media (min-width: 960px) { .zee-auth-mobile-brand { display: none; } }

        .zee-auth-form-card { width: 100%; max-width: 440px; animation: formSlideUp 0.5s cubic-bezier(0.22,1,0.36,1) both; }
        @keyframes formSlideUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }

        .zee-auth-form-header { margin-bottom: 1.75rem; }
        .zee-auth-form-title { font-size: 1.65rem; font-weight: 800; color: #003366; letter-spacing: -0.03em; margin-bottom: 0.35rem; }
        .zee-auth-form-subtitle { font-size: 0.88rem; color: #64748b; }

        .zee-auth-form { display: flex; flex-direction: column; gap: 1.1rem; }
        .zee-field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
        .zee-field { display: flex; flex-direction: column; gap: 0.35rem; }
        .zee-field-label { font-size: 0.8rem; font-weight: 600; color: #334155; transition: color 0.2s; }
        .zee-field.focused .zee-field-label { color: #00AEEF; }
        .zee-field.error .zee-field-label { color: #ef4444; }

        .zee-field-input-wrap { position: relative; display: flex; align-items: center; }
        .zee-field-icon { position: absolute; left: 0.875rem; color: #94a3b8; display: flex; pointer-events: none; transition: color 0.2s; }
        .zee-field.focused .zee-field-icon { color: #00AEEF; }
        .zee-field.error .zee-field-icon { color: #ef4444; }

        .zee-field-input {
          width: 100%; background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 10px;
          padding: 0.78rem 1rem 0.78rem 2.75rem; font-size: 0.9rem; color: #0f172a;
          outline: none; transition: border-color 0.2s, box-shadow 0.2s, background 0.2s; font-family: inherit;
        }
        .zee-field-input-plain { padding-left: 0.9rem; }
        .zee-field-input::placeholder { color: #94a3b8; }
        .zee-field-input:focus { border-color: #00AEEF; background: #fff; box-shadow: 0 0 0 3px rgba(0,174,239,0.1); }
        .zee-field.error .zee-field-input { border-color: #ef4444; box-shadow: 0 0 0 3px rgba(239,68,68,0.08); }
        .zee-field-input:disabled { opacity: 0.5; cursor: not-allowed; }

        .zee-field-eye {
          position: absolute; right: 0.875rem; background: none; border: none;
          cursor: pointer; color: #94a3b8; display: flex; padding: 0; transition: color 0.2s;
        }
        .zee-field-eye:hover { color: #00AEEF; }

        .zee-field-error {
          font-size: 0.76rem; color: #ef4444; font-weight: 500;
          display: flex; align-items: center; gap: 0.3rem;
        }
        .zee-field-error::before { content: ''; width: 4px; height: 4px; border-radius: 50%; background: #ef4444; flex-shrink: 0; }

        /* Password strength */
        .zee-pw-strength { display: flex; align-items: center; gap: 0.6rem; margin-top: 0.3rem; }
        .zee-pw-bars { display: flex; gap: 0.25rem; flex: 1; }
        .zee-pw-bar { height: 3px; flex: 1; border-radius: 2px; transition: background 0.3s; }
        .zee-pw-label { font-size: 0.68rem; font-weight: 700; min-width: 52px; text-align: right; }

        /* Match badge */
        .zee-match-badge {
          position: absolute; right: 2.75rem; font-size: 0.78rem; font-weight: 700; transition: color 0.2s;
        }
        .zee-match-badge.match { color: #22c55e; }
        .zee-match-badge.no-match { color: #ef4444; }

        /* Checkbox */
        .zee-terms-row { display: flex; flex-direction: column; }
        .zee-checkbox-label { display: flex; align-items: flex-start; gap: 0.6rem; cursor: pointer; }
        .zee-checkbox-native { display: none; }
        .zee-checkbox-box {
          width: 18px; height: 18px; border-radius: 5px; flex-shrink: 0; margin-top: 0.1rem;
          border: 1.5px solid #cbd5e1; background: #f8fafc;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
        }
        .zee-checkbox-box.checked { background: #00AEEF; border-color: #00AEEF; }
        .zee-checkbox-label.error .zee-checkbox-box { border-color: #ef4444; }
        .zee-checkbox-text { font-size: 0.8rem; color: #64748b; line-height: 1.5; }

        /* Links */
        .zee-auth-link { color: #00AEEF; font-weight: 600; text-decoration: none; transition: color 0.2s; }
        .zee-auth-link:hover { color: #0096ce; text-decoration: underline; }

        /* Submit */
        .zee-auth-submit {
          width: 100%; padding: 0.85rem 1.5rem; border-radius: 10px; border: none;
          cursor: pointer; font-size: 0.92rem; font-weight: 700; color: #fff; background: #003366;
          display: flex; align-items: center; justify-content: center; gap: 0.5rem;
          position: relative; overflow: hidden;
          transition: background 0.15s, transform 0.1s, box-shadow 0.2s;
          box-shadow: 0 4px 14px rgba(0,51,102,0.2); font-family: inherit; margin-top: 0.25rem;
        }
        .zee-auth-submit:hover:not(:disabled) { background: #002244; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(0,51,102,0.3); }
        .zee-auth-submit:active:not(:disabled) { transform: translateY(0); }
        .zee-auth-submit:disabled { opacity: 0.6; cursor: not-allowed; }
        .zee-auth-btn-arrow { transition: transform 0.2s; }
        .zee-auth-submit:hover:not(:disabled) .zee-auth-btn-arrow { transform: translateX(3px); }

        .zee-auth-spinner-wrap { display: flex; align-items: center; gap: 0.6rem; }
        .zee-auth-spinner {
          width: 16px; height: 16px; border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff; border-radius: 50%; animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
