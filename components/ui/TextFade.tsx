'use client';
import { motion, useInView } from 'framer-motion';
import React from 'react';
 
export function TextFade({
  direction,
  children,
  className = '',
  staggerChildren = 0.1,
}: {
  direction: 'up' | 'down';
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
}) {
  const FADE_DOWN = {
    // show: { opacity: 1, y: 0, transition: { type: 'spring', delay: 0.20, duration: 1 } },
    show: { opacity: 1, y: 0, transition: { type: 'spring', duration: 1 } },
    hidden: { opacity: 0, y: direction === 'down' ? -30 : 30 },
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });
  console.log("isin", isInView)
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'show' : ''}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerChildren,
          },
        },
      }}
      className={className}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <motion.div variants={FADE_DOWN}>{child}</motion.div>
        ) : (
          child
        )
      )}
    </motion.div>
  );
}
