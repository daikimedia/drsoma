export const formatDate = (date: string) => {
  const currentDate = new Date(date);
  // Ensure the input is a valid Date object
  if (!(currentDate instanceof Date)) {
    return "Invalid Date";
  }

  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = currentDate.getFullYear();

  return `${day}/${month}/${year}`;
};

export const formatBackDate = (date: string) => {
  const currentDate = date.split("/");
  const formattedDate =
    currentDate[2] + "-" + currentDate[1] + "-" + currentDate[0];

  if (currentDate.length !== 3) {
    return date;
  } else {
    return formattedDate;
  }
};

export const formatDateAndTime = (date: string) => {
  const currentDate = new Date(date);

  // Ensure the input is a valid Date object
  if (isNaN(currentDate.getTime())) {
    return "Invalid Date";
  }

  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = currentDate.getFullYear();

  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};

export const formatTimestampForDatetimeLocal = (timestamp: number): string => {
  if (typeof timestamp == "string") {
    timestamp = parseInt(timestamp);
  }

  const date = new Date(timestamp);

  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  const padZero = (num: number): string => num.toString().padStart(2, "0");

  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1); // Months are 0-based
  const day = padZero(date.getDate());
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};
