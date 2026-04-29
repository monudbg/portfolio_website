import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Cpu, Brain, Database, Briefcase, User, Mail as MailIcon } from 'lucide-react';

const API_BASE = 'http://localhost:8000/api';

const Navbar = () => (
  <nav className="glass" style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', width: '90%', maxWidth: '1200px', zIndex: 1000, padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <h2 style={{ fontSize: '1.2rem', fontWeight: 800 }}>M.M<span className="gradient-text">.</span></h2>
    <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 500 }}>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>
);

const Hero = ({ profile }) => (
  <section className="container" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="animate-fade-in"
    >
      <div style={{ width: '150px', height: '150px', borderRadius: '50%', background: 'linear-gradient(45deg, #6366f1, #a855f7)', margin: '0 auto 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', color: 'white', fontWeight: 800 }}>
        {profile?.name?.[0]}
      </div>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Hi, I'm <span className="gradient-text">{profile?.name || 'Monu Manish'}</span></h1>
      <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '800px' }}>
        {profile?.title || 'AI/ML Engineer'}
      </p>
      <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href={profile?.github} className="glass" style={{ padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Github size={20} /> GitHub</a>
        <a href={profile?.linkedin} className="glass" style={{ padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Linkedin size={20} /> LinkedIn</a>
        <a href={profile?.leetcode} className="glass" style={{ padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Code size={20} /> LeetCode</a>
        <a href={profile?.codolio} className="glass" style={{ padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Cpu size={20} /> Codolio</a>
        {profile?.resume && <a href={profile.resume} target="_blank" className="glass" style={{ padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--primary)' }}><Download size={20} /> Resume</a>}
      </div>
    </motion.div>
  </section>
);

const About = ({ profile }) => (
  <section id="about" className="container">
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
      <div>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>About <span className="gradient-text">Me</span></h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
          {profile?.bio}
        </p>
        <div className="glass" style={{ padding: '1.5rem' }}>
          <h3 style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}><Briefcase size={20} /> Education</h3>
          <p style={{ fontWeight: 600, fontSize: '0.95rem' }}>IIIT Una</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>B.Tech in IT | 2022 - Present</p>
        </div>
        <div className="glass" style={{ padding: '1.5rem', marginTop: '1rem' }}>
          <h3 style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}><Code size={20} /> Competitive Programming</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            Solved <strong>1000+ problems</strong> across LeetCode, Codolio, and other platforms.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href={profile?.leetcode} target="_blank" style={{ color: 'var(--primary)', fontSize: '0.85rem' }}>LeetCode &rarr;</a>
            <a href={profile?.codolio} target="_blank" style={{ color: 'var(--primary)', fontSize: '0.85rem' }}>Codolio &rarr;</a>
          </div>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <div className="glass" style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden' }}>
           <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" alt="Workspace" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
           <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
              <Brain size={100} color="#6366f1" />
              <h3 style={{ marginTop: '1rem' }}>AI/ML Focused</h3>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const Skills = ({ skills }) => {
  const categories = [...new Set(skills.map(s => s.category))];
  
  return (
    <section id="skills" className="container">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>Technical <span className="gradient-text">Stack</span></h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {categories.map(cat => (
          <div key={cat} className="glass" style={{ padding: '2rem' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', color: 'var(--secondary)' }}>{cat}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              {skills.filter(s => s.category === cat).map(skill => (
                <span key={skill.id} style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.85rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="glass" 
    style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
  >
    <div style={{ height: '200px', background: 'linear-gradient(135deg, #1e1e3f, #2d2d5f)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Code size={48} color="rgba(255,255,255,0.2)" />
    </div>
    <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <h3 style={{ fontSize: '1.4rem' }}>{project.title}</h3>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{project.year}</span>
      </div>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
        {project.description}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
        {project.tech_stack.split(',').map(tech => (
          <span key={tech} style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600 }}>#{tech.trim()}</span>
        ))}
      </div>
      <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem' }}>
        <a href={project.github_link} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.9rem' }}><Github size={16} /> Code</a>
        {project.live_link && <a href={project.live_link} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.9rem' }}><ExternalLink size={16} /> Demo</a>}
      </div>
    </div>
  </motion.div>
);

const Projects = ({ projects }) => (
  <section id="projects" className="container">
    <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>Featured <span className="gradient-text">Projects</span></h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </section>
);

const Contact = ({ profile }) => (
  <section id="contact" className="container" style={{ textAlign: 'center' }}>
    <div className="glass" style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Get in <span className="gradient-text">Touch</span></h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>I'm currently looking for new opportunities in AI/ML research and development.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
        <a href={`mailto:${profile?.email}`} className="glass" style={{ padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <MailIcon size={24} /> {profile?.email}
        </a>
        <a href={profile?.linkedin} className="glass" style={{ padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Linkedin size={24} /> LinkedIn
        </a>
      </div>
    </div>
  </section>
);

const App = () => {
  const [profile, setProfile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, skillsRes, projectsRes] = await Promise.all([
          axios.get(`${API_BASE}/profile/`),
          axios.get(`${API_BASE}/skills/`),
          axios.get(`${API_BASE}/projects/`)
        ]);
        
        setProfile(profileRes.data[0]);
        setSkills(skillsRes.data);
        setProjects(projectsRes.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '50px', height: '50px', border: '3px solid rgba(255,255,255,0.1)', borderTopColor: 'var(--primary)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );

  return (
    <div style={{ background: 'var(--bg-dark)' }}>
      <Navbar />
      <Hero profile={profile} />
      <About profile={profile} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact profile={profile} />
      
      <footer style={{ padding: '4rem 0', textAlign: 'center', borderTop: '1px solid var(--border)', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Monu Manish. Built with Django & React.</p>
      </footer>
    </div>
  );
};

export default App;
