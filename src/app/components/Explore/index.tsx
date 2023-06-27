import { Filters } from "../Filters";
import { NoData } from "../NoData";
import { SectionCard } from "../SectionCard";
import { useStateContext } from "@hooks/useStateContext";

export function Explore() {
  const { hasSearched, data, state, paths } = useStateContext()

  if (data?.length === 0) return <NoData noRouter section={paths[state || "cliente"]} />

  return (
    <>
      <Filters />
      <SectionCard title={hasSearched ? "Sua busca..." : "Recém-Chegados"} isLastObject />
      <SectionCard title={hasSearched ? "" : "Explore outras novidades"} />
    </>
  )
}
