import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './app/components/Navigation';
import { Footer } from './app/components/Footer';
import { LandingPage } from './app/pages/LandingPage';
import { MenuPage } from './app/pages/MenuPage';
import { ReservationsPage } from './app/pages/ReservationsPage';
import { PrivateDiningPage } from './app/pages/PrivateDiningPage';
import { ShopPage } from './app/pages/ShopPage';
import { CareersPage } from './app/pages/CareersPage';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/reservations" element={<ReservationsPage />} />
            <Route path="/private-dining" element={<PrivateDiningPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/careers" element={<CareersPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;