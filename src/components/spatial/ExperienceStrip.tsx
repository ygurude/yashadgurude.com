import Image from "next/image";
import Link from "next/link";
import { about } from "@/app/resources/content";
import styles from "./ExperienceStrip.module.scss";

export function ExperienceStrip() {
  const experiences = about.work.experiences || [];

  if (!experiences.length) return null;

  return (
    <div className={styles.grid}>
      {experiences.map((exp) => (
        <Link
          key={exp.slug}
          href={`/experience/${exp.slug}`}
          className={styles.card}
          aria-label={`View ${exp.company} experience`}
        >
          {exp.logo ? (
            <Image
              src={exp.logo}
              alt={`${exp.company} logo`}
              width={180}
              height={90}
              className={styles.logo}
            />
          ) : (
            <span className={styles.fallback}>{exp.company}</span>
          )}
        </Link>
      ))}
    </div>
  );
}
