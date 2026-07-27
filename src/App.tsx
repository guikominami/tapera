import Header from "@/components/sections/Header/Header";
import About from "@/components/sections/About/About";
import Services from "@/components/sections/Services/Services";
import Hero from "@/components/sections/Hero/Hero";
import SectionDivider from "./components/sections/SectionDivider";
import Footer from "@/components/sections/Footer/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <SectionDivider />
        <Services />
      </main>

      <Footer />
    </>
  );
}

export default App;