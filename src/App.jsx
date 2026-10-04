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
  href="/Rashi_KP_SRE_Resume_Updated.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-primary"
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
              href="https://github.com/Rashi464"
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
          I’m a Site Reliability Engineer with 3+ years 
of experience supporting enterprise production 
environments, focused on system reliability, performance, 
observability, and automation. 
          </p>

          <p>
          At Capgemini, I work on global infrastructure operations 
for the Starbucks account, helping maintain high availability, 
resolve incidents, and improve operational efficiency. 
My technical experience includes Kubernetes, Docker, 
Terraform, Ansible, Python, Datadog, Splunk, and CI/CD practices. 
 
          </p>

          <p>
          I enjoy simplifying complex challenges through automation, 
proactive monitoring, and effective collaboration. 
I’m passionate about continuous learning and building scalable, 
resilient systems that deliver reliable business outcomes.
          </p>
        </div>
      </section>

      {/* Skills */}
     
{/* Skills */}
<section id="skills" className="section">
  <div className="section-heading">
    <p>02 — TECHNICAL SKILLS</p>
    <h2>My technical toolkit.</h2>
    <p className="section-description">
      Technologies and practices used across production support,
      reliability engineering and hands-on DevOps projects.
    </p>
  </div>

  <div className="skills-grid">
    <div className="skill-card">
      <span>01</span>
      <h3>Monitoring & Observability</h3>
      <p>Datadog · Splunk · Grafana · Prometheus · OpenTelemetry</p>
    </div>

    <div className="skill-card">
      <span>02</span>
      <h3>Cloud & Containerization</h3>
      <p>Kubernetes · Docker · Helm · AWS · Azure fundamentals</p>
    </div>

    <div className="skill-card">
      <span>03</span>
      <h3>Infrastructure & CI/CD</h3>
      <p>Terraform · Ansible · Chef · Git · GitHub · GitHub Actions · Jenkins</p>
    </div>

    <div className="skill-card">
      <span>04</span>
      <h3>SRE & Incident Management</h3>
      <p>PagerDuty · ServiceNow · Jira · RCA · SLA · SLO · SLI · MTTR</p>
    </div>

    <div className="skill-card">
      <span>05</span>
      <h3>Scripting & Automation</h3>
      <p>Python · Shell · Bash · SQL · Runbook automation</p>
    </div>

    <div className="skill-card">
      <span>06</span>
      <h3>Systems & Reporting</h3>
      <p>Linux · Windows · Power BI · Tableau · Excel · Confluence</p>
    </div>
  </div>
</section>
      {/* Experience */}
      
