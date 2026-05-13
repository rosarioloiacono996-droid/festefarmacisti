import React from 'react';
import { Star, Quote, User } from 'lucide-react';
import './TestimonialsSection.css';

const testimonials = [
  {
    source: "Recensione Google",
    rating: 5,
    text: "Serietà, affidabilità, gentilezza e disponibilità... e la responsabile è simpaticissima ed adorabile... Quando vai lì ti senti a casa..."
  },
  {
    source: "Recensione Google",
    rating: 5,
    text: "Sempre cortesi e pronte a dare consigli utili. Brave!"
  },
  {
    source: "Recensione Google",
    rating: 5,
    text: "Non potevo uscire di casa e mi hanno portato il farmaco a domicilio perdipiù in una giornata di pioggia intensa."
  },
  {
    source: "Recensione Google",
    rating: 5,
    text: "È la mia farmacia di sempre... È molto importante un rapporto di stima e fiducia: professionali, disponibili sempre e squisitamente cortesi."
  },
  {
    source: "Recensione Google",
    rating: 4,
    text: "Farmacia ben fornita. Ci sono andato per un farmaco non sostituibile, di cui c'è carenza produttiva e sembrava introvabile. Invece lo avevano in casa."
  },
  {
    source: "Recensione Google",
    rating: 5,
    text: "Ragazza al bancone molto preparata e simpatica! Anche se solo per un travelgum è stata veramente precisa e professionale!"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section testimonials-section bg-light">
      <div className="container">
        <h2 className="section-title">Cosa dicono di noi</h2>
        <p className="section-subtitle">Recensioni reali dai nostri clienti su Google.</p>
        
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card-v2 glass-card-white">
              <div className="testimonial-header">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={14} 
                      fill={i < t.rating ? "#f59e0b" : "transparent"} 
                      color={i < t.rating ? "#f59e0b" : "#d1d5db"} 
                    />
                  ))}
                </div>
                <span className="source-label">{t.source}</span>
              </div>
              <p className="testimonial-content">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
