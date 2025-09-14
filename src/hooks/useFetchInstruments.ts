import { useInstrumentsStore } from "../store/instrumentsStore";
import { useEffect } from "react";

export const useFetchInstruments = () => {
  const { fetchAll } = useInstrumentsStore();
  useEffect(() => {
    fetchAll();
  }, [fetchAll]);
};
