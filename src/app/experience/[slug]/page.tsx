import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { about } from "@/app/resources/content";
import { baseURL } from "@/app/resources";
import styles from "./page.module.scss";

type ExperiencePageProps = {
  params: { slug: string };
};

function getExperience(slug: string) {
  return about.work.experiences.find((exp) => exp.slug === slug);
}

export function generateStaticParams() {
  return about.work.experiences.map((exp) => ({ slug: exp.slug }));
}

export async function generateMetadata({ params }: ExperiencePageProps) {
  const experience = getExperience(params.slug);
  if (!experience) return {};

  const title = experience.role
    ? `${experience.role} @ ${experience.company}`
    : `${experience.company} · Experience`;
  const description = experience.description || `Experience at ${experience.company}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://${baseURL}/experience/${experience.slug}`,
    },
  };
}

export default function ExperiencePage({ params }: ExperiencePageProps) {
  const experience = getExperience(params.slug);
  if (!experience) notFound();

  const title = experience.role
    ? `${experience.role} @ ${experience.company}`
    : experience.company;

  return (
    <div className={`spatial-page ${styles.page}`}>
      <Link href="/#work" className={styles.back}>
        ← Work
      </Link>

      <div className={styles.panel}>
        <div className={styles.top}>
          <div className={styles.titleBlock}>
            <h1 className={styles.title}>{title}</h1>
            {experience.timeframe && <p className={styles.timeframe}>{experience.timeframe}</p>}
          </div>
          <div className={styles.logoBox}>
            {experience.logo && (
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                width={160}
                height={80}
                className={styles.logo}
                priority
              />
            )}
          </div>
        </div>

        <div className={styles.description}>
          {experience.description ? (
            <p>{experience.description}</p>
          ) : (
            <p className={styles.placeholder} />
          )}
        </div>
      </div>
    </div>
  );
}
