import { useContext } from "react";
import { ModalsContext } from "../context/ModalsProvider";

export const useModalSetting = () => {
  const setting = useContext(ModalsContext);
  return setting;
};
