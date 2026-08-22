/**
 * Crimson Signal design reminder: this page uses an asymmetric security-console narrative, data motifs, and precise maroon highlights.
 */
import { SectionHeading } from "@/components/SectionHeading";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Activity,
  ArrowDownRight,
  ArrowUp,
  ArrowUpRight,
  BrainCircuit,
  Braces,
  ChevronRight,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileDown,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Network,
  Send,
  ShieldCheck,
  Terminal,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";
import {
  certifications,
  coursework,
  education,
  experiences,
  focusAreas,
  navigation,
  projects,
  skills,
  type Project,
} from "@/data/portfolio";

const skillIcons = [Code2, BrainCircuit, Layers3, ShieldCheck, Database];
const terminalLines = [
  "Loading transaction dataset...",
  "Normalising feature vectors...",
  "Training model on patterns...",
  "Security analysis complete.",
];

function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const header = document.querySelector(".top-bar") as HTMLElement | null;
  const offset = (header?.offsetHeight ?? 76) + 14;
  const targetTop = target.getBoundingClientRect().top + window.scrollY - offset;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}

function ConnectFourVisual() {
  const cells = [
    "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "red", "", "", "", "", "", "", "ivory", "red", "", "", "", "", "", "ivory", "red", "", "", "", "", "ivory", "red", "", "", "", "", "ivory",
  ];
  return (
    <div className="connect-board" aria-label="Connect Four board visual">
      <div className="board-grid">
        {cells.map((cell, index) => (
          <i key={index} className={`disc ${cell}`} />
        ))}
      </div>
    </div>
  );
}

function MailGuardVisual() {
  return (
    <div className="mail-guard-visual" aria-label="Mail Guard project visual">
      <div className="mail-icon"><i /><i /></div>
      <div className="mail-guard-copy"><span>MAIL GUARD</span><b>SPAM FILTER</b></div>
      <div className="mail-signal"><i /><i /><i /><i /><i /></div>
    </div>
  );
}

