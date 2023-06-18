'use client';
import { Explore } from "@components/Explore";
import { Register } from "@components/Register";
import { Container } from "@components/containers/Container";
import { Section } from "@components/containers/Section";
import { usePageStateContext } from "@hooks/usePageStateContext";


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
