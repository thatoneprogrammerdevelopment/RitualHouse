import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Gift, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1756397481872-ed981ef72a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc2NjQ3OTU2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Ritual House Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-[0.2em] uppercase text-foreground">
            Savor Life's<br />Rituals
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground italic mb-12 max-w-2xl mx-auto leading-relaxed">
            A love letter to Pittsburgh. A sanctuary for life's meaningful moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/reservations"
              className="px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all uppercase tracking-[0.15em]"
            >
              Reserve a Table
            </Link>
            <Link
              to="/menu"
              className="px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-[0.15em]"
            >
              View Menus
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6 uppercase tracking-[0.15em]">
                A Sensory-Driven<br />Experience
              </h2>
              <div className="w-16 h-px bg-primary mb-8" />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Inspired by world travels and a deep passion for Pittsburgh, Ritual House offers an elevated dining experience in the historic Union Trust Building. Our captivating art, luxurious comfort, and attention to devilish details create a sanctuary where you can celebrate milestones and gather with loved ones.
              </p>
              <p className="text-muted-foreground leading-relaxed italic">
                Located at 524 William Penn Place, we invite you to create your own rituals with us.
              </p>
            </div>
            <div className="relative h-96 md:h-[500px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1658280024253-34cafdfbb002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBkaW5pbmclMjB0YWJsZXxlbnwxfHx8fDE3NjY0OTgwMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Dining Experience"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 uppercase tracking-[0.15em]">
              Spirited Food & Drink
            </h2>
            <p className="text-muted-foreground italic max-w-2xl mx-auto">
              Globally-inspired cuisine that celebrates seasonal ingredients and chef-driven creativity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden">
              <div className="relative h-80">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1755811248279-1ab13b7d4384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRpbmd8ZW58MXx8fHwxNzY2NTcyMTI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dinner Menu"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl mb-2 uppercase tracking-[0.1em]">Dinner</h3>
                <p className="text-sm text-muted-foreground mb-4">Tue-Sun, 4pm-Close</p>
                <Link to="/menu" className="text-primary text-sm uppercase tracking-[0.15em] hover:underline flex items-center gap-2">
                  View Menu <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative group overflow-hidden">
              <div className="relative h-80">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758685493098-d3a09d4044d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXIlMjBjb2NrdGFpbHN8ZW58MXx8fHwxNzY2NTg2NDExfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Happy Hour"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl mb-2 uppercase tracking-[0.1em]">Happy Hour</h3>
                <p className="text-sm text-muted-foreground mb-4">Mon-Fri, 4pm-6pm</p>
                <Link to="/menu" className="text-primary text-sm uppercase tracking-[0.15em] hover:underline flex items-center gap-2">
                  View Menu <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative group overflow-hidden">
              <div className="relative h-80">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1740727665746-cfe80ababc23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMGtpdGNoZW58ZW58MXx8fHwxNzY2NTE4NTQxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Brunch Menu"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl mb-2 uppercase tracking-[0.1em]">Brunch</h3>
                <p className="text-sm text-muted-foreground mb-4">Sat-Sun, Until 3pm</p>
                <Link to="/menu" className="text-primary text-sm uppercase tracking-[0.15em] hover:underline flex items-center gap-2">
                  View Menu <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Grid */}
      <section className="py-24 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/private-dining" className="group p-8 border border-border hover:border-primary transition-all">
              <Users className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl mb-4 uppercase tracking-[0.1em] group-hover:text-primary transition-colors">
                Private Dining
              </h3>
              <p className="text-muted-foreground mb-6">
                Host unforgettable events for 10-300 guests in our elegant spaces
              </p>
              <span className="text-primary text-sm uppercase tracking-[0.15em] flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link to="/shop" className="group p-8 border border-border hover:border-primary transition-all">
              <Gift className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl mb-4 uppercase tracking-[0.1em] group-hover:text-primary transition-colors">
                Shop
              </h3>
              <p className="text-muted-foreground mb-6">
                Take the Ritual House experience home with our specialty products
              </p>
              <span className="text-primary text-sm uppercase tracking-[0.15em] flex items-center gap-2">
                Shop Now <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link to="/reservations" className="group p-8 border border-border hover:border-primary transition-all">
              <Calendar className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl mb-4 uppercase tracking-[0.1em] group-hover:text-primary transition-colors">
                Reservations
              </h3>
              <p className="text-muted-foreground mb-6">
                Secure your table and begin your ritual with us
              </p>
              <span className="text-primary text-sm uppercase tracking-[0.15em] flex items-center gap-2">
                Book Now <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}