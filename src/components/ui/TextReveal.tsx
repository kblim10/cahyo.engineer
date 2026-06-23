import { motion } from 'framer-motion';
import { ease } from '../../lib/motion';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'p' | 'span';
}

export function TextReveal({ children, className = '', delay = 0, as: Tag = 'span' }: TextRevealProps) {
  const words = children.split(' ');

  return (
    <Tag className={`text-reveal ${className}`.trim()} aria-label={children}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="text-reveal-mask">
          <motion.span
            className="text-reveal-word"
            initial={{ y: '110%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: delay + i * 0.04, ease }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
