import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SearchBar from './Page/ClubIntro/components/SearchBar';
import SideBar from './Page/ClubIntro/SideBar';
import ClubListPage from './Page/ClubIntro/ClubListPage';

function LayoutWithSidebar({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SearchBar categoryTitle="카테고리" />
            <div className="flex">
                <SideBar />
                {children}
            </div>
        </>
    );
}

function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/clubintro"
                element={
                    <LayoutWithSidebar>
                        <ClubListPage />
                    </LayoutWithSidebar>
                }
            />
        </Routes>
    );
}

function App() {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
}

export default App;
