// ClubListPage.tsx
import { useState, useEffect } from 'react';
import Tags from '../components/ClubSearch/Tags';
// import Card from '../components/ClubList/Card';
import NoResult from '../components/ClubSearch/NoResult';
import SearchBar from '../components/ClubList/SearchBar';
import SideBar from '../components/SideBar';
import { searchClubs } from '../api/clubService';
import { TClub } from '../types/club';

const ClubSearchPage = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [clubs, setClubs] = useState<TClub[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadClubs = async () => {
            if (!searchKeyword) {
                setClubs([]);
                return;
            }

            try {
                setLoading(true);
                setError(null);
                console.log('Starting search with keyword:', searchKeyword);
                console.log('Search request details:', {
                    keyword: searchKeyword,
                    timestamp: new Date().toISOString()
                });
                
                const data = await searchClubs(searchKeyword);
                console.log('Search completed successfully:', {
                    resultCount: data.length,
                    firstResult: data[0],
                    timestamp: new Date().toISOString()
                });
                setClubs(data);
            } catch (err) {
                console.error('Search error details:', {
                    error: err,
                    keyword: searchKeyword,
                    timestamp: new Date().toISOString()
                });
                setError(`검색 중 오류가 발생했습니다. (${err instanceof Error ? err.message : '알 수 없는 오류'})`);
            } finally {
                setLoading(false);
            }
        };

        const debounceTimer = setTimeout(() => {
            loadClubs();
        }, 300);

        return () => clearTimeout(debounceTimer);
    }, [searchKeyword]);

    const handleSearch = (term: string) => {
        setSearchKeyword(term);
    };

    if (loading) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center gap-4">
                <div className="text-red-500">{error}</div>
                <button 
                    onClick={() => setSearchKeyword('')}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    검색 초기화
                </button>
            </div>
        );
    }

    return (
        <>
            <SearchBar 
                categoryTitle="" 
                onCategoryChange={handleSearch}
            />

            <div className="flex flex-col lg:flex-row">
                <div className="hidden lg:block w-full lg:w-[200px]">
                    <SideBar />
                </div>
                <div className="flex-1 px-6">
                    {clubs.length > 0 ? (
                        <Tags data={clubs} />
                    ) : (
                        <NoResult keyword={searchKeyword} />
                    )}
                </div>
            </div>
        </>
    );
};

export default ClubSearchPage;
