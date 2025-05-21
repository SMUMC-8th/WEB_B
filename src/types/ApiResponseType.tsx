type ClubSchedule = {
  club_id: number;
  name: string;
  firstStart: string;
  firstEnd: string;
  secondStart: string;
  secondEnd: string;
};

export type ApiCalendarResponse = {
  success: boolean;
  code: string;
  message: string;
  result: ClubSchedule;
};

export type CalendarEvent = {
  title: string;
  start: Date;
  end: Date;
};
