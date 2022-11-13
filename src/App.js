import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from "./pages/Mentors/Team";
import Reps from "./pages/reps/Reps";
import Volunteers from "./pages/Volunteers/Volunteers";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import Headermodal from "./pages/headerModal/HeaderModal";
import Mentordetails from "./pages/Mentors/Mentordetails"
import Blog from "./components/Blog/Blog"
import BlogDetails from "./components/Blog/BlogDetails"
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
        <Route path="/blog" element={<Blog />} /> 
        <Route path="/blog-detail" element={<BlogDetails />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
