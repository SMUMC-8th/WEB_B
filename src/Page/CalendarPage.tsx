import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { FaSearch } from "react-icons/fa";
import "react-big-calendar/lib/css/react-big-calendar.css"; // 스타일시트 가져오기
import "../assets/styles/Calendar.css";

// moment 로케일라이저 설정
const localizer = momentLocalizer(moment);

function CalendarPage() {
  // 현재 날짜를 상태로 관리
  const [currentDate, setCurrentDate] = useState(new Date());

  // 더미 이벤트 데이터
  const events = [
    {
      title: "[UMC] 스뮤시그널",
      start: new Date(2025, 4, 2, 20, 0), // 2025년 5월 2일 20:00
      end: new Date(2025, 4, 11, 22, 0), // 2025년 5월 2일 22:00
    },
  ];

  // 이전 달로 이동하는 함수
  const goToPrevMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  // 다음 달로 이동하는 함수
  const goToNextMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  // 현재 월과 년도를 표시하는 함수
  const formatMonthYear = (date: Date): string => {
    return moment(date).format("YYYY년 MM월");
  };

  // 현재 날짜에 스타일 적용
  const dayPropGetter = (date: Date) => {
    const today = new Date();
    const isToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();

    if (isToday) {
      return {
        className: "custom-today-highlight", // 커스텀 클래스
      };
    }

    return {};
  };

  // 날짜 변경 핸들러 추가
  const handleNavigate = (newDate: Date) => {
    setCurrentDate(newDate);
  };

  return (
    <article className="flex flex-col items-center justify-center flex-grow w-screen h-full px-40 pb-10">
      {/* 임시 article tag */}
      {/* <article className="w-[80%] h-[80%]"> */}
      <div className="flex items-center justify-between w-full px-4 py-5">
        {/* 왼쪽 빈 공간 (중앙 정렬을 위한) */}
        <div className="hidden w-1/4 xl:w-1/5 sm:w-1/4 sm:block"></div>

        {/* 월 이동 중앙 네비 */}
        <div className="flex items-center justify-center text-lg font-bold md:text-2xl sm:text-xl text-blue-950">
          <button
            onClick={goToPrevMonth}
            className="px-4 text-xl bg-transparent border-none cursor-pointer md:text-lg sm:text-base md:px-3 sm:px-2"
          >
            ❮ {/* 왼쪽 꺽쇠 이전 달 이동 */}
          </button>
          <span>{formatMonthYear(currentDate)}</span>
          <button
            onClick={goToNextMonth}
            className="px-4 text-xl bg-transparent border-none cursor-pointer md:text-lg sm:text-base md:px-3 sm:px-2"
          >
            ❯ {/* 오른쪽 꺽쇠 다음 달 이동 */}
          </button>
        </div>

        {/* 우측 검색 입력 및 버튼 */}
        <form className="flex items-center justify-end w-1/4 xl:w-1/5 d:w-1/4">
          <input
            type="text"
            placeholder="동아리명"
            className="flex-grow w-full max-w-xs min-w-0 px-3 py-1 text-sm border-2 border-blue-950 bg-slate-300 rounded-2xl text-blue-950 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="flex items-center justify-center flex-shrink-0 p-1 ml-1 text-sm transition border-2 border-blue-950 bg-slate-300 rounded-2xl hover:bg-indigo-700"
          >
            <FaSearch size={16} className="mx-2 size-5" color="#fed86e" />
          </button>
        </form>
      </div>

      <div className="w-full flex-1">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "100%" }}
          views={["month"]}
          defaultView="month"
          date={currentDate}
          onNavigate={handleNavigate}
          toolbar={false}
          dayPropGetter={dayPropGetter}
        />
      </div>
    </article>
  );
}
export default CalendarPage;
