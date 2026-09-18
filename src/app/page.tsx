import Image from "next/image";
import { BackgroundMusic } from "@/components/BackgroundMusic";
import { CharacterGrid } from "@/components/CharacterGrid";
import { LinkList } from "@/components/LinkList";

export default function Home() {
  return (
    <div className="bg-warm-gradient flex min-h-dvh flex-col items-center px-6 py-20">
      <BackgroundMusic />
      <main className="flex w-full max-w-sm flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-amber-200/70 to-orange-300/50 blur-xl" />
            <Image
              src="/profile.jpg"
              alt="키위쟝사생팬 프로필 사진"
              width={160}
              height={160}
              priority
              className="h-36 w-36 rounded-full object-cover shadow-[0_16px_40px_rgba(80,46,12,0.45)] ring-4 ring-white/70 dark:ring-white/10"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#2c2118] dark:text-[#f4e9da]">
              키위쟝사생팬
            </h1>
            <p className="mt-1 text-sm text-[#7a6650] dark:text-[#cbb89a]">
              평범한 대학원생 | 히히 키위가 좋아요
            </p>
          </div>
        </div>

        <LinkList />

        <CharacterGrid />
      </main>
    </div>
  );
}
