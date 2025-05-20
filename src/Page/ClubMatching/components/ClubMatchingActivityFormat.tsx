import { useEffect, useState } from "react";
import SelectBox from "./SelectBox";
// import ClubMatchingHeader from "../components/ClubMatchingHeader";

const options = ["정기형 (매주/격주 활동 중심)", "유동형 (프로젝트/부서 중심 유동적 활동)", "상관없음"];

const ClubMatchingActivityFormat = ({onNext}: {onNext:()=>void}) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);
  const [hasSubmit, setHasSubmit] = useState(false);

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
        onNext();
    }
  };

  useEffect(()=>{
    if (!hasSubmit) return;
    setShowError(!selected);
  }, [selected, hasSubmit]);

  return (
    <div className="flex flex-col gap-6 justify-center items-center">
        {/* <ClubMatchingHeader/> */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 leading-relaxed">
        선호하는 활동 방식을 선택해주세요.
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

export default ClubMatchingActivityFormat;
