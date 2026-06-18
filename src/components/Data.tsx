import React from 'react';
import { personalInfo, socials } from '../data';
import { NierBox } from './NierBox';
import { NierButton } from './NierButton';

export const Data: React.FC = () => {
  return (
    <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <NierBox style={{ flex: '1', minWidth: '250px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
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
          <h2 style={{ margin: 0, textAlign: 'center' }}>{personalInfo.name}</h2>
          <div style={{ fontSize: '1.2rem', fontWeight: 600, textTransform: 'uppercase', textAlign: 'center' }}>{personalInfo.title}</div>
          <p style={{ textAlign: 'center', fontStyle: 'italic' }}>"{personalInfo.tagline}"</p>
        </NierBox>

        <NierBox title="[ PERSONAL_DATA ]" style={{ flex: '2', minWidth: '300px' }}>
          <p style={{ marginBottom: '1rem', fontSize: '1.1rem', textAlign: 'justify' }}>
            {personalInfo.bio}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
            <div>
              <strong>LOCATION:</strong><br/>{personalInfo.location}
            </div>
            <div>
              <strong>STATUS:</strong><br/>{personalInfo.availability}
            </div>
            <div>
              <strong>EMAIL:</strong><br/>{personalInfo.email}
            </div>
            <div>
              <strong>ALIAS:</strong><br/>{personalInfo.nickname}
            </div>
          </div>
        </NierBox>
      </div>

      <NierBox title="[ SYSTEM_LINKS ]">
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="/CV-Muhamad Cahyo.pdf" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <NierButton>[&#8681;] DOWNLOAD_CV</NierButton>
          </a>
          {socials.map((social) => (
            <a key={social.name} href={social.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <NierButton>
                {social.icon === 'github' && <span style={{marginRight: '8px'}}>[GH]</span>}
                {social.icon === 'linkedin' && <span style={{marginRight: '8px'}}>[LI]</span>}
                {social.icon === 'mail' && <span style={{marginRight: '8px'}}>[ML]</span>}
                {social.name.toUpperCase()}
              </NierButton>
            </a>
          ))}
        </div>
      </NierBox>
    </div>
  );
};
