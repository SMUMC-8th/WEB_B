import ButtonBox from './components/ButtonBox';
import './SideBar.css';

const SideBar = () => {
    return (
        <div className="w-[260px] h-[740px] flex gap-5 border-r-[2px] border-[#002F6C]">
            <div className="flex flex-col w-[105px] gap-[17px] mt-[24px] ml-[130px]">
                <ButtonBox iconSrc="/emoji_edu.svg" label="학술" />
                <ButtonBox
                    iconSrc="/emoji_art.svg"
                    label="예술"
                    iconWidth={50}
                    iconHeight={40}
                />
                <ButtonBox iconSrc="/emoji_sports.svg" label="스포츠" />
                <ButtonBox
                    iconSrc="/emoji_church.svg"
                    label="종교"
                    iconWidth={35}
                    iconHeight={35}
                />
            </div>
        </div>
    );
};

export default SideBar;
