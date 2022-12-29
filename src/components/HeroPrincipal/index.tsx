import style from './style.module.css'


function HeroPrincipal() {
    
    return (
        <section className={`${style.mainHero} flex justify-center items-center h-[550px] w-full relative`}>
          <div className="absolute w-full h-full bg-[#000000b8]"></div>
          <div className="absolute  text-center">
            <h1 className="text-6xl font-bold text-white mb-3">Programando do jeito certo</h1>
            <p className="text-2xl text-gray-200">Seu blog de noticias sobre programação e tecnologia</p>
            <button type="button" className="mt-8 w-48 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-4 text-center mr-2 mb-2">ENTRE EM CONTATO</button>
          </div>
       </section>
    )

}

export default HeroPrincipal