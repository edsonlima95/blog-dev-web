import Link from "next/link"
import { LinkSimple, ListDashes, ListNumbers } from "phosphor-react"
import TitleRight from "../TitleRight"


function LeftContent() {

  const counter = [1, 2, 3, 4]

  return (
    <>
      <div className="flex items-center">
        <ListNumbers size={32} className="text-blue-600 mr-3" />
        <TitleRight title="MAIS VISTOS" Textcolor="text-blue-600" bordercolor="bg-blue-600" />
      </div>

      <ul>
        {counter.map(i => (
          <li key={i} className="flex flex-col mb-3 hover:bg-gray-200 p-3 w-full cursor-pointer  border-l-2 border-blue-400 dark:bg-gray-900">
            <Link href="#" className="font-semibold text-gray-600 dark:text-gray-200">Como criar um API Rest com adonis js com autenticação</Link>
            <small className="block font-bold mt-2 text-gray-500 mb-4 dark:text-gray-300">em: 20/01/2022</small>
            <span className="inline-block self-start text-gray-100 mb-2 bg-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-900">frontend</span>
          </li>
        ))}

      </ul>

      <div className="flex items-center">
        <ListDashes size={32} className="text-violet-600 mr-3" />
        <TitleRight title="CATEGORIAS" Textcolor="text-violet-600" bordercolor="bg-violet-600" />
      </div>

      <ul>
        <li className="hover:bg-gray-200 p-3 w-full cursor-pointer rounded-lg border-l-2 border-violet-400 dark:hover:bg-gray-900">
          <Link href="/category/frontend" className="font-semibold text-gray-600 dark:text-gray-200">Frontend</Link>
        </li>
        <li className="hover:bg-gray-200 p-3 w-full cursor-pointer rounded-lg border-l-2 mt-3 border-violet-400 dark:hover:bg-gray-900">
          <Link href="/category/backend" className="font-semibold text-gray-600 dark:text-gray-200">Backend</Link>
        </li>
        <li className="hover:bg-gray-200 p-3 w-full cursor-pointer rounded-lg border-l-2 mt-3 border-violet-400 dark:hover:bg-gray-900">
          <Link href="/category/outros" className="font-semibold text-gray-600 dark:text-gray-200">Outros</Link>
        </li>
      </ul>

      <div className="mt-12 w-full max-w-sm p-4 bg-gray-200 border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-4 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">Se inscreva para receber noticias</h5>

          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Digite seu nome" required />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Melhor e-mail</label>
            <input type="email" name="email" id="email" className="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Digite seu e-mail" required />
          </div>

          <button type="submit" className="w-full text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Quero receber</button>

        </form>
      </div>
    </>
  )

}

export default LeftContent