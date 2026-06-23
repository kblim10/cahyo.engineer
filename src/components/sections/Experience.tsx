import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { experiences, education } from '../../data';
import { SectionHeader } from '../ui/SectionHeader';
import { Tag } from '../ui/Tag';
import { staggerContainer, staggerItem } from '../../lib/motion';

export function Experience() {
  return (
    <section className="section container" id="experience" aria-labelledby="experience-heading">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div variants={staggerItem}>
          <SectionHeader index="02" label="Experience" title="Journey So Far" id="experience-heading" />
        </motion.div>

        <div className="grid-2">
          <motion.div variants={staggerItem}>
            <div className="subsection-label">
              <Briefcase size={18} />
              <h3>Work Experience</h3>
            </div>
            <div className="timeline">
              {experiences.map((exp, i) => (
                <div key={i} className="timeline-item">
                  <p className="timeline-period">{exp.period}</p>
                  <h4 className="timeline-role">{exp.role}</h4>
                  <p className="timeline-company">{exp.company}</p>
                  <p className="timeline-desc">{exp.description}</p>
                  <div className="skill-tags">
                    {exp.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={staggerItem}>
            <div className="subsection-label">
              <GraduationCap size={18} />
              <h3>Education</h3>
            </div>
            <div className="timeline">
              {education.map((edu, i) => (
                <div key={i} className="timeline-item">
                  <p className="timeline-period">{edu.year}</p>
                  <h4 className="timeline-role">{edu.degree}</h4>
                  <p className="timeline-company">{edu.institution}</p>
                  <p className="timeline-desc">{edu.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
