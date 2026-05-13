import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contatti" className="footer">
      <div className="container footer-grid">
        
        <div className="footer-col branding-col">
          <div className="footer-logo-brand">
            <img src={logo} alt="Farmacia Dell'Oca Logo" className="footer-logo-img" />
          </div>
          <p className="footer-desc">Il tuo primo presidio sanitario. Professionisti pronti ad ascoltarti, prima di tutto.</p>
          <div className="footer-legal-inline">
            PIVA: 02638190138 - REA: 272398
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Contatti</h4>
          <ul className="footer-links">
            <li>
              <a href="tel:+39031920165" className="footer-link">
                <Phone size={18} /> +39 031 920 165
              </a>
            </li>
            <li>
              <a href="https://wa.me/393421471237" className="footer-link">
                <Phone size={18} /> WhatsApp: 342 147 1237
              </a>
            </li>
            <li>
              <a href="mailto:farmaciadelloca@libero.it" className="footer-link">
                <Mail size={18} /> farmaciadelloca@libero.it
              </a>
            </li>
            <li>
              <a href="https://www.google.com/maps/search/?api=1&query=Via+Garibaldi+95+Fino+Mornasco" target="_blank" rel="noreferrer" className="footer-link">
                <MapPin size={18} /> Via Garibaldi, 95 - 22073 Fino Mornasco (CO)
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Orari di Apertura</h4>
          <ul className="footer-links hours-list">
            <li><Clock size={16} /> <span>Lun - Ven:</span> 08:30 - 19:30 (Continuato)</li>
            <li><Clock size={16} /> <span>Sabato:</span> 08:30 - 13:00</li>
            <li><Clock size={16} /> <span>Domenica:</span> Chiuso</li>
          </ul>
        </div>

      </div>
      
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <div className="legal-info">
            <ShieldCheck size={16} /> &copy; {new Date().getFullYear()} Farmacia - Tutti i diritti riservati
          </div>
          <div className="useful-links">
            <a 
              href="https://www.farmaciediturno.org/provincia.asp?cod=13" 
              target="_blank" 
              rel="noreferrer" 
              className="footer-link-small"
            >
              Scopri la farmacia di turno oggi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
