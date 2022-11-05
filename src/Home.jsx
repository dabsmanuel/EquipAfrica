import About from "./components/About/About";
import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/services/Services";


const Home = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <About/>
        <Services/>
        <Footer/>
    </>
  )
}

export default Home