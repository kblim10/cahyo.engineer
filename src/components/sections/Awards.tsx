import { motion } from 'framer-motion';
import { awards } from '../../data';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';
import { staggerContainer, staggerItem } from '../../lib/motion';

export function Awards() {
  if (awards.length === 0) return null;

  return (
    <section className="section container" id="awards" aria-labelledby="awards-heading">
      <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: '-80px' }}>
        <motion.div variants={staggerItem}>
          <SectionHeader index="05" label="Awards" title="Recognition" id="awards-heading" />
        </motion.div>

        <div className="grid-2">
          {awards.map((award, i) => (
            <motion.div key={i} variants={staggerItem}>
              <Card className="award-card">
                <span className="award-scope">{award.scope}</span>
                <h3 className="award-title">{award.title}</h3>
                <p className="award-event">{award.event}</p>
                <p className="award-meta">
                  {award.organizer} · {award.year}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
