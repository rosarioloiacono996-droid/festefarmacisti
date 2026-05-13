import React, { useState, useEffect } from 'react';
import { MessageCircle, MapPin, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import './Header.css';

const NAV_LINKS = [
  { label: 'Servizi', href: '#services' },
  { label: 'Come Funziona', href: '#method' },
  { label: 'Dove Siamo', href: '#location' },
  { label: 'Recensioni', href: '#testimonials' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkOpenStatus = () => {
      // Ottengo fuso orario italiano
      const nowString = new Date().toLocaleString("en-US", {timeZone: "Europe/Rome"});
      const now = new Date(nowString);
      
      const day = now.getDay(); // 0 = Sunday, 1 = Monday, ecc.
      const hour = now.getHours();
      const minutes = now.getMinutes();
      const time = hour + minutes / 60;

      if (day === 0) {
        setIsOpen(false); // Domenica
      } else if (day === 6) {
        // Sabato: 08:30 - 12:30
        setIsOpen(time >= 8.5 && time < 12.5);
      } else {
        // Lun-Ven: 08:30 - 12:30 / 15:30 - 19:30
        const isMorning = time >= 8.5 && time < 12.5;
        const isAfternoon = time >= 15.5 && time < 19.5;
        setIsOpen(isMorning || isAfternoon);
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo-brand">
          <img src={logo} alt="Farmacia Dell'Oca Logo" className="header-logo-img" />
          <div className="header-address-minimal">
            <MapPin size={12} /> Via Garibaldi, 95 - Fino Mornasco
          </div>
        </div>

        <div className="header-actions">
          <table className="header-hours-table">
            <tbody>
              <tr>
                <td>Lun - Ven</td>
                <td>08:30 - 19:30</td>
              </tr>
              <tr>
                <td>Sabato</td>
                <td>08:30 - 13:00</td>
              </tr>
              <tr>
                <td>Domenica</td>
                <td>Chiuso</td>
              </tr>
            </tbody>
          </table>

          <a href="https://wa.me/3934214121237" target="_blank" rel="noreferrer" className="btn btn-primary header-cta">
            <MessageCircle size={18} />
            <span>Scrivi su WhatsApp</span>
          </a>

          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Navigazione mobile">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/3934214121237"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary mobile-nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            <MessageCircle size={18} />
            Scrivi su WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
