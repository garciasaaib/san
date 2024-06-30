import { Button } from '@/components/ui/button';
import Image from 'next/image'
import Link from 'next/link'

const navItems = [
  { href: '/projects', label: 'Proyectos' },
  { href: '/contact', label: 'Contacto' },
]

export const Header = () => {
  return (
		<nav className="flex justify-between items-center p-5 max-w-screen-lg mx-auto">
      <Link href="/">
			<Image
        height={100}
        width={100}

        className="" src="/static/logo3.png" alt="logo"/>
      </Link>

			<ol className="flex justify-center items-center gap-5">
        {
          navItems.map(({ href, label }) => {
            if (href === '/contact') {
              return (
                <li key={href}>
                  <Button>

                  <Link className="underline-offset-4 hover:underline" href={href}>
                    {label}
                  </Link>
                  </Button>
                  </li>
              )
            }
            return (
            <li key={href}>
              <Link className="underline-offset-4 hover:underline" href={href}>
                {label}
              </Link>
            </li>
          )})
        }
			</ol>
		</nav>
	);
}
