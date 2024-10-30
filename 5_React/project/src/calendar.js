import React, { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import "./calendar.css";

const Calendar = ({ handleCloseModal }) => {
  const [events, setEvents] = useState([]); // 이벤트 목록 관리
  const [selectedColor, setSelectedColor] = useState("#3788d8"); // 기본 이벤트 색상
  const calendarRef = useRef(null); // FullCalendar 인스턴스 접근

  // 로컬 스토리지에서 이벤트 불러오기
  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  // CSS 변수 변경 함수
  const handleChangeEventColor = (color) => {
    setSelectedColor(color); // 선택된 색상 저장
  };

  // 날짜 클릭 시 이벤트 추가
  const handleDateClick = (arg) => {
    const title = prompt("일정 제목을 입력하세요:");
    if (title) {
      const newEvent = {
        title,
        start: arg.dateStr,
        backgroundColor: selectedColor,
      };
      const updatedEvents = [...events, newEvent];
      setEvents(updatedEvents);
      localStorage.setItem("events", JSON.stringify(updatedEvents));
    }
  };

  // 일정 클릭 시 삭제
  const handleEventClick = (clickInfo) => {
    if (window.confirm("일정을 삭제하시겠습니까?")) {
      const updatedEvents = events.filter(
        (event) =>
          event.title !== clickInfo.event.title &&
          event.start !== clickInfo.event.start
      );
      setEvents(updatedEvents);
      localStorage.setItem("events", JSON.stringify(updatedEvents));
    }
  };

  // 일정 드래그 후 업데이트
  const handleEventDrop = (info) => {
    const updatedEvents = events.map((event) => {
      if (event.start === info.oldEvent.start) {
        return { ...event, start: info.event.start };
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  // 날짜 일(badge) 제거
  const handleDayCellContent = (arg) => {
    const dayNumber = arg.dayNumberText.replace("일", "");
    return dayNumber;
  };

  // 뷰 전환 핸들러
  const handleViewChange = (view) => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView(view);
  };

  return (
    <div className="calendarmain">
      {/* 사이드 메뉴 */}
      <div className="calendarside">
        <div className="sideheader">
          <button className="window-close3" onClick={handleCloseModal}></button>
        </div>
        <div className="sidetext">
          <p>iClouds</p>
          <button
            onClick={() => handleChangeEventColor("rgb(96, 96, 248)")}
            id="wnwnsdud"
          >
            주준영
          </button>
          <br />
          <button
            onClick={() => handleChangeEventColor("#29DB47")}
            id="whckdgus"
          >
            조창현
          </button>
        </div>
        <div className="smallcalendar"></div>
      </div>

      {/* FullCalendar 본체 */}
      <div className="calendar-div">
        <div className="calheader">
          <div className="calheaderplus">
            <button className="calendarplus">+</button>
          </div>
          <button
            onClick={() => handleViewChange("dayGridMonth")}
            className="headerbutton"
          >
            월별
          </button>
          <button
            onClick={() => handleViewChange("listDay")}
            className="headerbutton"
          >
            일
          </button>
          <button
            onClick={() => handleViewChange("listWeek")}
            className="headerbutton"
          >
            주
          </button>
          <button
            onClick={() => handleViewChange("listMonth")}
            className="headerbutton"
          >
            월
          </button>
        </div>

        <div className="background">
          <FullCalendar
            ref={calendarRef}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            initialView="dayGridMonth"
            locale="ko"
            dayCellContent={handleDayCellContent}
            events={events}
            dateClick={handleDateClick}
            eventClick={handleEventClick}
            editable={true}
            eventDrop={handleEventDrop}
            headerToolbar={{
              start: "title",
              center: "",
              end: "prev,today,next",
            }}
            views={{
              listDay: { buttonText: "일" },
              listWeek: { buttonText: "주" },
              listMonth: { buttonText: "월" },
              dayGridMonth: { buttonText: "월별" },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
