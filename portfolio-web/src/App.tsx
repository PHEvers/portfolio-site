import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experiences } from "./sections/Experiences";
import { Contact } from "./sections/Contact";
import { Skills } from "./sections/Skills";

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Experiences />{/* 2. Adiciona a seção aqui */}
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;