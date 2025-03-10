import moment from "jalali-moment";

// Components
import LastMonthDaysNumber from "./LastMonthDaysNumber";
import ThisMonthDaysNumber from "./ThisMonthDaysNumber";

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
  date: moment.Moment;
  calendarInfo: CalendarInfo;
}

function CalendarNumbers({ calendarInfo, date }: ThisMonthDaysNumberProps) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        gap: "5px",
        marginBottom: "10px",
      }}
    >
      {Array(
        calendarInfo.today.daysInMonth +
          calendarInfo.today.indexOffirstDayOfMonth
      )
        .fill(0)
        .map((item, index) => {
          if (index < calendarInfo.today.indexOffirstDayOfMonth) {
            return (
              <LastMonthDaysNumber
                key={index}
                index={index}
                calendarInfo={calendarInfo}
              />
            );
          }
          const dayNumber =
            index + 1 - calendarInfo.today.indexOffirstDayOfMonth;

          return (
            <ThisMonthDaysNumber
              key={index}
              dayNumber={dayNumber}
              date={date}
              calendarInfo={calendarInfo}
            />
          );
        })}
    </div>
  );
}

export default CalendarNumbers;
