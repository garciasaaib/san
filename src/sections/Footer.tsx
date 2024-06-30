import { FooterForm } from '@/sections/forms/FooterForm'
import Link from 'next/link';
import React from 'react'
import { SocialMediaIconsRow } from './ui/SocialMediaIconsRow';
import { Label } from '@/components/ui/label';
import { ToggleButton } from './ui/ToggleMode';


export const Footer = () => {
  return (
		<footer className="flex justify-center p-3 pt-10 bg-secondary-foreground text-secondary dark:bg-secondary dark:text-secondary-foreground">
			<div className='max-w-screen-lg md:grid md:grid-cols-2 gap-4'>
				<div className="footer_info">
					<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
						Sistemas Automatizados de Nayarit
					</h4>
					<p className="leading-7 [&:not(:first-child)]:mt-6">
						Diseñamos y construimos máquinas capaces de automatizar cualquier
						proceso
					</p>
					<SocialMediaIconsRow />
					<ToggleButton />
				</div>

				<div className="md:flex  md:justify-between">
					<div>
						<Label>Industrias</Label>
						<ul className="my-6 ml-6 list-disc [&>li]:mt-2">
							<li>
								<Label className="font-normal">Alimenticia</Label>
							</li>
							<li>
								<Label className="font-normal">Limpieza</Label>
							</li>
							<li>
								<Label className="font-normal">De la Salud</Label>
							</li>
						</ul>
					</div>

					<FooterForm />
				</div>
				<div className="md:col-span-2">
					<p className="text-sm text-muted-foreground mt-8 text-center">
						© {new Date().getFullYear()} Sistemas Automatizados Nayarit |{" "}
						<Link
							href="/privacy"
							className=" hover:underline underline-offset-4"
						>
							Aviso de privacidad
						</Link>
					</p>
				</div>
			</div>
		</footer>
	);
}
