import styles from './SeriesTable.module.css'
import { APISeriesItem, SeriesItem } from '../../series.service';
import { Table } from '../../components';
import { ReactElement, useState } from 'react';
import { BaseItem } from '../../components/Table';

interface SeriesTableProps {
  data: SeriesItem[] | undefined;
}

export function SeriesTable({data}: SeriesTableProps) {
  // to implement
  return(
    <Table columns={seriesTableCol.columns} rows={fakeRows}/>
  );
}

const seriesTableCol = {
  columns: [{
    field: "id",
    headerName: "ID",
    width: 0,
    isHidden: true
  }, {
    field: "new",
    headerName: "new",
    width: 5
  }, {
    field: "isFavorite",
    headerName: "favorite",
    width: 10
  }, { 
    field: "title",
    headerName: "series title",
    width: 40
  }, {
    field: "recent_chapter",
    headerName: "chapter",
    width: 10
  }, {
    field: "last_updated",
    headerName: "update",
    width: 10
  }, {
    field: "scanlation_team",
    headerName: "scan team",
    width: 10
  }]
};

interface SeriesTableRowContent extends BaseItem {
  id: string;
  new: ReactElement;
  title: string,
  isFavorite: ReactElement | null,
  recent_chapter: string,
  last_updated: string,
  scanlation_team: string
}

const fakeRows: SeriesTableRowContent[] = [
  {
    id: "1",
    new: <SeriesStatus isNew={true} />,
    isFavorite: <Favorite />,
    title: "sample one",
    recent_chapter: "21",
    last_updated: "5/21",
    scanlation_team: "reaper"
  }, 
  {
    id: "2",
    new: <SeriesStatus isNew={false} />,
    isFavorite: null,
    title: "sample two long title asdf asdfasdf asdfasdf asdfa ",
    recent_chapter: "1",
    last_updated: "5/21",
    scanlation_team: "reaper"
  }
]

function SeriesStatus({isNew}: {isNew: boolean}) {
  return (
    <span className={`${isNew && styles.newStatus}`}/>
  );
}

function Favorite() {
  const [favorite, setFavorite] = useState(false);
  const onClickLikeSeries = () => {
    // update isFavorite flag and post to api 
    setFavorite(!favorite);
  };
  
  return (
    <div className={styles.favorite}>
      <img src={favorite ? "/favoriteFull.svg" : "/favorite.svg"} alt="favorite" onClick={onClickLikeSeries} />
    </div>
  );
}
