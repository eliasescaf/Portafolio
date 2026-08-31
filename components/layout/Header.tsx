import Link from "next/link";

export default function Home(){
    return(
        <header className="fixed top-0 w-full z-50 border-b border-zinc-800 hover:border-emerald-500 transition-colors duration-300 bg-zinc-950/80 backdrop-blur-md">
            <div className="w-[90%] mx-auto px-6 h-16 flex items-center justify-between">
                {/*Nombre*/}
                <Link href="/" className="text-zinc-100 text-lg font-semibold tracking-tight hover:text-white transition-colors">
                    eliasescaf
                </Link>

                {/*Navigation*/}
                <menu className="flex gap-6">
                    <Link href="/" className="text-zinc-400 font-medium text-sm hover:text-zinc-100 transition-colors">
                        HOME
                    </Link>
                    <Link href="/blog" className="text-zinc-400 font-medium text-sm hover:text-zinc-100 transition-colors">
                        BLOG
                    </Link>
                </menu>
            </div>    
        </header>
    )
}
