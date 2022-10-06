import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Services from "./components/services/Services";
import Team from "./components/Mentors/Team";
import Volunteers from "./components/Volunteers/Volunteers";
import Footer from "./components/footer/Footer";
import mentors from "./mentorData";
import Teamcard from "./components/TeamCard/Teamcard";
import Contact from "./components/contact/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Teamcard />
      <div className="mentors">
        {mentors.map((data) => (
          <Team
            key={data.id}
            photo={data.photo}
            name={data.name}
            country={data.country}
            description={data.description}
          />
        ))}
      </div>
      <Volunteers />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
