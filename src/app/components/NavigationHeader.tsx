import Image from "next/image";

interface NavigationHeaderProps {
  title?: string;
}

export function NavigationHeader({ title }: NavigationHeaderProps) {
  return (
    <div className="h-[60px] w-full bg-[#265b4e] text-[#f5f5f5] flex items-center justify-between px-8">
      <div className="flex items-center gap-2">
        <Image src="./wordmark.svg" alt="Solace Logo" width={80} height={60} />
      </div>
      <div className="flex items-center gap-2"></div>
    </div>
  );
}
