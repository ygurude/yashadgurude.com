"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "@/components/Header.module.scss";
import { person, social } from "@/app/resources/content";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
] as const;

export const Header = () => {
  const pathname = usePathname() ?? "";
  const onHome = pathname === "/";
  const [active, setActive] = useState("home");

  useEffect(() => {
    if (!onHome) return;

    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-35% 0px -50% 0px", threshold: 0.01 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [onHome]);

  const hrefFor = (id: string) => (onHome ? `#${id}` : `/#${id}`);
  const resumeHref = person.resume || social.find((item) => item.name === "LinkedIn")?.link || "#";

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href={hrefFor("home")} className={styles.brand}>
          {person.firstName}
        </a>
        <nav className={styles.nav} aria-label="Primary">
          {sections.map((section) => (
            <a
              key={section.id}
              href={hrefFor(section.id)}
              className={`${styles.link} ${onHome && active === section.id ? styles.active : ""}`}
            >
              {section.label}
            </a>
          ))}
          <a className={styles.resume} href={resumeHref} target="_blank" rel="noreferrer">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};
