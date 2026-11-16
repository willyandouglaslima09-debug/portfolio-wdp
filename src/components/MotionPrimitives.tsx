import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { SectionTheme } from '../types/portfolio';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  isPresentationMode?: boolean;
}

export const TextReveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  className = '',
  isPresentationMode = false,
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={isPresentationMode ? { opacity: 1, y: 0 } : undefined}
      whileInView={!isPresentationMode ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const SectionFooter: React.FC<{
  code: string;
  theme: SectionTheme;
  extraLeftTag?: string;
}> = ({ code, theme, extraLeftTag }) => {
  const textColor = theme === 'dark' ? 'text-[#A6AFBC]' : 'text-[#53606A]';
  const borderColor = theme === 'dark' ? 'border-[#25313F]/70' : 'border-[#CBD0C8]/90';

  return (
    <footer
      className={`max-w-[1360px] w-full mx-auto pt-6 mt-8 border-t ${borderColor} flex items-center justify-between text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] ${textColor}`}
    >
      <span>
        RELAÇÕES, PRINCÍPIOS E VALORES
        {extraLeftTag ? ` / ${extraLeftTag}` : ''}
      </span>
      <span className="shrink-0">{code}</span>
    </footer>
  );
};
