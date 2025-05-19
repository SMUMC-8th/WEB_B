import jopeng from "../../assets/images/jopeng.jpg"; // SVG를 경로로 불러오기

type Props = {
  category: string;
  hash: string;
  clubName: string;
};

const CategoryCard = ({ category, hash, clubName }: Props) => {
  return (
    <div className="w-[160px] h-auto bg-white bg-opacity-30 rounded-lg shadow-md px-3 py-3 flex flex-col justify-center items-center backdrop-blur-sm">
      <p className="text-[16px] font-semibold mb-2">{category}</p>
      <img
        src={jopeng}
        alt="clubImg"
        className="w-full h-[100px] py-2 object-cover rounded-md"
      />
      <p className="text-[14px] mb-2">#{hash}</p>
      <p className="font-semibold text-gray-700">{clubName}</p>
      <button className="text-xs mt-2 text-blue-700">더보기 &gt;</button>
    </div>
  );
};

export default CategoryCard;
