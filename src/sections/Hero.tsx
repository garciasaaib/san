'use client'
import { Button } from '@/components/ui/button';
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

export const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null); // Inicializa useRef con null

  useEffect(() => {
    // Asegúrate de acceder a .current para manipular el elemento del DOM
    const videoElement = videoRef.current;

    if (videoElement) {
      const checkLoad = () => {
        setVideoLoaded(true);
      };

      videoElement.addEventListener('loadeddata', checkLoad);

      return () => videoElement.removeEventListener('loadeddata', checkLoad);
    }
  }, []);


  return (
		<div className="relative bg-secondary-foreground text-secondary min-h-screen flex justify-center md:min-h-[500px] overflow-hidden ">
      {!videoLoaded && (
        <div className='absolute inset-0 z-0'>
          <Image
            src="/static/hero.jpeg"
            alt="Hero Placeholder"
						width={1920}
						height={1080}
						className='w-full h-full object-cover'
            priority // Esto hace que la imagen se cargue prioritariamente
          />
        </div>
      )}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute w-full h-full top-0 left-0 object-cover"
        onLoadedData={() => setVideoLoaded(true)}
				poster="/static/hero.jpeg"
      >
        <source src="/static/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

			<div className="relative flex flex-col justify-around px-4 max-w-xl text-center h-100 md:justify-center md:gap-10 dark:text-white">
				<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
					Automatización de procesos industriales
				</h1>
				<div className="grid gap-6">
					<p className="leading-7 [&:not(:first-child)]:mt-6">
						Diseñamos y construimos máquinas para automatizar procesos en el
						ámbito alimenticio y más.
					</p>
					<div className="flex justify-center flex-col gap-4 md:flex-row">
						<div>
							<Button variant="secondary" className="rounded-3xl px-10">
								<Link href="/contact">Contacto</Link>
							</Button>
						</div>
						<div>
							<Button
								variant="link"
								className="rounded-3xl px-10 text-secondary dark:text-white"
							>
								Ver mas
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
