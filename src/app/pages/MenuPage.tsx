import { useState } from 'react';
import { Download } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function MenuPage() {
  const [activeMenu, setActiveMenu] = useState('dinner');

  const menus = [
    { id: 'dinner', name: 'Dinner', hours: 'Tuesday-Sunday, 4pm-Close' },
    { id: 'lunch', name: 'Lunch', hours: 'Tuesday-Friday, 11am-4pm' },
    { id: 'brunch', name: 'Brunch', hours: 'Saturday-Sunday, Until 3pm' },
    { id: 'happy-hour', name: 'Happy Hour', hours: 'Monday-Friday, 4pm-6pm' },
    { id: 'wine', name: 'Wine List', hours: 'All Service Times' },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1755811248279-1ab13b7d4384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZm9vZCUyMHBsYXRpbmd8ZW58MXx8fHwxNzY2NTcyMTI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Menu"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-[0.2em] uppercase">
            Our Menus
          </h1>
          <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
            Globally-inspired cuisine celebrating seasonal ingredients and chef-driven creativity
          </p>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="bg-card border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto space-x-8 py-6 no-scrollbar">
            {menus.map((menu) => (
              <button
                key={menu.id}
                onClick={() => setActiveMenu(menu.id)}
                className={`whitespace-nowrap text-sm uppercase tracking-[0.15em] transition-colors pb-2 border-b-2 ${
                  activeMenu === menu.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {menu.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Menu Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 uppercase tracking-[0.15em]">
              {menus.find(m => m.id === activeMenu)?.name}
            </h2>
            <p className="text-muted-foreground italic mb-6">
              {menus.find(m => m.id === activeMenu)?.hours}
            </p>
            <button className="inline-flex items-center gap-2 text-primary text-sm uppercase tracking-[0.15em] hover:underline">
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>

          {/* Sample Menu Items */}
          <div className="space-y-12">
            {/* Starters */}
            <div>
              <h3 className="text-2xl mb-8 uppercase tracking-[0.15em] text-primary pb-3 border-b border-border">
                Starters
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h4 className="uppercase tracking-wide mb-2">Burrata & Heirloom Tomatoes</h4>
                    <p className="text-sm text-muted-foreground italic">
                      Fresh burrata, roasted cherry tomatoes, basil oil, aged balsamic
                    </p>
                  </div>
                  <span className="text-primary">18</span>
                </div>

                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h4 className="uppercase tracking-wide mb-2">Wagyu Beef Tartare</h4>
                    <p className="text-sm text-muted-foreground italic">
                      Hand-cut wagyu, truffle aioli, crispy shallots, egg yolk, crostini
                    </p>
                  </div>
                  <span className="text-primary">24</span>
                </div>

                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h4 className="uppercase tracking-wide mb-2">Lobster Bisque</h4>
                    <p className="text-sm text-muted-foreground italic">
                      Maine lobster, cognac cream, chive oil, brioche crouton
                    </p>
                  </div>
                  <span className="text-primary">16</span>
                </div>
              </div>
            </div>

            {/* Mains */}
            <div>
              <h3 className="text-2xl mb-8 uppercase tracking-[0.15em] text-primary pb-3 border-b border-border">
                Mains
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h4 className="uppercase tracking-wide mb-2">Pan-Seared Diver Scallops</h4>
                    <p className="text-sm text-muted-foreground italic">
                      Cauliflower puree, crispy pancetta, brown butter, capers
                    </p>
                  </div>
                  <span className="text-primary">42</span>
                </div>

                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h4 className="uppercase tracking-wide mb-2">Dry-Aged Ribeye</h4>
                    <p className="text-sm text-muted-foreground italic">
                      16oz bone-in ribeye, pommes anna, roasted bone marrow, red wine demi
                    </p>
                  </div>
                  <span className="text-primary">68</span>
                </div>

                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h4 className="uppercase tracking-wide mb-2">Duck Breast Confit</h4>
                    <p className="text-sm text-muted-foreground italic">
                      Seared duck breast, sweet potato puree, braised endive, cherry gastrique
                    </p>
                  </div>
                  <span className="text-primary">38</span>
                </div>

                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h4 className="uppercase tracking-wide mb-2">Wild Mushroom Risotto</h4>
                    <p className="text-sm text-muted-foreground italic">
                      Arborio rice, porcini, shiitake, truffle butter, parmesan
                    </p>
                  </div>
                  <span className="text-primary">32</span>
                </div>
              </div>
            </div>

            {/* Desserts */}
            <div>
              <h3 className="text-2xl mb-8 uppercase tracking-[0.15em] text-primary pb-3 border-b border-border">
                Desserts
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h4 className="uppercase tracking-wide mb-2">Dark Chocolate Torte</h4>
                    <p className="text-sm text-muted-foreground italic">
                      Valrhona chocolate, espresso cream, sea salt caramel
                    </p>
                  </div>
                  <span className="text-primary">14</span>
                </div>

                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h4 className="uppercase tracking-wide mb-2">Seasonal Crème Brûlée</h4>
                    <p className="text-sm text-muted-foreground italic">
                      Vanilla bean custard, caramelized sugar, fresh berries
                    </p>
                  </div>
                  <span className="text-primary">12</span>
                </div>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="mt-16 p-8 bg-card border border-border text-center">
            <p className="text-sm text-muted-foreground italic">
              Our menu changes seasonally to celebrate the freshest ingredients.<br />
              Please ask your server about today's chef specialties and wine pairings.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
