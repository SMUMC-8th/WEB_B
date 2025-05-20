import "./ClubMatching.css"
import { useState } from "react";
import ClubMatchingIntro from "../components/ClubMatchingIntro";
import ClubMatchingExperience from "../components/ClubMatchingExperience";
import ClubMatchingActivityFormat from "../components/ClubMatchingActivityFormat";
import ClubMatchingRecruitMethod from "../components/ClubMatchingRecruitMethod";
import ClubMatchingResult from "../components/ClubMatchingResult";
import ClubMatchingHeader from "../components/ClubMatchingHeader";

const ClubMatching = () => {
    const [step, setStep] = useState(0);

    return(
        <div>
            <ClubMatchingHeader step={step} setStep={setStep}/>
            {step === 0 && <ClubMatchingIntro onNext={()=>setStep(1)} />}
            {step === 1 && <ClubMatchingExperience onNext={()=>setStep(2)} />}
            {step === 2 && <ClubMatchingActivityFormat onNext={()=>setStep(3)} />}
            {step === 3 && <ClubMatchingRecruitMethod onNext={()=>setStep(4)} />}
            {step === 4 && <ClubMatchingResult />}
        </div>
    )
};

export default ClubMatching;