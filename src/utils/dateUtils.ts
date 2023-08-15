import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

interface IDateType {
  showDate: (date?: string | null) => string | null;
  reverseDate: (date?: string | null) => string | null;
  showTime: (date?: string | null) => string | null;
  showMonth: (date?: string | null) => string | null;
  showMonthWithSpace: (date?: string | null | number) => string | null;
  showSeconds: (date?: string | null) => string | null;
  showMonthYear: (date?: string | null) => string | null;
  showMinute: (date?: string | null) => string | null;
  showOnlyMinute: (date?: string | null) => string | null;
}

class DateUtils implements IDateType {
  constructor() {
    dayjs.extend(customParseFormat);
  }

  showDate(date?: string | null): string | null {
    if (!date) return null;
    return dayjs(date).format('DD-MM-YYYY');
  }

  showTime(date?: string | null): string | null {
    if (!date) return null;
    return dayjs(date).format('HH:mm  DD MMM YYYY');
  }

  reverseDate(date?: string | null): string | null {
    if (!date) return null;
    return dayjs(date).format('YYYY-MM-DD');
  }

  showMonth(date?: string | null): string | null {
    if (!date) return null;
    return dayjs(date).format('DD-MMM-YYYY');
  }

  showMonthWithSpace(date?: string | null | number): string | null {
    if (!date) return null;
    return dayjs(date).format('DD MMM YYYY');
  }

  showSeconds(date?: string | null): string | null {
    if (!date) return null;
    return dayjs(date).format('DD MMM YYYY , HH:mm:ss');
  }

  showMinute(date?: string | null): string | null {
    if (!date) return null;
    return dayjs(date).format('DD MMM YYYY - HH:mm');
  }

  showOnlyMinute(date?: string | null): string | null {
    if (!date) return null;
    return dayjs(date).format('HH:mm');
  }

  showMonthYear(date?: string | null): string | null {
    if (!date) return null;
    return dayjs(date).format('MMM YYYY');
  }

  diffDays(date1?: string, date2?: string): number {
    return dayjs(date1).diff(date2, 'days');
  }
}

const dateUtil = new DateUtils();
export { dateUtil };
