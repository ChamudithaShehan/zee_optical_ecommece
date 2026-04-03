import Link from 'next/link';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="border-t border-border/50 bg-secondary/30">
    <div className="container-luxury section-padding">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-lg font-bold tracking-wider gold-text mb-4">LUXESHADE</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Premium custom sunglasses crafted with precision. Design your perfect pair today.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide">SHOP</h4>
          <div className="flex flex-col gap-2">
            {['All Frames', 'Aviator', 'Round', 'Sport', 'Custom'].map((item) => (
              <Link key={item} href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide">COMPANY</h4>
          <div className="flex flex-col gap-2">
            {['About Us', 'Contact', 'Careers', 'Press'].map((item) => (
              <Link key={item} href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide">CONNECT</h4>
          <div className="flex gap-4 mb-4">
            {[Instagram, Twitter, Facebook, Mail].map((Icon, i) => (
              <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">support@luxeshade.com</p>
        </div>
      </div>
      <div className="border-t border-border/50 mt-12 pt-8 text-center">
        <p className="text-xs text-muted-foreground">© 2026 LuxeShade. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
