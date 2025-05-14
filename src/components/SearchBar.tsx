import { FaSearch } from "react-icons/fa";

type TSearch = {
  categoryTitle?: string;
};

const SearchBar = ({ categoryTitle }: TSearch) => {
  return (
    <div className="flex items-center justify-center gap-4 my-12">
      <input
        type="text"
        placeholder="원하시는 동아리명 혹은 관심분야를 검색하세요!"
        className="w-[600px] h-[50px] px-4 py-3 rounded-full bg-white border-2 border-[#002F6C] text-black"
      />
      <button className="h-[50px] bg-white border-2 border-[#002F6C] px-4 py-2 rounded-full hover:bg-[#818CF8]">
        <FaSearch className="text-[#002F6C]" />
      </button>
      <h2 className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        {categoryTitle}
      </h2>
    </div>
  );
};

export default SearchBar;
