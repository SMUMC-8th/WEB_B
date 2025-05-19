import { useLocation } from "react-router-dom";

const StepBar=()=>{
    const location = useLocation();

    const currentStep = {
        "/clubmatching/experience": 1,
        "/clubmatching/activityformat": 2,
        "/clubmatching/recruitmethod": 3,
    }[location.pathname] ?? 0;

    const percent = (currentStep / 3) * 100;

    return (
        <div className="w-full px-6 mt-2">
            <div className="w-full h-2 bg-[#7e92a9] rounded-full">
                <div className="h-2 bg-[#002F6C] rounded-full transition-all duration-300"
                    style={{width: `${percent}%`}}/>
            </div>
        </div>
    );
}

export default StepBar;