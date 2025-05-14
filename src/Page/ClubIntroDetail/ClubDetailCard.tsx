import './ClubDetailCard.css'
import ImageSlider from './components/ImageSlider';

type TClubDetail={
    title: string;
    description: string;
    recruitTarget: string;
    recruitPeriod: string;
    recruitMethod: string;
    activities: string;
    faqLink: string;
};

const ClubDetailCard=({
    title,
    description,
    recruitTarget,
    recruitPeriod,
    recruitMethod,
    activities,
    faqLink,
}: TClubDetail)=>{
    return(
        <div className='flex px-[100px] pt-[100px] pl-[150px] gap-[64px]'>
            <ImageSlider/>
            {/* <div className='w-[400px] bg-[#D9D9D9] h-[300px] rounded-md'>
                <img></img>
            </div> */}
                <div className='flex flex-col justify-start'>
                    <h3 className='text-2xl pb-2 font-bold border-b-2 border-black mb-4'>{title}</h3>
                    
                        <p className='text-base mb-6 leading-relaxed font-bold'>{description}</p>
                        <ul className='space-y-2 text-sm'>
                            <li>모집 대상: {recruitTarget}</li>
                            <li>모집 기간: {recruitPeriod}</li>
                            <li>모집 방법: {recruitMethod}</li>
                            <li>주요 활동: {activities}</li>
                            <li>FAQ 및 관련 링크: {faqLink}</li>
                        </ul>
                    
                </div> 
        </div>
    );
};

export default ClubDetailCard;