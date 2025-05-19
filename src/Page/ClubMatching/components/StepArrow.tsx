import { useNavigate } from "react-router-dom";

const StepArrow = () => {
    const navigate = useNavigate();

    return (
        <button onClick={()=> navigate(-1)}
            className="ml-6"
            >
            <span className="text-[#002F6C] text-5xl hover:text-[#FFD86E] transition font-bold">
                ←
            </span>
        </button>
    );
}

export default StepArrow;