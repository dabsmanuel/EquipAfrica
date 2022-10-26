import './Services.css'
import card from './data';

const Services = () => {
  return (
    <section id="Services">
      <div className="services-container containers">
        <h1>Services</h1>
        <p>
          We are focused on enhancing the business sector in Africa, introducing
          africans to the worlds’ economy by connecting them to potential
          clients, and mentorship opportunities.
        </p>

        <div className="service-grid">
          {
            card.map(({id, icon, title, description}) =>{
              return (
                <div className="service-card" key={id}>
                  <div className="icon-container">{icon}</div>
                  <div className="card-writeup">
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              );
            })
          }
          
        </div>
      </div>
    </section>
  );
}

export default Services