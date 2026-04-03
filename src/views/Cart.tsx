import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useStore } from '@/lib/store';
import { frames, lensTypes, lensColors, addOns } from '@/lib/data';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useStore();

  if (cart.length === 0) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Start customizing your perfect pair</p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/shop">Browse Frames</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="container-luxury section-padding">
        <Link href="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Continue Shopping
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => {
              const lens = lensTypes.find((l) => l.id === item.customization.lensType);
              const color = lensColors.find((c) => c.id === item.customization.lensColor);
              const itemAddOns = addOns.filter((a) => item.customization.addOns.includes(a.id));

              return (
                <div key={item.id} className="glass-card p-4 sm:p-6 flex flex-col sm:flex-row gap-4">
                  <img
                    src={item.frame.image}
                    alt={item.frame.name}
                    className="w-full sm:w-32 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">{item.frame.name}</h3>
                        <div className="text-xs text-muted-foreground mt-1 space-y-0.5">
                          <p>Lens: {lens?.name} • {color?.name}</p>
                          {itemAddOns.length > 0 && <p>Add-ons: {itemAddOns.map((a) => a.name).join(', ')}</p>}
                          {item.customization.engraving && <p>Engraving: "{item.customization.engraving}"</p>}
                        </div>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="font-bold text-primary">${item.totalPrice * item.quantity}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="glass-card p-6 h-fit sticky top-24" style={{ boxShadow: 'var(--shadow-gold)' }}>
            <h3 className="font-semibold mb-4">Order Summary</h3>
            <div className="space-y-2 text-sm">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-muted-foreground">
                  <span>{item.frame.name} ×{item.quantity}</span>
                  <span>${item.totalPrice * item.quantity}</span>
                </div>
              ))}
              <div className="border-t border-border pt-3 mt-3 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="gold-text">${cartTotal()}</span>
              </div>
            </div>
            <Button asChild className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold" size="lg">
              <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-3">Free shipping on orders over $300</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
