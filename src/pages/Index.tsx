import Link from 'next/link';
import { Shield, Gem, Ruler, ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-sunglasses.jpg';
import { frames } from '@/lib/data';
import { useRef } from 'react';

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImage.src} alt="Premium sunglasses" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0" style={{ background: 'var(--hero-overlay)' }} />
    </div>
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <p className="text-sm font-medium tracking-[0.3em] text-primary mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        PREMIUM EYEWEAR
      </p>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
        Design Your
        <span className="block gold-text">Perfect Sunglasses</span>
      </h1>
      <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
        Handcrafted luxury eyewear, customized to your exact specifications with premium materials.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 font-semibold tracking-wide">
          <Link href="/customize">Customize Now</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-foreground/20 text-foreground hover:bg-foreground/5 px-8 tracking-wide">
          <Link href="/shop">Shop Frames <ArrowRight className="ml-2 w-4 h-4" /></Link>
        </Button>
      </div>
    </div>
  </section>
);

const FeaturedFrames = () => {
  const featured = frames.filter((f) => f.featured);
  return (
    <section className="section-padding">
      <div className="container-luxury">
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-[0.2em] text-primary mb-2">COLLECTION</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Featured Frames</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((frame, i) => (
            <div
              key={frame.id}
              className="glass-card hover-lift group cursor-pointer overflow-hidden animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
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
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <Button asChild size="sm" className="bg-primary text-primary-foreground">
                    <Link href={`/customize?frame=${frame.id}`}>Customize</Link>
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm">{frame.name}</h3>
                <p className="text-primary font-bold mt-1">${frame.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const items = [
    { icon: Shield, title: 'UV Protection', desc: '100% UV400 protection for your eyes' },
    { icon: Gem, title: 'Premium Materials', desc: 'Italian acetate & titanium frames' },
    { icon: Ruler, title: 'Custom Fit', desc: 'Tailored to your face measurements' },
  ];
  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-luxury">
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-[0.2em] text-primary mb-2">WHY LUXESHADE</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Crafted for Excellence</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="glass-card p-8 text-center hover-lift animate-fade-up" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrendingCarousel = () => {
  const trending = frames.filter((f) => f.trending);
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <section className="section-padding">
      <div className="container-luxury">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm font-medium tracking-[0.2em] text-primary mb-2">TRENDING</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Hot Right Now</h2>
          </div>
          <Link href="/shop" className="text-sm text-primary hover:underline flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
          {trending.map((frame) => (
            <div key={frame.id} className="glass-card hover-lift min-w-[280px] snap-start overflow-hidden group">
              <div className="overflow-hidden">
                <img src={frame.image} alt={frame.name} loading="lazy" width={800} height={800} className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-sm">{frame.name}</h3>
                  <p className="text-primary font-bold">${frame.price}</p>
                </div>
                <Button asChild size="sm" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                  <Link href={`/customize?frame=${frame.id}`}>Customize</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => (
  <section className="section-padding bg-secondary/20">
    <div className="container-luxury max-w-2xl text-center">
      <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
      <h2 className="text-2xl sm:text-3xl font-bold mb-3">Stay in the Loop</h2>
      <p className="text-muted-foreground mb-8">Get exclusive drops, offers, and style tips straight to your inbox.</p>
      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="your@email.com"
          className="flex-1 bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6">Subscribe</Button>
      </div>
    </div>
  </section>
);

const Index = () => (
  <div>
    <HeroSection />
    <FeaturedFrames />
    <WhyChooseUs />
    <TrendingCarousel />
    <Newsletter />
  </div>
);

export default Index;
