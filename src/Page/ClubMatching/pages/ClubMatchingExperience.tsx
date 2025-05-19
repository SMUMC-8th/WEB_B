import { useEffect, useState } from "react";
import SelectBox from "../components/SelectBox";
import ClubMatchingHeader from "../components/ClubMatchingHeader";
import { useNavigate } from "react-router-dom";

const options = ["자기 성장 & 진로", "창작 & 표현", "교류 & 여가", "사회 & 가치 활동"];

const ClubMatchingExperience = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);
  const [hasSubmit, setHasSubmit] = useState(false);
  const navigate = useNavigate();

  const toggleOption = (option: string) => {
    setSelected(prev=>(prev===option?null:option));
  };

  const handleNext = () =>{
    if (!selected){
        setShowError(true);
        setHasSubmit(true);
    }
    else{
        setShowError(false);
        console.log("선택된 옵션:", selected);
        navigate("/clubmatching/activityformat");
    }
  };

  useEffect(()=>{
    if (!hasSubmit) return;
    setShowError(!selected);
  }, [selected, hasSubmit]);

  return (
    <div className="flex flex-col gap-6 justify-center items-center">
        <ClubMatchingHeader/>
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 leading-relaxed">
        동아리 활동에서 어떤 방향의 경험을 기대하시나요?
      </h1>

      {options.map(option => (
        <SelectBox
          key={option}
          label={option}
          selected={selected === option}
          onClick={() => toggleOption(option)}
        />
      ))}

        <div className="h-5 mt-2">
            {showError && (
                <p className="text-red-500 text-sm font-medium">
                    항목을 선택해주세요.
                </p>
            )}
        </div>

      <button className="px-6 py-4 bg-[#002F6C] text-white font-bold rounded-2xl hover:bg-[#FFD86E] hover:shadow-inner transition"
                onClick={handleNext}
            >
            다음
        </button>
    </div>
  );
};

export default ClubMatchingExperience;
