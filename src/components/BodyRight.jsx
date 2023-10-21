import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function BodyRight() {
  return (
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
                <FontAwesomeIcon icon={faLinkedin} /> in/wilton-gary-batiquin..
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
  );
}
