import { useEffect, useState } from "react";
import { profile } from "../../data/profile";

const LINKS: Array<[string, string]> = [
  ["about", "소개"],
  ["record", "이력"],
  ["skills", "기술"],
  ["projects", "프로젝트"],
  ["contact", "연락"],
];

export default function Nav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.getAttribute("data-sec") ?? "");
          }
        });
      },
      { threshold: 0.5 },
    );
    document
      .querySelectorAll<HTMLElement>("[data-sec]")
      .forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[90] h-[58px] flex items-center justify-between px-6 sm:px-12 lg:px-[20vw] border-b border-ink bg-white/[.86] backdrop-blur-[10px]">
      <a
        href="#top"
        className="flex items-center gap-2.5 no-underline text-ink"
      >
        <span className="w-[11px] h-[11px] bg-accent inline-block" />
        <span className="font-sans font-bold text-[15px] leading-none tracking-[-0.01em]">
          {profile.name}
        </span>
        <span className="hidden sm:inline font-mono font-medium text-[11px] text-[#9a9a9a] tracking-[0.02em]">
          FE · FULLSTACK
        </span>
      </a>
      <div className="flex gap-3 sm:gap-[26px] items-center">
        {LINKS.map(([id, ko]) => (
          <a
            key={id}
            href={`#${id}`}
            className={`font-mono font-medium text-[11px] sm:text-[12.5px] no-underline tracking-[0.03em] ${
              active === id ? "text-ink" : "text-[#9a9a9a]"
            }`}
          >
            {ko}
          </a>
        ))}
      </div>
    </nav>
  );
}
