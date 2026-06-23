import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { navLinks } from '../../data';

const sectionIndices = ['01', '02', '03', '04', '05', '06'];

export function SectionRail() {
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (!isHome) return;

    const sections = navLinks.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' },
    );

    sections.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  if (!isHome) return null;

  const allLinks = [
    { label: 'Home', href: '#top' },
    ...navLinks,
    { label: 'Awards', href: '#awards' },
  ];

  const handleClick = (href: string) => {
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <aside className="section-rail" aria-label="Page sections">
      <span className="section-rail-label">Sections</span>
      <ol className="section-rail-list">
        {allLinks.map((link, i) => (
          <li key={link.href}>
            <button
              type="button"
              className={`section-rail-link ${activeSection === link.href || (link.href === '#top' && !activeSection) ? 'active' : ''}`}
              onClick={() => handleClick(link.href)}
            >
              <span className="section-rail-index">{sectionIndices[i] ?? String(i).padStart(2, '0')}</span>
              {link.label}
            </button>
          </li>
        ))}
      </ol>
    </aside>
  );
}
