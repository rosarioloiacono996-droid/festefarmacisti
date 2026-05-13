import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Car, Train, Bus, Clock, ExternalLink } from 'lucide-react';
import './LocationSection.css';

const schedule = [
  [], // Sun 0
  [{start: 8.5, end: 19.5}], // Mon 1
  [{start: 8.5, end: 19.5}], // Tue 2
  [{start: 8.5, end: 19.5}], // Wed 3
  [{start: 8.5, end: 19.5}], // Thu 4
  [{start: 8.5, end: 19.5}], // Fri 5
  [{start: 8.5, end: 13.0}],   // Sat 6
];

const LocationSection = () => {
  const [storeStatus, setStoreStatus] = useState({ isOpen: true, text: "" });

  useEffect(() => {
    const calculateStatus = () => {
      const nowStr = new Date().toLocaleString("en-US", {timeZone: "Europe/Rome"});
      const now = new Date(nowStr);
      let curDay = now.getDay();
      let time = now.getHours() + now.getMinutes() / 60;
      let todayShifts = schedule[curDay];
      let isOpenNow = false;
      let nextActionTime = 0;

      for(let shift of todayShifts) { 
        if(time >= shift.start && time < shift.end) { 
          isOpenNow = true; 
          nextActionTime = shift.end; 
          break; 
        } 
      }

      if (isOpenNow) {
        let h = Math.floor(nextActionTime); let m = Math.round((nextActionTime - h) * 60);
        setStoreStatus({ isOpen: true, text: `Aperti — chiudiamo alle ${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}` });
        return;
      }
      
      for(let shift of todayShifts) { 
        if(time < shift.start) { 
          let hh = Math.floor(shift.start); let mm = Math.round((shift.start - hh) * 60); 
          setStoreStatus({ isOpen: false, text: `Chiusi — riapriamo alle ${hh.toString().padStart(2,'0')}:${mm.toString().padStart(2,'0')}` }); 
          return; 
        } 
      }

      let daysAdded = 1; let nextDay = (curDay + daysAdded) % 7; while(schedule[nextDay].length === 0) { daysAdded++; nextDay = (curDay + daysAdded) % 7; }
      let nextStart = schedule[nextDay][0].start; let hhr = Math.floor(nextStart); let mmm = Math.round((nextStart - hhr) * 60);
      setStoreStatus({ isOpen: false, text: `Chiusi — apriamo ${daysAdded === 1 ? 'domani' : 'lunedì'} alle ${hhr.toString().padStart(2,'0')}:${mmm.toString().padStart(2,'0')}` });
    };
    calculateStatus();
    const interval = setInterval(calculateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Farmacia+dell'Oca+Via+Garibaldi+95+Fino+Mornasco";

  return (
    <section id="contatti" className="section location-section">
      <div className="container">
        <h2 className="section-title">Dove siamo</h2>
        <p className="section-subtitle">
          Via Garibaldi, 95 — Fino Mornasco (CO)
        </p>

        <div className="location-grid">
          <div className="location-info">
            <div className="map-wrapper glass-card">
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noreferrer"
                className="map-link-overlay"
                aria-label="Apri in Google Maps"
              ></a>
              <iframe 
                title="Mappa Farmacia Dell'Oca"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2790.3444062835496!2d9.0494441!3d45.7411111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786d790f90f69d3%3A0x167860573e4d5fc1!2sVia%20Giuseppe%20Garibaldi%2C%2095%2C%2022073%20Fino%20Mornasco+CO!5e0!3m2!1sit!2sit!4v1650000000000!5m2!1sit!2sit" 
                width="100%" 
                height="350" 
                style={{ border: 0, borderRadius: '12px' }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="transport-info">
            <div className="info-group">
              <h3 className="group-title"><Car size={20} /> Parcheggi vicini</h3>
              
              <div className="parking-item-styled">
                <div className="icon-circle"><Car size={24} /></div>
                <div>
                  <strong>Davanti alla Farmacia</strong>
                  <p>Strisce blu/bianche lungo Via Garibaldi. Tempo: 0 min.</p>
                </div>
              </div>

              <div className="parking-item-styled">
                <div className="icon-circle"><Car size={24} /></div>
                <div>
                  <strong>Piazza della Rimembranza</strong>
                  <p>A circa 150 metri (2 min a piedi). Comodo e spazioso.</p>
                </div>
              </div>
            </div>

            <div className="info-group">
              <h3 className="group-title">Mezzi pubblici</h3>
              <div className="transport-item">
                <Train size={18} />
                <p><strong>Dalla stazione:</strong> Solo 4 minuti a piedi (350m). Esci e segui le indicazioni per il centro, siamo sulla via principale.</p>
              </div>
              <div className="transport-item">
                <Bus size={18} />
                <p><strong>Autobus:</strong> Fermata Fino Mornasco - Centro a pochi passi.</p>
              </div>
            </div>

            <div className="hours-card glass-card">
              <div className={`status-banner ${storeStatus.isOpen ? 'open' : 'closed'}`}>
                <Clock size={18} />
                {storeStatus.text}
              </div>
              <table className="hours-table-full">
                <tbody>
                  <tr><td>Lun - Ven</td><td>08:30 - 19:30 (Continuato)</td></tr>
                  <tr><td>Sabato</td><td>08:30 – 13:00</td></tr>
                  <tr><td>Domenica</td><td>Chiuso</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="section-cta-container">
          <a 
            href={googleMapsUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-primary btn-lg"
          >
            Apri in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
