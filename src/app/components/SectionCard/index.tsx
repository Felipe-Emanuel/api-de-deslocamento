"use client";
import styles from "./SectionCard.module.scss";
import { useState } from "react";
import { CardType } from "@contexts/StateContext";
import { ClientCard } from "../CardComp/ClientCard";
import { ModalEddit } from "../ModalEddit";
import { VehicleCard } from "../CardComp/VehicleCard";
import { ItemWithType } from "@contexts/PageStateContext";
import { ConductorCard } from "../CardComp/ConductorCard";
import { useStateContext } from "@hooks/useStateContext";
import { DisplacementCard } from "../CardComp/DisplacementCard";

interface SectionCardProps {
  title: string;
  isLastObject?: boolean;
}

export function SectionCard({ title, isLastObject }: SectionCardProps) {
  const { data, state } = useStateContext();

  if (!data) return null;

  const [isModal, setIsModal] = useState(false);
  const [dataCard, setDataCard] = useState<(CardType & ItemWithType) | null>(null);

  const filteredData = isLastObject ? data?.slice(-4) : data?.slice(0, -4);

  return (
    <>
      <h1>{data.length <= 4 ? null : title}</h1>
      <div className={styles.sectionCard}>
        {filteredData?.map((item, i) => {
          const handleClick = () => {
            setDataCard(data[i]);
            setIsModal(true);
          };

          const cardOptions: { [key: string]: JSX.Element } = {
            cliente: <ClientCard data={item} onClick={handleClick} />,
            deslocamento: (
              <DisplacementCard data={item} onClick={handleClick} />
            ),
            condutor: <ConductorCard data={item} onClick={handleClick} />,
            veículo: <VehicleCard data={item} onClick={handleClick} />,
          };

          return (
            <div key={`card-${i}`}>
              {isModal && (
                <ModalEddit
                  item={dataCard}
                  handleClick={() => setIsModal(false)}
                />
              )}
              {cardOptions[state!]}
            </div>
          );
        })}
      </div>
    </>
  );
}
