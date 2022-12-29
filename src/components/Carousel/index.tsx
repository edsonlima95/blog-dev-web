import { Carousel } from 'flowbite-react'

function CarouselSlider() {

    return (

        <div className="mb-6 h-56 sm:h-64 xl:h-80 2xl:h-96" >
            <Carousel>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <div className='bg-[#00000071] w-full h-full absolute'></div>
                    <img
                        src="/images/hero.jpg"
                        alt="..."
                    />
                    <div className="absolute sm:w-5/12">
                        <h3 className="text-2xl sm:text-4xl text-white font-bold">Titulo do post bem aqui</h3>
                        <small className="block font-bold mt-2 text-white mb-4">em: 20/01/2022</small>
                        <span className="inline-block text-gray-100 mb-2 bg-violet-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">backend</span>
                    </div>
                </div>

                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <div className='bg-[#00000071] w-full h-full absolute'></div>
                    <img
                        src="/images/hero.jpg"
                        alt="..."
                    />
                    <div className="absolute sm:w-5/12">
                        <h3 className="text-2xl sm:text-4xl text-white font-bold">Titulo do post bem aqui</h3>
                        <small className="block font-bold mt-2 text-white mb-4">em: 20/01/2022</small>
                        <span className="inline-block text-gray-100 mb-2 bg-violet-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">backend</span>
                    </div>
                </div>

                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <div className='bg-[#00000071] w-full h-full absolute'></div>
                    <img
                        src="/images/hero.jpg"
                        alt="..."
                    />
                    <div className="absolute sm:w-5/12">
                        <h3 className="text-2xl sm:text-4xl text-white font-bold">Titulo do post bem aqui</h3>
                        <small className="block font-bold mt-2 text-white mb-4">em: 20/01/2022</small>
                        <span className="inline-block text-gray-100 mb-2 bg-violet-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">backend</span>
                    </div>
                </div>

            </Carousel>
        </div >
    )

}

export default CarouselSlider