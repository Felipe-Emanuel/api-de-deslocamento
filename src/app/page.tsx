"use client";
import styles from "./Home.module.scss";
import { ToastContainer } from "react-toastify";
import { Header } from "../components/Header";
import { Container } from "../components/containers/Container";
import { Section } from "../components/containers/Section";
import { InfoSection } from "../components/InfoSection";

export default function Home() {
  return (
    <>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
