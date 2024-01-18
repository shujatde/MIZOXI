/** @format */

import "./App.css";
import About from "./Components/About";
import AuthorComponent from "./Components/Author";
import ContactComponent from "./Components/Contact";
import Footer from "./Components/Footer";
import FormComponent from "./Components/FormComponent";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";

function App() {
  return (
    <div className='App'>
      <Header />
      <HeroSection />
      <FormComponent />
      <About />
      <AuthorComponent />
      <ContactComponent />
      <Footer />
    </div>
  );
}

export default App;
