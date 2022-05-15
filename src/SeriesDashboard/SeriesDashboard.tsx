import { SeriesTable } from "./SeriesTable/SeriesTable";
import styles from './SeriesDashboard.module.css';
import { useState, useEffect } from 'react';
import { APISeriesItem, getAllSeries } from "../series.service";
import { SearchBar } from "../components";

export function SeriesDashboard() {
  const [queriedSeries, setSeries] = useState<APISeriesItem>();
  const [displayButtonPopup, setDisplayButtonPopup] = useState(false);
  const [displayValidationMessage, setDisplayValidationMessage] = useState(false);

  const fetchData = async () => {
    const response = await getAllSeries();
    setSeries(response); 
  }

  useEffect(() => {
    let mounted = true;
    fetchData();

    return () => {mounted = false};
  }, []);

  return (
    <>
      <div className={styles.contentWrapper}>
        <div className={styles.btnGroupOutsideTable} >
          {/* <AddSeriesButton seriesTeamList={
            // FIX: seriesItem.scanlationItem should already by an array in API
            queriedSeries ? Object.assign({}, ...queriedSeries.data.map(seriesItem => ({[seriesItem.title]: [seriesItem.scanlation_team]}))) : {}
          } /> */}
        </div>
        <div className={styles.content}>
          <div className={styles.actions}>
            <div className={styles.buttonEdit}>
              {/* <AddButton /> */}
            </div>
            <div className={styles.filter}>
              {/* <AddButton /> */}
            </div>
            <SearchBar 
              setUserInputCallback={() => {}}
              searchOptions={defaultSearchSuggestions} 
            />
          </div>
          <SeriesTable data={undefined} />
        </div>
      </div>
    </>
  );
}

const defaultSearchSuggestions = ['series one', 'series two', 'series three', 'series four', 'series five', 'series six'];
