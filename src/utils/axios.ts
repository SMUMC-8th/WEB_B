import axios from "axios";
import { TMatchForm, TMatchResult } from "../types/MatchForm";

export const fetchMatchedClubs=async(form:TMatchForm):Promise<TMatchResult[]>=>{
    const response = await axios.post('ddddd', form);
    return response.data.result;
};