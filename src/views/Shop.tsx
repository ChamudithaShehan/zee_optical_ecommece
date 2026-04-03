import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { frames } from '@/lib/data';
import { SlidersHorizontal, X } from 'lucide-react';

const frameTypes = ['All', 'Aviator', 'Round', 'Square', 'Sport', 'Cat-Eye', 'Wayfarer', 'Clubmaster'];
const genders = ['All', 'Unisex', 'Men', 'Women'];

const Shop = () => {
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [selectedType, setSelectedType] = useState('All');
  const [selectedGender, setSelectedGender] = useState('All');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    return frames.filter((f) => {
      if (f.price < priceRange[0] || f.price > priceRange[1]) return false;
      if (selectedType !== 'All' && f.type !== selectedType.toLowerCase().replace('-', '')) return false;
      if (selectedGender !== 'All' && f.gender !== selectedGender.toLowerCase()) return false;
      return true;
    });
  }, [priceRange, selectedType, selectedGender]);

  const Filters = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-semibold mb-4 tracking-wide">PRICE RANGE</h3>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          min={0}
          max={300}
          step={10}
          className="mb-2"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4 tracking-wide">FRAME TYPE</h3>
        <div className="flex flex-wrap gap-2">
          {frameTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                selectedType === type
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border text-muted-foreground hover:border-primary/50'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4 tracking-wide">GENDER</h3>
        <div className="flex flex-wrap gap-2">
          {genders.map((g) => (
            <button
              key={g}
              onClick={() => setSelectedGender(g)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                selectedGender === g
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border text-muted-foreground hover:border-primary/50'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20 min-h-screen">
      <div className="container-luxury section-padding">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-primary mb-1">COLLECTION</p>
            <h1 className="text-3xl sm:text-4xl font-bold">Shop Frames</h1>
          </div>
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="md:hidden flex items-center gap-2 text-sm text-muted-foreground"
          >
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
        </div>

        <div className="flex gap-8">
          <aside className="hidden md:block w-64 shrink-0">
            <div className="glass-card p-6 sticky top-24">
              <Filters />
            </div>
          </aside>

          {filtersOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setFiltersOpen(false)} />
              <div className="absolute right-0 top-0 h-full w-80 bg-card border-l border-border p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold">Filters</h3>
                  <button onClick={() => setFiltersOpen(false)}><X className="w-5 h-5" /></button>
                </div>
                <Filters />
              </div>
            </div>
          )}

          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-6">{filtered.length} products</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((frame, i) => (
                <div
                  key={frame.id}
                  className="glass-card hover-lift group overflow-hidden animate-fade-up"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={frame.image}
                      alt={frame.name}
                      loading="lazy"
                      width={800}
                      height={800}
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-3">
                      <Button asChild size="sm" className="bg-primary text-primary-foreground">
                        <Link href={`/customize?frame=${frame.id}`}>Customize</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground capitalize">{frame.type}</p>
                    <h3 className="font-semibold mt-1">{frame.name}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-primary font-bold">${frame.price}</p>
                      <div className="flex gap-1">
                        {frame.colors.map((c) => (
                          <span key={c} className="w-3 h-3 rounded-full border border-border" style={{ backgroundColor: c }} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-20 text-muted-foreground">
                <p>No frames match your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
