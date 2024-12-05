import React from 'react';
import { motion } from 'framer-motion';

interface GradientIconProps {
  icon: React.ReactNode;
  gradient: string;
  className?: string;
  animate?: boolean;
}

const GradientIcon: React.FC<GradientIconProps> = ({
  icon,
  gradient,
  className = '',
  animate = true
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg bg-gradient-to-r p-2';
  const combinedClasses = `${baseClasses} ${gradient} ${className}`;

  if (animate) {
    return (
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={combinedClasses}
      >
        <div className="text-white">
          {icon}
        </div>
      </motion.div>
    );
  }

  return (
    <div className={combinedClasses}>
      <div className="text-white">
        {icon}
      </div>
    </div>
  );
};

export default GradientIcon;
