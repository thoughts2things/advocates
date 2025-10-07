interface HeroProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export function Hero({ title, description, children }: HeroProps) {
  return (
    <div className="flex flex-col items-center justify-center h-[400px] w-full bg-[#265b4e] text-[#f5f5f5]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-7xl font-thin">{title}</h1>
        <p className="text-2xl font-thin mb-4">{description}</p>
        {children}
      </div>
    </div>
  );
}
