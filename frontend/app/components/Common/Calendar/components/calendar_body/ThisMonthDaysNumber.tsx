import moment from "jalali-moment";

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

interface ThisMonthDaysNumberProps {
  dayNumber: number;
  date: moment.Moment;
  calendarInfo: CalendarInfo;
}

function ThisMonthDaysNumber({
  dayNumber,
  date,
  calendarInfo,
}: ThisMonthDaysNumberProps) {
  return (
    <div
      style={{
        fontSize: "18px",
        fontWeight: "600",
        color: "black",
        width: `13%`,
        flexShrink: "0",
        textAlign: "center",
        padding: "9px 0",
        borderRadius: "100px",
        backgroundColor:
          dayNumber === parseInt(calendarInfo.today.date) &&
          calendarInfo.today.year === date.format("YYYY") &&
          calendarInfo.today.month === date.format("MM")
            ? "#768ebc"
            : "",
      }}
    >
      {dayNumber.toLocaleString("fa")}
    </div>
  );
}

export default ThisMonthDaysNumber;
