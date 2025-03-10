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

interface LastMonthDaysNumberProps {
  index: number;
  calendarInfo: CalendarInfo;
}
function LastMonthDaysNumber({
  index,
  calendarInfo,
}: LastMonthDaysNumberProps) {
  return (
    <div
      style={{
        fontSize: "18px",
        fontWeight: "600",
        color: "rgb(180, 180, 180)",
        width: `13%`,
        flexShrink: "0",
        textAlign: "center",
        padding: "9px 0",
        borderRadius: "100px",
      }}
    >
      {(
        calendarInfo.today.lastMonthDaysInMonth -
        (calendarInfo.today.indexOffirstDayOfMonth - index - 1)
      ).toLocaleString("fa")}
    </div>
  );
}

export default LastMonthDaysNumber;
