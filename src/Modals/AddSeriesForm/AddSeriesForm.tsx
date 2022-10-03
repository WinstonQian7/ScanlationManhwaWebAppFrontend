import styles from './AddSeriesForm.module.css';
import { Search } from '../../SeriesDashboard/SearchBar';
import { TeamSelectMenu } from './TeamSelectMenu/TeamSelectMenu';
import { useState, useRef, useEffect } from 'react';

export function AddSeriesForm({ popupState, seriesTeamList }: AddSeriesFormProps) {
  const [searchInput, setUserInput] = useState('');
  const [isValidated, setIsValidated] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [scanTeam, setScanTeam] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(function buttonDisabled() {
    if (searchInput && scanTeam) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [searchInput, scanTeam]);

  const outsideClick = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLElement) {
      popupState(false);
    }
  };

  const keydownHandler = (e: React.KeyboardEvent) => {
    if (e.code === 'Escape') {
      e.preventDefault();
      popupState(false);
    }
  };

  const focusTrap = (e: React.KeyboardEvent) => {
    const target = e.target;
    if (target instanceof HTMLElement) {
      const firstFocusableItem = target.children[0];
      const lastChildrenIndex = 3; // has 4 items atm, maybe refactor
      const lastFocusableItem = target.children[lastChildrenIndex];
      if (!e.shiftKey && e.code === 'Tab' && target === lastFocusableItem) {
        if (firstFocusableItem instanceof HTMLElement) {
          firstFocusableItem.focus();
          e.preventDefault();
        }
      } else if (e.shiftKey && e.code === 'Tab' && target === firstFocusableItem) {
        if (lastFocusableItem instanceof HTMLElement) {
          lastFocusableItem.focus();
          e.preventDefault();
        }
      }
    }
  };

  //todo add series into user's list
  const handleSubmit = () => {
    let isValidated = false;
    const validUserInput = searchInput?.match(/^[a-zA-Z]+$/);
    const teamSelected = scanTeam;
    console.log(teamSelected)
    if (validUserInput && searchInput in seriesTeamList) {
      const listOfValidTeams = seriesTeamList[searchInput];
      if (teamSelected in listOfValidTeams) {
        isValidated = true;
      }
    }
    setIsValidated(isValidated);
    // make post request to api

  }

  const onCancelButtonClick = () => {
    popupState(false);
  }

  return (
    <div
      className={styles.container}
    >
      <form
        name="Add Series"
        className={styles.addForm}
        onSubmit={handleSubmit}
        onKeyDown={focusTrap}
        ref={formRef}
      >
        {/* {<FeedbackPopup icon={'failure'} message="series successfully added!" />} */}
        <div className={styles.formHeader}>
          ADD SERIES
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.formItemGroup}>
            <Search
              seriesData={Object.keys(seriesTeamList) ?? []}
              setUserInputCallback={setUserInput}
            />
            <TeamSelectMenu
              seriesTeamList={searchInput in seriesTeamList ?
                seriesTeamList[searchInput] : []}
              setTeamDisplayCallback={setScanTeam}
            />
          </div>
          <div className={styles.btnGroup}>
            <button
              className={styles.btn}
              type="button"
              onClick={onCancelButtonClick}
            >
              Cancel
            </button>
            <button 
              className={`${styles.btn} ${styles.submitBtn}`} 
              type="submit" 
              onClick={handleSubmit}
              disabled={isButtonDisabled}
            >
              Confirm
            </button>
          </div>  
        </div>
      </form>
      <span 
        className={styles.underlay} 
        onClick={outsideClick}
        onKeyDown={keydownHandler}
      />
    </div>
  );
}

interface AddSeriesFormProps {
  popupState: (popup: boolean) => void;
  seriesTeamList: Record<string, string[]>;
}
