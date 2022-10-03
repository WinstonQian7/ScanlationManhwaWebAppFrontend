import { APISeriesItem } from '../../series.service';
import { useState, useEffect } from 'react';
import styles from './DeleteModal.module.css';

export function DeleteModal({deletedItems, setDisplayModal}: DeleteModalProps) {
  const handleSubmit = () => {
    // todo
  };
  const cancelClick = () => {
    setDisplayModal(false);
  };

  return(
    <>
      <div className={styles.container}>
        <div className={styles.deleteForm}>
          <h1 className={styles.formHeader}>
            Are you sure you want to delete {deletedItems.length} series?
          </h1>
          <div className={styles.btnGroup}> 
            <button className={styles.btn} type="button" onClick={cancelClick}>Cancel</button>
            <button className={styles.btn} onClick={handleSubmit}>Confirm</button>
          </div>
        </div>
      </div>
    </>
  );
}

// function DeleteButton({updateParentCallback}) {
//     const [series, setSeries] = useState<SeriesItem>();

//     const deleteSeries = async () => {
//         let mounted = true;
//         const apiObject = {pk: 5, title:'post', recent_chapter:10, recent_chapter_url:'http', scanlation_team: 'reaper'};

//         const response = await deleteSeries();
//         if (mounted) {
//             setSeries(response);
//         }

//         return updateParentCallback();
//     }

//     return(
//         <>
//             <button onClick={deleteSeries}>Delete Button</button>
//         </>
//     );
// }

interface DeleteModalProps {
  deletedItems: APISeriesItem[];
  setDisplayModal: (show: boolean) => void; 
}