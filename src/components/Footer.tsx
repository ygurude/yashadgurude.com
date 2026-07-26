import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { HiEnvelope } from "react-icons/hi2";
import { person, social } from "@/app/resources/content";
import styles from "./Footer.module.scss";

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  Email: HiEnvelope,
} as const;

const footerSocials = ["GitHub", "LinkedIn", "Instagram", "Email"] as const;

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const icons = social.filter(
    (item) => item.link && footerSocials.includes(item.name as (typeof footerSocials)[number]),
  );

  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        {icons.map((item) => {
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
      <p>© {currentYear} {person.name}</p>
    </footer>
  );
};
