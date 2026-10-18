import Link from "next/link";

interface ItemCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  href?: string;
  tag?: string;
  className?: string;
}

const BADGE_STYLES = {
  live: "border-emerald-500/50 text-emerald-400",
  github: "border-zinc-700 text-zinc-400",
};

export default function ItemCard({title, subtitle, description, href="", tag="", className=""}: ItemCardProps){

    const content = (
    <>
      <div className="flex justify-between items-baseline mb-2 gap-4">
        <h3 className="text-lg font-medium text-zinc-100 group-hover:text-white transition-colors flex items-center gap-2">
          {title}
          {tag && (
            <span className={`px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-full border ${tag === "live" ? BADGE_STYLES.live : BADGE_STYLES.github}`}>
              {tag}
            </span>
          )}
        </h3>
        <span className="text-sm text-zinc-500 font-mono shrink-0">{subtitle}</span>
      </div>
      <p className="text-zinc-400 text-sm leading-relaxed">
        {description}
      </p>
    </>
  );

  const cardClasses = "group block p-6 border border-zinc-800 rounded-lg hover:border-emerald-500 transition-colors duration-300";

  if (href) {
    const isExternal = href.startsWith("http");

    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cardClasses}>
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={cardClasses}>
        {content}
      </Link>
    );
  }

  return (
    <div className={cardClasses}>
      {content}
    </div>
  );
}
