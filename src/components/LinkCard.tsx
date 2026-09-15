type LinkCardProps = {
  label: string;
  href: string;
  badgeClassName: string;
  initial: string;
};

export function LinkCard({
  label,
  href,
  badgeClassName,
  initial,
}: LinkCardProps) {
  return (
    <a
      href={href}
      className="flex w-full items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
    >
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${badgeClassName}`}
      >
        {initial}
      </span>
      <span className="font-medium text-zinc-900 dark:text-zinc-50">
        {label}
      </span>
    </a>
  );
}
