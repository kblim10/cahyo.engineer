import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Tag as TagIcon, ExternalLink } from 'lucide-react';
import { getProjectBySlug, getAdjacentProjects } from '../data';
import { Tag } from '../components/ui/Tag';
import { Button } from '../components/ui/Button';
import { GitHubIcon } from '../components/ui/SocialIcons';
import { staggerContainer, staggerItem, pageTransition } from '../lib/motion';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const { prev, next } = slug ? getAdjacentProjects(slug) : { prev: null, next: null };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <motion.article
      className="project-detail container"
      {...pageTransition}
    >
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span className="breadcrumb-sep">/</span>
        <Link to="/#projects">Projects</Link>
        <span className="breadcrumb-sep">/</span>
        <span>{project.title}</span>
      </nav>

      <motion.div
        className="project-detail-header"
        variants={staggerContainer}
        initial="initial"
        animate="whileInView"
      >
        <motion.div variants={staggerItem}>
          <span className="project-card-category">{project.category}</span>
          <h1 className="project-detail-title">{project.title}</h1>
          <div className="project-detail-meta">
            <span>
              <User size={14} /> {project.role}
            </span>
            <span>
              <Calendar size={14} /> {project.period}
            </span>
            <span>
              <TagIcon size={14} /> {project.category}
            </span>
          </div>
        </motion.div>
      </motion.div>

      <div className="project-detail-body">
        <motion.div
          className="project-detail-content"
          variants={staggerContainer}
          initial="initial"
          animate="whileInView"
        >
          <motion.p variants={staggerItem}>{project.longDescription}</motion.p>

          <motion.div variants={staggerItem}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '1rem' }}>Key Highlights</h3>
            <ul className="project-detail-highlights">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.aside
          className="project-detail-sidebar"
          variants={staggerContainer}
          initial="initial"
          animate="whileInView"
        >
          <motion.div variants={staggerItem}>
            <h4>Technologies</h4>
            <div className="skill-tags">
              {project.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </motion.div>

          {(project.demoUrl || project.repoUrl) && (
            <motion.div variants={staggerItem} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <h4>Links</h4>
              {project.demoUrl && (
                <Button variant="outline" href={project.demoUrl} target="_blank" rel="noreferrer">
                  <ExternalLink size={16} />
                  Live Demo
                </Button>
              )}
              {project.repoUrl && (
                <Button variant="outline" href={project.repoUrl} target="_blank" rel="noreferrer">
                  <GitHubIcon size={16} />
                  Repository
                </Button>
              )}
            </motion.div>
          )}
        </motion.aside>
      </div>

      <nav className="project-nav" aria-label="Project navigation">
        {prev ? (
          <Link to={`/projects/${prev.slug}`} className="project-nav-link">
            <span className="project-nav-label">← Previous</span>
            <span className="project-nav-title">{prev.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {next && (
          <Link to={`/projects/${next.slug}`} className="project-nav-link next">
            <span className="project-nav-label">Next →</span>
            <span className="project-nav-title">{next.title}</span>
          </Link>
        )}
      </nav>
    </motion.article>
  );
}
