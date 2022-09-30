import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Services from "./components/services/Services";
import Team from "./components/Mentors/Team";
import Volunteers from "./components/Volunteers/Volunteers";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Team />
      <Volunteers />
    </>
  );
}

export default App;
