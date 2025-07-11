export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  details: string;
  image: string;
}

export interface HistoryData {
  timeline: TimelineItem[];
}
