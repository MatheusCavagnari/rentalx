import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { IDateProvider } from "../IDateProvider";

dayjs.extend(utc);

class DayjsDateProvider implements IDateProvider {
  compareInHours(start_date: Date, end_date: Date): number {
    const end_date_utc = this.convertToUtc(end_date);
    const start_date_utc = this.convertToUtc(start_date);

    return dayjs(end_date_utc).diff(start_date_utc, "hours");
  }

  convertToUtc(date: Date): string {
    return dayjs(date).utc().local().format();
  }
  dateNow() {
    return dayjs().toDate();
  }
}
export { DayjsDateProvider };
