import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import 'dayjs/locale/ru';
import { ReactNode } from 'react';

export const DateProvider = ({ children }: { children: ReactNode }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      {children}
    </LocalizationProvider>
  );
};
