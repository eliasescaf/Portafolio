import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {MDXRemote} from "next-mdx-remote/rsc";
import Link from "next/link";
import AnimateDiv from "@/components/ui/AnimateDiv";

function getPost(slug: string){
    const markdownFile = fs.readFileSync(path.join(process.cwd(), "content/blog", `${slug}.mdx`), "utf-8");
    const {data: frontMatter, content} = matter(markdownFile);
    return {frontMatter, content};
}

export default async function BlogPost({params}: {params: {slug: string}}){
    const resolvedParams = await params;
    const {frontMatter, content} = getPost(resolvedParams.slug);

    return(
        <AnimateDiv className="mt-12 md:mt-16">
            <Link href="/blog" className="text-zinc-500 hover:text-emerald-500 text-sm transition-colors mb-8 inline-block">Volver a Blog</Link>
        
            <header className="mb-12 border-b border-zinc-800 pb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-4">
                    {frontMatter.title as string}
                </h1>
                <p className="text-zinc-400 text-sm">
                    {frontMatter.date as string}
                </p>
            </header>

            <article className="prose prose-invert prose-zinc prose-headings:text-zinc-100 prose-a:text-emerald-400 hover:prose-a:text-emerald-300 max-w-none">
                <MDXRemote source={content} />
            </article>
        </AnimateDiv>
    )
}