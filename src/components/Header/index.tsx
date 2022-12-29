import Link from "next/link"
import { Navbar } from 'flowbite-react'

function Header() {

    return (
        <header className="w-full">
            <Navbar fluid={true} className="py-4 rounded-none" rounded={true}>
                <Navbar.Brand href="https://flowbite.com/">
                 
                    <img src="/images/logo.png" alt="" className="w-[150px]" srcSet="" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Link href="/" passHref className="border-b mb-2 md:mb-0 md:border-b-0 hover:text-violet-500 hover:rounded p-3 md:p-0 dark:text-gray-200">
                       Início
                    </Link>
                    <Link href="/about" passHref className="border-b mb-2 md:mb-0 md:border-b-0 hover:text-violet-500 hover:rounded p-3 md:p-0 dark:text-gray-200">
                        Sobre
                    </Link>
                    <Link href="/category/frontend" passHref className="border-b mb-2 md:mb-0 md:border-b-0 hover:text-violet-500 hover:rounded p-3 md:p-0 dark:text-gray-200">
                        Frontend
                    </Link>
                    <Link href="/category/backend" passHref className="border-b mb-2 md:mb-0 md:border-b-0 hover:text-violet-500 hover:rounded p-3 md:p-0 dark:text-gray-200">
                        Backend
                    </Link>
                    <Link href="/category/outros" passHref className="border-b mb-2 md:mb-0 md:border-b-0 hover:text-violet-500 hover:rounded p-3 md:p-0 dark:text-gray-200">
                        Outros
                    </Link>
                   
                </Navbar.Collapse>
            </Navbar>
        </header>
    )

}

export default Header