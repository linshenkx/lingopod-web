import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  animation?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  animation = true
}) => {
  const baseClasses = 'bg-dark-700 rounded-xl';
  const hoverClasses = hover ? 'hover:shadow-xl transition-shadow duration-300' : '';
  const combinedClasses = `${baseClasses} ${hoverClasses} ${className}`;

  if (animation) {
    return (
      <motion.div
        whileHover={hover ? { scale: 1.02 } : undefined}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className={combinedClasses}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};

export default Card;
