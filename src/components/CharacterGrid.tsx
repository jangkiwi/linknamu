"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const DISHEVELED_SRC = "/characters/disheveled.jpg";
const DISHEVELED_PLUS_SRC = "/characters/disheveled-plus.jpg";

const TILE_CLASSNAME =
  "group relative flex aspect-square items-center justify-center overflow-hidden rounded-[24px] border border-white/60 bg-white/40 p-0 shadow-[0_10px_30px_rgba(80,46,12,0.25)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/55 hover:shadow-[0_16px_38px_rgba(80,46,12,0.35)] dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10";

export function CharacterGrid() {
  const [disheveledSrc, setDisheveledSrc] = useState(DISHEVELED_SRC);
  const revertTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const disheveledAudioRef = useRef<HTMLAudioElement | null>(null);

  function playFromStart(audio: HTMLAudioElement | null) {
    if (!audio) return;
    audio.currentTime = 0;
    void audio.play();
  }

  function playOverlapping(src: string) {
    const audio = new Audio(src);
    void audio.play();
    setTimeout(() => audio.pause(), 3000);
  }

  function handleDisheveledClick() {
    if (revertTimeout.current) clearTimeout(revertTimeout.current);
    setDisheveledSrc(DISHEVELED_PLUS_SRC);
    playFromStart(disheveledAudioRef.current);
  }

  function handleDisheveledAudioEnded() {
    revertTimeout.current = setTimeout(() => {
      setDisheveledSrc(DISHEVELED_SRC);
    }, 3000);
  }

  return (
    <div className="flex w-full flex-col items-center gap-3">
      <p className="text-xs text-[#7a6650] dark:text-[#cbb89a]">톡톡 눌러보세요</p>

      <div className="grid w-full grid-cols-4 gap-3">
        <audio
          ref={disheveledAudioRef}
          src="/characters/disheveled.mp3"
          preload="auto"
          onEnded={handleDisheveledAudioEnded}
        />

        <a
          href="https://www.youtube.com/@TalesshopCh"
          target="_blank"
          rel="noopener noreferrer"
          className={TILE_CLASSNAME}
        >
          <Image src="/characters/namo.png" alt="나모" fill sizes="80px" className="object-cover" />
        </a>

        <button
          type="button"
          onClick={() => playOverlapping("/characters/working-cat.mp3")}
          className={TILE_CLASSNAME}
        >
          <Image
            src="/characters/working-cat.png"
            alt="일하는 고양이"
            fill
            sizes="80px"
            className="object-cover"
          />
        </button>

        <button type="button" onClick={handleDisheveledClick} className={TILE_CLASSNAME}>
          <Image src={disheveledSrc} alt="흐트러짐" fill sizes="80px" className="object-cover" />
        </button>

        <button
          type="button"
          onClick={() => playOverlapping("/characters/startled-cat.mp3")}
          className={TILE_CLASSNAME}
        >
          <Image
            src="/characters/startled-cat.png"
            alt="놀란 고양이"
            fill
            sizes="80px"
            className="object-cover"
          />
        </button>
      </div>
    </div>
  );
}
