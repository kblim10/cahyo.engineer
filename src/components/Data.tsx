import React from 'react';
import { personalInfo, socials, education, experiences } from '../data';
import { GlassPanel } from './GlassPanel';
import { MapPin, Mail, Briefcase, GraduationCap } from 'lucide-react';
import { HSRButton } from './HSRButton';
import { Download, Mail as MailIcon } from 'lucide-react';

export const Data: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <GlassPanel style={{ flex: '1', minWidth: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ 
            width: '200px', 
            height: '200px', 
            border: '2px solid var(--border-color)', 
            padding: '5px',
            backgroundColor: 'var(--hover-bg)'
          }}>
            <img 
              src="/profile.png" 
              alt="Profile" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.2)' }} 
            />
          </div>
          <h2 className="glow-accent" style={{ margin: 0, textAlign: 'center', fontSize: '2rem' }}>{personalInfo.name}</h2>
          <div style={{ fontSize: '1.2rem', fontWeight: 600, textTransform: 'uppercase', textAlign: 'center', color: 'var(--text-secondary)' }}>{personalInfo.title}</div>
          <div style={{ fontStyle: 'italic', opacity: 0.8, textAlign: 'center' }}>"{personalInfo.tagline}"</div>
        </GlassPanel>

        <GlassPanel title="PERSONAL_DATA" icon={<MapPin size={24} />}>
          <p style={{ marginBottom: '1rem', fontSize: '1.1rem', textAlign: 'justify' }}>
            {personalInfo.bio}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={18} color="var(--accent)" /> {personalInfo.location}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={18} color="var(--accent)" /> {personalInfo.email}
            </div>
            <div>
              <strong>STATUS:</strong><br/>{personalInfo.availability}
            </div>
            <div>
              <strong>ALIAS:</strong><br/>{personalInfo.nickname}
            </div>
          </div>
        </GlassPanel>
      </div>

      <GlassPanel title="EXPERIENCE" icon={<Briefcase size={24} />}>
        {experiences.map((exp, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <h3 style={{ margin: '0 0 0.5rem 0' }}>{exp.role}</h3>
            <p style={{ margin: 0, opacity: 0.8 }}>{exp.company} | {exp.period}</p>
          </div>
        ))}
      </GlassPanel>

      <GlassPanel title="EDUCATION" icon={<GraduationCap size={24} />}>
        {education.map((edu, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <h3 style={{ margin: '0 0 0.5rem 0' }}>{edu.degree}</h3>
            <p style={{ margin: 0, opacity: 0.8 }}>{edu.institution} | {edu.year}</p>
          </div>
        ))}
      </GlassPanel>

      <GlassPanel title="SYSTEM_LINKS">
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="/CV-Muhamad Cahyo.pdf" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <HSRButton icon={<Download size={18} />}>DOWNLOAD_CV</HSRButton>
          </a>
          {socials.map((social) => (
            <a key={social.name} href={social.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <HSRButton icon={
                social.icon === 'mail' ? <MailIcon size={18} /> : undefined
              }>
                {social.icon === 'github' && <span style={{marginRight: '8px'}}>[GH]</span>}
                {social.icon === 'linkedin' && <span style={{marginRight: '8px'}}>[LI]</span>}
                {social.name.toUpperCase()}
              </HSRButton>
            </a>
          ))}
        </div>
      </GlassPanel>
    </div>
  );
};
