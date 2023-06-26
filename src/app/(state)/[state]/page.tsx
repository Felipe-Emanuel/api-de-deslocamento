'use client';
import { Explore } from "@components/Explore";
import { Section } from "@components/containers/Section";
import { Register } from "@components/Register";
import { Container } from "@components/containers/Container";
import { usePageStateContext } from "@hooks/usePageStateContext";
import { UserRegisters } from "@/src/app/components/UserRegisters";

const pageStates = {
  início: <Explore />,
  explorar: <Explore />,
  cadastrar: <Register />,
  "meus registros": <UserRegisters />
}

export default function statePage () {
  const { pageState } = usePageStateContext()

  return (
    <Container>
      <Section id="main-section">
        {pageStates[pageState!]}
      </Section>
    </Container>
  )
}
