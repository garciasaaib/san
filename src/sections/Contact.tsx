import {
  Card,
  CardContent,
} from "@/components/ui/card"

import { ContactForm } from "./forms/ContactForm"
import Image from "next/image"

export const Contact = () => {
  return (
		<div className="relative flex justify-center">
			<div className="absolute top-0 right-0 bottom-0 left-0 z-0">
				<Image
					src="/static/services.jpg"
					width={1920}
					height={1080}
					alt="background"
					className="object-cover w-full h-full z-auto"
				/>
			</div>

			<div className="text-secondary py-12 px-4 flex flex-col relative max-w-[500px] dark:text-white">
				<h2 className="text-center scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
					Contacto
				</h2>
				<p className="pb-10 text-center leading-7 [&:not(:first-child)]:mt-6">
					Diseño, construcción y automatización de procesos de cualquier indole,
					con la mayor calidad.
				</p>

				{/* Card form */}
				<Card className="">
					<CardContent>
						<ContactForm />
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
