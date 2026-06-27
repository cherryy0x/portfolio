import { useEffect, useState } from 'react';

const skills = [
  'Python',
  'Java',
  'SQL',
  'HTML',
  'CSS',
  'Data Science',
  'Artificial Intelligence',
  'Data Structures',
  'Advanced Data Structures',
];

const highlights = [
  {
    title: 'Product-minded development',
    text: 'I focus on building solutions that are useful, polished, and aligned with real user needs.',
  },
  {
    title: 'Strong fundamentals',
    text: 'Clean logic, problem-solving discipline, and structured thinking shape the way I build.',
  },
  {
    title: 'Fast learner',
    text: 'I enjoy exploring new stacks, tools, and emerging technologies with curiosity and practical focus.',
  },
];

const projects = [
  {
    title: 'Online Learning Platform',
    stack: 'Java, SQL, HTML',
    description:
      'Built an interactive platform for students to track progress, unlock rewards, and stay motivated through a gamified experience.',
  },
  {
    title: 'Weather Tracker',
    stack: 'Java, Data Science',
    description:
      'Developed a Java-based application for weather data analysis with real-time API integration for accurate forecasting.',
  },
  {
    title: 'AI-Powered Quiz Hub',
    stack: 'Node.js, MongoDB, Firebase',
    description:
      'Created a full-stack quiz experience with timed quizzes, leaderboards, and real-time score updates.',
  },
  {
    title: 'LeetCode Tracker Dashboard',
    stack: 'React, APIs, Charts',
    description:
      'Designed a responsive progress dashboard that visualizes coding statistics, streaks, and problem-solving trends.',
  },
];

const certifications = [
  'SQL Certification — Oracle',
  'PL/SQL Certification — Oracle',
  'Generative AI — Google Cloud',
  'Programming Essentials in Python — Cisco',
  'Programming Essentials in C — Cisco',
  'Introduction to Cyber Security — Cisco',
  'CCNA Essentials — Cisco',
  'Automation Explorer — UI Path Academy',
];

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="app-shell">
      {loading && (
        <div className="preloader">
          <div className="preloader-orb" />
          <p>Preparing your experience...</p>
        </div>
      )}

      <header className="topbar glass-card">
        <a href="#home" className="brand">
          Charishma<span>.</span>
        </a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <div className="hero-badge">Open to opportunities • Available for collaboration</div>
            <p className="eyebrow">Aspiring Software Engineer • AI & Data Science Enthusiast</p>
            <h1>Crafting thoughtful digital experiences with code and curiosity.</h1>
            <p className="lead">
              I’m Charishma Sirivelli, a passionate developer who enjoys building polished digital products,
              exploring AI-driven solutions, and turning ideas into impactful experiences.
            </p>

            <div className="stats-grid">
              <div className="stat-pill">
                <strong>8.58</strong>
                <span>CGPA</span>
              </div>
              <div className="stat-pill">
                <strong>4+</strong>
                <span>Projects</span>
              </div>
              <div className="stat-pill">
                <strong>8</strong>
                <span>Certifications</span>
              </div>
            </div>

            <div className="cta-row">
              <a href="#projects" className="btn btn-primary">
                Explore Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orb orb-a" />
            <div className="orb orb-b" />
            <div className="glass-card spotlight-card">
              <p className="mini-label">Currently exploring</p>
              <h3>AI-powered products, responsive interfaces, and scalable systems.</h3>
              <div className="mini-tags">
                <span>Python</span>
                <span>React</span>
                <span>AI</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section grid-two">
          <div className="glass-card section-card">
            <p className="mini-label">About</p>
            <h2>Motivated, curious, and eager to create meaningful impact.</h2>
            <p>
              My journey blends problem-solving, creative coding, and a strong passion for technology. I enjoy
              working in agile environments, learning fast, and building solutions that are both elegant and useful.
            </p>
          </div>

          <div className="glass-card section-card">
            <p className="mini-label">Education</p>
            <h3>Velagapudi Ramakrishna Siddhartha Engineering College</h3>
            <p>B.Tech in Artificial Intelligence and Data Science</p>
            <p className="meta">CGPA: 8.58</p>
            <div className="divider" />
            <p className="meta">Aakash Institute — Intermediate • 94%</p>
            <p className="meta">St. Francis English Medium HSS — ICSE • 95%</p>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="mini-label">What I bring</p>
            <h2>Clean architecture, strong fundamentals, and a product mindset.</h2>
          </div>
          <div className="highlights-grid">
            {highlights.map((item) => (
              <article key={item.title} className="glass-card highlight-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <p className="mini-label">Skills</p>
            <h2>Core strengths across software, data, and AI.</h2>
          </div>
          <div className="chip-grid">
            {skills.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="mini-label">Projects</p>
            <h2>Selected work that reflects my technical curiosity.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="glass-card project-card">
                <div className="project-top">
                  <p className="project-stack">{project.stack}</p>
                  <span className="project-dot" />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section grid-two">
          <div className="glass-card section-card">
            <p className="mini-label">Experience & Activities</p>
            <h2>Consistently learning, contributing, and growing.</h2>
            <ul className="list">
              <li>AI Hackathon Volunteer at VRSEC</li>
              <li>Represented college at Yuva Utsav Dance Competition</li>
              <li>Active participant on LeetCode, HackerRank, and Codeforces</li>
            </ul>
          </div>

          <div className="glass-card section-card">
            <p className="mini-label">Certifications</p>
            <div className="cert-list">
              {certifications.map((cert) => (
                <p key={cert}>{cert}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="glass-card contact-card">
            <div>
              <p className="mini-label">Contact</p>
              <h2>Let’s build something meaningful together.</h2>
              <p>
                I’m always excited to connect with people interested in technology, AI, or creating beautiful digital experiences.
              </p>
              <div className="contact-links">
                <a href="mailto:charishmasirivelli@gmail.com">charishmasirivelli@gmail.com</a>
                <a href="tel:+916303376474">+91 6303376474</a>
              </div>
            </div>

            <form className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea rows="4" placeholder="Tell me about your idea" />
              <button type="button" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
