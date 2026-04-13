import { useParams, Link } from "react-router-dom";
import teamMembers from "../../data/teamMembers";
import styles from "./MemberDetailPage.module.css";

export default function MemberDetailPage() {
  const { id } = useParams();
  const member = teamMembers.find((m) => m.id === Number(id));

  if (!member) {
    return (
      <main className={styles.page}>
        <div className={styles.notFound}>
          <p>Member not Found.</p>
          <Link to="/" className={styles.backLink}>
            ⬅ Back to Directory
          </Link>
        </div>
      </main>
    );
  }

  const {
    name,
    role,
    department,
    bio,
    email,
    phone,
    location,
    photo,
    skills,
    joined,
  } = member;

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <Link to="/" className={styles.backLink}>
          ⬅ Back to Directory
        </Link>

        <div className={styles.profile}>
          <div className={styles.photoCol}>
            <img src={photo} alt={name} className={styles.photo} />
          </div>

          <div className={styles.detailsCol}>
            <span className={styles.department}>{department}</span>
            <h1 className={styles.name}>{name}</h1>
            <p className={styles.role}>{role}</p>

            <p className={styles.bio}>{bio}</p>

            <div className={styles.skillsSection}>
              <h3 className={styles.sectionLabel}>Skills</h3>
              <ul className={styles.skills}>
                {skills.map((skill) => (
                  <li key={skill} className={styles.skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.contactSection}>
              <h3 className={styles.sectionLabel}>Contact & Info</h3>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon}>✉️</span>
                  <a href={`mailto:${email}`} className={styles.contactLink}>
                    {email}
                  </a>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon}>📞</span>
                  <span>{phone}</span>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon}>📍</span>
                  <span>{location}</span>
                </li>
                <li className={styles.contactItem}>
                  <span className={styles.contactIcon}>📆</span>
                  <span>Joined {joined}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
