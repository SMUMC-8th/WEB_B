import { useLocation } from "react-router-dom";
import StepArrow from "./StepArrow";
import StepBar from "./StepBar";

const ClubMatchingHeader=()=>{
    const location = useLocation();
    const hideArrow = location.pathname === "/clubmatching/experience";
    const hideStepSection = location.pathname === "/clubmatching/result";

    return(
        <div className="w-full flex flex-col items-center">
            <div className="w-full max-w-[1440px] h-[130px] flex justify-between items-start">
                <img src="/SMUClub_LOGO.svg"
                alt="로고"
                className="w-[200px] h-[90px] mt-4 ml-[180px]"/>
            </div>
            
            {!hideStepSection && (
                <div className="w-full max-w-[1440px] flex items-center gap-4 px-6 sm:px-[180px] -mt-4">
                    {!hideArrow&&<StepArrow/>}
                    <div className="flex-1 mt-2">
                        <StepBar/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ClubMatchingHeader;