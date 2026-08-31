export default function BentoCard({ children, className = "" }) {
  return (
    <div 
      className={`p-8 rounded-3xl border border-zinc-800 bg-zinc-900/20 hover:border-emerald-500 transition-colors duration-300 group flex flex-col justify-center ${className}`}
    >
      {children}
    </div>
  );
}