const getCurrentDate = (): string => {
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDate = new Date();
  const dayOfWeek = days[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return `${dayOfWeek} ${month}, ${year}`;
};

export { getCurrentDate };
