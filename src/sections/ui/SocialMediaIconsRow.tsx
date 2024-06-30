import { IoLogoFacebook, IoLogoInstagram, IoLogoTiktok, IoLogoWhatsapp } from 'react-icons/io5'

const socialMedia =[
  {href: 'https://www.facebook.com/SisAutNay', icon: <IoLogoFacebook/>},
  {href: 'https://www.instagram.com/sis_auto_denayarit/', icon: <IoLogoInstagram/>},
  {href: 'https://api.whatsapp.com/send?phone=523113923041&text=Hola,', icon: <IoLogoWhatsapp/>},
  {href: 'https://www.tiktok.com/@alejandraocampo664', icon: <IoLogoTiktok/>},
]
export const SocialMediaIconsRow = () => {
  return (
		<div className="flex gap-4 my-4">
			{socialMedia.map(({ href, icon }) => (
				<a key={href} href={href} target='_blank' className="text-4xl text-secondary">
					{icon}
				</a>
			))}
		</div>
	);
}
