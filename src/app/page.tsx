import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="relative isolate mx-auto min-h-screen w-full max-w-md px-6 pb-20 pt-20 sm:pt-24">
      {/* 장식용 배경 빛: 글래스 카드 뒤로 은은한 색이 비치도록 합니다. */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-orange-200/60 blur-3xl dark:bg-orange-900/25" />
        <div className="absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-rose-200/50 blur-3xl dark:bg-rose-900/20" />
        <div className="absolute -bottom-24 left-1/4 h-80 w-80 rounded-full bg-amber-100/70 blur-3xl dark:bg-amber-900/20" />
      </div>

      <div className="absolute right-5 top-5">
        <ThemeToggle />
      </div>

      {/* 상단: 원형 프로필 사진, 이름, 한 줄 소개 */}
      <ProfileHeader profile={profile} />

      {/* 하단: 링크 카드 목록 (세로 배치). 클릭 수는 페이지가 열린 뒤 불러옵니다. */}
      <LinkList links={links} />
    </main>
  );
}
