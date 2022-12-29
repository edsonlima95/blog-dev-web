import Layout from "../../components/Layout"

function About() {

    return (
        <Layout>
            <div className={`h-[400px] w-full bg-gray-800 flex items-center justify-center relative dark:bg-gray-900`}>
                <div className="flex flex-col justify-center text-center sm:w-8/12 items-center h-full absolute">
                    <h1 className="text-gray-200 font-bold text-6xl uppercase">Sobre nós</h1>
                    <p className="mt-4 text-gray-200">Conheça mais sobre nosso blog, quem somos, nossa equipe</p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 my-16 dark:my-0 py-8 dark:bg-gray-800">
                <div className="p-4">
                    <img src="/images/hero.jpg" className="rounded-lg border-l-4 border-b-4 border-violet-800" alt="" />
                </div>
                <div className="flex flex-col p-4">
                    <h2 className="text-gray-800 font-bold text-3xl uppercase dark:text-gray-200">Nossa história</h2>
                    <span className="h-1 rounded w-[200px] bg-blue-800"></span>
                    <p className="text-xl mt-5 text-gray-500 dark:text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur commodi tempora similique non voluptate laboriosam, animi necessitatibus quod placeat neque doloremque facilis asperiores fugiat ipsam quas tempore alias ullam odit?<br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum animi corrupti eaque magni eligendi fugit quos modi excepturi doloribus deserunt blanditiis, reiciendis odit nostrum quasi illo ipsam, id exercitationem laboriosam.
                    </p>
                </div>

            </div>
            
        </Layout>
    )

}

export default About