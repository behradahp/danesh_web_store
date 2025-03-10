import moment from "jalali-moment";

export const findYear = (date: string) => {
  const year = Number(date.split("/")[0]);
  return year.toLocaleString("fa", { useGrouping: false });
};

export const findMonth = (date: string) => {
  const month = Number(date.split("/")[1]);
  const monthNames = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];
  return monthNames[month - 1];
};

export const findIndexOffirstDayOfMonth = (dayName: string) => {
  const days = [
    "شنبه",
    "یک‌شنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنج‌شنبه",
    "جمعه",
  ];

  let dayIndex = 0;

  days.forEach((day, index) => {
    if (day === dayName) dayIndex = index;
  });

  return dayIndex;
};

export const setCalendarInfoFC = (date: moment.Moment) => {
  return {
    today: {
      date: date.format("DD"),
      month: date.format("MM"),
      monthName: date.format("MMMM"),
      year: date.format("YYYY"),
      indexOffirstDayOfMonth: findIndexOffirstDayOfMonth(
        moment(
          `${date.format("YYYY")}/${date.format("MM")}/${date.format("DD")}`,
          "jYYYY/jMM/jDD"
        )
          .locale("fa")
          .startOf("month")
          .format("dddd")
      ),
      daysInMonth: date.daysInMonth(),
      lastMonthDaysInMonth: moment(
        `${date.format("YYYY")}/${date.format("MM")}/${date.format("DD")}`,
        "jYYYY/jMM/jDD"
      )
        .locale("fa")
        .add(-1, "month")
        .daysInMonth(),
    },
  };
};
