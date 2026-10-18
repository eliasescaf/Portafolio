import AnimateDiv from "@/components/ui/AnimateDiv";
import ItemCard from "@/components/ui/ItemCard";

const POSTS = [
    {
        title: "HTTP y Redes en criollo",
        date: "2024-09-03",
        description: "Un extenso articulo donde explico de manera sencilla como funciona el protocolo HTTP y las redes en general, con ejemplos y analogias.",
        slug: "http-y-redes-en-criollo"
    }
];

export default function BlogPage(){
    return(
        <AnimateDiv className="mt-12 md:mt-16">
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 inline-block pr-6">Blog</h1>
                <h6 className="text-lg  inline-block">(ES)</h6>
                <p className="mt-4 text-lg text-zinc-400 leading-relaxed max-w-xl">
                    Escribo sobre desarrollo web, producto, IA/ML y software en general. Pensamientos.
                </p>
            </div>

            <div className="flex flex-col gap-4">
                {POSTS.map((post, index) => (
                    <ItemCard
                    key={index}
                    title={post.title}
                    subtitle={post.date}
                    description={post.description}
                    href={`/blog/${post.slug}`} />
                ))}
            </div>
        </AnimateDiv>
    )
}