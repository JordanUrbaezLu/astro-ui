export const getCalendarDays = (date: Date) => {
  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const days = [...Array(daysInMonth).keys()].map((day) => day + 1);

  const firstDayOfWeek = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();

  const lastDayOfWeek = new Date(
    date.getFullYear(),
    date.getMonth(),
    daysInMonth
  ).getDay();

  const fillerBefore = [...Array(firstDayOfWeek).keys()].map((day) => null);
  const fillerAfter = [...Array(6 - lastDayOfWeek).keys()].map((day) => null);

  return [...fillerBefore, ...days, ...fillerAfter];
};

export const getNextDay = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
};

export const getPreviousDay = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);
};

export const getNextWeek = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7);
};

export const getPreviousWeek = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);
};
