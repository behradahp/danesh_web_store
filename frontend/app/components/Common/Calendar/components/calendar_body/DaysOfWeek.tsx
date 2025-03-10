// Constants
import { weekDays } from "../../constants";

function DaysOfWeek() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        gap: "5px",
        marginBottom: "10px",
      }}
    >
      {weekDays.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "black",
              width: `13%`,
              flexShrink: "0",
              textAlign: "center",
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default DaysOfWeek;
