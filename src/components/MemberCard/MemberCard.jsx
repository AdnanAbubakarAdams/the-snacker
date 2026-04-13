import { Link } from "react-router-dom";
import styles from "./MemberCard.module.css";

export default function MemberCard({ member }) {
  const { id, name, role, department, photo } = member;

  return (
    <Link to={`/member/${id}`} className={styles.card}>
      <div className={styles.photoWrapper}>
        <img src={photo} alt={name} className={styles.photo} />
      </div>
      <div className={styles.info}>
        <span className={styles.department}>{department}</span>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.role}>{role}</p>
      </div>
      <div className={styles.footer}>
        <span className={styles.viewProfile}>View Profile → </span>
      </div>
    </Link>
  );
}
