import ClubMatchingHeader from "../components/ClubMatchingHeader";

const ClubMatchingResult = () =>{

    return (
        <div className="flex flex-col gap-6 justify-center items-center">
            <ClubMatchingHeader/>
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 leading-relaxed">
                아래는 선택하신 조건과 유사한 <br/> 동아리 목록입니다.
            </h1>
        </div>
    );
}

export default ClubMatchingResult;