// const Footer: React.FC = () => {
//     return (
//         <div className="absolute left-[850px] bottom-[50px] justify-center w-[300px] h-[150px] ">
//             <img src={'/footer.svg'} alt="Logo" className="w-auto h-auto" />
//         </div>
//     );
// };

// export default Footer;

const Footer: React.FC = () => {
    return (
        <div className="absolute left-[850px] bottom-[50px] justify-center w-[300px] h-[150px]">
            <a
                href="https://github.com/SMUMC-8th"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="/footer.svg" alt="Logo" className="w-auto h-auto" />
            </a>
        </div>
    );
};

export default Footer;
