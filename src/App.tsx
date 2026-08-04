import Header from "@/components/sections/Header/Header";
import About from "@/components/sections/About/About";
import Services from "@/components/sections/Services/Services";
import Hero from "@/components/sections/Hero/Hero";
import Actions from "@/components/sections/Actions/Actions";
import References from "@/components/sections/References/References";
import Contact from "@/components/sections/Contact/Contact";
import Footer from "@/components/sections/Footer/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <Actions />
        <References />
        <Contact />

      </main>

      <Footer />
    </>
  );
}

export default App;