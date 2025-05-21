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


export type CategoryCardProps = {
  category: string;
  hash: string;
  clubName: string;
  imageUrl?: string;
};

export interface Club {
  clubId: number;
  name: string;
  imageUrl: string;
  description: string;
  category: string;
  hashtags: string[];
}

export type ApiResponse = {
  isSuccess: boolean;
  code: string;
  message: string;
  result: Club[];
};