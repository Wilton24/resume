import profilePic from "../images/grad_pic.jpg";
export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <h1 className="name">Wilton Gary Batiquin</h1>
        <h3 className="position">Front-end Developer</h3>
      </div>
      <div className="header-right">
        <img src={profilePic} alt="profile-pic" />
      </div>
    </div>
  );
}
