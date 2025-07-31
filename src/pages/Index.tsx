import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Partnership from "@/components/Partnership";
import Team from "@/components/Team";
import Careers from "@/components/Careers";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Partnership />
      <Team />
      <Careers />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
