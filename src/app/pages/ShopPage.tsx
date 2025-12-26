import { ShoppingBag, Package, Gift } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ShopPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758685493098-d3a09d4044d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXIlMjBjb2NrdGFpbHN8ZW58MXx8fHwxNzY2NTg2NDExfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Shop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-[0.2em] uppercase">
            Shop
          </h1>
          <p className="text-lg text-muted-foreground italic">
            Take the Ritual House experience home
          </p>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-16 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758685493098-d3a09d4044d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXIlMjBjb2NrdGFpbHN8ZW58MXx8fHwxNzY2NTg2NDExfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Batch No. 1"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="inline-block px-4 py-1 border border-primary text-primary text-xs uppercase tracking-[0.15em] mb-6">
                Featured Product
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 uppercase tracking-[0.15em]">
                Batch: No. 1
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our signature house-made brine, crafted with a proprietary blend of spices and aromatics. Perfect for cocktails, marinades, or adding depth to your culinary creations.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Package className="w-5 h-5 text-primary" />
                  <span className="text-sm">16 oz glass bottle</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShoppingBag className="w-5 h-5 text-primary" />
                  <span className="text-sm">Small batch production</span>
                </div>
                <div className="flex items-center gap-3">
                  <Gift className="w-5 h-5 text-primary" />
                  <span className="text-sm">Makes an excellent gift</span>
                </div>
              </div>

              <div className="mb-8">
                <span className="text-3xl text-primary">$24</span>
                <span className="text-muted-foreground ml-2">per bottle</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="text-sm uppercase tracking-wide">Quantity:</label>
                  <select className="p-3 bg-input-background border border-border outline-none focus:border-primary transition-colors">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6+</option>
                  </select>
                </div>

                <button className="w-full py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-[0.15em]">
                  Add to Cart
                </button>

                <button className="w-full py-4 border border-border text-foreground hover:bg-card transition-colors uppercase tracking-[0.15em]">
                  Buy as Gift
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl mb-6 uppercase tracking-[0.15em]">About the Product</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Batch: No. 1 is our carefully crafted house brine, developed by our culinary team to embody the spirit of Ritual House. Each bottle contains a complex blend of:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="list-disc">Premium sea salt</li>
                  <li className="list-disc">Artisanal spices</li>
                  <li className="list-disc">Fresh herbs</li>
                  <li className="list-disc">Signature aromatics</li>
                </ul>
                <p>
                  Perfect for use in cocktails, as a marinade base, or to add sophistication to everyday dishes.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl mb-6 uppercase tracking-[0.15em]">Usage & Storage</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="p-6 bg-card border border-border">
                  <h4 className="uppercase tracking-wide mb-3 text-foreground">Cocktail Use</h4>
                  <p className="text-sm">Add 1-2 oz to your favorite spirits for a unique twist on classic cocktails</p>
                </div>
                <div className="p-6 bg-card border border-border">
                  <h4 className="uppercase tracking-wide mb-3 text-foreground">Culinary Use</h4>
                  <p className="text-sm">Use as a marinade for meats, vegetables, or as a finishing touch to soups and sauces</p>
                </div>
                <div className="p-6 bg-card border border-border">
                  <h4 className="uppercase tracking-wide mb-3 text-foreground">Storage</h4>
                  <p className="text-sm">Refrigerate after opening. Best within 6 months of opening</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Cards Section */}
      <section className="py-16 px-6 bg-card">
        <div className="container mx-auto max-w-4xl text-center">
          <Gift className="w-16 h-16 text-primary mx-auto mb-8" />
          <h2 className="text-4xl mb-6 uppercase tracking-[0.15em]">
            Gift Cards
          </h2>
          <p className="text-muted-foreground italic mb-12 max-w-2xl mx-auto">
            Share the gift of an exceptional dining experience with Ritual House gift cards
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <button className="p-8 border border-border hover:border-primary transition-all">
              <span className="text-3xl text-primary mb-4 block">$50</span>
              <span className="text-sm uppercase tracking-wide">Standard</span>
            </button>
            <button className="p-8 border border-primary transition-all">
              <span className="text-3xl text-primary mb-4 block">$100</span>
              <span className="text-sm uppercase tracking-wide">Popular</span>
            </button>
            <button className="p-8 border border-border hover:border-primary transition-all">
              <span className="text-3xl text-primary mb-4 block">$250</span>
              <span className="text-sm uppercase tracking-wide">Premium</span>
            </button>
          </div>

          <button className="px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors uppercase tracking-[0.15em]">
            Purchase Gift Card
          </button>

          <p className="text-sm text-muted-foreground mt-6">
            Custom amounts available. Gift cards never expire.
          </p>
        </div>
      </section>

      {/* Shipping Info */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Package className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="uppercase tracking-wide mb-2">Free Shipping</h4>
              <p className="text-sm text-muted-foreground">On orders over $50</p>
            </div>
            <div className="p-6">
              <ShoppingBag className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="uppercase tracking-wide mb-2">Secure Checkout</h4>
              <p className="text-sm text-muted-foreground">Safe & encrypted payment</p>
            </div>
            <div className="p-6">
              <Gift className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="uppercase tracking-wide mb-2">Gift Packaging</h4>
              <p className="text-sm text-muted-foreground">Complimentary for all orders</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
