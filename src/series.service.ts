import { http } from "./http";

export interface SeriesItem {
  pk: number;
  title: string;
  recent_chapter: number;
  recent_chapter_url: string;
  scanlation_team: string;
}

export interface APISeriesItem {
  data: SeriesItem[]
}

export const fetchSeries = async (): Promise<APISeriesItem> => {
  return await http.get<APISeriesItem, APISeriesItem>("/series");
};

export const createSeries = async (series: SeriesItem): Promise<SeriesItem> => {
  return await http.post<SeriesItem, SeriesItem>("/series/", series);
}

// export const updateSeries = async (series: SeriesItem): Promise<SeriesItem> => {
//     return await http.put<SeriesItem, SeriesItem>(`/series/${series.pk}`, series);
// }

// export const deleteSeries = async (series: SeriesItem): Promise<SeriesItem> => {
//     return await http.delete<SeriesItem, SeriesItem>(`/series/${series.pk}`);
// }