import type { ProjectShot } from "../../data/projects";

const imageModules = import.meta.glob<{ default: string }>(
  "../../assets/projects/*.png",
  {
    eager: true,
  },
);
const images: Record<string, string> = {};
for (const path in imageModules) {
  const name = path.match(/([^/]+)\.png$/)?.[1];
  if (name) images[name] = imageModules[path].default;
}

export default function Shot({ shot }: { shot: ProjectShot }) {
  const src = images[shot.img ?? shot.id];
  return (
    <div>
      <div
        className={`img-slot w-full ${src ? "" : "[aspect-ratio:410/800]"}`}
        data-img={shot.id}
      >
        {src ? <img src={src} alt={shot.cap} /> : shot.cap}
      </div>
      <div className="mt-[7px] font-mono text-[11px] text-[#9a9a9a]">
        {shot.cap}
        {!src && " · 410×800"}
      </div>
    </div>
  );
}
