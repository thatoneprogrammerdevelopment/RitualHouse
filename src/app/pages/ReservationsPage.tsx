import { Calendar, Clock, Users, Phone } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ReservationsPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1658280024253-34cafdfbb002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkaW5pbmclMjB0YWJsZXxlbnwxfHx8fDE3NjY0OTgwMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Reservations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-[0.2em] uppercase">
            Reservations
          </h1>
          <p className="text-lg text-muted-foreground italic">
            Secure your table and begin your ritual
          </p>
        </div>
      </section>

      {/* Reservation Widget Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* OpenTable/Resy Widget Placeholder */}
          <div className="bg-card border border-border p-12 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl mb-4 uppercase tracking-[0.15em]">Book Your Table</h2>
              <p className="text-muted-foreground italic">
                Reserve your experience at Ritual House through our booking system
              </p>
            </div>
            
            {/* Mock Reservation Form */}
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm uppercase tracking-wide mb-2">Date</label>
                  <div className="flex items-center gap-3 p-4 bg-input-background border border-border">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <input
                      type="date"
                      className="bg-transparent flex-1 outline-none"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm uppercase tracking-wide mb-2">Time</label>
                  <div className="flex items-center gap-3 p-4 bg-input-background border border-border">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <select className="bg-transparent flex-1 outline-none">
                      <option>5:00 PM</option>
                      <option>5:30 PM</option>
                      <option>6:00 PM</option>
                      <option>6:30 PM</option>
                      <option>7:00 PM</option>
                      <option>7:30 PM</option>
                      <option>8:00 PM</option>
                      <option>8:30 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm uppercase tracking-wide mb-2">Party Size</label>
                <div className="flex items-center gap-3 p-4 bg-input-background border border-border">
                  <Users className="w-5 h-5 text-muted-foreground" />
                  <select className="bg-transparent flex-1 outline-none">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5 Guests</option>
                    <option>6 Guests</option>
                    <option>7+ Guests</option>
                  </select>
                </div>
              </div>

              <button className="w-full py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-[0.15em]">
                Check Availability
              </button>
              
              <p className="text-sm text-muted-foreground text-center italic">
                For parties of 10 or more, please visit our <a href="/private-dining" className="text-primary hover:underline">Private Dining</a> page
              </p>
            </div>
          </div>

          {/* Information Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-card border border-border">
              <h3 className="text-2xl mb-4 uppercase tracking-[0.15em]">Hours of Operation</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday</span>
                  <span>4pm - 9pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuesday - Thursday</span>
                  <span>11am - 9pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span>11am - 10pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:30am - 10pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>9:30am - 8pm</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm italic text-primary">
                  Happy Hour: Mon-Fri, 4pm-6pm<br />
                  Brunch: Sat-Sun, Until 3pm
                </p>
              </div>
            </div>

            <div className="p-8 bg-card border border-border">
              <h3 className="text-2xl mb-4 uppercase tracking-[0.15em]">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-muted-foreground mb-2">
                      For immediate assistance or same-day reservations, please call:
                    </p>
                    <a href="tel:+14125551234" className="text-primary text-lg hover:underline">
                      (412) 555-1234
                    </a>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground italic">
                    We accept reservations up to 60 days in advance. Walk-ins are always welcome based on availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
