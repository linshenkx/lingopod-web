import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface SourceCodeCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
}

const SourceCodeCard: React.FC<SourceCodeCardProps> = ({
  title,
  description,
  icon,
  link,
  className = ''
}) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`block p-6 bg-dark-700 rounded-xl hover:bg-dark-600 transition-all duration-300 ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="p-2 bg-dark-800 rounded-lg">
            {icon}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <h3 className="text-lg font-semibold text-white truncate">
              {title}
            </h3>
            <ExternalLink className="w-4 h-4 text-gray-400" />
          </div>
          <p className="mt-1 text-sm text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </motion.a>
  );
};

export default SourceCodeCard;
