import { useEffect, useState } from "react";
import type { Project } from "../../data/projects";

interface ProjectsNavProps {
  projects: Project[];
}

export default function ProjectsNav({ projects }: ProjectsNavProps) {
  const [activeId, setActiveId] = useState(projects[0]?.id ?? "");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const rows = projects
      .map((p) => document.getElementById(p.id))
      .filter((el): el is HTMLElement => el !== null);

    const update = () => {
      const firstRow = rows[0];
      const lastRow = rows[rows.length - 1];
      if (!firstRow || !lastRow) return;
      const line = window.innerHeight / 2;
      const firstTop = firstRow.getBoundingClientRect().top;
      const lastBottom = lastRow.getBoundingClientRect().bottom;
      setVisible(line >= firstTop && line <= lastBottom);

      let current = rows[0]?.id ?? "";
      for (const el of rows) {
        if (el.getBoundingClientRect().top - line <= 0) {
          current = el.id;
        }
      }
      if (current) setActiveId(current);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [projects]);

  return (
    <>
      <nav
        aria-label="프로젝트 바로가기"
        className={`hidden lg:flex flex-col items-end gap-[7px] fixed right-7 top-1/2 -translate-y-1/2 z-[80] transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {projects.map((p) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            title={p.title}
            className="group flex items-center gap-2 no-underline py-[3px] max-w-[170px]"
          >
            <span
              className={`font-mono text-[11px] tracking-[0.01em] truncate transition-colors ${
                activeId === p.id ? "text-ink" : "text-[#b5b5b5] group-hover:text-[#6a6a6a]"
              }`}
            >
              {p.navLabel ?? p.title}
            </span>
            <span
              className={`w-[7px] h-[7px] shrink-0 transition-colors ${
                activeId === p.id ? "bg-ink" : "bg-[#d5d5d0] group-hover:bg-[#9a9a9a]"
              }`}
            />
          </a>
        ))}
      </nav>

      <nav
        aria-label="프로젝트 바로가기"
        className={`lg:hidden fixed bottom-0 inset-x-0 z-[80] border-t border-ink bg-white/[.92] backdrop-blur-[10px] transition-transform duration-300 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex gap-[7px] overflow-x-auto px-4 py-[10px]">
          {projects.map((p) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              className={`shrink-0 font-mono text-[11px] px-[9px] py-[5px] border no-underline whitespace-nowrap ${
                activeId === p.id
                  ? "bg-ink text-white border-ink"
                  : "border-[#d5d5d0] text-[#6a6a6a]"
              }`}
            >
              {p.navLabel ?? p.title}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
