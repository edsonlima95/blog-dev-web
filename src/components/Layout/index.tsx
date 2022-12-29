import Footer from "../Footer"
import Header from "../Header"

type LayoutProps = {
    children: React.ReactNode
}

function Layout({ children }: LayoutProps) {

    return (
        //Colocar a classe dark
        <div className="">
            <Header />
            
            <main className="dark:bg-gray-800">
                {children}
            </main>

            <Footer/>
        </div>
    )

}

export default Layout