import { useLocalStorage } from "../../data/hooks/useLocalStorage";
import { UserRegistersSection } from "./UserRegistersSection";
import {
  ClientSideClient,
  ClientSideConductor,
  ClientSideDisplacement,
  ClientSideVehicle,
  UserRegistersType,
} from "@/src/models/userPosts";

export function UserRegisters() {
  const { getLocalStorage } = useLocalStorage() || {};

  const posts = getLocalStorage?.("USER_POSTS") || [];

  const clients = posts.filter((post: ClientSideClient) => post.postType === "cliente")
  const displacement = posts.filter((post: ClientSideDisplacement) => post.postType === "deslocamento")
  const conductor = posts.filter((post: ClientSideConductor) => post.postType === "condutor")
  const vehicle = posts.filter((post: ClientSideVehicle) => post.postType === "veículo");

  const options: { [key: string]: UserRegistersType[] } = {
    cliente: clients,
    deslocamento: displacement,
    condutor: conductor,
    veículo: vehicle,
  };

  return (
    <>
      {Object.keys(options).map((option, i) => {
        return (
          <UserRegistersSection
            key={i}
            data={options[option]}
            section={option}
          />
        );
      })}
    </>
  );
}
