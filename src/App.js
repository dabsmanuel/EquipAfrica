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
        <Route path="/mentor-details/:id/:name" element={<Mentordetails />} />
        <Route exact path="/country-reps" element={<Reps />} />
        <Route exact path="/team" element={<Volunteers />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/apply" element={<Headermodal />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/blog-details/:id" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
