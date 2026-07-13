import { projects } from "../../data/projects";
import ProjectRow from "./ProjectRow";
import ProjectsNav from "./ProjectsNav";

export default function Projects() {
  return (
    <>
      <p className="reveal mb-10 font-sans text-[15.5px] leading-[1.6] text-[#8a8a8a]">
        각 프로젝트의 상세 내용과 스크린샷을 확인할 수 있습니다.{" "}
        <span className="font-mono">— 총 {projects.length}건</span>
      </p>
      <div className="list-top-divider">
        {projects.map((p) => (
          <ProjectRow key={p.id} project={p} />
        ))}
      </div>
      <ProjectsNav projects={projects} />
    </>
  );
}
