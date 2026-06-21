import { personalInfo, socials, education, experiences } from '../data';
import { MapPin, Mail, Briefcase, GraduationCap, Download, Mail as MailIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export const Data = () => {
  return (
    <section className="section container">
      <motion.h2 
        className="section-title" 
        data-title="Data Profil"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        Data Profil
      </motion.h2>

      <div className="grid-2" style={{ marginBottom: '4rem' }}>
        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent)' }}>System Overview</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            {personalInfo.bio}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <MapPin size={20} color="var(--accent)" /> 
              <span style={{ fontSize: '1.1rem' }}>{personalInfo.location}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Mail size={20} color="var(--accent)" /> 
              <span style={{ fontSize: '1.1rem' }}>{personalInfo.email}</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>External Links</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a href="/CV-Muhamad Cahyo.pdf" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 1.5rem', background: 'rgba(212,175,55,0.1)', border: '1px solid var(--accent)', color: 'var(--accent)', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, transition: 'all 0.3s ease' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,175,55,0.2)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(212,175,55,0.1)'}>
              <Download size={20} /> Resume
            </a>
            {socials.map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 1.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-primary)', borderRadius: '8px', textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
                {social.icon === 'mail' ? <MailIcon size={20} /> : <span style={{fontWeight: 900}}>#</span>}
                {social.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid-2">
        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <Briefcase size={28} color="var(--accent)" />
            <h3 style={{ fontSize: '1.8rem', margin: 0 }}>Experience</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {experiences.map((exp, index) => (
              <div key={index} style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '1.5rem', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-6px', top: '0', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent)' }} />
                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{exp.role}</h4>
                <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '0.5rem' }}>{exp.company}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>{exp.period}</div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{exp.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="glass-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <GraduationCap size={28} color="var(--accent)" />
            <h3 style={{ fontSize: '1.8rem', margin: 0 }}>Education</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {education.map((edu, index) => (
              <div key={index} style={{ borderLeft: '2px solid rgba(255,255,255,0.2)', paddingLeft: '1.5rem', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-6px', top: '0', width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.5)' }} />
                <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{edu.degree}</h4>
                <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '0.5rem' }}>{edu.institution}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>{edu.year}</div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{edu.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
