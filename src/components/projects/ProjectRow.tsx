import type { Project } from "../../data/projects";
import BulletItem from "./BulletItem";
import Shot from "./Shot";
import StackTag from "./StackTag";

interface ProjectRowProps {
  project: Project;
  open: boolean;
  onToggle: () => void;
}

export default function ProjectRow({ project, open, onToggle }: ProjectRowProps) {
  const p = project;

  return (
    <div className="border-b border-[#cfcfca]">
      <div
        onClick={onToggle}
        className="grid grid-cols-[36px_1fr_auto] sm:grid-cols-[64px_1fr_auto] gap-3 sm:gap-[22px] py-[26px] px-1 cursor-pointer items-center"
      >
        <span className="font-mono font-medium text-[13px] text-[#b5b5b5]">{p.no}</span>
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-sans font-bold text-[clamp(20px,2.4vw,28px)] leading-[1.1] tracking-[-0.02em]">
              {p.title}
            </span>
            {p.award && (
              <span className="font-mono font-medium text-[10.5px] text-accent border border-accent px-[7px] py-1 tracking-[0.05em]">
                {p.award}
              </span>
            )}
          </div>
          <div className="mt-2 font-sans text-base leading-[1.55] text-[#5a5a5a] max-w-[640px]">
            {p.sub}
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-5">
          <span className="hidden sm:inline font-mono font-medium text-xs text-[#9a9a9a] whitespace-nowrap">
            {p.period}
          </span>
          <span
            className={`inline-flex items-center justify-center w-[34px] h-[34px] border border-ink font-sans text-xl leading-none transition-transform duration-[350ms] ${
              open ? "rotate-45 bg-ink text-white" : "rotate-0 bg-transparent text-ink"
            }`}
          >
            +
          </span>
        </div>
      </div>
      <div
        className="overflow-hidden"
        style={{
          maxHeight: open ? "4000px" : "0px",
          opacity: open ? 1 : 0,
          transition: "max-height .55s ease, opacity .45s ease",
        }}
      >
        <div className="pt-2 px-1 pb-10 pl-6 sm:pl-[86px]">
          <div className="grid grid-cols-2 gap-x-4 sm:gap-x-10 gap-y-[14px] max-w-[820px] mb-[26px]">
            <div>
              <span className="font-mono font-medium text-[11px] text-[#9a9a9a]">ROLE</span>
              <div className="mt-1.5 font-sans font-semibold text-[15.5px] leading-[1.4]">
                {p.role}
              </div>
            </div>
            <div>
              <span className="font-mono font-medium text-[11px] text-[#9a9a9a]">TEAM</span>
              <div className="mt-1.5 font-sans font-semibold text-[15.5px] leading-[1.4]">
                {p.team}
              </div>
            </div>
          </div>
          {p.stack.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-[26px] max-w-[820px]">
              {p.stack.map((t) => (
                <StackTag key={t} label={t} />
              ))}
            </div>
          )}
          <ul className="mb-7 p-0 list-none max-w-[760px]">
            {p.bullets.map((b) => (
              <BulletItem key={b} text={b} />
            ))}
          </ul>
          {p.result.length > 0 && (
            <div className="border-l-[3px] border-ink pt-3 pb-3 pl-4 mb-7 max-w-[720px] font-sans font-medium text-base leading-[1.65]">
              <span className="font-mono font-medium text-[11px] text-accent tracking-[0.08em]">
                RESULT
              </span>
              <div className="mt-2 flex flex-col gap-1">
                {p.result.map((r) => (
                  <div key={r}>{r}</div>
                ))}
              </div>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-[repeat(3,minmax(0,410px))] gap-[14px] mb-6 items-start">
            {p.shots.map((sh) => (
              <Shot key={sh.id} shot={sh} />
            ))}
          </div>
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-[9px] px-4 py-[11px] border-[1.5px] border-ink bg-ink text-white no-underline font-sans font-medium text-[13px] leading-none"
            >
              라이브 사이트 방문 <span className="font-mono">↗</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
