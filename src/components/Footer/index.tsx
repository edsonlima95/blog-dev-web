import { FacebookLogo, InstagramLogo, WhatsappLogo } from 'phosphor-react'

function Footer() {

    return (
        <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900">
            <div className="md:flex md:justify-between">
                <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-5 text-center">
                    <div className="w-full col-span-2">
                        <p className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Programando do jeito certo
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consectetur est illum officia saepe commodi porro omnis, impedit harum, odit possimus magni exercitationem tenetur aperiam quo reprehenderit, sunt nemo temporibus.
                        </p>
                    </div>
                    <div className="w-full ">
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            LINKS
                        </h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="https://flowbite.com/" className="hover:underline">
                                    Início
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="https://tailwindcss.com/" className="hover:underline">
                                    Sobre
                                </a>
                            </li>

                            <li>
                                <a href="https://tailwindcss.com/" className="hover:underline">
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div >
                    <div className="w-full">
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            CATEGORIAS
                        </h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a
                                    href="https://github.com/themesberg/flowbite"
                                    className="hover:underline "
                                >
                                    Frontend
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                                    Backend
                                </a>
                            </li>
                            <li>
                                <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                                    Outros
                                </a>
                            </li>
                        </ul>
                    </div >
                    <div className="w-full">
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            SOCIAIS
                        </h2>

                        <ul className="text-gray-600 flex gap-4 dark:text-gray-400 w-full justify-center">
                            <li className="mb-4">
                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <FacebookLogo size={22} />

                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <InstagramLogo size={22} />

                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <WhatsappLogo size={22} />

                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2022{" "}

                    Todos os direitos reservados.
                </span>

            </div>
        </footer>

    )

}

export default Footer