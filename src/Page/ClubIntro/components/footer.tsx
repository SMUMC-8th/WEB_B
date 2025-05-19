// const Footer: React.FC = () => {
//     return (
//         <div className="w-full h-[100px] bg-white text-black flex justify-center items-center ">
//             <img src={'/footer.svg'} alt="Logo" className="w-auto h-auto" />{' '}
//             {/* 로고 */}
//         </div>
//     );
// };

// export default Footer;

const Footer: React.FC = () => {
    return (
        <div className="absolute left-[850px] bottom-[50px] justify-center w-[300px] h-[150px] ">
            <img src={'/footer.svg'} alt="Logo" className="w-auto h-auto" />
        </div>
    );
};

export default Footer;
