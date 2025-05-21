import { useNavigate, useParams } from "react-router-dom";
import ClubMatchingIntro from "../components/ClubMatching/ClubMatchingIntro";
import ClubMatchingExperience from "../components/ClubMatching/ClubMatchingExperience";
import ClubMatchingActivityFormat from "../components/ClubMatching/ClubMatchingActivityFormat";
import ClubMatchingRecruitMethod from "../components/ClubMatching/ClubMatchingRecruitMethod";
import ClubMatchingResult from "../components/ClubMatching/ClubMatchingResult";
import ClubMatchingHeader from "../components/ClubMatching/ClubMatchingHeader";

const ClubMatching = () => {
  const { step } = useParams();
  const navigate = useNavigate();
  const currentStep = step ? parseInt(step) : 0;

  const handleNext = (nextStep: number) => {
    navigate(`/clubmatching/${nextStep}`);
  };

  return (
    <>
      <ClubMatchingHeader step={currentStep} setStep={handleNext} />
      {currentStep === 0 && <ClubMatchingIntro onNext={() => handleNext(1)} />}
      {currentStep === 1 && (
        <ClubMatchingExperience onNext={() => handleNext(2)} />
      )}
      {currentStep === 2 && (
        <ClubMatchingActivityFormat onNext={() => handleNext(3)} />
      )}
      {currentStep === 3 && (
        <ClubMatchingRecruitMethod onNext={() => handleNext(4)} />
      )}
      {currentStep === 4 && <ClubMatchingResult />}
    </>
  );
};

export default ClubMatching;
