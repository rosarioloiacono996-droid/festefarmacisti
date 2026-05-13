import React from 'react';
import { Pill, Activity, HeartPulse, MessageCircle } from 'lucide-react';
import './TriageSection.css';

const TriageSection = () => {
  const cards = [
    {
      icon: <Activity size={32} className="triage-icon" />,
      title: 'Non sto bene e non so cosa prendere',
      desc: "Prima di cercare su Google, raccontaci i sintomi. In due minuti capiamo insieme se basta un farmaco da banco, se serve qualcosa di più mirato o se è il caso di sentire il medico."
    },
    {
      icon: <Pill size={32} className="triage-icon" />,
      title: 'Hai una ricetta o un ordine da fare',
      desc: "Il medico ti ha prescritto un farmaco, o stai cercando un integratore? Mandaci la ricetta o il nome del prodotto: lo prepariamo per quando passi a ritirarlo, senza fila al banco."
    },
    {
      icon: <HeartPulse size={32} className="triage-icon" />,
      title: 'Vuoi un parere prima di comprare',
      desc: "Integratore, cosmetico, prodotto visto in pubblicità: portacelo o mandaci una foto. Ti diciamo onestamente se ha senso per il tuo caso."
    }
  ];

  return (
    <section id="triage" className="section bg-light">
      <div className="container">
        <div className="section-header-centered">
          <span className="section-eyebrow">Come ti aiutiamo</span>
          <h2 className="section-title">Cosa puoi chiederci, in pratica</h2>
          <p className="section-subtitle">
            Il nostro team risponde su WhatsApp, al telefono o al banco — dal lunedì al sabato.
          </p>
        </div>
        
        <div className="triage-grid">
          {cards.map((card, index) => (
            <div key={index} className="glass-card hover-scale triage-card">
              <div className="triage-icon-wrapper">
                {card.icon}
              </div>
              <h3 className="triage-card-title">{card.title}</h3>
              <p className="triage-card-desc">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="section-cta-container">
          <a href="https://wa.me/39031920165" target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">
            <MessageCircle size={24} />
            Scrivici su WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default TriageSection;
