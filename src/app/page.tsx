import { LinkCard } from "@/components/LinkCard";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col items-center bg-zinc-50 px-4 py-16 dark:bg-black">
      <main className="flex w-full max-w-sm flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 text-5xl shadow-sm">
            🌳
          </div>
          <div>
            <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              키위장사생팬
            </h1>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              히히 키위가 좋아요
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-3">
          <LinkCard
            label="Discord"
            href="#"
            badgeClassName="bg-[#5865F2]"
            initial="D"
          />
          <LinkCard
            label="GitHub"
            href="#"
            badgeClassName="bg-zinc-900"
            initial="G"
          />
          <LinkCard
            label="YouTube"
            href="#"
            badgeClassName="bg-[#FF0000]"
            initial="Y"
          />
        </div>
      </main>
    </div>
  );
}
