import axios from "axios";
import { TClubDetail } from "../types/ClubDetail";

export const FetchClubDetail = async (clubId:number): Promise<TClubDetail>=>{
    const res = await axios.get(`/clubs/${clubId}`);
    const result = res.data.result;
    console.log("FetchClubDetail", result);


    return{
        title: result.name,
        description: result.description,
        target: result.target,
        duration: result.recruitmentDate,
        method: result.recruitmentMethod,
        activity: result.activity,
        link: result.instagram,
        images: result.imageUrl,
    };
};