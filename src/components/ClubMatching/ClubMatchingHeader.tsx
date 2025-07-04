import { Props } from "../../types/MatchForm";
import StepArrow from "./StepArrow";
import StepBar from "./StepBar";
import SMUClubLogo from "../../assets/images/SMUClub_LOGO.svg";
import { useNavigate } from "react-router-dom";

const ClubMatchingHeader = ({ step, setStep }: Props) => {
  const hideArrow = step === 1;
  const hideStepSection = step === 4;
  const navigate = useNavigate();

  if (step === 0) {
    return null;
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-[1440px] flex justify-between items-start">
        <img
          onClick={() => navigate("/")}
          src={SMUClubLogo}
          alt="로고"
          className="w-[200px] ml-[180px] mb-8 cursor-pointer"
        />
      </div>

      {!hideStepSection && (
        <div className="w-full max-w-[1440px] flex items-center gap-4 px-6 sm:px-[180px] -mt-4">
          {!hideArrow && (
            <StepArrow step={step} onPrev={() => setStep(step - 1)} />
          )}
          <div className="flex-1 mt-2">
            <StepBar step={step} setStep={setStep} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ClubMatchingHeader;
