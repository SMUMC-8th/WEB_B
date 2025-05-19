// ClubListPage.tsx
import Tags from '../components/result/Tags';
// import Card from '../components/ClubList/Card';
import NoResult from '../components/result/NoResult';
import SearchBar from '../components/ClubList/SearchBar';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import { useState } from 'react';

const ClubSearchPage = () => {
    const [searchKeyword, setSearchKeyword] = useState('');

    // 샘플 데이터
    const clubData = [
        // 실제로는 검색 결과 기준 필터링된 결과여야 함
    ];

    return (
        <>
            <SearchBar categoryTitle="" />

            <div className="flex flex-col lg:flex-row">
                <SideBar />
                <div className="flex-1 px-6">
                    {clubData.length > 0 ? (
                        <Tags data={clubData} />
                    ) : (
                        <NoResult keyword={searchKeyword} />
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ClubSearchPage;
