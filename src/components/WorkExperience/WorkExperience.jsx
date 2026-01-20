import styles from "./WorkExperience.module.css";

export default function WorkExperience() {
    return (
        <div className={styles.workExperience}>
            <h2 className={styles.sectionTitle}>Work experience</h2>

            {/* --- FIRST JOB --- */}
            <div className={styles.positionCompany}>
                <p className={styles.position}>Information Systems Analyst I</p>
                <p className={styles.company}>Philippine Statistics Authority</p>
            </div>

            <div className={styles.dateDescription}>
                <div className={styles.date}>
                    <p>OCT 2024-MARCH 2025</p>
                </div>
                <div className={styles.description}>
                    <p>Handled technical support and system maintenance
                        by troubleshooting hardware and software issues, managing datasets, and
                        developing monitoring trackers to support PSA operations and ensure data accuracy.</p>
                </div>
            </div>

            {/* --- SECOND JOB --- */}
            <div className={styles.positionCompany}>
                <p className={styles.position}>Full-Stack Developer</p>
                <p className={styles.company}>Freelance (Gig)</p>
            </div>

            <div className={styles.dateDescription}>
                <div className={styles.date}>
                    <p>JAN 2024 - JULY 2024</p>
                </div>
                <div className={styles.description}>
                    <p>Constructed SPA and MPA using TDD and OOP principles, ensuring
                        code quality, reusability, and bug-free solutions
                    </p>
                    <p>
                        Designed and implemented RESTful APIs and integrated third-party
                        services, optimizing performance and scalability while maintaining
                        secure, maintainable, and well-documented code.

                    </p>
                </div>
            </div>

            {/* --- THIRD JOB --- */}
            <div className={styles.positionCompany}>
                <p className={styles.position}>On-the Job Training</p>
                <p className={styles.company}>
                    Accounting Office / Financial Services | Naval State University
                </p>
            </div>

            <div className={styles.dateDescription}>
                <div className={styles.date}>
                    <p>March 2018 - June 2018</p>
                </div>
                <div className={styles.description}>
                    <p>Updated websites based on admin instructions</p>
                    <p>Helped develop a user-friendly online portal</p>
                    <p>Provided workstation support for accounting admin</p>
                </div>
            </div>
        </div>
    );
}
