'use client';
import { Explore } from "@components/Explore";
import { Section } from "@components/containers/Section";
import { Register } from "@components/Register";
import { notFound } from "next/navigation";
import { Container } from "@components/containers/Container";
import { UserRegisters } from "@/src/app/components/UserRegisters";
import { useStateContext } from "@hooks/useStateContext";
import { usePageStateContext } from "@hooks/usePageStateContext";

interface statePageProps {
  params: {
    state: string;
  }
}

const pageStates = {
  início: <Explore />,
  explorar: <Explore />,
  cadastrar: <Register />,
  "meus registros": <UserRegisters />
}

export default function statePage ({ params }: statePageProps) {
  const { pageState } = usePageStateContext()
  const { state, paths } = useStateContext()

  if(params.state != paths[state!]) return notFound()

  return (
    <Container>
      <Section id="main-section">
        {pageStates[pageState!]}
      </Section>
    </Container>
  )
}
