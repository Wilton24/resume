import "./styles/index.css";
import profilePic from "./images/grad_pic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function App() {
  return (
    <div className="app">
      <div className="resume-wrapper">
        <div className="header">
          <div className="header-left">
            <h1 className="name">Wilton Gary Batiquin</h1>
            <h3 className="position">Front-end Developer</h3>
          </div>
          <div className="header-right">
            <img src={profilePic} alt="profile-pic" />
          </div>
        </div>

        <div className="body">
          <div className="body-left">
            <div className="profile">
              <h2 className="bold">Profile</h2>
              <p>
                Aspiring full-stack developer, proficient in JavaScript with the
                React library, spends eight to twelve hours daily on the
                computer -- creating projects and solving leet codes. Competent
                and effective in communication and collaboration with back-end
                developers, designers, and other team members.
              </p>
            </div>

            {/* ----- WORK EXPERIENCE ----- */}
            <div className="work-experience">
              <h2 className="bold">Work experience</h2>

              <div className="position-and-company-name grid">
                <p className="position bold">Sales Representative</p>
                <p className="company-name">Virginia Talent Show Inc.</p>
              </div>
              <div className="date-and-job-description">
                <div className="date">
                  <p>July 2023 - Present</p>
                </div>
                <div className="job-description-section">
                  <p className="job-description">
                    Helped the head developer to add new features on the
                    website.
                  </p>
                  <p>Managed to close 7 sales</p>
                </div>
              </div>

              <div className="position-and-company-name grid">
                <p className="job-position bold">Map Data Processor</p>
                <p className="company-name">Philippine Statistics Authority</p>
              </div>

              <div className="date-and-job-description">
                <div className="date">
                  <p>Nov 2018-March 2019</p>
                </div>
                <div className="job-description-section">
                  <p className="job-description">
                    Collaborated with the senior staff to prepare the
                    Enumeration Area map project files containing the merged
                    geotagged building points from various mapping activities.
                  </p>
                  <p className="job-description">
                    Analyzes and extracts data maps, databases, spreadsheets
                    from preliminary plans and digital files.
                  </p>
                </div>
              </div>

              {/* ----- THIRD WORK EXPERIENCE ----- */}

              <div className="position-and-company-name grid">
                <p className="job-position bold">On-the Job Training</p>
                <p className="company-name">
                  Accounting office/Financial Services | Naval State University
                </p>
              </div>

              <div className="date-and-job-description">
                <div className="date">
                  <p>March 2018-June 2018</p>
                </div>
                <div className="job-description-section">
                  <p className="job-description">
                    Updated websites as instructed by the admin to introduce new
                    features and content
                  </p>
                  <p className="job-description">
                    Contributed to develop a user-friendly online portal
                  </p>
                  <p className="job-description">
                    Workstation to support for accounting admin
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ----  BODY RIGHT  ----- */}
          <div className="body-right">
            <section className="right-section">
              <div className="contact-info right-section">
                <h2>Contact</h2>
                <p>
                  <li>
                    <FontAwesomeIcon icon={faPhone} /> +63 929-430-7465
                  </li>
                </p>
                <p>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} /> cbasher24@gmail.com
                  </li>
                </p>
                <p>
                  <li>
                    <a href="https://www.linkedin.com/in/wilton-gary-batiquin-4bb492153/">
                      {" "}
                      <FontAwesomeIcon icon={faLinkedin} />{" "}
                      in/wilton-gary-batiquin..
                    </a>{" "}
                  </li>
                </p>
                <p>
                  <li>
                    <a href="https://github.com/Wilton24">
                      <FontAwesomeIcon icon={faGithub} /> github.com/Wilton24
                    </a>
                  </li>
                </p>
                <p>
                  <li>
                    <FontAwesomeIcon icon={faLocationDot} /> P.I. Garcia, Naval,
                    Biliran
                  </li>
                </p>
              </div>
            </section>

            <section className="right-section">
              <div className="achievements right-section">
                <h2>Expertise</h2>
                <p>
                  <li>HTML</li>
                </p>
                <p>
                  <li>CSS</li>
                </p>
                <p>
                  <li>JavaScript</li>
                </p>
                <p>
                  <li>ReactJS</li>
                </p>
                <p>
                  <li>Node JS</li>
                </p>
                <p>
                  <li>Git</li>
                </p>
              </div>
            </section>

            <section className="education-section">
              <div className="education-history">
                <h2>Education History</h2>
              </div>
              <div className="year-and-school">
                <div className="year">
                  <p>2014-2019</p>
                </div>
                <div className="school">
                  <p>Bachelor of Science in Computer Science</p>
                  <p>Naval State University</p>
                </div>
              </div>

              <div className="year-and-school">
                <div className="year">
                  <p>2010-2014</p>
                </div>
                <div className="school">
                  <p>Secondary Education</p>
                  <p>Naval School of Fisheries</p>
                </div>
              </div>
            </section>
            <section className="seminars-and-training-section">
              <h3>Certification</h3>

              <div className="certification-div">
                <div className="certification-name">
                  <h4>National Certificate II</h4>
                </div>
                <div className="date-and-company">
                  <p>2015/TESDA</p>
                </div>
              </div>
              <div className="certification-div">
                <div className="certification-name">
                  <h4>Android Mobile Application Development</h4>
                </div>
                <div className="date-and-company">
                  <p>2018/Biliran Province State University</p>
                </div>
              </div>

              <div className="certification-div">
                <div className="certification-name">
                  <h4>Hardware Servicing</h4>
                </div>
                <div className="date-and-company">
                  <p>2016/Biliran Province State Univiersity</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
