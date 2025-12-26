import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MapPin, Phone, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/62c476320a6403768f9b8c2d/d0d7aafc-9460-4bc1-bfd3-c52927a81e03/ritual_house_pgh.png?format=2500w"
              alt="Ritual House"
              className="h-8 mb-6 opacity-60"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="text-muted-foreground text-sm italic leading-relaxed">
              A sensory-driven dining experience inspired by world travels and a deep passion for Pittsburgh.
            </p>
          </div>

          {/* Location & Hours */}
          <div>
            <h4 className="text-primary uppercase tracking-[0.15em] mb-6">VISIT US</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <div>Union Trust Building</div>
                  <div>524 William Penn Place</div>
                  <div>Pittsburgh, PA</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <div className="mb-1">Monday: 4pm-9pm</div>
                  <div className="mb-1">Tue-Thu: 11am-9pm</div>
                  <div className="mb-1">Friday: 11am-10pm</div>
                  <div className="mb-1">Saturday: 9:30am-10pm</div>
                  <div>Sunday: 9:30am-8pm</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary uppercase tracking-[0.15em] mb-6">EXPLORE</h4>
            <div className="space-y-3 text-sm">
              <Link to="/menu" className="block text-muted-foreground hover:text-primary transition-colors">
                Menus
              </Link>
              <Link to="/private-dining" className="block text-muted-foreground hover:text-primary transition-colors">
                Private Dining
              </Link>
              <Link to="/reservations" className="block text-muted-foreground hover:text-primary transition-colors">
                Reservations
              </Link>
              <Link to="/shop" className="block text-muted-foreground hover:text-primary transition-colors">
                Shop
              </Link>
              <Link to="/careers" className="block text-muted-foreground hover:text-primary transition-colors">
                Careers
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-primary uppercase tracking-[0.15em] mb-6">CONNECT</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+14125551234" className="text-muted-foreground hover:text-primary transition-colors">
                  (412) 555-1234
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:hello@ritualhouse.com" className="text-muted-foreground hover:text-primary transition-colors">
                  hello@ritualhouse.com
                </a>
              </div>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ritual House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
