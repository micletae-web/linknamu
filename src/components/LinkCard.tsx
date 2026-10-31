"use client";

import type { LinkItem } from "@/data/profile";

type Props = {
  link: LinkItem;
  count: number;
  onClick: () => void;
};

export default function LinkCard({ link, count, onClick }: Props) {
  function handleClick() {
    onClick();
    // 페이지를 떠나도 요청이 전송되도록 sendBeacon을 우선 사용합니다.
    const body = JSON.stringify({ id: link.id });
    const sent =
      typeof navigator.sendBeacon === "function" &&
      navigator.sendBeacon("/api/clicks", new Blob([body], { type: "application/json" }));
    if (!sent) {
      fetch("/api/clicks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      }).catch(() => {});
    }
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="group flex w-full items-center gap-4 rounded-3xl border border-white/70 bg-white/45 px-4 py-3.5 shadow-[0_8px_30px_-12px_rgba(150,90,50,0.25)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-white/65 hover:shadow-[0_12px_34px_-12px_rgba(150,90,50,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-white/[0.08] dark:bg-stone-900/40 dark:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] dark:hover:bg-stone-800/50"
    >
      {link.emoji && (
        <span
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/80 text-xl shadow-sm dark:bg-white/10"
        >
          {link.emoji}
        </span>
      )}
      <span className="flex-1 font-semibold text-stone-800 dark:text-stone-100">{link.title}</span>
      <span className="pr-1 text-xs tabular-nums text-stone-400 dark:text-stone-400">{count.toLocaleString()}회</span>
    </a>
  );
}
