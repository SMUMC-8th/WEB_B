import axios from "axios";
import { TClubDetail } from "../types/ClubDetail";

export const FetchClubDetail = async (): Promise<TClubDetail>=>{
    const res = await axios.get('/clubs/[clubId]');
    const result = res.data.result;

    return{
        title: result.name,
        description: result.description,
        target: result.target,
        duration: `${result.start} ~ ${result.end}`,
        method: result.method,
        activity: result.activity,
        link: result.instagram,
    };
};