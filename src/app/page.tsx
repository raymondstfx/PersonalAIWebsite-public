import { ExternalLink, Mail, MapPin } from "lucide-react";
import { ChatBox } from "@/components/ChatBox";
import { Navbar } from "@/components/Navbar";

const researchAreas = [
  "Machine learning for biomedical data analysis",
  "Cortical biomarker discovery and precision medicine",
  "Computer vision and lightweight crowd counting",
  "Evolutionary computation for optimization problems",
];

const projects = [
  {
    title: "Biomedical Biomarker Analysis",
    detail:
      "Used machine learning on the MiceProtein dataset to identify cortical protein biomarkers associated with learning and Down syndrome.",
    technologies: "Python, df-analyze, machine learning, feature selection",
    github: "https://github.com/raymondstfx/DataCleaningForMiceProtein",
  },
  {
    title: "Effective Crowd Counting",
    detail:
      "Improved a MobileCount-based lightweight crowd counting model with stronger density adaptation and feature fusion.",
    technologies: "Python, PyTorch, computer vision, deep learning",
    github: "https://github.com/raymondstfx/Thesis",
  },
  {
    title: "Evolutionary Computation",
    detail:
      "Implemented TSP, VRP, genetic programming, PSO, FSSP, and JSSP solvers for optimization and scheduling tasks.",
    technologies: "Python, evolutionary algorithms, optimization",
    github: "https://github.com/raymondstfx/EvolutinaryComputation",
  },
  {
    title: "Personal AI Website",
    detail:
      "A Next.js personal portfolio website with a Gemini-powered AI assistant that answers from a local Markdown knowledge base.",
    technologies: "Next.js, TypeScript, Gemini API, Vercel, Markdown",
    github: "https://github.com/raymondstfx/PersonalAIWeb",
  },
];

const publications = [
  {
    title:
      "Identifying Cortical Molecular Biomarkers Potentially Associated with Learning in Mice Using Artificial Intelligence",
    authors: "Huang, X., Gauthier, C., Berger, D., Cai, H., & Levman, J.",
    venue: "International Journal of Molecular Sciences, 26(14), 6878, 2025",
    note: "Xiyao Huang is the first author of this publication.",
    doi: "https://doi.org/10.3390/ijms26146878",
  },
];

const experiences = [
  {
    title: "IT Intern",
    organization: "Shanghai Chief Clouds Information Technology Co., Ltd.",
    period: "Jun. 2025 - Sep. 2025",
    detail:
      "Supported CDP module development, data ingestion and cleaning automation, ML model deployment for user tagging and recommendation, and AIGC feature design.",
  },
  {
    title: "Research Assistant",
    organization: "St. Francis Xavier University",
    period: "Feb. 2025 - May 2025",
    detail:
      "Assisted Dr. Hao Cai with computer vision research focused on crowd counting and lightweight deep learning models.",
  },
  {
    title: "Teaching Assistant",
    organization: "St. Francis Xavier University",
    period: "Jan. 2025 - Apr. 2025",
    detail:
      "Served as a teaching assistant for CSCI485 Software Design.",
  },
  {
    title: "Software Engineering Intern",
    organization: "Liyang Smart City Development and Operation Co., Ltd.",
    period: "Jun. 2024 - Aug. 2024",
    detail:
      "Worked on industrial information management system maintenance, internal AI platform development, and the Liyang Big Data platform.",
  },
];

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Personal AI Portfolio</p>
          <h1>Xiyao Huang</h1>
          <p className="lead">
            Master of Information Technology student at UNSW with a background in
            computer science, biomedical machine learning, computer vision, and
            applied AI systems.
          </p>

          <div className="hero-actions">
            <a className="primary-action" href="#assistant">
              AI Assistant
            </a>
          </div>

          <div className="contact-row" aria-label="Contact details">
            <span>
              <Mail size={16} />
              Australia: xyhuangau@gmail.com
            </span>
            <span>
              <Mail size={16} />
              UNSW: z5665125@ad.unsw.edu.au
            </span>
            <span>
              <Mail size={16} />
              International: raymondstfx239@gmail.com
            </span>
            <span>
              <MapPin size={16} />
              UNSW, Australia
            </span>
          </div>
        </div>

        <div className="portrait-wrap" aria-label="Portfolio demo visual">
          <div className="portrait-placeholder">AI Portfolio Website</div>
        </div>
      </section>

      <section className="profile-band">
        <div>
          <p className="eyebrow">Current Focus</p>
          <h2>AI for research, biomedical insight, and efficient vision models.</h2>
        </div>
        <p>
          Xiyao's work spans machine learning for MiceProtein biomarker analysis,
          deep learning for crowd counting, and practical engineering experience
          across data platforms, recommendation workflows, and internal AI tools.
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

      <section className="content-grid" id="publications">
        <div className="section-intro">
          <p className="eyebrow">Publications</p>
          <h2>Published work</h2>
        </div>
        <div className="publication-list">
          {publications.map((publication) => (
            <article className="publication-card" key={publication.doi}>
              <h3>{publication.title}</h3>
              <p className="publication-authors">{publication.authors}</p>
              <p className="publication-note">{publication.note}</p>
              <p>{publication.venue}</p>
              <a href={publication.doi} rel="noreferrer" target="_blank">
                <ExternalLink size={17} />
                DOI
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="content-grid" id="experience">
        <div className="section-intro">
          <p className="eyebrow">Experience</p>
          <h2>Work experience</h2>
        </div>
        <div className="experience-list">
          {experiences.map((experience) => (
            <article className="experience-card" key={`${experience.title}-${experience.period}`}>
              <div>
                <h3>{experience.title}</h3>
                <p className="experience-org">{experience.organization}</p>
              </div>
              <p className="experience-period">{experience.period}</p>
              <p>{experience.detail}</p>
            </article>
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
              <p className="project-tech">{project.technologies}</p>
              {project.github ? (
                <a href={project.github} rel="noreferrer" target="_blank">
                  <ExternalLink size={17} />
                  GitHub
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="assistant-layout">
        <div className="assistant-copy">
          <p className="eyebrow">AI Assistant</p>
          <h2>Ask the AI assistant</h2>
          <p>
            Ask about Xiyao's research, publications, experience, projects, and
            technical background.
          </p>
        </div>
        <ChatBox />
      </section>

      <footer>
        <span>Xiyao Huang</span>
        <span>Australia: xyhuangau@gmail.com</span>
        <span>UNSW: z5665125@ad.unsw.edu.au</span>
        <span>International: raymondstfx239@gmail.com</span>
      </footer>
    </main>
  );
}
