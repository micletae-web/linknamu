export type Profile = {
  name: string;
  bio: string;
  image: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
  emoji?: string;
};

export const profile: Profile = {
  name: "김개발",
  bio: "풀스택 개발자 : 요즈음에는 AI개발에 관심이 많아요",
  image: "https://placehold.co/160x160/orange/white",
};

// id는 클릭 수 집계 키로 쓰이므로 바꾸지 않는 것이 좋습니다.
export const links: LinkItem[] = [
  { id: "github", title: "깃허브", url: "https://github.com/micletae-web/linknamu", emoji: "🏠" },
  { id: "blog", title: "블로그", url: "https://blog.naver.com/lostroom2366", emoji: "✨" },
  { id: "email", title: "이메일", url: "mailto:micletae@gmail.com", emoji: "📨" },
];
