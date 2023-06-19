import { FiltredItem } from "@contexts/StateContext";
import { getDataById } from "@services/client";
import { useStateContext } from "@hooks/useStateContext";
import { SyntheticEvent, useEffect, useState } from "react";

export const useSearch = () => {
  const { state, filteredData, setData, setHasSearched } = useStateContext();
  const [selectedOption, setSelectedOption] = useState<FiltredItem | null>(
    null
  );

  const handleOptionChange = (
    e: SyntheticEvent<Element, Event>,
    value: FiltredItem | null
  ) => {
    setSelectedOption(value);

    e.preventDefault();
  };

  const handleFormSubmit = async () => {
    if (selectedOption) {
      const selectedId = selectedOption.id;

      setHasSearched(true)
      const resp = await getDataById(state!, String(selectedId));
      setData([resp]);
    }
  };

  useEffect(() => {
    handleFormSubmit()
  }, [selectedOption])

  return {
    handleOptionChange,
    state,
    filteredData,
    selectedOption
  };
};
