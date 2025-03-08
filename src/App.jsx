import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Demo from "./components/Demo";
import * as Sentry from "@sentry/react";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
function App() {
  
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features/>
      {/* <Demo/> */}
      <HowItWorks />
      <Footer/>
    </main>
  );
}

const WrappedApp = Sentry.withProfiler(App);
export default WrappedApp;
