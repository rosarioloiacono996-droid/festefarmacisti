import React from 'react';
import { BrainCircuit, ShieldBan, PackageCheck } from 'lucide-react';
import './MethodSection.css';

const MethodSection = () => {
  const methods = [
    {
      icon: <BrainCircuit size={40} className="method-icon" />,
      title: "Memoria e Attenzione",
      desc: "Conosciamo le tue terapie abituali e le tue allergie. Non sei un numero in fila, sei una persona di cui conosciamo la storia clinica."
    },
    {
      icon: <ShieldBan size={40} className="method-icon" />,
      title: 'Il "No" che fa bene',
      desc: "Se un prodotto commerciale non è adatto a te o è superfluo, te lo sconsigliamo apertamente. La nostra credibilità vale più di una vendita."
    },
    {
      icon: <PackageCheck size={40} className="method-icon" />,
      title: "Tutto il necessario, subito",
      desc: "Dal farmaco salvavita al rimedio per un disturbo passeggero, abbiamo un assortimento completo. E se manca qualcosa, lo procuriamo in poche ore."
    }
  ];

  return (
    <section id="metodo" className="section method-section">
      <div className="container">
        <h2 className="section-title">Perché le persone tornano da noi.</h2>
        
        <div className="method-grid">
          {methods.map((item, index) => (
            <div key={index} className="method-item">
              <div className="method-icon-container">
                {item.icon}
              </div>
              <div className="method-content">
                <h3 className="method-title">{item.title}</h3>
                <p className="method-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
