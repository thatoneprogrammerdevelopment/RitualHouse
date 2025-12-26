import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/menu', label: 'MENU' },
    { path: '/private-dining', label: 'PRIVATE DINING' },
    { path: '/reservations', label: 'RESERVATIONS' },
    { path: '/shop', label: 'SHOP' },
    { path: '/careers', label: 'CAREERS' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://images.squarespace-cdn.com/content/v1/62c476320a6403768f9b8c2d/d0d7aafc-9460-4bc1-bfd3-c52927a81e03/ritual_house_pgh.png?format=2500w"
              alt="Ritual House"
              className={`transition-all duration-300 ${
                isScrolled ? 'h-10' : 'h-12'
              }`}
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-[0.15em] transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 space-y-4 border-t border-border pt-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-sm tracking-[0.15em] transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
