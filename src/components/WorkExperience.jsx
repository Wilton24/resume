export default function WorkExperience() {
  return (
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
            Helped the head developer to add new features on the website.
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
            Collaborated with the senior staff to prepare the Enumeration Area
            map project files containing the merged geotagged building points
            from various mapping activities.
          </p>
          <p className="job-description">
            Analyzes and extracts data maps, databases, spreadsheets from
            preliminary plans and digital files.
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
  );
}
