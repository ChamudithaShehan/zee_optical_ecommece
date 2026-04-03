"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useStore } from '@/lib/store';
import { lensTypes, lensColors, addOns } from '@/lib/data';
import { ArrowLeft, CreditCard, Banknote, Check, Lock } from 'lucide-react';
import { toast } from 'sonner';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useStore();
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cod'>('card');
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', state: '', zip: '', country: '',
    cardNumber: '', cardExpiry: '', cardCvc: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      clearCart();
      toast.success('Order placed successfully!', { description: 'You will receive a confirmation email shortly.' });
      router.push('/');
      setSubmitting(false);
    }, 1500);
  };

  if (cart.length === 0) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Nothing to checkout</h2>
          <p className="text-muted-foreground mb-6">Add items to your cart first</p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/shop">Browse Frames</Link>
          </Button>
        </div>
      </div>
    );
  }

  const inputClass =
    'w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all';

  return (
    <div className="pt-20 min-h-screen">
      <div className="container-luxury section-padding">
        <Link href="/cart" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Cart
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact */}
              <div className="glass-card p-6">
                <h3 className="text-sm font-semibold tracking-wide mb-5">CONTACT INFORMATION</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input required className={inputClass} placeholder="First Name" value={formData.firstName} onChange={(e) => update('firstName', e.target.value)} />
                  <input required className={inputClass} placeholder="Last Name" value={formData.lastName} onChange={(e) => update('lastName', e.target.value)} />
                  <input required type="email" className={inputClass} placeholder="Email Address" value={formData.email} onChange={(e) => update('email', e.target.value)} />
                  <input required type="tel" className={inputClass} placeholder="Phone Number" value={formData.phone} onChange={(e) => update('phone', e.target.value)} />
                </div>
              </div>

              {/* Shipping */}
              <div className="glass-card p-6">
                <h3 className="text-sm font-semibold tracking-wide mb-5">SHIPPING ADDRESS</h3>
                <div className="space-y-4">
                  <input required className={inputClass} placeholder="Street Address" value={formData.address} onChange={(e) => update('address', e.target.value)} />
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <input required className={inputClass} placeholder="City" value={formData.city} onChange={(e) => update('city', e.target.value)} />
                    <input required className={inputClass} placeholder="State / Province" value={formData.state} onChange={(e) => update('state', e.target.value)} />
                    <input required className={inputClass} placeholder="ZIP / Postal Code" value={formData.zip} onChange={(e) => update('zip', e.target.value)} />
                  </div>
                  <input required className={inputClass} placeholder="Country" value={formData.country} onChange={(e) => update('country', e.target.value)} />
                </div>
              </div>

              {/* Payment Method */}
              <div className="glass-card p-6">
                <h3 className="text-sm font-semibold tracking-wide mb-5">PAYMENT METHOD</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                      paymentMethod === 'card'
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/30'
                    }`}
                  >
                    <CreditCard className={`w-5 h-5 ${paymentMethod === 'card' ? 'text-primary' : 'text-muted-foreground'}`} />
                    <div className="text-left">
                      <p className="text-sm font-medium">Credit / Debit Card</p>
                      <p className="text-xs text-muted-foreground">Visa, Mastercard, Amex</p>
                    </div>
                    {paymentMethod === 'card' && <Check className="w-4 h-4 text-primary ml-auto" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                      paymentMethod === 'cod'
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/30'
                    }`}
                  >
                    <Banknote className={`w-5 h-5 ${paymentMethod === 'cod' ? 'text-primary' : 'text-muted-foreground'}`} />
                    <div className="text-left">
                      <p className="text-sm font-medium">Cash on Delivery</p>
                      <p className="text-xs text-muted-foreground">Pay when you receive</p>
                    </div>
                    {paymentMethod === 'cod' && <Check className="w-4 h-4 text-primary ml-auto" />}
                  </button>
                </div>

                {paymentMethod === 'card' && (
                  <div className="space-y-4 animate-fade-up">
                    <input required className={inputClass} placeholder="Card Number" value={formData.cardNumber} onChange={(e) => update('cardNumber', e.target.value)} />
                    <div className="grid grid-cols-2 gap-4">
                      <input required className={inputClass} placeholder="MM / YY" value={formData.cardExpiry} onChange={(e) => update('cardExpiry', e.target.value)} />
                      <input required className={inputClass} placeholder="CVC" value={formData.cardCvc} onChange={(e) => update('cardCvc', e.target.value)} />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Order Summary */}
            <div className="space-y-6">
              <div className="glass-card p-6 sticky top-24" style={{ boxShadow: 'var(--shadow-gold)' }}>
                <h3 className="font-semibold mb-5">Order Summary</h3>
                <div className="space-y-4 mb-6">
                  {cart.map((item) => {
                    const lens = lensTypes.find((l) => l.id === item.customization.lensType);
                    const color = lensColors.find((c) => c.id === item.customization.lensColor);
                    return (
                      <div key={item.id} className="flex gap-3">
                        <img src={item.frame.image} alt={item.frame.name} className="w-16 h-16 object-cover rounded-lg" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{item.frame.name}</p>
                          <p className="text-xs text-muted-foreground">{lens?.name} • {color?.name}</p>
                          <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <p className="text-sm font-semibold text-primary">${item.totalPrice * item.quantity}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="space-y-2 text-sm border-t border-border pt-4">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>${cartTotal()}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>{cartTotal() >= 300 ? 'Free' : '$15'}</span>
                  </div>
                  <div className="border-t border-border pt-3 mt-3 flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="gold-text">${cartTotal() >= 300 ? cartTotal() : cartTotal() + 15}</span>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  size="lg"
                  className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Processing…
                    </span>
                  ) : (
                    <>Place Order — ${cartTotal() >= 300 ? cartTotal() : cartTotal() + 15}</>
                  )}
                </Button>

                <div className="flex items-center justify-center gap-1.5 mt-4 text-xs text-muted-foreground">
                  <Lock className="w-3 h-3" />
                  <span>Secure SSL encrypted checkout</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
