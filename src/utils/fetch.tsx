import { TClubDetail } from "../types/ClubDetail";
import { umcServerNoAuth } from "./axios";
import { TMatchForm, TMatchResult } from "../types/MatchForm";

export const FetchClubDetail = async (clubId: number): Promise<TClubDetail> => {
  const res = await umcServerNoAuth.get(`/clubs/${clubId}`);
  const result = res.data.result;
  console.log("FetchClubDetail", result);

  return {
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

export const FetchMatchedClubs = async (
  form: TMatchForm
): Promise<TMatchResult[]> => {
  const response = await umcServerNoAuth.post("/clubs/matching", form);
  return response.data.result.matches;
};
