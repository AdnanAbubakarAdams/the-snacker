import teamMembers from "../../data/teamMembers";
import MemberGrid from "../../components/MemberGrid/MemberGrid";
import styles from "./DirectoryPage.module.css";

export default function DirectoryPage() {
  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Meet The Team</h1>
        <p className={styles.subtitle}>
          {teamMembers.length} talented people building great things together.
        </p>
      </div>
      <MemberGrid members={teamMembers} />
    </main>
  );
}
