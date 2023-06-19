import { Filters } from "../Filters";
import { SectionCard } from "../SectionCard";
import { useStateContext } from "@hooks/useStateContext";

export function Explore() {
  const {hasSearched} = useStateContext()
  return (
    <>
      <Filters />
      <SectionCard title={hasSearched ? "Sua busca..." : "Recém-Chegados"} isLastObject />
      <SectionCard title={hasSearched ? "" : "Explore outras novidades"}  />
    </>
  )
}
