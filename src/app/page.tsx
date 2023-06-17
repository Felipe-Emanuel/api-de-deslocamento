"use client";
import styles from "./Home.module.scss";
import { Container } from "../components/containers/Container";
import { Section } from "../components/containers/Section";
import { InfoSection } from "../components/InfoSection";

export default function Home() {

  return (
    <>
      <Container>
        <h2 className={styles.subtitle}>
          Conectando você aos seus clientes, de forma simples e eficiente!
        </h2>
        <Section id="demo">
          <InfoSection />
        </Section>
      </Container>
    </>
  );
}
