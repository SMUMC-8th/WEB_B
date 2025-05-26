import { useState } from "react"

type Props = {
    images: string[];
};

const ImageSlider=({images=[]}:Props)=>{
    const [currentIndex, setCurrentIndex]=useState(0);

    if (!images || images.length === 0) {
        return (
                <div className="w-[400px] h-[300px] flex items-center justify-center bg-gray-200 rounded-md">
                    이미지 없음
                </div>
            );
        }


    return(
        <div className="flex flex-col items-center">
            <img
                src={images[currentIndex]}
                alt="슬라이드 이미지"
                className="w-[400px] h-[300px] object-cover bg-gray-300 rounded-md"
            />
            
            <div className="flex justify-center mt-4 gap-3">
                {images.map((_, idx)=>(
                    <button
                        key={idx}
                        onClick={()=>setCurrentIndex(idx)}
                        className={`h-3 rounded-full transition-all duration-200
                                ${currentIndex===idx?'bg-blue-500 w-6':'bg-gray-300 w-3'}
                                hover:bg-blue-400 hover:w-6`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;