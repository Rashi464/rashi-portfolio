import "./App.css";

function App() {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-logo">Rashi K P</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#awards">Awards</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">SITE RELIABILITY ENGINEER</p>

          <h1>
            Building reliable
            <span> & scalable </span>
            systems.
          </h1>

          <p className="hero-description">
            SRE focused on reliability, observability, automation and
            cloud operations — helping enterprise systems stay available,
            measurable and resilient.
          </p>

          <div className="hero-buttons">
            <a href="#experience" className="btn primary-btn">
              View My Work
            </a>

            <a
              href="/Rashi_KP_SRE_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn secondary-btn"
            >
              View Resume
            </a>
          </div>

          <div className="hero-links">
            <a
              href="https://www.linkedin.com/in/rashi-kp-142001r"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <span>•</span>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Temporary image placeholder */}
        <div className="hero-visual">
        <div className="profile-placeholder">
  <img
    src="/rashi-profile.jpeg"
    alt="Rashi K P"
    className="profile-image"
  />
</div>

          <div className="floating-card uptime-card">
            <strong>99.9%+</strong>
            <small>System Uptime</small>
          </div>

          <div className="floating-card automation-card">
            <strong>40%+</strong>
            <small>Manual Effort Reduced</small>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about-section">
        <div className="section-heading">
          <p>01 — ABOUT</p>
          <h2>Reliability with a business mindset.</h2>
        </div>

        <div className="about-content">
          <p>
            I am a Site Reliability Engineer with 3+ years of experience
            supporting enterprise production environments and global
            technology operations.
          </p>

          <p>
            My work focuses on monitoring, incident management, root cause
            analysis, automation and improving system reliability. I work
            across tools such as Datadog, Splunk, PagerDuty, ServiceNow,
            Kubernetes, Terraform and Ansible.
          </p>

          <p>
            I enjoy solving operational problems, collaborating with
            cross-functional teams and turning recurring manual work into
            reliable automated processes.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="section-heading">
          <p>02 — SKILLS</p>
          <h2>Tools I work with.</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <span>01</span>
            <h3>Observability</h3>
            <p>
              Datadog · Splunk · Grafana · OpenTelemetry · PagerDuty ·
              ServiceNow
            </p>
          </div>

          <div className="skill-card">
            <span>02</span>
            <h3>Cloud & DevOps</h3>
            <p>
              Kubernetes · Docker · Terraform · Ansible · Chef · CI/CD ·
              AWS · Azure
            </p>
          </div>

          <div className="skill-card">
            <span>03</span>
            <h3>AIOps</h3>
            <p>
              Anomaly detection · Predictive alerting · Alert-noise
              reduction · Runbook automation
            </p>
          </div>

          <div className="skill-card">
            <span>04</span>
            <h3>Reliability</h3>
            <p>
              Incident management · RCA · SLA · SLO · SLI · MTTR ·
              Capacity planning
            </p>
          </div>

          <div className="skill-card">
            <span>05</span>
            <h3>Scripting</h3>
            <p>
              Python · Shell/Bash · SQL · Java fundamentals
            </p>
          </div>

          <div className="skill-card">
            <span>06</span>
            <h3>Reporting</h3>
            <p>
              Power BI · Tableau · Excel · Dashboards · Confluence ·
              Data analysis
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section experience-section">
        <div className="section-heading">
          <p>03 — EXPERIENCE</p>
          <h2>Professional experience.</h2>
        </div>

        <div className="experience-card">
          <div className="experience-header">
            <div>
              <h3>Site Reliability Engineer</h3>
              <h4>Capgemini · Starbucks Account</h4>
            </div>

            <span>2023 — Present</span>
          </div>

          <div className="experience-line"></div>

          <ul>
            <li>
              Maintained 99.9%+ system uptime through proactive monitoring,
              observability and production support.
            </li>

            <li>
              Managed incidents using PagerDuty and Jira while performing
              RCA through Datadog and Splunk analysis.
            </li>

            <li>
              Improved incident response and reduced MTTR by approximately
              30–40% through structured troubleshooting and automation.
            </li>

            <li>
              Automated repetitive operational activities using Shell,
              Terraform and Ansible, reducing manual effort by 40%+.
            </li>

            <li>
              Analysed logs and metrics to identify recurring production
              issues and helped reduce repeat incidents by approximately
              25%.
            </li>

            <li>
              Supported Linux and Windows administration, patching,
              security and compliance activities.
            </li>

            <li>
              Created reliability dashboards and SLA/SLO reports for
              operational visibility.
            </li>
          </ul>
        </div>
      </section>

      {/* Impact */}
      <section className="impact-section">
        <div className="impact-grid">
          <div className="impact-card">
            <strong>99.9%+</strong>
            <span>System Uptime</span>
          </div>

          <div className="impact-card">
            <strong>30–40%</strong>
            <span>MTTR Reduction</span>
          </div>

          <div className="impact-card">
            <strong>40%+</strong>
            <span>Manual Effort Reduced</span>
          </div>

          <div className="impact-card">
            <strong>25%</strong>
            <span>Repeat Incidents Reduced</span>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="section-heading">
          <p>04 — PROJECTS</p>
          <h2>Selected work.</h2>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <span>01 / OBSERVABILITY</span>
            <h3>Production Reliability Monitoring</h3>
            <p>
              Monitoring and analysing production systems using Datadog,
              Splunk and dashboards to improve visibility and reliability.
            </p>
            <div className="project-tags">
              <span>Datadog</span>
              <span>Splunk</span>
              <span>Grafana</span>
            </div>
          </div>

          <div className="project-card">
            <span>02 / AUTOMATION</span>
            <h3>Infrastructure Automation</h3>
            <p>
              Automated repetitive operational tasks and infrastructure
              workflows to reduce manual effort and improve consistency.
            </p>
            <div className="project-tags">
              <span>Terraform</span>
              <span>Ansible</span>
              <span>Shell</span>
            </div>
          </div>

          <div className="project-card">
            <span>03 / AIOPS</span>
            <h3>Intelligent Incident Analysis</h3>
            <p>
              Applied anomaly detection, alert analysis and AI-assisted
              log correlation concepts to improve incident response.
            </p>
            <div className="project-tags">
              <span>AIOps</span>
              <span>AI/ML</span>
              <span>RCA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="section awards-section">
        <div className="section-heading">
          <p>05 — RECOGNITION</p>
          <h2>Recognition & achievements.</h2>
        </div>

        <div className="awards-grid">
          <div className="award-card">
            <span>2025</span>
            <h3>Female Rockstar Award</h3>
            <p>Starbucks Account · Capgemini</p>
          </div>

          <div className="award-card">
            <span>2024</span>
            <h3>Super Squad Award</h3>
            <p>Capgemini</p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section education-section">
        <div className="section-heading">
          <p>06 — EDUCATION</p>
          <h2>Academic background.</h2>
        </div>

        <div className="education-card">
          <div>
            <h3>B.E. Electronics & Communication</h3>
            <p>P.E.S. College of Engineering, Mandya, Karnataka</p>
          </div>

          <span>2019 — 2023</span>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <p className="contact-label">07 — CONTACT</p>

        <h2>Let's build something<br />reliable.</h2>

        <p>
          Open to opportunities in Site Reliability Engineering,
          Cloud, DevOps and reliability-focused roles.
        </p>

        <div className="contact-buttons">
  <a href="mailto:kprashi13@gmail.com" className="contact-button">
    Get In Touch →
  </a>

  <a
    href="https://www.linkedin.com/in/rashi-kp-142001r"
    target="_blank"
    rel="noreferrer"
    className="contact-button linkedin-button"
  >
    LinkedIn ↗
  </a>
</div>
      </section>

      {/* Footer */}
      <footer>
        <span>© 2026 Rashi K P</span>

        <span>Site Reliability Engineer</span>

        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;