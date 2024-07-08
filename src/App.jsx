import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
   
   <Router>
     <div className= "overflow-x-hidden text-neutral-400 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-2np0%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
        <div className="container mx-auto px-8"></div>
        <NavBar />
     <Routes>
      <Route path="/" element={<Hero/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/technologies" element={<Technologies/>}></Route>
     <Route path="/projects" element={ <Projects />}></Route>
     </Routes>
    </div>
   </Router>
  );
}

export default App;

