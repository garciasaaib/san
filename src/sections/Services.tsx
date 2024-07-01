'use client'
import Image from 'next/image';
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CardTransition } from './ui/CardTransition';

const data = {
  title: "Conoce Nuestros Servicios",
  subtitle: 'Impulsamos el desarrollo de tu negocio automatizando en pequeñas tareas de la fabricación de tu producto en venta.',
  cards: [
    {
      title: "Analizamos Procedimientos",
      description: "Trabajamos en tu idea de negocio, el proceso que deseas automatizar, el tamaño y la estructura que quieras para tus máquinas. Nos adecuamos a la construcción del proyecto en base a tu presupuesto y espectativas.",
      img: "/static/service3.webp",
    },
    {
      title: "Diseñamos Tecnología",
      description: "Diseño en base a sistemas mecánicos, eléctricos, de control, neumáticos, etc. El objetivo es obtener el aparato que trabaje para ti de manera automatica, con calidad y seguridad en el proceso.",
      img: "/static/service1.webp",
    },
    {
      title: "Generamos Soluciones",
      description: "Todos estos sistemas englobados en una máquina que permita establecer un negocio rentable o mejorar el que ya posees, con la velocidad y seguridad que permita alcanzar tus metas de producción, venta y economía.",
      img: "/static/service2.webp",
    },
  ]
}
export const Services = () => {
	const { ref, inView } = useInView({
    triggerOnce: true, // La animación se dispara una sola vez
    threshold: 0.1, // El componente debe estar al menos al 10% visible antes de animarse
  });
  return (
		<div className="bg-secondary-foreground text-secondary pt-10 py-20 dark:bg-secondary dark:text-secondary-foreground">
			<div className="max-w-3xl m-auto py-20">
				<h2 className="text-center scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
					{data.title}
				</h2>
				<p className="text-center leading-7 [&:not(:first-child)]:mt-6">
					{data.subtitle}
				</p>
			</div>
			<div className="max-w-screen-lg flex gap-10 md:grid-cols-3 mx-auto px-4 flex-wrap justify-center">
				{data.cards.map((card) => (
					<CardTransition key={card.title} >
						<Card
							className="bg-white border-none rounded-lg shadow-md w-[300px] overflow-hidden"
						>
							<CardHeader className="p-0 mb-4">
								<Image
									width={500}
									height={500}
									src={card.img}
									alt={card.title}
									className=" w-full h-40 object-cover"
								/>
							</CardHeader>
							<CardContent className="flex flex-col gap-4 mt-12">
								<Label>{card.title}</Label>
								<CardDescription>{card.description}</CardDescription>
							</CardContent>
						</Card>
					</CardTransition>
				))}
			</div>
		</div>
	);
}
