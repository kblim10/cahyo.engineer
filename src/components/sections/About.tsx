import { motion } from 'framer-motion';
import { MapPin, Mail, Download } from 'lucide-react';
import { personalInfo, socials } from '../../data';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { TextReveal } from '../ui/TextReveal';
import { GitHubIcon, LinkedInIcon } from '../ui/SocialIcons';
import { staggerContainer, staggerItem } from '../../lib/motion';

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: Mail,
} as const;

export function About() {
  return (
    <section className="section container" id="about" aria-labelledby="about-heading">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div variants={staggerItem}>
          <SectionHeader index="01" label="About" title="Who I Am" id="about-heading" />
        </motion.div>

        <div className="about-grid">
          <motion.div variants={staggerItem}>
            <TextReveal as="p" className="about-lead" delay={0.1}>
              {personalInfo.bio.split('.')[0] + '.'}
            </TextReveal>
            <p className="about-bio">{personalInfo.bio}</p>
            <p className="about-beyond">{personalInfo.beyondCode}</p>
          </motion.div>

          <motion.div variants={staggerItem} className="about-side">
            <div className="about-info-list">
              <div className="about-info-item">
                <MapPin size={16} />
                <span>{personalInfo.location}</span>
              </div>
              <div className="about-info-item">
                <Mail size={16} />
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
            </div>

            <div className="about-links">
              <Button variant="outline" href="/CV-Muhamad Cahyo.pdf" target="_blank" rel="noreferrer">
                <Download size={16} />
                Resume
              </Button>
              {socials.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <Button key={social.name} variant="ghost" href={social.url} target="_blank" rel="noreferrer">
                    <Icon size={16} />
                    {social.name}
                  </Button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
