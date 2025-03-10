"use client";

import { CSSProperties, useState } from "react";
import moment from "jalali-moment";

// Components
import GoTodayButton from "./components/GoTodayButton";
import CalendarTitle from "./components/CalendarTitle";

// Utils
import { setCalendarInfoFC } from "./utils";

// Constants
import { defaultStyles, weekDays } from "./constants";
import DaysOfWeek from "./components/calendar_body/DaysOfWeek";
import CalendarNumbers from "./components/calendar_body/CalendarNumbers";

interface ICalendarProps {
  styles?: CSSProperties;
}

function Calendar({ styles }: ICalendarProps) {
  const date = moment().locale("fa");

  const [hoverElementIndex, setHoverElementIndex] = useState<number>(-1);
  const [calendarInfo, setCalendarInfo] = useState(setCalendarInfoFC(date));

  return (
    <div style={{ ...defaultStyles, ...styles }}>
      {/* Title */}
      <CalendarTitle
        calendarInfo={calendarInfo}
        setCalendarInfo={setCalendarInfo}
      />

      {/* Body */}
      <div
        style={{
          flexGrow: "1",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          marginTop: "25px",
        }}
      >
        <DaysOfWeek />

        <CalendarNumbers calendarInfo={calendarInfo} date={date} />

        <GoTodayButton
          onClickFC={() => {
            setCalendarInfo(setCalendarInfoFC(date));
          }}
        />
      </div>
    </div>
  );
}

export default Calendar;
