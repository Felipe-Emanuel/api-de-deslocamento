import styles from "./UserRegisters.module.scss";
import { Client } from "../Cards/Client";
import { Vehicle } from "../Cards/Vehicle";
import { Section } from "../../containers/Section";
import { Normalize } from "@/src/functions/Normalize";
import { Conductor } from "../Cards/Conductor";
import { UserRegistersType } from "@/src/models/userPosts";
import { Displacement } from "../Cards/Displacement";

interface UserRegistersSectionProps {
  data: UserRegistersType[];
  section: string;
}

const inflection = require("inflection");

export function UserRegistersSection({
  data = [],
  section = "",
}: UserRegistersSectionProps) {
  if (data.length === 0) return null;

  const { capitalizeName } = Normalize();

  const normalizePlurals = () => {
    const pluralize = inflection.pluralize(section);

    if (section === "condutor") return "Condutores";

    return capitalizeName(pluralize);
  };

  return (
    <Section id={section}>
      <h1>Meus {normalizePlurals()} Cadastrados!</h1>
      <div className={styles.container}>
        {data?.map((client: UserRegistersType, i: number) => {
          const cardOption: { [key: string]: JSX.Element } = {
            cliente: <Client item={client} />,
            deslocamento: <Displacement item={client} />,
            condutor: <Conductor item={client} />,
            veículo: <Vehicle item={client} />,
          };

          return <div key={i}>{cardOption[section]}</div>;
        })}
      </div>
    </Section>
  );
}
