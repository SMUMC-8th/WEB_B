import axios from "axios";
import { TMatchForm, TMatchResult } from "../types/MatchForm";

export const fetchMatchedClubs=async(form:TMatchForm):Promise<TMatchResult[]>=>{
    const response = await axios.post('/clubs/matching', form);
    return response.data.result.matches;
};