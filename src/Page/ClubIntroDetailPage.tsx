import { useParams } from "react-router-dom";
import ClubDetailCard from "../components/ClubIntroDetail/ClubDetailCard";

const ClubIntroDetailPage = () => {
  const { clubId } = useParams();

  if (!clubId || isNaN(Number(clubId))) {
    return <div>동아리가 없습니다.</div>;
  }

  return <ClubDetailCard clubId={parseInt(clubId)} />;
};

export default ClubIntroDetailPage;