{/* Professional Experience */}
<section id="experience" className="section experience-section">
  <div className="section-heading">
    <p>03 — PROFESSIONAL EXPERIENCE</p>
    <h2>Where I've made an impact.</h2>
  </div>

  <div className="experience-card">
    <div className="experience-header">
      <div>
        <h3>Site Reliability Engineer</h3>
        <h4>Capgemini · Starbucks Account</h4>
        <p className="experience-subtitle">
          Global Enterprise Infrastructure & Production Operations
        </p>
      </div>
      <span>2023 — Present</span>
    </div>

    <div className="experience-line" />

    <p className="experience-intro">
      Supporting enterprise production environments with a focus
      on service reliability, observability, incident response,
      automation and operational improvements.
    </p>

    <div className="work-area">
      <h4>Key responsibilities</h4>
      <ul>
        <li>Monitored production systems using Datadog and Splunk to support 99.9%+ uptime.</li>
        <li>Handled incident response, troubleshooting and escalation using PagerDuty, Jira and ServiceNow.</li>
        <li>Performed root cause analysis using logs, metrics and dashboards to help reduce recurring incidents.</li>
        <li>Automated repetitive operational tasks using Shell scripting and infrastructure automation tools.</li>
        <li>Supported Kubernetes, Docker, Terraform and Ansible-related DevOps workflows.</li>
        <li>Supported Linux and Windows administration, patching, security and compliance activities.</li>
        <li>Prepared reliability dashboards, SLA/SLO reports and operational updates for stakeholders.</li>
      </ul>
    </div>

    <div className="work-tools">
      <h4>Technologies & tools</h4>
      <div className="project-tags">
        {["Datadog", "Splunk", "PagerDuty", "ServiceNow",
          "Jira", "Kubernetes", "Docker", "Terraform",
          "Ansible", "Linux", "Shell", "SQL"].map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>
    </div>

    <div className="experience-achievement">
      <span>Recognition</span>
      <p>Female Rockstar Award — 2025</p>
      <p>Super Squad Award — 2024</p>
    </div>
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
      
{/* Projects */}
<section id="projects" className="section">
  <div className="section-heading">
    <p>04 — PROJECTS</p>
    <h2>Engineering reliability through practice.</h2>
  </div>

  {/* Featured project */}
  <div className="featured-project">
    <div className="featured-project-top">
      <span className="project-category">FEATURED PROJECT / SRE & DEVOPS</span>
    </div>

    <h3>
      Real-Time E-Commerce Order Processing
      &amp; SRE Automation Platform
    </h3>

    <p className="featured-description">
      Built a Python-based order-processing service and implemented
      its testing, CI pipeline, containerization, Kubernetes
      configuration and monitoring foundation. Now extending it
      with infrastructure automation, dashboards, alerting and
      incident remediation.
    </p>

    <h4>Technologies and Tools</h4>
    <div className="project-tags">
      {["Python", "FastAPI", "SQLite", "Pytest",
        "GitHub Actions", "Docker", "Kubernetes",
        "Helm", "Prometheus"].map((tech) => (
        <span key={tech}>{tech}</span>
      ))}
    </div>

    
    <div className="project-tags planned-tags">
      {["Terraform", "Ansible", "Grafana",
        "Alertmanager", "Python SRE Automation"].map((tech) => (
        <span key={tech}>{tech}</span>
      ))}
    </div>

    <div className="project-highlights">
      <div>
        <strong>CI</strong>
        <span>Automated test and build pipeline</span>
      </div>
      <div>
        <strong>Orchestration</strong>
        <span>Kubernetes configuration with Helm</span>
      </div>
      <div>
        <strong>Observability</strong>
        <span>Prometheus metrics endpoint</span>
      </div>
    </div>

    <p className="project-note">
      Developed as a hands-on project to demonstrate
      end-to-end SRE and DevOps practices.
    </p>
  </div>

  {/* Other projects */}
  <div className="projects-grid other-projects">
    <div className="project-card">
      <span>02 / OBSERVABILITY</span>
      <h3>Production Reliability Monitoring</h3>
      <p>
        Monitoring and analysing production systems using
        Datadog, Splunk and dashboards to improve visibility
        and reliability.
      </p>
      <div className="project-tags">
        <span>Datadog</span>
        <span>Splunk</span>
        <span>Grafana</span>
      </div>
    </div>

    <div className="project-card">
      <span>03 / AUTOMATION</span>
      <h3>Infrastructure Automation</h3>
      <p>
        Automating repetitive operational activities and
        infrastructure workflows to reduce manual effort
        and improve consistency.
      </p>
      <div className="project-tags">
        <span>Terraform</span>
        <span>Ansible</span>
        <span>Shell</span>
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

  <div className="education-grid">

    <div className="education-card">
      <div className="education-content">
        <span className="education-year">2019 — 2023</span>
        <h3>B.E. Electronics & Communication</h3>
        <p>P.E.S. College of Engineering, Mandya, Karnataka</p>
      </div>
    </div>

    <div className="education-card">
      <div className="education-content">
        <span className="education-year">2017 — 2019</span>
        <h3>Higher Secondary Education</h3>
        <p>Expert Pre-University College, Mangalore, Karnataka</p>
      </div>
    </div>

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