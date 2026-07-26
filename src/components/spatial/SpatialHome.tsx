import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { HiEnvelope } from "react-icons/hi2";
import { about, home, person, social } from "@/app/resources/content";
import { ExperienceStrip } from "./ExperienceStrip";
import styles from "./SpatialHome.module.scss";

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  Email: HiEnvelope,
} as const;

const homeSocials = ["GitHub", "LinkedIn", "Instagram", "Email"] as const;

export function SpatialHome() {
  const iconSocials = social.filter(
    (item) => item.link && homeSocials.includes(item.name as (typeof homeSocials)[number]),
  );

  return (
    <div className={`spatial-page ${styles.root}`}>
      <section id="home" className={styles.hero}>
        <div className={styles.copy}>
          <h1 className={styles.nameLine}>{person.name}</h1>
          <p className={styles.subline}>{home.subline}</p>
          <div className={styles.socials}>
            {iconSocials.map((item) => {
              const Icon = socialIcons[item.name as keyof typeof socialIcons];
              if (!Icon) return null;
              return (
                <a
                  key={item.name}
                  href={item.link}
                  aria-label={item.name}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <div className={styles.blob}>
          <Image
            src={person.avatar}
            alt={person.name}
            width={520}
            height={600}
            className={styles.headshot}
            priority
          />
        </div>
      </section>

      <section id="about" className={styles.section}>
        <h2 className="page-title">About</h2>
        <div className={styles.aboutLayout}>
          <div className={styles.photoWrap}>
            <Image
              src={person.avatar}
              alt={person.name}
              width={480}
              height={640}
              className={styles.photo}
            />
          </div>
          <div className={styles.aboutCopy}>
            <h3 className={styles.aboutHeading}>Hi, my name is {person.firstName}</h3>
            {about.intro.display && <p className={styles.aboutBody}>{about.intro.description}</p>}
            {about.studies.display &&
              about.studies.institutions.map((institution) => (
                <div key={institution.name} className={styles.study}>
                  <h4>{institution.name}</h4>
                  <div className={styles.studyBody}>{institution.description}</div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section id="work" className={styles.section}>
        <h2 className="page-title">Work</h2>
        <ExperienceStrip />
      </section>
    </div>
  );
}
