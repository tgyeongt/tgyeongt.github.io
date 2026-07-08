import { activities, campusActivities, clubs, education } from "../../data/activity";
import TrainingItem from "./TrainingItem";

export default function Activity() {
  return (
    <>
      <div className="reveal">
        <div className="group-label">교육 & 연수</div>
        {education.map((e, i) => (
          <TrainingItem key={e.title} item={e} imgId={`edu-${i}`} />
        ))}
        <div className="divider" />
      </div>
      <div className="reveal mt-12">
        <div className="group-label">대외활동</div>
        <div className="sub-group-label">교외 활동</div>
        {activities.map((e, i) => (
          <TrainingItem key={e.title} item={e} imgId={`act-${i}`} />
        ))}
        <div className="sub-group-label">교내 활동</div>
        {campusActivities.map((e, i) => (
          <TrainingItem key={e.title} item={e} imgId={`campus-${i}`} />
        ))}
        <div className="divider" />
      </div>
      <div className="reveal mt-12">
        <div className="group-label">동아리</div>
        {clubs.map((e, i) => (
          <TrainingItem key={e.title} item={e} imgId={`club-${i}`} />
        ))}
        <div className="divider" />
      </div>
    </>
  );
}
