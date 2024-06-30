import React from 'react'
import Image from 'next/image';

export const Description = () => {
  return (
		<div className='p-4 py-32 max-w-screen-lg mx-auto'>
			<h2 className="scroll-m-20 border-b mb-8 text-3xl font-semibold tracking-tight first:mt-0">
				Automatización de Procesos Industriales Eficientes
			</h2>
			<div className='md:flex gap-4'>
				<div>
					<h4 className="scroll-m-20 py-4 text-xl font-semibold tracking-tight">
						Innovación en Automatización Industrial
					</h4>

					<p className="leading-7 text-muted-foreground">
						Diseñamos y construimos máquinas para automatizar procesos en el
						ámbito alimenticio. Con sede en Tepic, Nayarit, México, tenemos
						proyectos en producción y ofrecemos planes de pago para nuestros
						clientes.
					</p>
				</div>

				<div>
					<h4 className="scroll-m-20 py-4 text-xl font-semibold tracking-tight">
						Proyectos Personalizados y Eficientes
					</h4>

					<p className="leading-7 text-muted-foreground">
						Sistemas Automatizados de Nayarit es líder en la automatización de
						procesos industriales. Participamos en la planeación y ejecución de
						proyectos, ofreciendo soluciones personalizadas y eficientes para
						nuestros clientes.
					</p>
				</div>
          </div>
        <div className='pt-10'>
          <Image
            src='/static/description.webp'
            width={1920}
            height={1080}
            alt="hero"
            className="object-cover w-full h-full z-auto rounded-3xl max-h-72"
          />
        </div>
		</div>
	);
}
