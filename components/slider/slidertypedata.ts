export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  details: string;
  image: string;
}

export interface StatisticItem {
  id: number;
  title: string;
  value: string;
  icon: string;
}

export interface HistoryData {
  timeline: TimelineItem[];
  statistics: StatisticItem[];
}
