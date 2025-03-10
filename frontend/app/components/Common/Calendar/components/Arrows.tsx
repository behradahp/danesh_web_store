// Icons
import ArrowIcon from "../icons/ArrowIcon";

function CalendarArrows({
  changeCalendarFC,
}: {
  changeCalendarFC: (payload: number) => void;
}) {
  return (
    <div style={{ display: "flex" }}>
      <button
        style={{
          transform: "rotate(180deg)",
          height: "max-content",
          cursor: "pointer",
        }}
        onClick={() => changeCalendarFC(-1)}
      >
        <ArrowIcon />
      </button>
      <button style={{ cursor: "pointer" }} onClick={() => changeCalendarFC(1)}>
        <ArrowIcon />
      </button>
    </div>
  );
}

export default CalendarArrows;
