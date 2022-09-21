import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './components/services/Services';
import Team from './components/Team/Team';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
      <About/>
      <Services />
      <Team />
    </div>
  );
}

export default App;
