"use client";

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { frames, lensTypes, lensColors, addOns } from '@/lib/data';
import { useStore } from '@/lib/store';
import { toast } from 'sonner';
import { Check, ShoppingBag, Heart, RotateCcw } from 'lucide-react';

const Customize = ({ initialFrameId }: { initialFrameId?: string }) => {
  const initialFrame = initialFrameId || frames[0].id;

  const [selectedFrameId, setSelectedFrameId] = useState(initialFrame);
  const [selectedLens, setSelectedLens] = useState('standard');
  const [selectedLensColor, setSelectedLensColor] = useState('gray');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [engraving, setEngraving] = useState('');
  const [rotation, setRotation] = useState(0);

  const addToCart = useStore((s) => s.addToCart);

  const selectedFrame = frames.find((f) => f.id === selectedFrameId) || frames[0];
  const selectedLensType = lensTypes.find((l) => l.id === selectedLens)!;

  const totalPrice = useMemo(() => {
    const addOnTotal = addOns
      .filter((a) => selectedAddOns.includes(a.id))
      .reduce((sum, a) => sum + a.price, 0);
    return selectedFrame.price + selectedLensType.price + addOnTotal + (engraving ? 15 : 0);
  }, [selectedFrame, selectedLensType, selectedAddOns, engraving]);

  const handleAddToCart = () => {
    addToCart({
      frame: selectedFrame,
      customization: {
        frameId: selectedFrame.id,
        lensType: selectedLens,
        lensColor: selectedLensColor,
        addOns: selectedAddOns,
        engraving,
      },
      quantity: 1,
      totalPrice,
    });
    toast.success('Added to cart!', { description: `${selectedFrame.name} — $${totalPrice}` });
  };

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="container-luxury section-padding">
        <p className="text-sm font-medium tracking-[0.2em] text-primary mb-1">STUDIO</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Customize Your Pair</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Preview */}
          <div className="glass-card p-6 lg:p-10 flex flex-col items-center justify-center sticky top-24">
            <div className="relative w-full max-w-md">
              <img
                src={selectedFrame.image}
                alt={selectedFrame.name}
                width={800}
                height={800}
                className="w-full rounded-lg transition-transform duration-500"
                style={{ transform: `rotateY(${rotation}deg)` }}
              />
              <div
                className="absolute inset-0 rounded-lg mix-blend-overlay opacity-20 pointer-events-none"
                style={{ backgroundColor: lensColors.find((c) => c.id === selectedLensColor)?.hex }}
              />
            </div>
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={() => setRotation((r) => r - 15)}
                className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <span className="text-xs text-muted-foreground">Rotate view</span>
              <button
                onClick={() => setRotation((r) => r + 15)}
                className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                style={{ transform: 'scaleX(-1)' }}
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
            <p className="text-2xl font-bold mt-6">{selectedFrame.name}</p>
          </div>

          {/* Customization Panel */}
          <div className="space-y-8">
            {/* Frame Selection */}
            <div className="glass-card p-6">
              <h3 className="text-sm font-semibold tracking-wide mb-4">FRAME SELECTION</h3>
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-3">
                {frames.map((frame) => (
                  <button
                    key={frame.id}
                    onClick={() => setSelectedFrameId(frame.id)}
                    className={`rounded-lg overflow-hidden border-2 transition-all ${
                      selectedFrameId === frame.id ? 'border-primary shadow-[var(--shadow-gold)]' : 'border-border hover:border-primary/30'
                    }`}
                  >
                    <img src={frame.image} alt={frame.name} className="w-full aspect-square object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Lens Type */}
            <div className="glass-card p-6">
              <h3 className="text-sm font-semibold tracking-wide mb-4">LENS TYPE</h3>
              <div className="space-y-3">
                {lensTypes.map((lens) => (
                  <button
                    key={lens.id}
                    onClick={() => setSelectedLens(lens.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all ${
                      selectedLens === lens.id ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/30'
                    }`}
                  >
                    <div className="text-left">
                      <p className="text-sm font-medium">{lens.name}</p>
                      <p className="text-xs text-muted-foreground">{lens.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {lens.price > 0 && <span className="text-xs text-primary">+${lens.price}</span>}
                      {selectedLens === lens.id && <Check className="w-4 h-4 text-primary" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Lens Color */}
            <div className="glass-card p-6">
              <h3 className="text-sm font-semibold tracking-wide mb-4">LENS COLOR</h3>
              <div className="flex flex-wrap gap-3">
                {lensColors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedLensColor(color.id)}
                    className={`flex flex-col items-center gap-1.5 p-2 rounded-lg transition-all ${
                      selectedLensColor === color.id ? 'bg-primary/10' : 'hover:bg-secondary'
                    }`}
                  >
                    <span
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        selectedLensColor === color.id ? 'border-primary scale-110' : 'border-border'
                      }`}
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-[10px] text-muted-foreground">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Add-ons */}
            <div className="glass-card p-6">
              <h3 className="text-sm font-semibold tracking-wide mb-4">ADD-ONS</h3>
              <div className="space-y-3">
                {addOns.map((addon) => (
                  <div key={addon.id} className="flex items-center justify-between p-3 rounded-lg border border-border">
                    <div className="flex items-center gap-3">
                      <Switch
                        checked={selectedAddOns.includes(addon.id)}
                        onCheckedChange={() => toggleAddOn(addon.id)}
                      />
                      <span className="text-sm">{addon.name}</span>
                    </div>
                    <span className="text-xs text-primary">+${addon.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engraving */}
            <div className="glass-card p-6">
              <h3 className="text-sm font-semibold tracking-wide mb-4">ENGRAVING</h3>
              <input
                type="text"
                maxLength={20}
                value={engraving}
                onChange={(e) => setEngraving(e.target.value)}
                placeholder="Add personal text (max 20 chars)"
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              {engraving && <p className="text-xs text-primary mt-2">+$15 for engraving</p>}
            </div>

            {/* Price Summary */}
            <div className="glass-card p-6" style={{ boxShadow: 'var(--shadow-gold)' }}>
              <h3 className="text-sm font-semibold tracking-wide mb-4">PRICE BREAKDOWN</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Frame ({selectedFrame.name})</span>
                  <span>${selectedFrame.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lens ({selectedLensType.name})</span>
                  <span>${selectedLensType.price > 0 ? `+${selectedLensType.price}` : 'Included'}</span>
                </div>
                {selectedAddOns.map((id) => {
                  const addon = addOns.find((a) => a.id === id)!;
                  return (
                    <div key={id} className="flex justify-between">
                      <span className="text-muted-foreground">{addon.name}</span>
                      <span>+${addon.price}</span>
                    </div>
                  );
                })}
                {engraving && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Engraving</span>
                    <span>+$15</span>
                  </div>
                )}
                <div className="border-t border-border pt-3 mt-3 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="gold-text">${totalPrice}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button onClick={handleAddToCart} size="lg" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                <ShoppingBag className="mr-2 w-5 h-5" /> Add to Cart — ${totalPrice}
              </Button>
              <Button variant="outline" size="lg" className="border-border text-muted-foreground hover:text-foreground hover:border-primary/50">
                <Heart className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;
