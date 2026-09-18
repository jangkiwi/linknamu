import type { ReactNode } from "react";

type LinkCardProps = {
  label: string;
  href: string;
  badgeClassName: string;
  icon: ReactNode;
  clickCount: number;
  onClick?: () => void;
};

export function LinkCard({
  label,
  href,
  badgeClassName,
  icon,
  clickCount,
  onClick,
}: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="flex w-full items-center gap-4 rounded-[28px] border border-white/60 bg-white/40 px-5 py-4 shadow-[0_10px_30px_rgba(80,46,12,0.25)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/55 hover:shadow-[0_16px_38px_rgba(80,46,12,0.35)] dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg text-white shadow-sm ${badgeClassName}`}
      >
        {icon}
      </span>
      <span className="font-medium text-[#2c2118] dark:text-[#f4e9da]">
        {label}
      </span>
      <span className="ml-auto text-xs text-[#7a6650] dark:text-[#cbb89a]">
        {clickCount}회
      </span>
    </a>
  );
}
