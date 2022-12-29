import HeroPrincipal from "../components/HeroPrincipal";
import Layout from "../components/Layout";
import LeftContent from "../components/LeftContent";
import Pagination from "../components/Pagination";
import Post from "../components/Post";
import CarouselSlider from "../components/Carousel";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>

      <HeroPrincipal />

      <section className="sm:flex ">
        <div className="w-full sm:w-9/12 p-5">

          <div className="flex flex-col items-center my-10">
            <h2 className="text-center mb-2 text-4xl text-gray-900 font-extrabold dark:text-gray-200">Noticias recentes</h2>
            <span className="h-1 rounded w-[200px] bg-blue-800"></span>
          </div>

          <CarouselSlider />

          <article className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          
              <Post
                title="Titulo do post"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, exercitationem. Distinctio doloremque facere ea, aliquam veritatis, molestias sint inventore minima alias veniam nesciunt esse, impedit accusamus! Quos beatae tempore explicabo?"
                author="edson lima"
                date="21/11/2022"
                category="tech"
                imgUrl="/images/hero.jpg"
              />
           
            <Post
              title="Titulo do post"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, exercitationem. Distinctio doloremque facere ea, aliquam veritatis, molestias sint inventore minima alias veniam nesciunt esse, impedit accusamus! Quos beatae tempore explicabo?"
              author="edson lima"
              date="21/11/2022"
              category="frontend"
              imgUrl="/images/hero.jpg"
            />
            <Post
              title="Titulo do post"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, exercitationem. Distinctio doloremque facere ea, aliquam veritatis, molestias sint inventore minima alias veniam nesciunt esse, impedit accusamus! Quos beatae tempore explicabo?"
              author="edson lima"
              date="21/11/2022"
              category="backend"
              imgUrl="/images/hero.jpg"
            />

            <Post
              title="Titulo do post"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, exercitationem. Distinctio doloremque facere ea, aliquam veritatis, molestias sint inventore minima alias veniam nesciunt esse, impedit accusamus! Quos beatae tempore explicabo?"
              author="edson lima"
              date="21/11/2022"
              category="backend"
              imgUrl="/images/hero.jpg"
            />
          </article>

          {/* <Pagination /> */}

        </div>
        <div className="w-full sm:w-3/12 p-5">

          <LeftContent />

        </div>
      </section>
    </Layout>

  )
}
