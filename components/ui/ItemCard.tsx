import Link from "next/link";

export default function ItemCard({title, subtitle, description, href="", className=""}){
    
    const content = (
    <>
      <div className="flex justify-between items-baseline mb-2">
        <h3 className="text-lg font-medium text-zinc-100 group-hover:text-white transition-colors">
          {title}
        </h3>
        <span className="text-sm text-zinc-500 font-mono">{subtitle}</span>
      </div>
      <p className="text-zinc-400 text-sm leading-relaxed">
        {description}
      </p>
    </>
  );

  const cardClasses = "group block p-6 border border-zinc-800 rounded-lg hover:border-emerald-500 transition-colors duration-300";

  if (href) {
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