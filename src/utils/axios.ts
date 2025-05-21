import axios from "axios";
import { TMatchForm, TMatchResult } from "../types/MatchForm";

export const fetchMatchedClubs = async (
  form: TMatchForm
): Promise<TMatchResult[]> => {
  const response = await axios.post("ddddd", form);
  return response.data.result;
};

export const umcServerNoAuth = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER}`,
  timeout: 1000,
});
