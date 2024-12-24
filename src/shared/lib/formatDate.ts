import dayjs from 'dayjs';

export const formatDate = (
  date: string | Date,
  timestamp: string = 'DD.MM.YYYY',
): string => {
  return dayjs(date).format(timestamp);
};
