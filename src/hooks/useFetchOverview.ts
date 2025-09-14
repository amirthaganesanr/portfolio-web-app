import { useInstrumentsStore } from "../store/instrumentsStore";
import { useEffect } from "react";

export const useFetchOverview = () => {
  const { fetchOverviewData, instruments } = useInstrumentsStore();
  useEffect(() => {
    fetchOverviewData();
  }, [fetchOverviewData, instruments]);
};
