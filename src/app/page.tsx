import styles from "./styles/Home.module.scss";
import { Section } from "./components/containers/Section";
import { Container } from "./components/containers/Container";
import { InfoSection } from "./components/InfoSection";

export default function Home() {
  return (
    <>
      <Container>
        <h2 className={styles.subtitle}>
          Conectando o mundo a você de forma simples e eficiente!
        </h2>
        <Section id="demo">
          <InfoSection />
        </Section>
      </Container>
    </>
  );
}
