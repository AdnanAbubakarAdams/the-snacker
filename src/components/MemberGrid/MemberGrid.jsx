import MemberCard from "../MemberCard/MemberCard";
import styles from "./MemberGrid.module.css";

export default function MemberGrid({ members }) {
  return (
    <div className={styles.grid}>
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
}
