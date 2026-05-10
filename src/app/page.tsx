import { Mail, MapPin } from "lucide-react";
import { ChatBox } from "@/components/ChatBox";

const researchAreas = [
  "Machine learning for biomedical data analysis",
  "Biomarker discovery and precision medicine",
  "Computer vision and biomedical imaging",
  "Evolutionary computation for optimization problems",
];

const projects = [
  {
    title: "Biomedical Data Analysis",
    detail:
      "A demo project showing how machine learning can support biomarker discovery and disease outcome prediction workflows.",
  },
  {
    title: "Computer Vision Research",
    detail:
      "A sample research summary for lightweight computer vision models, biomedical imaging, and density estimation tasks.",
  },
  {
    title: "Evolutionary Computation",
    detail:
      "Implemented TSP, VRP, genetic programming, PSO, FSSP, and JSSP solvers for optimization and scheduling tasks.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#top">
          Demo User
        </a>
        <div className="nav-links">
          <a href="#research">Research</a>
          <a href="#projects">Projects</a>
          <a href="#assistant">AI Assistant</a>
          <a href="#assistant">Demo Chat</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Personal AI Portfolio</p>
          <h1>Demo User</h1>
          <p className="lead">
            A public AI portfolio demo for showcasing a server-side Gemini
            assistant, sanitized profile data, selected projects, and applied AI
            interests.
          </p>

          <div className="hero-actions">
            <a className="primary-action" href="#assistant">
              Try the assistant
            </a>
          </div>

          <div className="contact-row" aria-label="Contact details">
            <span>
              <Mail size={16} />
              demo@example.com
            </span>
            <span>
              <MapPin size={16} />
              Demo Location
            </span>
          </div>
        </div>

        <div className="portrait-wrap" aria-label="Demo profile visual">
          <div className="portrait-placeholder">AI Portfolio Demo</div>
        </div>
      </section>

      <section className="profile-band">
        <div>
          <p className="eyebrow">Current Focus</p>
          <h2>AI for research, biomedical insight, and efficient vision models.</h2>
        </div>
        <p>
          This public version uses placeholder profile content to demonstrate how
          a portfolio assistant can answer questions from a local markdown
          knowledge base without exposing private materials.
        </p>
      </section>

      <section className="content-grid" id="research">
        <div className="section-intro">
          <p className="eyebrow">Research</p>
          <h2>Research interests</h2>
        </div>
        <div className="pill-grid">
          {researchAreas.map((area) => (
            <div className="interest-pill" key={area}>
              {area}
            </div>
          ))}
        </div>
      </section>

      <section className="content-grid" id="projects">
        <div className="section-intro">
          <p className="eyebrow">Selected Work</p>
          <h2>Projects and experience</h2>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="assistant-layout">
        <div className="assistant-copy">
          <p className="eyebrow">Basic AI Assistant</p>
          <h2>The assistant now answers from a local profile knowledge base.</h2>
          <p>
            This assistant answers questions based on sanitized demo profile
            content, sample research interests, selected projects, and technical
            experience.
          </p>
        </div>
        <ChatBox />
      </section>

      <footer>
        <span>Demo User</span>
        <span>AI-powered portfolio demo</span>
      </footer>
    </main>
  );
}
