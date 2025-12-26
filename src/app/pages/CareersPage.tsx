import { Briefcase, Users, Award, Mail } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function CareersPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1740727665746-cfe80ababc23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMGtpdGNoZW58ZW58MXx8fHwxNzY2NTE4NTQxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Careers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-[0.2em] uppercase">
            Join Our Team
          </h1>
          <p className="text-lg text-muted-foreground italic mb-8">
            Begin your career with Ritual House
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're seeking passionate individuals who share our commitment to exceptional hospitality and culinary excellence
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6 uppercase tracking-[0.15em]">
              Why Ritual House
            </h2>
            <p className="text-muted-foreground italic max-w-2xl mx-auto">
              Join a team dedicated to creating memorable experiences in Pittsburgh's most distinctive dining destination
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-border text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl mb-4 uppercase tracking-[0.1em]">Growth & Development</h3>
              <p className="text-muted-foreground">
                Comprehensive training programs and clear paths for career advancement within our organization
              </p>
            </div>

            <div className="p-8 border border-border text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl mb-4 uppercase tracking-[0.1em]">Team Culture</h3>
              <p className="text-muted-foreground">
                Collaborative environment where creativity and innovation are encouraged and celebrated
              </p>
            </div>

            <div className="p-8 border border-border text-center">
              <Briefcase className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl mb-4 uppercase tracking-[0.1em]">Benefits Package</h3>
              <p className="text-muted-foreground">
                Competitive compensation, health benefits, dining discounts, and flexible scheduling
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl mb-12 text-center uppercase tracking-[0.15em]">
            Current Openings
          </h2>

          <div className="space-y-6">
            {/* Front of House */}
            <div className="p-8 bg-card border border-border">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl uppercase tracking-wide mb-2">Server</h3>
                  <p className="text-muted-foreground">Front of House • Full-Time & Part-Time</p>
                </div>
                <span className="px-4 py-1 border border-primary text-primary text-xs uppercase tracking-wide">
                  Open
                </span>
              </div>
              <p className="text-muted-foreground mb-6">
                Seeking experienced servers with a passion for hospitality and knowledge of fine dining service. Wine certification a plus.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>2+ years fine dining experience preferred</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Strong communication and interpersonal skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Ability to work evenings and weekends</span>
                </li>
              </ul>
              <button className="px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-wide text-sm">
                Apply Now
              </button>
            </div>

            {/* Bartender */}
            <div className="p-8 bg-card border border-border">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl uppercase tracking-wide mb-2">Bartender</h3>
                  <p className="text-muted-foreground">Bar • Full-Time & Part-Time</p>
                </div>
                <span className="px-4 py-1 border border-primary text-primary text-xs uppercase tracking-wide">
                  Open
                </span>
              </div>
              <p className="text-muted-foreground mb-6">
                Looking for skilled bartenders with craft cocktail experience and a creative approach to mixology.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>3+ years bartending experience, craft cocktail background required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Knowledge of spirits, wines, and contemporary mixology</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Strong personality and guest interaction skills</span>
                </li>
              </ul>
              <button className="px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-wide text-sm">
                Apply Now
              </button>
            </div>

            {/* Sous Chef */}
            <div className="p-8 bg-card border border-border">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl uppercase tracking-wide mb-2">Sous Chef</h3>
                  <p className="text-muted-foreground">Kitchen • Full-Time</p>
                </div>
                <span className="px-4 py-1 border border-primary text-primary text-xs uppercase tracking-wide">
                  Open
                </span>
              </div>
              <p className="text-muted-foreground mb-6">
                Talented sous chef to support our culinary team in executing our globally-inspired menu with precision and creativity.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>5+ years culinary experience, fine dining preferred</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Strong leadership and kitchen management skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Passion for seasonal ingredients and innovative cuisine</span>
                </li>
              </ul>
              <button className="px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-wide text-sm">
                Apply Now
              </button>
            </div>

            {/* Host */}
            <div className="p-8 bg-card border border-border">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl uppercase tracking-wide mb-2">Host/Hostess</h3>
                  <p className="text-muted-foreground">Front of House • Full-Time & Part-Time</p>
                </div>
                <span className="px-4 py-1 border border-primary text-primary text-xs uppercase tracking-wide">
                  Open
                </span>
              </div>
              <p className="text-muted-foreground mb-6">
                First point of contact for our guests, responsible for creating warm welcomes and managing reservations.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>1+ year hospitality experience preferred</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Excellent organizational and multitasking abilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Professional appearance and friendly demeanor</span>
                </li>
              </ul>
              <button className="px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-wide text-sm">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* General Application */}
      <section className="py-16 px-6 bg-card">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-6 uppercase tracking-[0.15em]">
              General Application
            </h2>
            <p className="text-muted-foreground italic">
              Don't see your position listed? Submit a general application and we'll keep you in mind for future opportunities
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm uppercase tracking-wide mb-2">First Name *</label>
                <input
                  type="text"
                  className="w-full p-4 bg-input-background border border-border outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wide mb-2">Last Name *</label>
                <input
                  type="text"
                  className="w-full p-4 bg-input-background border border-border outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm uppercase tracking-wide mb-2">Email *</label>
                <input
                  type="email"
                  className="w-full p-4 bg-input-background border border-border outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wide mb-2">Phone *</label>
                <input
                  type="tel"
                  className="w-full p-4 bg-input-background border border-border outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm uppercase tracking-wide mb-2">Position of Interest *</label>
              <select className="w-full p-4 bg-input-background border border-border outline-none focus:border-primary transition-colors">
                <option>Server</option>
                <option>Bartender</option>
                <option>Host/Hostess</option>
                <option>Line Cook</option>
                <option>Sous Chef</option>
                <option>Manager</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm uppercase tracking-wide mb-2">Years of Experience</label>
              <select className="w-full p-4 bg-input-background border border-border outline-none focus:border-primary transition-colors">
                <option>Less than 1 year</option>
                <option>1-2 years</option>
                <option>3-5 years</option>
                <option>5+ years</option>
                <option>10+ years</option>
              </select>
            </div>

            <div>
              <label className="block text-sm uppercase tracking-wide mb-2">Cover Letter / Why Ritual House?</label>
              <textarea
                rows={6}
                className="w-full p-4 bg-input-background border border-border outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell us about yourself and why you'd like to join our team..."
              />
            </div>

            <div>
              <label className="block text-sm uppercase tracking-wide mb-2">Resume/CV *</label>
              <div className="p-8 border-2 border-dashed border-border text-center hover:border-primary transition-colors cursor-pointer">
                <p className="text-muted-foreground mb-2">Click to upload or drag and drop</p>
                <p className="text-sm text-muted-foreground">PDF, DOC, DOCX (max 5MB)</p>
              </div>
            </div>

            <button className="w-full py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-[0.15em]">
              Submit Application
            </button>
          </div>
        </div>
      </section>

      {/* Chef & Manager Contact */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="p-12 bg-card border border-border text-center">
            <h3 className="text-3xl mb-6 uppercase tracking-[0.15em]">
              Chefs & Management
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              For Executive Chef, Sous Chef, and Management positions, please send your resume and portfolio directly to our culinary team
            </p>
            <div className="flex items-center justify-center gap-2 text-primary">
              <Mail className="w-5 h-5" />
              <a href="mailto:careers@ritualhouse.com" className="text-lg hover:underline">
                careers@ritualhouse.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
