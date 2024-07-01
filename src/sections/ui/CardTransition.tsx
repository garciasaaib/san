'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Props {
  children: React.ReactNode;
  key: string | number;
}
export const CardTransition = ({children, key}: Props) => {

  const { ref, inView } = useInView({
    triggerOnce: true, // La animación se dispara una sola vez
    threshold: 0.1, // El componente debe estar al menos al 10% visible antes de animarse
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }} // Estado inicial: invisible y ligeramente desplazado hacia abajo
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }} // Anima a opacidad 1 y posición original si está en el viewport
      transition={{ duration: 0.5 }} // Duración de la transición
      key={key}
    >
      {children}
    </motion.div>
  );
};

