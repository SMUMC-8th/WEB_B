// interface CardProps {
//     imageUrl?: string;
//     tags: string[];
//     clubName: string;
//     description: string;
// }

// const Card: React.FC<CardProps> = ({
//     imageUrl,
//     tags,
//     clubName,
//     description,
// }) => {
//     return (
//         <div className="w-[220px] h-[220px] bg-[#002F6C33] text-black rounded-2xl p-3 relative top-[50px] left-[126px] justify-between border-2 border-transparent hover:border-[#002F6C] shadow-inner">
//             {/* 썸네일 이미지 */}
//             {imageUrl && (
//                 <img
//                     src={imageUrl}
//                     alt="동아리 썸네일"
//                     className="absolute top-5 left-5 w-[90px] h-[90px] object-cover "
//                 />
//             )}

//             {/* 태그
//             <span className="absolute top-5 right-9 gap-10">
//                 {tags.map((tag, index) => (
//                     <button
//                         key={index}
//                         className="bg-[#FFD966] text-black text-[18px] font-semibold rounded-full px-3 py-1 "
//                     >
//                         #{tag}
//                     </button>
//                 ))}
//             </span> */}
//             {/* 태그 */}
//             <div className="absolute top-5 right-3 flex flex-col justify-start items-end w-[70px] h-[93px] gap-[9px]">
//                 {tags.map((tag, index) => (
//                     <button
//                         key={index}
//                         className="bg-[#FFD966] text-black text-[14px] font-semibold rounded-full px-2 py-1 whitespace-nowrap"
//                     >
//                         #{tag}
//                     </button>
//                 ))}
//             </div>

//             {/* 제목 & 설명 */}
//             <div className="absolute mt-auto gap-[5px] top-35 left-5">
//                 <p className="text-black font-bold text-[24px]">{clubName}</p>
//                 <p className="text-black text-[14px] mt-1">{description}</p>
//             </div>
//         </div>
//     );
// };

// export default Card;

interface CardProps {
    imageUrl?: string;
    tags: string[];
    clubName: string;
    description: string;
}

const Card: React.FC<CardProps> = ({
    imageUrl,
    tags,
    clubName,
    description,
}) => {
    return (
        <div className="w-[180px] h-[180px] bg-[#002F6C33] text-black rounded-2xl p-3 relative justify-between border-2 border-transparent hover:border-[#002F6C] shadow-inner">
            {/* 썸네일 이미지 */}
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt="동아리 썸네일"
                    className="absolute top-4 left-4 w-[74px] h-[74px] object-cover"
                />
            )}

            {/* 태그 */}
            <div className="absolute top-4 right-2 flex flex-col justify-start items-end w-[57px] h-[76px] gap-[7px]">
                {tags.map((tag, index) => (
                    <button
                        key={index}
                        className="bg-[#FFD966] text-black text-[12px] font-semibold rounded-full px-2 py-1 whitespace-nowrap"
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* 제목 & 설명 */}
            <div className="absolute mt-auto gap-[4px] top-[115px] left-4">
                <p className="text-black font-bold text-[20px] truncate max-w-[150px]">{clubName}</p>
                <p className="text-black text-[12px] mt-1 truncate max-w-[150px]" title={description}>{description}</p>
            </div>
        </div>
    );
};

export default Card;
