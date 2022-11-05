import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from "./pages/Mentors/Team";
import Reps from "./pages/reps/Reps";
import Volunteers from "./pages/Volunteers/Volunteers";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import Headermodal from "./pages/headerModal/HeaderModal";
import BlogList from "./pages/blog/BlogList";
import BlogDetails from "./pages/blog/BlogDetails";
import Mentordetails from "./pages/Mentors/Mentordetails"
import AOS from "aos";
import "aos/dist/aos.css"; 
import Home from "./Home";
AOS.init();

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentors" element={<Team />} />
        <Route path="/mentor-details/:id" element={<Mentordetails />} />
        <Route path="/country-reps" element={<Reps />} />
        <Route path="/team" element={<Volunteers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Headermodal />} />
        <Route path="/blogDetails/:id" element={<BlogDetails />} />
        <Route path="/blog" element={<BlogList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