function GitaMitraVisual() {
  return (
    <div className="gita-visual" aria-label="Gita Mitra project visual">
      <span className="gita-glyph">G</span>
      <div><span>GITA</span><b>MITRA</b><small>LIVE WEB PROJECT</small></div>
    </div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.kind === "connect") return <ConnectFourVisual />;
  if (project.kind === "mail") return <MailGuardVisual />;
  if (project.kind === "gita") return <GitaMitraVisual />;
  return <img src={project.image} alt="" />;
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [terminalStep, setTerminalStep] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 18);
      setShowBackToTop(window.scrollY > 620);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => setTerminalStep((previous) => (previous + 1) % terminalLines.length), 1950);
    return () => window.clearInterval(id);
  }, []);

  const moveTo = (id: string) => {
    setMobileOpen(false);
    scrollToSection(id);
  };

  const returnToTop = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  const copyEmailContent = async (content: string, message: string) => {
    try {
      await navigator.clipboard.writeText(content);
      toast.success(message);
    } catch {
      window.prompt("Copy this email content:", content);
    }
  };

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(event.currentTarget);
    const name = data.get("name")?.toString() ?? "";
    const email = data.get("email")?.toString() ?? "";
    const message = data.get("message")?.toString() ?? "";
    const emailDraft = `To: contactratiranjanmohapatra@gmail.com\nSubject: Portfolio enquiry from ${name || "a visitor"}\n\nName: ${name}\nEmail: ${email}\n\n${message}`;
    void copyEmailContent(emailDraft, "Email draft copied. Paste it into your email app.");
    form.reset();
  };

  return (
    <div className="portfolio-shell">
      <header className={`top-bar ${scrolled ? "scrolled" : ""}`}>
        <button className="brand-lockup" onClick={() => moveTo("home")} aria-label="Go to home">
          <img src="/manus-storage/rati-signal-mark_2894b6a5.png" alt="" />
          <span>RATI / RANJAN / 2026</span>
        </button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map(([label, id]) => (
            <button key={id} onClick={() => moveTo(id)}>{label}</button>
          ))}
        </nav>
        <button className="talk-button" onClick={() => moveTo("contact")}>LET&apos;S TALK <ArrowUpRight size={14} /></button>
        <button className="mobile-menu-trigger" onClick={() => setMobileOpen((open) => !open)} aria-expanded={mobileOpen} aria-label="Toggle navigation menu">
          {mobileOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.nav className="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.18 }} aria-label="Mobile navigation">
            {navigation.map(([label, id]) => <button key={id} onClick={() => moveTo(id)}>{label}</button>)}
          </motion.nav>
        ) : null}
      </AnimatePresence>

      <aside className="signal-rail" aria-label="Quick navigation">
        <div className="rail-orb" />
        <div className="rail-line" />
        <div className="rail-links">
          {navigation.slice(0, 5).map(([label, id]) => <button className="rail-link" key={id} onClick={() => moveTo(id)}>{label}</button>)}
        </div>
      </aside>

      <main>
        <section id="home" className="hero">
          <div className="hero-art" aria-hidden="true" />
          <motion.div className="hero-copy" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.72, ease: [0.23, 1, 0.32, 1] }}>
            <div className="eyebrow-row"><span className="section-index">/00</span><span>AI/ML &amp; Cybersecurity Enthusiast</span></div>
            <h1>Hi, I&apos;m<br />Rati Ranjan.<span className="accent">AI/ML × CYBERSECURITY</span></h1>
            <p className="hero-description">MCA student with hands-on experience in artificial intelligence, machine learning, Python development, and cybersecurity, focused on building practical and secure digital solutions.</p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => moveTo("projects")}>VIEW MY PROJECTS <ArrowDownRight size={15} /></button>
              <button className="secondary-button" onClick={() => moveTo("contact")}>LET&apos;S CONNECT <ArrowUpRight size={15} /></button>
            </div>
            <button className="resume-link" type="button" onClick={() => void copyEmailContent("To: contactratiranjanmohapatra@gmail.com\nSubject: Resume Request for Rati Ranjan Mohapatra", "Resume request email draft copied.")}><Download size={14} /> REQUEST RESUME</button>
            <div className="availability"><i />Open to Internship &amp; Entry-Level Opportunities</div>
          </motion.div>
          <motion.div className="hero-console" initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.76, delay: 0.13, ease: [0.23, 1, 0.32, 1] }}>
            <div className="console-inner">
              <div className="console-top"><div className="console-dots"><i /><i /><i /></div><span className="console-title">ANALYZE.PY / RUNNING</span></div>
              <div className="console-code"><div><span className="prompt">$</span> python analyze.py</div><div className="ok">{terminalLines[terminalStep]}</div><div>status: <span className="ok">secure</span><span className="cursor" /></div></div>
              <div className="console-viz">
                <div className="spark-panel"><div className="panel-label">MODEL SIGNAL</div><div className="spark-lines"><svg viewBox="0 0 120 60" preserveAspectRatio="none"><path d="M0 48 C14 44 14 14 29 30 S44 51 58 20 S75 38 88 12 S105 38 120 6" /></svg></div></div>
                <div className="risk-panel"><div className="panel-label">RISK SCORE</div><div className="risk-number">0.14 <small>LOW</small></div></div>
              </div>
            </div>
            <div className="console-float"><b>ACTIVE NODE</b><br />Cuttack, Odisha<br />India / IST +05:30</div>
          </motion.div>
        </section>

        <section id="about" className="section about">
          <div className="section-inner">
            <SectionHeading index="01" eyebrow="ABOUT ME" title="Built for the intersection of code, data & security." />
            <div className="about-grid">
              <div>
                <p className="about-statement">Turning <em>data, code &amp; security</em> into practical solutions.</p>
                <p className="about-copy">I am an MCA student developing practical experience across artificial intelligence, machine learning, Python development, cybersecurity, data analysis, digital forensics, network traffic analysis, and secure computing. My work has included financial fraud detection, housing and project cost estimation, and Python desktop applications.</p>
              </div>
              <div className="about-side">
                <div className="about-profile">
                  <img
                    src="/manus-storage/rati-portrait-main_525e126b.jpg?v=20260822-portrait-fix"
                    alt="Rati Ranjan Mohapatra"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = "/manus-storage/rati-profile_090e5858.webp";
                    }}
                  />
                  <div className="about-profile-label"><span>IDENTITY / 01</span><b>RATI RANJAN MOHAPATRA</b></div>
                </div>
                <div className="fact-stack">
                  <div className="fact-card"><strong>MCA</strong><span>2025–2027</span></div>
                  <div className="fact-card"><strong>8.22 CGPA</strong><span>B.Sc. Botany</span></div>
                  <div className="fact-card"><strong>77%</strong><span>Bachelor&apos;s Degree</span></div>
                  <div className="fact-card"><strong>AI + Cybersecurity</strong><span>Career Focus</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-inner">
            <SectionHeading index="02" eyebrow="TECHNICAL ARSENAL" title="Tools I use to build, analyse & secure applications." description="A focused toolkit shaped by hands-on learning in data, development, and cybersecurity." />
            <div className="skills-grid">
              {skills.map((skill, index) => {
                const Icon = skillIcons[index];
                return <motion.article key={skill.title} className="skill-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .06, duration: .45 }}>
                  <Icon className="skill-icon" size={25} strokeWidth={1.5} />
                  <h3>{skill.title}</h3><p>{skill.description}</p>
                  <div className="tag-list">{skill.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
                </motion.article>;
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="section experience">
          <div className="section-inner">
            <SectionHeading index="03" eyebrow="EXPERIENCE" title="Applied learning, documented in practice." />
            <div className="timeline">
              {experiences.map((experience, index) => <motion.article className="timeline-entry" key={experience.company} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .45, delay: index * .05 }}>
                <div className="timeline-period">{experience.period}<span>{experience.location}</span></div>
                <div className="timeline-panel"><div className="timeline-title"><h3>{experience.role}</h3><span>{experience.company}</span></div><ul>{experience.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
              </motion.article>)}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-inner">
            <SectionHeading index="04" eyebrow="SELECTED PROJECTS" title="Real projects. Practical problems. Measurable solutions." description="A selection of AI/ML applications and Python development work, presented with the core problem and implementation focus." />
            <motion.article className="project-feature" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .58 }}>
              <div className="project-feature-grid"><div className="project-visual"><ProjectVisual project={projects[0]} /><span className="project-index">PROJECT / 01</span></div><div className="project-copy"><p className="project-category">{projects[0].category}</p><h3>{projects[0].title}</h3><p>{projects[0].description}</p><div className="project-meta">STATUS / {projects[0].status}</div><div className="project-evidence"><span>INPUT / TRANSACTION STREAM</span><i /><span>OUTPUT / RISK EXPLANATION</span></div><div className="card-tech">{projects[0].technologies.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div><div className="project-actions"><button className="mini-button signal" onClick={() => setSelectedProject(projects[0])}>VIEW DETAILS <ChevronRight size={14} /></button>{projects[0].live ? <a className="mini-button" target="_blank" rel="noreferrer" href={projects[0].live}><ExternalLink size={14} /> LIVE</a> : null}{projects[0].github ? <a className="mini-button" target="_blank" rel="noreferrer" href={projects[0].github}><Github size={14} /> GITHUB</a> : null}</div></div></div>
            </motion.article>
            <div className="project-cards">
              {projects.slice(1).map((project, index) => <motion.article className="project-card" key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ delay: index * .08, duration: .45 }}><div className="project-visual"><ProjectVisual project={project} /><span className="project-index">PROJECT / {project.index}</span></div><div className="project-card-body"><p className="project-category">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p><div className="project-evidence compact"><span>PROJECT / {project.live ? "LIVE" : project.kind === "estimator" ? "REGRESSION" : "GAME STATE"}</span><i /></div><div className="card-tech">{project.technologies.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div><div className="project-actions"><button className="mini-button signal" onClick={() => setSelectedProject(project)}>DETAILS <ChevronRight size={14} /></button>{project.live ? <a className="mini-button" target="_blank" rel="noreferrer" href={project.live}><ExternalLink size={14} /> LIVE</a> : null}{project.github ? <a className="mini-button" target="_blank" rel="noreferrer" href={project.github}><Github size={14} /> GITHUB</a> : null}</div></div></motion.article>)}
            </div>
          </div>
        </section>

        <section className="section security" aria-labelledby="security-heading">
          <div className="section-inner security-grid"><div><div className="section-spine security-spine" aria-hidden="true"><i /><span>05</span></div><div className="eyebrow-row"><span className="section-index">/05</span><span>SECURITY MINDSET</span></div><h2 id="security-heading" className="security-statement">ANALYSE. DETECT. INVESTIGATE.<span>SECURE.</span></h2><div className="security-focus">{["Network Security", "Wireshark", "Packet Analysis", "Digital Forensics", "Incident Investigation", "Ethical Hacking Fundamentals", "Threat Awareness", "Secure Computing"].map((item) => <span className="tag" key={item}>{item}</span>)}</div></div><div className="security-network"><svg className="network-svg" viewBox="0 0 600 430" aria-hidden="true"><line x1="100" y1="105" x2="330" y2="90" /><line x1="100" y1="105" x2="175" y2="300" /><line x1="330" y1="90" x2="440" y2="275" /><line x1="175" y1="300" x2="440" y2="275" /><line x1="330" y1="90" x2="520" y2="165" /><circle cx="100" cy="105" r="6" /><circle cx="330" cy="90" r="6" /><circle cx="175" cy="300" r="6" /><circle cx="440" cy="275" r="7" /><circle cx="520" cy="165" r="5" /><image href="/manus-storage/rati-signal-mark_2894b6a5.png" x="282" y="137" width="88" height="88" opacity=".75" /></svg><span className="network-label one">CLIENT</span><span className="network-label two">NETWORK</span><span className="network-label three">THREAT DETECTION</span><span className="network-label four">PACKETS</span><div className="network-route">CLIENT → NETWORK → PACKETS → ANALYSIS → THREAT DETECTION</div></div></div>
        </section>

        <section className="section" aria-labelledby="education-heading">
          <div className="section-inner"><SectionHeading index="06" eyebrow="EDUCATION" title="Academic foundations, expanding into secure computing." /><div className="education-grid"><div className="education-list">{education.map((item) => <article className="education-item" key={item.degree}><time>{item.period}</time><div><h3>{item.degree}</h3><p>{item.institution}</p><p>{item.meta}</p></div></article>)}</div><aside className="coursework-box"><h3 id="education-heading">SELECTED COURSEWORK</h3><div className="course-grid">{coursework.map((course) => <span key={course}>{course}</span>)}</div></aside></div></div>
        </section>

        <section id="certifications" className="section certifications">
          <div className="section-inner"><SectionHeading index="07" eyebrow="CERTIFICATIONS" title="A continuing record of focused learning." /><div className="cert-grid">{certifications.map((certification, index) => <motion.article className="cert-card" key={certification} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: (index % 3) * .04, duration: .38 }}><div className="credential-stamp"><GraduationCap size={19} strokeWidth={1.45} /><small>VERIFIED LEARNING / 0{index + 1}</small></div><span>{certification}</span></motion.article>)}</div></div>
        </section>

        <section className="section github-section" aria-labelledby="github-heading">
          <div className="section-inner github-grid"><div><SectionHeading index="08" eyebrow="BUILDING IN PUBLIC" title="The work continues beyond this page." description="Explore the repositories, projects, and experiments in my public GitHub profile." /><div className="profile-command"><div className="command-url"><Terminal size={14} /> github.com/rati-ranjan-04</div><h3 id="github-heading">Rati&apos;s project ledger</h3><p>A public record of projects in fraud detection, housing-cost estimation, Python desktop development, and Mail Guard Spam Filter.</p><div className="contribution" aria-label="Decorative contribution-style grid">{Array.from({ length: 144 }, (_, index) => <i key={index} />)}</div><a className="mini-button signal" style={{ marginTop: "1.2rem" }} target="_blank" rel="noreferrer" href="https://github.com/rati-ranjan-04">VIEW GITHUB <ArrowUpRight size={14} /></a></div></div><div className="repo-list">{projects.filter((project) => project.github).map((project) => <a className="repo-link" key={project.github} target="_blank" rel="noreferrer" href={project.github}><span>{project.title}</span><small>OPEN <ExternalLink size={12} /></small></a>)}</div></div>
        </section>

        <section className="section" aria-labelledby="focus-heading">
          <div className="section-inner"><SectionHeading index="09" eyebrow="WHAT I&apos;M WORKING TOWARDS" title="A practical, security-aware technical path." /><div className="focus-grid" id="focus-heading">{focusAreas.map(([title, description], index) => <article className="focus-card" key={title}><span>/0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-inner contact-layout"><div><div className="section-spine contact-spine" aria-hidden="true"><i /><span>10</span></div><div className="eyebrow-row"><span className="section-index">/10</span><span>LET&apos;S CONNECT</span></div><p className="contact-statement">Have an opportunity, project or idea? <em>Let&apos;s build something useful.</em></p><div className="contact-details"><button className="contact-detail contact-button" type="button" onClick={() => void copyEmailContent("contactratiranjanmohapatra@gmail.com", "Email address copied.")}><Mail /><span>EMAIL</span>contactratiranjanmohapatra@gmail.com</button><a className="contact-detail whatsapp-contact" target="_blank" rel="noreferrer" href="https://wa.me/918144952784?text=Hello%20Rati%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."><MessageCircle /><span>WHATSAPP</span>+91 81449 52784</a><a className="contact-detail" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rati-ranjan-mohapatra"><Linkedin /><span>LINKEDIN</span>linkedin.com/in/rati-ranjan-mohapatra</a><a className="contact-detail" target="_blank" rel="noreferrer" href="https://github.com/rati-ranjan-04"><Github /><span>GITHUB</span>github.com/rati-ranjan-04</a><div className="contact-detail"><MapPin /><span>LOCATION</span>Cuttack, Odisha, India</div><div className="contact-detail"><Activity /><span>AVAILABILITY</span>Internship &amp; Entry-Level Opportunities</div></div></div><form className="contact-form" onSubmit={sendMessage}><label className="form-label" htmlFor="name">NAME</label><input className="form-field" id="name" name="name" required placeholder="Your name" /><label className="form-label" htmlFor="email">EMAIL</label><input className="form-field" id="email" name="email" type="email" required placeholder="you@example.com" /><label className="form-label" htmlFor="message">MESSAGE</label><textarea className="form-field" id="message" name="message" required placeholder="Tell me a little about the opportunity or idea." /><button className="primary-button send-button" type="submit">COPY EMAIL DRAFT <Send size={15} /></button></form></div>
        </section>
      </main>

      <footer className="footer"><div className="footer-inner"><div className="footer-brand"><img src="/manus-storage/rati-signal-mark_2894b6a5.png" alt="" /><div><p className="footer-name">Rati Ranjan Mohapatra</p><p className="footer-role">AI/ML &amp; Cybersecurity Enthusiast · Building. Learning. Securing.</p><p className="footer-copy">© 2026 Rati Ranjan Mohapatra. All rights reserved.</p></div></div><div className="footer-links"><a target="_blank" rel="noreferrer" href="https://github.com/rati-ranjan-04">GITHUB</a><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rati-ranjan-mohapatra">LINKEDIN</a><button type="button" onClick={() => void copyEmailContent("contactratiranjanmohapatra@gmail.com", "Email address copied.")}>EMAIL</button></div></div></footer>

      <AnimatePresence>
        {showBackToTop ? (
          <motion.button
            className="back-to-top"
            onClick={returnToTop}
            aria-label="Back to top"
            title="Back to top"
            initial={{ opacity: 0, y: 14, scale: .95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: .95 }}
            transition={{ duration: .2, ease: [0.23, 1, 0.32, 1] }}
          >
            <ArrowUp size={17} strokeWidth={1.9} />
            <span>TOP</span>
          </motion.button>
        ) : null}
      </AnimatePresence>

      <Dialog open={Boolean(selectedProject)} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="project-dialog">
          {selectedProject ? <><DialogHeader><div className="dialog-kicker">PROJECT / {selectedProject.index} · {selectedProject.category}</div><DialogTitle>{selectedProject.title}</DialogTitle><DialogDescription>{selectedProject.description}</DialogDescription></DialogHeader><div className="modal-feature-list">{selectedProject.features.map((feature) => <span key={feature}>{feature}</span>)}</div><div className="project-actions">{selectedProject.live ? <a className="mini-button signal" target="_blank" rel="noreferrer" href={selectedProject.live}>OPEN LIVE PROJECT <ExternalLink size={14} /></a> : null}{selectedProject.github ? <a className="mini-button" target="_blank" rel="noreferrer" href={selectedProject.github}>OPEN ON GITHUB <Github size={14} /></a> : null}</div></> : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
