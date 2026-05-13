import { HeartPulse, Droplet, UserCheck, ArrowRight, ActivitySquare, ShieldCheck, Bluetooth as Tooth, Stethoscope, Gauge, FlaskConical, Thermometer } from 'lucide-react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      icon: <FlaskConical size={32} className="service-icon" />,
      title: "Analisi di sangue, pelle e capello",
      desc: "Check-up completi per il benessere di base, con risultati rapidi e consulenza inclusa."
    },
    {
      icon: <HeartPulse size={32} className="service-icon" />,
      title: "Holter Cardiaco e Pressorio",
      desc: "Servizio di monitoraggio professionale, disponibile anche a domicilio per il massimo comfort."
    },
    {
      icon: <Droplet size={32} className="service-icon" />,
      title: "Intolleranze e Streptococco",
      desc: "Test mirati per allergie alimentari e ricerca rapida dello streptococco faringeo."
    },
    {
      icon: <Gauge size={32} className="service-icon" />,
      title: "Pressione e AFib",
      desc: "Misurazione professionale della pressione con rilevazione precoce della fibrillazione atriale."
    },
    {
      icon: <Stethoscope size={32} className="service-icon" />,
      title: "Noleggio Elettromedicali",
      desc: "Magnetoterapia, tiralatte, aerosol, carrozzelle e deambulatori sempre disponibili."
    },
    {
      icon: <UserCheck size={32} className="service-icon" />,
      title: "Prenotazioni CUP",
      desc: "Siamo un punto di accesso diretto per prenotare esami e visite nel sistema sanitario pubblico."
    }
  ];

  return (
    <section id="servizi" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Esami e servizi effettuati</h2>
        <p className="section-subtitle">
          Senza liste d'attesa, con la professionalità e l'attenzione che meriti.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card-vertical glass-card hover-scale">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title-large">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="section-cta-container">
          <a 
            href="https://wa.me/393421471237" 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-primary btn-lg"
          >
            PRENOTA ORA
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
