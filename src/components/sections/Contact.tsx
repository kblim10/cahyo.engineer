import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { personalInfo, socials } from '../../data';
import { GitHubIcon, LinkedInIcon } from '../ui/SocialIcons';
import { Mail } from 'lucide-react';
import { staggerContainer, staggerItem } from '../../lib/motion';

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: Mail,
} as const;

export function Contact() {
  return (
    <section className="section container contact-section" id="contact" aria-labelledby="contact-heading">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div className="contact-header" variants={staggerItem}>
          <span className="section-index">06</span>
          <h2 className="contact-heading" id="contact-heading">
            Let&apos;s talk<span className="contact-heading-dot">.</span>
          </h2>
        </motion.div>

        <motion.p className="contact-sub" variants={staggerItem}>
          Have a project in mind or want to discuss opportunities?
          <br />
          Fill out your message — I&apos;ll get back to you soon.
        </motion.p>

        <motion.div variants={staggerItem}>
          <a href={`mailto:${personalInfo.email}`} className="contact-email">
            <span>{personalInfo.email}</span>
            <ArrowUpRight size={28} className="contact-email-arrow" />
          </a>
        </motion.div>

        <motion.div className="contact-socials" variants={staggerItem}>
          {socials.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="contact-social-link"
                aria-label={social.name}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
