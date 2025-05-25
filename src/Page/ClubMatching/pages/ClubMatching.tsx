import "./ClubMatching.css"
import { useState } from "react";
import ClubMatchingIntro from "../components/ClubMatchingIntro";
import ClubMatchingExperience from "../components/ClubMatchingExperience";
import ClubMatchingActivityFormat from "../components/ClubMatchingActivityFormat";
import ClubMatchingRecruitMethod from "../components/ClubMatchingRecruitMethod";
import ClubMatchingResult from "../components/ClubMatchingResult";
import ClubMatchingHeader from "../components/ClubMatchingHeader";
import { TMatchForm } from "../types/MatchForm";

const ClubMatching = () => {
    const [step, setStep] = useState(0);

    const [matchForm, setMatchForm] = useState<TMatchForm>({
        '어떤 방향의 경험을 기대': "GROWTH_CAREER",
        '원하는 활동 방식을 선택': "REGULAR",
        '모집 방식': "ALWAYS",
    });

    return(
        <div>
            <ClubMatchingHeader step={step} setStep={setStep}/>
            {step === 0 && <ClubMatchingIntro onNext={()=>setStep(1)} />}
            {step === 1 && (<ClubMatchingExperience
                onNext={()=>setStep(2)}
                setFormValue={(value)=>
                    setMatchForm(prev=>({
                        ...prev,
                        '어떤 방향의 경험을 기대': value
                    }))
                } />)}
            {step === 2 && (<ClubMatchingActivityFormat
                onNext={()=>setStep(3)}
                setFormValue={(value)=>
                    setMatchForm(prev=>({
                        ...prev,
                        '원하는 활동 방식을 선택': value
                    }))
                } />)}
            {step === 3 && (<ClubMatchingRecruitMethod
                onNext={()=>setStep(4)}
                setFormValue={(value)=>
                    setMatchForm(prev=>({
                        ...prev,
                        '모집 방식': value
                    }))
                } />)}
            {step === 4 && <ClubMatchingResult matchForm={matchForm} />}
        </div>
    )
};

export default ClubMatching;