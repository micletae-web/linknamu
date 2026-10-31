import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      {/* 얇은 그라데이션 테두리 + 따뜻한 그림자로 살짝 떠 있는 느낌을 줍니다. */}
      <div className="rounded-full bg-gradient-to-br from-white to-orange-100 p-1.5 shadow-[0_18px_40px_-14px_rgba(180,100,50,0.45)] dark:from-stone-700 dark:to-stone-800 dark:shadow-[0_18px_40px_-14px_rgba(0,0,0,0.7)]">
        <Image
          src={profile.image}
          alt={`${profile.name} 프로필 사진`}
          width={160}
          height={160}
          priority
          // 외부 URL(placehold.co는 SVG 응답)과 SVG는 최적화 없이 그대로 표시합니다.
          unoptimized={profile.image.startsWith("http") || profile.image.endsWith(".svg")}
          className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
        />
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">{profile.name}</h1>
      <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-stone-500 dark:text-stone-400">{profile.bio}</p>
    </header>
  );
}
