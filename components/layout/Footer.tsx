import Link from "next/link";

export default function Footer(){
    return(
        <footer className="mt-24 border-t border-zinc-800 hover:border-emerald-500 transition-colors duration-300 bg-zinc-950">
            <div className="w-[90%] mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-zinc-500">
                    © {new Date().getFullYear()} Elias Escalante Fuentes
                </p>
                <div className="flex gap-6">
                    <Link href="https://github.com/eliasescaf" className="text-sm font-medium text-zinc-500 hover:text-zinc-300 transition-colors">Github</Link>
                    <Link href="mailto:eliasescalante27@gmail.com" className="text-sm font-medium text-zinc-500 hover:text-zinc-300 transition-colors">E-mail</Link>
                </div>
            </div>
        </footer>
    )
}