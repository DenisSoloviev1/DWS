import dayjs from "dayjs";

export const formatDate = (
  date: string | Date | null,
  timestamp: string = "YYYY-MM-DD"
): string => {
  return date === null ? "" : dayjs(date).format(timestamp);
};
