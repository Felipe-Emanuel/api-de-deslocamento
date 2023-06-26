import { useState } from "react";
import { NewClient } from "@/src/models/client";
import { NewVehicle } from "@/src/models/vehicle";
import { ClientSide } from "@/src/models/userPosts";
import { NewConductor } from "@/src/models/conductor";
import { useLocalStorage } from "./useLocalStorage";
import { useStateContext } from "./useStateContext";
import { NewDisplacement } from "@/src/models/displacement";
import { getData, postData } from "@services/client";
import { usePageStateContext } from "./usePageStateContext";

export const useNewPost = () => {
  const { STORAGE_KEY } = useLocalStorage()!;
  const { state, setData } = useStateContext();
  const { setPageState } = usePageStateContext();
  const existPost = useLocalStorage()?.getLocalStorage("USER_POSTS");

  const [userPosts, setUserPosts] = useState<ClientSide[]>(existPost || []);

  const getDataAfterUpdate = async () => {
    await getData(state).then((resp) => {
      setData(resp);
    });
  };

  const handlePostCLick = (
    obj: ClientSide,
    newObject: NewConductor | NewClient | NewDisplacement | NewVehicle
  ) => {
    postData(state!, newObject).then((id) => {
      const newUserPost: ClientSide = {
        ...obj,
        id,
        postType: state,
      };

      useLocalStorage()?.setLocalStorage("USER_POSTS", [
        ...userPosts,
        newUserPost,
      ]);
      setUserPosts((prev) => [...prev, newUserPost]);

      getDataAfterUpdate();

      setPageState("explorar");
    });

    return window?.localStorage.removeItem(`${STORAGE_KEY}cliente`);
  };

  return {
    handlePostCLick,
    getDataAfterUpdate,
  };
};
