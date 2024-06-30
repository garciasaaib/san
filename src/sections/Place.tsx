import React from 'react'

export const Place = () => {
  return (
		<div className="w-full flex m-auto items-center justify-center flex-col p-4 gap-4  "> 
      <div className='max-w-screen-lg md:grid md:grid-cols-2'>

			<div className=''>
				<h2 className="scroll-m-20 my-14 text-3xl font-semibold tracking-tight">
					Donde nos ubicamos
				</h2>
				<p className="leading-7 [&:not(:first-child)]:mt-6">
					Diseño y construcción de máquinas automatizadas para procesos
					alimenticios en Tepic, Nayarit.
				</p>
				<br />
				<p className="text-lg font-semibold">Direccion</p>
				<p className="leading-7">
					Hidalgo 79, entre limantur y Leandro Ocampo 63780 Tepic, México
				</p>
				<br />

				<div className="text-lg font-semibold">Horario</div>
				<p className="leading-7">
					Lunes - Viernes <br />
					9:00 am - 6:00 pm
				</p>
				<br />
			</div>
			<div className="flex items-center justify-center w-full">
				<iframe
					className="w-full h-60"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.5143027611707!2d-104.89954692391638!3d21.448327680308104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8427312160dffc15%3A0xd82935edc348a046!2sLeandro%20Ocampo%2C%20Xalisco%20Centro%2C%20Xalisco%2C%20Nay.!5e0!3m2!1ses-419!2smx!4v1719690471392!5m2!1ses-419!2smx"
					style={{ border: 2 }}
					allowFullScreen={true}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
			</div>
		</div>
	);
}
