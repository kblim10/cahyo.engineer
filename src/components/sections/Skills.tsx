import { motion } from 'framer-motion';
import { servicePillars, techMarquee } from '../../data';
import { SectionHeader } from '../ui/SectionHeader';
import { Marquee } from '../ui/Marquee';
import { staggerContainer, staggerItem } from '../../lib/motion';

export function Skills() {
  return (
    <section className="section container" id="skills" aria-labelledby="skills-heading">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div variants={staggerItem}>
          <SectionHeader index="03" label="Skills" title="What I Do" id="skills-heading" />
        </motion.div>

        <motion.div variants={staggerItem} className="skills-marquee-wrap">
          <Marquee items={techMarquee} />
        </motion.div>

        <div className="service-grid">
          {servicePillars.map((pillar) => (
            <motion.article key={pillar.title} className="service-card" variants={staggerItem}>
              <h3 className="service-card-title">{pillar.title}</h3>
              <ul className="service-card-list">
                {pillar.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
