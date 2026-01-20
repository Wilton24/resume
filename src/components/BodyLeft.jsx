import Profile from "./Profile";
// import WorkExperience from "./WorkExperience";
import WorkExperience from "./WorkExperience/WorkExperience";

export default function BodyLeft() {
  return (
    <div className="body-left">
      <Profile />
      <WorkExperience />
    </div>
  );
}
