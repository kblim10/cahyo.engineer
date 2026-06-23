import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../../data';
import { Button } from '../ui/Button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastY && y > 200);
      lastY = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (!isHome) return;
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${hidden ? 'navbar-hidden' : ''}`}
      >
        <div className="container navbar-inner">
          <Link to="/" className="navbar-logo">
            cahyo<span className="navbar-logo-dot">.</span>
          </Link>

          <nav aria-label="Main navigation">
            <ul className="navbar-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {isHome ? (
                    <a
                      href={link.href}
                      className={`navbar-link ${activeSection === link.href ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link to={{ pathname: '/', hash: link.href.slice(1) }} className="navbar-link">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="navbar-actions">
            <Button
              variant="outline"
              href="/CV-Muhamad Cahyo.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </Button>

            <button
              className="hamburger"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} role="dialog" aria-label="Mobile navigation">
        {navLinks.map((link) =>
          isHome ? (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.label}
            </a>
          ) : (
            <Link key={link.href} to={{ pathname: '/', hash: link.href.slice(1) }}>
              {link.label}
            </Link>
          ),
        )}
        <Button variant="primary" href="/CV-Muhamad Cahyo.pdf" target="_blank" rel="noreferrer">
          Resume
        </Button>
      </div>
    </>
  );
}
