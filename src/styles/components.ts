import { theme } from './theme';

export const container = 'mx-auto px-4 max-w-7xl';

export const section = 'py-16 md:py-24';

export const button = {
  base: 'rounded-lg font-medium transition-all duration-200',
  primary: 'bg-primary-600 hover:bg-primary-700 text-white',
  secondary: 'bg-dark-800 hover:bg-dark-700 text-white',
  sizes: {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  },
};

export const heading = {
  h1: 'text-4xl md:text-5xl font-bold',
  h2: 'text-3xl md:text-4xl font-bold',
  h3: 'text-2xl md:text-3xl font-semibold',
};

export const card = {
  base: 'rounded-xl bg-dark-800 p-6 transition-all duration-200',
  hover: 'hover:transform hover:scale-105 hover:shadow-xl',
};

export const animation = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
  },
  slideIn: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.3 },
  },
};
