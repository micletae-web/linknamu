"use client";

import { useEffect, useRef, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 데이터를 받기 전에는 모두 0회로 보여 줍니다.
  const [counts, setCounts] = useState<Record<string, number>>({});
  // 서버 값을 받기 전에 눌린 클릭은 받은 값 위에 더해 줍니다.
  const pendingClicks = useRef<Record<string, number>>({});
  const loaded = useRef(false);

  useEffect(() => {
    // 페이지가 열리면 모든 링크의 클릭 수를 한 번에 가져옵니다.
    fetch("/api/clicks", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : {}))
      .then((data: Record<string, number>) => {
        const merged = { ...data };
        for (const [id, n] of Object.entries(pendingClicks.current)) {
          merged[id] = (merged[id] ?? 0) + n;
        }
        loaded.current = true;
        setCounts(merged);
      })
      .catch(() => {
        loaded.current = true;
      });
  }, []);

  function handleClick(id: string) {
    if (!loaded.current) {
      pendingClicks.current[id] = (pendingClicks.current[id] ?? 0) + 1;
    }
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  }

  return (
    <ul className="mt-12 flex flex-col gap-4 sm:gap-5">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard link={link} count={counts[link.id] ?? 0} onClick={() => handleClick(link.id)} />
        </li>
      ))}
    </ul>
  );
}
