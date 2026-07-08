import type { ReactNode } from "react";
import SectionHead from "../common/SectionHead";
import { useReveal } from "../../hooks/useReveal";

interface SectionHeadProps {
  no: string;
  kicker: string;
  title: string;
}

interface SectionProps {
  id: string;
  dataSec: string;
  padding: string;
  bg?: string;
  textClass?: string;
  border?: boolean;
  head?: SectionHeadProps;
  children: ReactNode;
}

export default function Section({
  id,
  dataSec,
  padding,
  bg = "",
  textClass = "",
  border = true,
  head,
  children,
}: SectionProps) {
  const revealRef = useReveal<HTMLElement>();

  return (
    <section
      ref={revealRef}
      id={id}
      data-sec={dataSec}
      className={`${padding} scroll-mt-[58px] ${border ? "border-b-2 border-ink" : ""} ${bg} ${textClass}`}
    >
      <div className="px-6 sm:px-12 lg:px-[20vw]">
        {head && (
          <SectionHead no={head.no} kicker={head.kicker} title={head.title} />
        )}
        {children}
      </div>
    </section>
  );
}
