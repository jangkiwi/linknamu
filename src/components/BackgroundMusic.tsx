"use client";

import { useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const BGM_SRC = "/bgm/wii-shop-channel.mp3";

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      void audio.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <>
      <audio ref={audioRef} src={BGM_SRC} loop preload="auto" />
      <button
        type="button"
        onClick={toggle}
        aria-label={isPlaying ? "배경음악 끄기" : "배경음악 켜기"}
        className="fixed right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/40 text-[#7a6650] shadow-[0_10px_30px_rgba(80,46,12,0.25)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/55 dark:border-white/10 dark:bg-white/5 dark:text-[#cbb89a]"
      >
        {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
      </button>
    </>
  );
}
