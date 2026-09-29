import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">Rashi K P</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">

          <p className="eyebrow">SITE RELIABILITY ENGINEER</p>

          <h1>
            Hi, I'm <span>Rashi K P.</span>
          </h1>

          <h2>
            Building reliable, scalable & automated enterprise systems.
          </h2>

          <p className="hero-description">
            Site Reliability Engineer with experience in enterprise production
            systems, observability, incident management, cloud infrastructure
            automation and AI-assisted operations.
          </p>

          <div className="hero-buttons">
            <a href="#experience" className="primary-button">
              Explore My Work
            </a>

            <a href="#contact" className="secondary-button">
              Get In Touch
            </a>
          </div>

        </div>

        <div className="hero-badge">
          <div className="status-dot"></div>
          <span>Reliability focused</span>
        </div>
      </section>


      {/* Impact */}
      <section className="impact-section">

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
          <span>Less Manual Effort</span>
        </div>

        <div className="impact-card">
          <strong>25%</strong>
          <span>Fewer Repeat Incidents</span>
        </div>

      </section>


      {/* About */}
      <section id="about" className="section">

        <p className="section-label">01 — ABOUT ME</p>

        <h2>Reliability meets automation.</h2>

        <div className="about-grid">

          <div>
            <p>
              I am a Site Reliability Engineer focused on maintaining
              availability, performance and scalability of enterprise
              production systems.
            </p>

            <p>
              My experience spans observability, incident response,
              root-cause analysis, infrastructure automation and
              reliability reporting.
            </p>
          </div>

          <div>
            <p>
              I enjoy solving operational problems, identifying recurring
              failure patterns and improving processes through automation.
            </p>

            <p>
              I also work closely with SRE, DevOps and engineering teams
              to support reliable service delivery.
            </p>
          </div>

        </div>

      </section>


      {/* Experience */}
      <section id="experience" className="section">

        <p className="section-label">02 — EXPERIENCE</p>

        <div className="experience-header">
          <div>
            <h2>Capgemini</h2>
            <p className="role">Site Reliability Engineer</p>
          </div>

          <span className="date">2023 — Present</span>
        </div>

        <div className="client-label">
          Starbucks Account · Global Enterprise Infrastructure
        </div>

        <div className="experience-grid">

          <div className="experience-point">
            <span>01</span>
            <h3>Production Reliability</h3>
            <p>
              Supported enterprise production systems and proactively
              monitored application and infrastructure performance using
              Datadog and Splunk.
            </p>
          </div>

          <div className="experience-point">
            <span>02</span>
            <h3>Incident Management</h3>
            <p>
              Led incident response using PagerDuty and Jira with structured
              triage and AI-assisted log correlation.
            </p>
          </div>

          <div className="experience-point">
            <span>03</span>
            <h3>Automation</h3>
            <p>
              Automated deployment, patching and routine maintenance using
              Shell scripting, Terraform and Ansible.
            </p>
          </div>

          <div className="experience-point">
            <span>04</span>
            <h3>Root Cause Analysis</h3>
            <p>
              Analysed system logs and performance metrics to identify
              recurring failure patterns and reduce repeat incidents.
            </p>
          </div>

          <div className="experience-point">
            <span>05</span>
            <h3>Reliability Reporting</h3>
            <p>
              Built executive-ready reliability dashboards and SLA/SLO
              reports using Power BI.
            </p>
          </div>

          <div className="experience-point">
            <span>06</span>
            <h3>Infrastructure</h3>
            <p>
              Performed Linux and Windows server administration, patch
              management and security compliance activities.
            </p>
          </div>

        </div>

      </section>


      {/* Skills */}
      <section id="skills" className="section skills-section">

        <p className="section-label">03 — SKILLS</p>

        <h2>Tools I work with.</h2>

        <div className="skills-grid">

          <div className="skill-category">
            <h3>Observability & Monitoring</h3>
            <div className="skill-list">
              <span>Datadog</span>
              <span>Splunk</span>
              <span>Grafana</span>
              <span>OpenTelemetry</span>
              <span>PagerDuty</span>
              <span>ServiceNow</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Cloud, DevOps & IaC</h3>
            <div className="skill-list">
              <span>Kubernetes</span>
              <span>Docker</span>
              <span>Terraform</span>
              <span>Ansible</span>
              <span>Chef</span>
              <span>GitHub Actions</span>
              <span>Jenkins</span>
              <span>AWS / Azure</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>AIOps & AI Operations</h3>
            <div className="skill-list">
              <span>Anomaly Detection</span>
              <span>Predictive Alerting</span>
              <span>Alert Noise Reduction</span>
              <span>Runbook Automation</span>
              <span>AI Log Analysis</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Data & Reporting</h3>
            <div className="skill-list">
              <span>SQL</span>
              <span>Power BI</span>
              <span>Tableau</span>
              <span>Excel</span>
              <span>Dashboarding</span>
              <span>Confluence</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Scripting & Programming</h3>
            <div className="skill-list">
              <span>Python</span>
              <span>Shell / Bash</span>
              <span>SQL</span>
              <span>Java Basics</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Systems & Security</h3>
            <div className="skill-list">
              <span>Linux</span>
              <span>Windows Server</span>
              <span>Patch Management</span>
              <span>Security Compliance</span>
            </div>
          </div>

        </div>

      </section>


      {/* Work */}
      <section id="projects" className="section">

        <p className="section-label">04 — WORK & IMPACT</p>

        <h2>What I work on.</h2>

        <div className="work-grid">

          <article className="work-card">
            <span>01</span>
            <h3>Enterprise Reliability</h3>
            <p>
              End-to-end reliability for enterprise production systems,
              maintaining high availability through proactive monitoring
              and risk identification.
            </p>
            <div className="work-tags">
              <span>Datadog</span>
              <span>Splunk</span>
              <span>SRE</span>
            </div>
          </article>

          <article className="work-card">
            <span>02</span>
            <h3>Incident Response & RCA</h3>
            <p>
              Structured incident triage, log analysis and root-cause
              investigation to improve service recovery and reduce recurring
              failures.
            </p>
            <div className="work-tags">
              <span>PagerDuty</span>
              <span>Jira</span>
              <span>RCA</span>
            </div>
          </article>

          <article className="work-card">
            <span>03</span>
            <h3>Infrastructure Automation</h3>
            <p>
              Automation of deployment, patching and routine maintenance
              activities to reduce operational effort and human error.
            </p>
            <div className="work-tags">
              <span>Terraform</span>
              <span>Ansible</span>
              <span>Shell</span>
            </div>
          </article>

          <article className="work-card">
            <span>04</span>
            <h3>AI-Assisted Operations</h3>
            <p>
              AI/ML-based anomaly detection, predictive alerting and
              AI-assisted log analysis to improve operational efficiency.
            </p>
            <div className="work-tags">
              <span>AIOps</span>
              <span>AI/ML</span>
              <span>Automation</span>
            </div>
          </article>

        </div>

      </section>


      {/* Awards */}
      <section className="section awards-section">

        <p className="section-label">05 — RECOGNITION</p>

        <h2>Recognition.</h2>

        <div className="awards-grid">

          <div className="award-card">
            <div className="award-year">2025</div>
            <h3>Female Rockstar Award</h3>
            <p>Starbucks Account · Capgemini</p>
          </div>

          <div className="award-card">
            <div className="award-year">2024</div>
            <h3>Super Squad Award</h3>
            <p>Capgemini</p>
          </div>

        </div>

      </section>


      {/* Education */}
      <section className="section education-section">

        <p className="section-label">06 — EDUCATION</p>

        <div className="education-card">
          <div>
            <h3>B.E., Electronics & Communication</h3>
            <p>P.E.S. College of Engineering, Mandya, Karnataka</p>
          </div>

          <span>2019 — 2023</span>
        </div>

      </section>


      {/* Contact */}
      <section id="contact" className="contact-section">

        <p className="section-label">07 — CONTACT</p>

        <h2>Let's connect.</h2>

        <p>
          Interested in discussing technology, reliability or professional
          opportunities? I'd love to connect.
        </p>

        <div className="contact-buttons">

          <a
            href="mailto:kprashi13@gmail.com"
            className="primary-button"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/rashi-kp-142001r"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            LinkedIn
          </a>

        </div>

      </section>


      {/* Footer */}
      <footer>
        <p>© 2026 Rashi K P</p>
        <p>Site Reliability Engineer</p>
      </footer>

    </div>
  );
}

export default App;