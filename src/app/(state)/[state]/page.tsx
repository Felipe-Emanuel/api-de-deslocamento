'use client';
import { Explore } from "@/src/components/Explore";
import { Register } from "@/src/components/Register";
import { Container } from "@/src/components/containers/Container";
import { Section } from "@/src/components/containers/Section";
import { usePageStateContext } from "@/src/data/hooks/usePageStateContext";

const pageStates = {
  início: <Explore />,
  explorar: <Explore />,
  cadastrar: <Register />,
  "meus registros": <Register />
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
