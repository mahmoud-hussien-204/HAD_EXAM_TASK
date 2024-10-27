import {constantTimer} from "@/constants";

import {useState} from "react";

const useApiSimulation = () => {
  const [isLoading, setIsLoading] = useState(false);

  const trigger = async () => {
    setIsLoading(true);

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, constantTimer);
    });

    setIsLoading(false);
  };

  return {isLoading, trigger};
};

export default useApiSimulation;
