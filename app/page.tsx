import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        
        {/* Placeholder section - Contact */}
        <section id="contact" className="py-20 md:py-28 bg-background-light">
          <div className="container-custom">
            <h2 className="text-4xl font-bold mb-6">Contact</h2>
            <p className="text-text-muted">Section under development...</p>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}