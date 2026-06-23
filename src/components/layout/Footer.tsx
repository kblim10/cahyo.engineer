import { Link } from 'react-router-dom';
import { personalInfo, navLinks, socials } from '../../data';
import { GitHubIcon, LinkedInIcon } from '../ui/SocialIcons';
import { Mail } from 'lucide-react';

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: Mail,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <span className="footer-col-label">Sections</span>
          <nav className="footer-links" aria-label="Footer sections">
            {navLinks.map((link) => (
              <Link key={link.href} to={{ pathname: '/', hash: link.href.slice(1) }}>
                {link.label}
              </Link>
            ))}
            <Link to={{ pathname: '/', hash: 'awards' }}>Awards</Link>
          </nav>
        </div>

        <div className="footer-col">
          <span className="footer-col-label">Connect</span>
          <nav className="footer-links" aria-label="Social links">
            {socials.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <a key={social.name} href={social.url} target="_blank" rel="noreferrer">
                  <Icon size={14} />
                  {social.name}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="footer-col footer-col-info">
          <p className="footer-brand">{personalInfo.nickname}.</p>
          <p className="footer-copy">
            &copy; {year} {personalInfo.name}
          </p>
          <button type="button" className="footer-back-top" onClick={scrollToTop}>
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
