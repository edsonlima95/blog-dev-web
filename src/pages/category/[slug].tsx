import Layout from "../../components/Layout";
import { useRouter } from 'next/router'
import Post from "../../components/Post";

function Category() {

    const router = useRouter();

    const counter = [1, 1, 2];

    return (
        <Layout>
            <div className={`h-[400px] w-full bg-gray-800 flex items-center justify-center relative dark:bg-gray-900`}>
                <div className="flex flex-col justify-center w-8/12 items-center h-full absolute">
                    <h1 className="text-gray-200 font-bold text-6xl uppercase">{router.query.slug}</h1>
                    <p className="mt-4 text-gray-200 mb-4">Posts relacionados a categoria.</p>
                    <span className={`h-[2px] rounded w-[100px] mt-1 bg-violet-600`}></span>
                </div>
            </div>

            <section className="grid grid-cols-1 sm:grid-cols-3 sm:p-10 p-5 gap-8 dark:bg-gray-800">
                {counter.map(i => (
                    <Post
                        key={i}
                        title="Titulo do post"
                        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, exercitationem. Distinctio doloremque facere ea, aliquam veritatis, molestias sint inventore minima alias veniam nesciunt esse, impedit accusamus! Quos beatae tempore explicabo?"
                        author="edson lima"
                        date="21/11/2022"
                        category="tech"
                        imgUrl="/images/hero.jpg"
                    />
                ))}
            </section>
        </Layout>
    )

}

export default Category;