import moment from "jalali-moment";

// Components
import CalendarArrows from "../components/Arrows";

// Utils
import { setCalendarInfoFC } from "../utils";
import { Dispatch, SetStateAction } from "react";

interface CalendarInfo {
  today: {
    date: string;
    month: string;
    monthName: string;
    year: string;
    indexOffirstDayOfMonth: number;
    daysInMonth: number;
    lastMonthDaysInMonth: number;
  };
}

interface CalendarTitleProps {
  calendarInfo: CalendarInfo;
  setCalendarInfo: Dispatch<SetStateAction<CalendarInfo>>;
}

function CalendarTitle({ calendarInfo, setCalendarInfo }: CalendarTitleProps) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span style={{ fontSize: "22px", color: "black", fontWeight: "600" }}>
        {calendarInfo.today.monthName}{" "}
        {parseInt(calendarInfo.today.year).toLocaleString("fa", {
          useGrouping: false,
        })}
      </span>

      {/* Arrows */}
      <CalendarArrows
        changeCalendarFC={(payload: number) => {
          const newDate = moment(
            `${calendarInfo.today.year}/${calendarInfo.today.month}/${calendarInfo.today.date}`,
            "jYYYY/jMM/jDD"
          ).locale("fa");

          newDate.add(payload, "jMonth");

          setCalendarInfo(setCalendarInfoFC(newDate));
        }}
      />
    </div>
  );
}

export default CalendarTitle;
