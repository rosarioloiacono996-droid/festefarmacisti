import React, { useState, useEffect } from 'react';
import { MessageCircle, Clock } from 'lucide-react';
import './Hero.css';

const schedule = [
  [], // Sun 0
  [{start: 8.5, end: 19.5}], // Mon 1
  [{start: 8.5, end: 19.5}], // Tue 2
  [{start: 8.5, end: 19.5}], // Wed 3
  [{start: 8.5, end: 19.5}], // Thu 4
  [{start: 8.5, end: 19.5}], // Fri 5
  [{start: 8.5, end: 13.0}], // Sat 6
];

const Hero = () => {
  const [storeStatus, setStoreStatus] = useState({ isOpen: true, text: "" });

  useEffect(() => {
    const calculateStatus = () => {
      const nowStr = new Date().toLocaleString("en-US", {timeZone: "Europe/Rome"});
      const now = new Date(nowStr);
      let curDay = now.getDay();
      let time = now.getHours() + now.getMinutes() / 60;
      
      let todayShifts = schedule[curDay];
      let isOpenNow = false;
      
      for(let shift of todayShifts) {
         if(time >= shift.start && time < shift.end) {
            isOpenNow = true;
            break;
         }
      }
      
      if (isOpenNow) {
        setStoreStatus({ isOpen: true, text: "Siamo aperti! Rispondiamo subito." });
        return;
      }
      
      // Controlla se riapre più tardi oggi
      for(let shift of todayShifts) {
         if(time < shift.start) {
            let diffHrs = shift.start - time;
            let diffMins = Math.round(diffHrs * 60);
            let h = Math.floor(diffMins / 60);
            let m = diffMins % 60;
            let diffStr = "";
            if (h > 0) diffStr += `${h} or${h === 1 ? 'a' : 'e'}`;
            if (h > 0 && m > 0) diffStr += " e ";
            if (m > 0) diffStr += `${m} minut${m === 1 ? 'o' : 'i'}`;
            if (diffStr === "") diffStr = "pochi istanti";
            
            setStoreStatus({ isOpen: false, text: `Ora chiusi. Riapriamo tra ${diffStr}` });
            return;
         }
      }
      
      // Altrimenti cerca il prossimo giorno
      let daysAdded = 1;
      let nextDay = (curDay + daysAdded) % 7;
      while(schedule[nextDay].length === 0) {
        daysAdded++;
        nextDay = (curDay + daysAdded) % 7;
      }
      
      if (daysAdded === 1) {
        let nextStart = schedule[nextDay][0].start;
        let hh = Math.floor(nextStart);
        let mm = (nextStart - hh) * 60;
        setStoreStatus({ isOpen: false, text: `Ora chiusi. Riapriamo domani alle ${hh.toString().padStart(2,'0')}:${mm.toString().padStart(2,'0')}` });
      } else {
        setStoreStatus({ isOpen: false, text: `Ora chiusi. Riapriamo lunedì alle 08:30` }); 
      }
    };

    calculateStatus();
    const interval = setInterval(calculateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-background">
        <img src="/hero.png" alt="Il team della Farmacia Dell'Oca al banco" className="hero-img" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Farmaci, rimedi naturali e il consiglio di un farmacista esperto.
          </h1>
          <p className="hero-subtitle">
            Se cerchi un consiglio, un farmaco o integratore per la tua salute scrivici e troverai un farmacista pronto ad aiutarti con empatia e professionalità.
          </p>
          <div className="hero-actions-container">
            <a href="https://wa.me/3934214121237" target="_blank" rel="noreferrer" className="btn btn-primary btn-lg hero-cta">
              <MessageCircle size={24} />
              Scrivi su WhatsApp
            </a>
            {!storeStatus.isOpen && (
              <div className="store-status-text closed">
                <Clock size={16} />
                {storeStatus.text}
              </div>
            )}
            {storeStatus.isOpen && (
              <div className="store-status-text open">
                <div className="status-dot hero-dot"></div>
                {storeStatus.text}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
