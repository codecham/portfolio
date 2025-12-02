import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        
        {/* Placeholder sections - to be replaced with actual components */}
        <section id="about" className="section bg-background-light">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-4">About</h2>
            <p className="text-text-muted">Section under development...</p>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <p className="text-text-muted">Section under development...</p>
          </div>
        </section>

        <section id="experience" className="section bg-background-light">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <p className="text-text-muted">Section under development...</p>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <p className="text-text-muted">Section under development...</p>
          </div>
        </section>

        <section id="contact" className="section bg-background-light">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-text-muted">Section under development...</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}