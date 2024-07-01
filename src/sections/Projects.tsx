import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button";
import { CardTransition } from "./ui/CardTransition";

const data = {
  title: "Proyectos Automatizados",
  subtitle: 'Impulsamos el desarrollo de tu negocio automatizando en pequeñas tareas de la fabricación de tu producto en venta.',
  cards: [

    {
      title: "Maquina Electrica para etiquetado de botellas",
      link: "https://www.facebook.com/photo/?fbid=795963542541477&set=pb.100063835160863.-2207520000",
      description: "Diseño en base a sistemas mecánicos, eléctricos, de control, neumáticos, etc. El objetivo es obtener el aparato que trabaje para ti de manera automatica, con calidad y seguridad en el proceso.",
      img: "/static/proyecto1.jpg",
    },
    {
      title: "Maquina tostadora de granos de cafe",
      link: "https://www.facebook.com/photo/?fbid=795963502541481&set=pb.100063835160863.-2207520000",
      description: "Todos estos sistemas englobados en una máquina que permita establecer un negocio rentable o mejorar el que ya posees, con la velocidad y seguridad que permita alcanzar tus metas de producción, venta y economía.",
      img: "/static/proyecto2.jpg",
    },
    {
      title: "Maquina empacadora de liquidos, polvos y granos",
      link: "https://www.facebook.com/photo/?fbid=795963459208152&set=pb.100063835160863.-2207520000",
      description: "Todos estos sistemas englobados en una máquina que permita establecer un negocio rentable o mejorar el que ya posees, con la velocidad y seguridad que permita alcanzar tus metas de producción, venta y economía.",
      img: "/static/proyecto3.jpg",
    },
    {
      title: "Maquina automatica para exprimir citricos",
      link: "https://www.facebook.com/photo/?fbid=795963415874823&set=pb.100063835160863.-2207520000",
      description: "Todos estos sistemas englobados en una máquina que permita establecer un negocio rentable o mejorar el que ya posees, con la velocidad y seguridad que permita alcanzar tus metas de producción, venta y economía.",
      img: "/static/proyecto4.jpg",
    },
    {
      title: "Maquina electrica para pelar camarones",
      link: "https://www.facebook.com/photo/?fbid=582139040590596&set=pb.100063835160863.-2207520000",
      description: "Todos estos sistemas englobados en una máquina que permita establecer un negocio rentable o mejorar el que ya posees, con la velocidad y seguridad que permita alcanzar tus metas de producción, venta y economía.",
      img: "/static/proyecto5.jpg",
    },
  ]
}
export const Projects = () => {
  return (
		<div className="pt-10 pb-20 dark:bg-primary-foreground dark:text-secondary-foreground">
			<div className="max-w-3xl m-auto py-20">
				<h2 className="text-center scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 ">
					{data.title}
				</h2>
				<CardTransition key={4}>

				<p className="text-center leading-7 [&:not(:first-child)]:mt-6">
					{data.subtitle}
				</p>
				</CardTransition>
			</div>
			<div className="max-w-screen-lg flex gap-10 px-4 justify-center m-auto">
				<Carousel
					className="w-full "
					opts={{
						align: "start",
						loop: true,
					}}
				>
					<CarouselContent className="-ml-2 md:-ml-4">
						{data.cards.map((data, index) => (
							<CarouselItem key={index} className="pl-2 md:pl-4 overflow-hidden md:basis-1/2 lg:basis-1/3">
								<div className="p-1 relative rounded-lg ">
									<Card className="relative h-[500px] ">
										<Image
											src={data.img}
											alt={data.title}
											width={1000}
											height={1000}
											className="object-cover w-full h-full absolute"
										/>
										<CardContent className="relative flex items-center justify-center p-6 bg-secondary">
											<span className="text-2xl font-semibold">
												{data.title}
											</span>
										</CardContent>

									</Card>
								</div>
								<div className="flex justify-end">
									<a href={data.link} target="_blank">
										<Button>Ir al post</Button>
									</a>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</div>
	);
}
