import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data';
import { SectionHeader } from '../ui/SectionHeader';
import { staggerContainer, staggerItem } from '../../lib/motion';

export function Projects() {
  const navigate = useNavigate();

  return (
    <section className="section container" id="projects" aria-labelledby="projects-heading">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div variants={staggerItem}>
          <SectionHeader index="04" label="Projects" title="Featured Work" id="projects-heading" />
        </motion.div>

        <div className="project-list">
          {projects.map((project, idx) => (
            <motion.button
              key={project.slug}
              type="button"
              className="project-row"
              variants={staggerItem}
              onClick={() => navigate(`/projects/${project.slug}`)}
              aria-label={`View project: ${project.title}`}
            >
              <span className="project-row-index">{String(idx + 1).padStart(2, '0')}</span>
              <div className="project-row-body">
                <h3 className="project-row-title">{project.title}</h3>
                <p className="project-row-desc">{project.description}</p>
                <div className="project-row-meta">
                  <span>{project.category}</span>
                  <span className="project-row-dot">·</span>
                  <span>{project.period}</span>
                </div>
              </div>
              <span className="project-row-arrow">
                <ArrowUpRight size={22} />
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
