import { Button } from '@/components/ui/button';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => {
  return (
		<div className="relative bg-secondary-foreground text-secondary min-h-screen flex justify-center md:min-h-[500px] overflow-hidden ">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full top-0 left-0 object-cover"
        >
          <source src="/static/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      
			<div className="relative flex flex-col justify-around px-4 max-w-xl text-center h-100 md:justify-center md:gap-10 dark:text-white">
				<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
					Automatización de procesos industriales
				</h1>
				<div className='grid gap-6'>
					<p className="leading-7 [&:not(:first-child)]:mt-6">
						Diseñamos y construimos máquinas para automatizar procesos en el
						ámbito alimenticio y más.
					</p>
					<div className="flex justify-center flex-col gap-4 md:flex-row">
            <div>
						<Button variant='secondary' className="rounded-3xl px-10">
							<Link href='/contact'>
              Contacto
              </Link>
						</Button>
            </div>
            <div>

						<Button variant='link' className="rounded-3xl px-10 text-secondary dark:text-white">Ver mas</Button>
            </div>
					</div>
				</div>
			</div>
		</div>
	);
}
