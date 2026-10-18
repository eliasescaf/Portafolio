import fs from "fs";
import path from "path";
import matter from "gray-matter";
import AnimateDiv from "@/components/ui/AnimateDiv";
import ItemCard from "@/components/ui/ItemCard";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

// El listado sale de content/blog, no de una lista escrita a mano.
// Cada .mdx define title, date (formato ISO YYYY-MM-DD) y description en su frontmatter.
function getPosts(){
    return fs.readdirSync(BLOG_DIR)
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => {
            const {data} = matter(fs.readFileSync(path.join(BLOG_DIR, file), "utf-8"));
            return {
                slug: file.replace(/\.mdx$/, ""),
                title: data.title as string,
                date: data.date as string,
                description: data.description as string
            };
        })
        .sort((a, b) => b.date.localeCompare(a.date));
}

export default function BlogPage(){
    const posts = getPosts();

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
                {posts.map((post) => (
                    <ItemCard
                    key={post.slug}
                    title={post.title}
                    subtitle={post.date}
                    description={post.description}
                    href={`/blog/${post.slug}`} />
                ))}
            </div>
        </AnimateDiv>
    )
}