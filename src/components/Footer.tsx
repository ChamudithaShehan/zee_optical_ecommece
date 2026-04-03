import Link from 'next/link';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-[#003366] text-white">
    <div className="container-luxury px-4 sm:px-6 lg:px-8 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2 mb-5">
            <div className="w-9 h-9 bg-[#00AEEF] rounded-lg flex items-center justify-center text-white font-bold text-lg">Z</div>
            <span className="text-xl font-black tracking-tight">ZEE OPTICS</span>
          </Link>
          <p className="text-sm text-white/60 leading-relaxed mb-5 max-w-xs">
            Premium eyewear and clinical eye care services. Precision meets style at every Zee Optics location.
          </p>
          <div className="flex gap-3">
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#00AEEF]/30 flex items-center justify-center transition-colors">
                <Icon className="w-4 h-4 text-white/70" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-bold tracking-wider text-[#00AEEF] mb-5 uppercase">Quick Links</h4>
          <div className="flex flex-col gap-3">
            {[
              { name: 'Shop Frames', href: '/shop' },
              { name: 'Eye Testing', href: '#eye-test' },
              { name: 'Store Locator', href: '#' },
              { name: 'Book Appointment', href: '#' },
            ].map((item) => (
              <Link key={item.name} href={item.href} className="text-sm text-white/60 hover:text-[#00AEEF] transition-colors font-medium">
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm font-bold tracking-wider text-[#00AEEF] mb-5 uppercase">Company</h4>
          <div className="flex flex-col gap-3">
            {[
              { name: 'About Us', href: '/about' },
              { name: 'Careers', href: '#' },
              { name: 'Privacy Policy', href: '/privacy' },
              { name: 'Terms & Conditions', href: '/terms' },
            ].map((item) => (
              <Link key={item.name} href={item.href} className="text-sm text-white/60 hover:text-[#00AEEF] transition-colors font-medium">
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-bold tracking-wider text-[#00AEEF] mb-5 uppercase">Contact Us</h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#00AEEF] mt-0.5 flex-shrink-0" />
              <span className="text-sm text-white/60">1234 Medical Center Blvd, Suite 100</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#00AEEF] flex-shrink-0" />
              <span className="text-sm text-white/60">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#00AEEF] flex-shrink-0" />
              <span className="text-sm text-white/60">hello@zeeoptics.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/40">© 2026 Zee Optics. All rights reserved.</p>
        <div className="flex items-center gap-6">
          {['Privacy', 'Terms', 'Cookies'].map((item) => (
            <Link key={item} href="#" className="text-xs text-white/40 hover:text-[#00AEEF] transition-colors">{item}</Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
