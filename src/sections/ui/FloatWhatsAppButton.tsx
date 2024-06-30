import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io5';
const data = {href: 'https://api.whatsapp.com/send?phone=523113923041&text=Hola,', icon: <IoLogoWhatsapp size={60}/>}
export const FloatWhatsAppButton = () => {
  return (
		<a
			href={data.href}
			target="_blank"
			className="text-4xl text-green-500 fixed bottom-10 right-10 rounded-full"
		>
			{data.icon}
		</a>
	);
}
