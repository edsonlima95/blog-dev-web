import Link from "next/link"

type PostProps = {
    title: string,
    author: string,
    date: string,
    description: string,
    category: string
    imgUrl?: string
}

function Post({ title, author, date, description, category, imgUrl }: PostProps) {

    return (
        <div className="bg-slate-200 rounded-md mb-5">
            <Link href="/posts/post/teste">
                <img src={`${imgUrl}`} className="w-full rounded-t" alt="" srcSet="" />
            </Link>
            <div className="p-4 bg-slate-200 dark:bg-gray-900 dark:rounded-none rounded-md">
                <h3 className="text-2xl text-gray-800 font-black mb-2 dark:text-gray-200">{title}</h3>
                <small className="block font-bold text-gray-500 mb-4 dark:text-gray-300">Por: {author} em: {date}</small>
                <span className="inline-block text-gray-100 mb-2 bg-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-800">{category}</span>
                <p className="text-gray-700 dark:text-gray-400">{description.substring(0, 150)}...</p>
                <Link href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-800 dark:text-white dark:hover:bg-blue-400">continuar...</Link>
            </div>
        </div>
    )

}

export default Post