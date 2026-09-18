"use client";

import { useEffect, useState } from "react";
import { FaDiscord, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { LinkCard } from "@/components/LinkCard";

const LINKS = [
  {
    id: "discord",
    label: "디스코드",
    href: "https://discord.gg/wcuN7nXN",
    badgeClassName: "bg-[#5865F2]",
    icon: <FaDiscord />,
  },
  {
    id: "instagram",
    label: "인스타그램",
    href: "https://www.instagram.com/jangschna/",
    badgeClassName: "bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
    icon: <FaInstagram />,
  },
  {
    id: "youtube",
    label: "유튜브",
    href: "https://www.youtube.com/channel/UC-S7UK5MEK-czN1Kbi3sQRQ",
    badgeClassName: "bg-[#FF0000]",
    icon: <FaYoutube />,
  },
  {
    id: "github",
    label: "깃허브",
    href: "https://github.com/jangkiwi",
    badgeClassName: "bg-[#181717]",
    icon: <FaGithub />,
  },
] as const;

export function LinkList() {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => res.json())
      .then((data: Record<string, number>) => setCounts(data))
      .catch(() => {});
  }, []);

  function handleClick(id: string) {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    }).catch(() => {});
  }

  return (
    <div className="flex w-full flex-col gap-4">
      {LINKS.map((link) => (
        <LinkCard
          key={link.id}
          label={link.label}
          href={link.href}
          badgeClassName={link.badgeClassName}
          icon={link.icon}
          clickCount={counts[link.id] ?? 0}
          onClick={() => handleClick(link.id)}
        />
      ))}
    </div>
  );
}
