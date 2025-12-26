import { Users, Utensils, Wine, Mail } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function PrivateDiningPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1762275588901-57d0e5687f28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwZGluaW5nJTIwcm9vbXxlbnwxfHx8fDE3NjY1ODY0MTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Private Dining"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-[0.2em] uppercase">
            Private Dining
          </h1>
          <p className="text-lg text-muted-foreground italic mb-8">
            Create unforgettable moments in our elegant private spaces
          </p>
          <p className="text-muted-foreground">
            Accommodating 10-300 guests for seated dinners, cocktail receptions, and full venue buyouts
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6 uppercase tracking-[0.15em]">
              Celebrate Life's Milestones
            </h2>
            <p className="text-muted-foreground italic max-w-2xl mx-auto">
              Whether hosting an intimate gathering or a grand celebration, our team will craft an experience tailored to your vision
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-border text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl mb-4 uppercase tracking-[0.1em]">Intimate Events</h3>
              <p className="text-muted-foreground mb-4">10-25 Guests</p>
              <p className="text-sm text-muted-foreground">
                Perfect for business dinners, milestone celebrations, and family gatherings
              </p>
            </div>

            <div className="p-8 border border-border text-center">
              <Utensils className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl mb-4 uppercase tracking-[0.1em]">Semi-Private</h3>
              <p className="text-muted-foreground mb-4">25-100 Guests</p>
              <p className="text-sm text-muted-foreground">
                Dedicated spaces with privacy while maintaining restaurant ambiance
              </p>
            </div>

            <div className="p-8 border border-border text-center">
              <Wine className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl mb-4 uppercase tracking-[0.1em]">Full Buyout</h3>
              <p className="text-muted-foreground mb-4">100-300 Guests</p>
              <p className="text-sm text-muted-foreground">
                Exclusive access to the entire restaurant for your special occasion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl mb-12 text-center uppercase tracking-[0.15em]">
            Perfect For
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="p-6 bg-card border border-border">
                <h4 className="uppercase tracking-wide mb-2">Corporate Events</h4>
                <p className="text-sm text-muted-foreground">Business dinners, client entertainment, team celebrations</p>
              </div>
              <div className="p-6 bg-card border border-border">
                <h4 className="uppercase tracking-wide mb-2">Weddings & Receptions</h4>
                <p className="text-sm text-muted-foreground">Rehearsal dinners, intimate ceremonies, cocktail receptions</p>
              </div>
              <div className="p-6 bg-card border border-border">
                <h4 className="uppercase tracking-wide mb-2">Social Gatherings</h4>
                <p className="text-sm text-muted-foreground">Birthdays, anniversaries, holiday parties, reunions</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-card border border-border">
                <h4 className="uppercase tracking-wide mb-2">Wine Tastings</h4>
                <p className="text-sm text-muted-foreground">Guided tastings with our sommelier, educational experiences</p>
              </div>
              <div className="p-6 bg-card border border-border">
                <h4 className="uppercase tracking-wide mb-2">Product Launches</h4>
                <p className="text-sm text-muted-foreground">Brand events, media gatherings, exclusive previews</p>
              </div>
              <div className="p-6 bg-card border border-border">
                <h4 className="uppercase tracking-wide mb-2">Fundraisers</h4>
                <p className="text-sm text-muted-foreground">Charity galas, benefit dinners, nonprofit events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-6 bg-card">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-6 uppercase tracking-[0.15em]">
              Plan Your Event
            </h2>
            <p className="text-muted-foreground italic">
              Our events team will work with you to create a memorable experience
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm uppercase tracking-wide mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full p-4 bg-input-background border border-border outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wide mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full p-4 bg-input-background border border-border outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm uppercase tracking-wide mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-4 bg-input-background border border-border outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wide mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full p-4 bg-input-background border border-border outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm uppercase tracking-wide mb-2">Event Date</label>
                <input
                  type="date"
                  className="w-full p-4 bg-input-background border border-border outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wide mb-2">Guest Count</label>
                <select className="w-full p-4 bg-input-background border border-border outline-none focus:border-primary transition-colors">
                  <option>10-25 Guests</option>
                  <option>25-50 Guests</option>
                  <option>50-100 Guests</option>
                  <option>100-300 Guests</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm uppercase tracking-wide mb-2">Event Type</label>
              <select className="w-full p-4 bg-input-background border border-border outline-none focus:border-primary transition-colors">
                <option>Corporate Event</option>
                <option>Wedding/Reception</option>
                <option>Social Gathering</option>
                <option>Wine Tasting</option>
                <option>Product Launch</option>
                <option>Fundraiser</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm uppercase tracking-wide mb-2">Additional Details</label>
              <textarea
                rows={6}
                className="w-full p-4 bg-input-background border border-border outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell us about your event vision, dietary requirements, special requests..."
              />
            </div>

            <button className="w-full py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-[0.15em]">
              Submit Inquiry
            </button>

            <div className="text-center pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                For immediate assistance, contact our events team:
              </p>
              <div className="flex items-center justify-center gap-2 text-primary">
                <Mail className="w-4 h-4" />
                <a href="mailto:events@ritualhouse.com" className="hover:underline">
                  events@ritualhouse.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
