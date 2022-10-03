import { useEffect, useState } from 'react';
import styles from './TeamSelectMenu.module.css';

export function TeamSelectMenu({ seriesTeamList, setTeamDisplayCallback }: TeamSelectMenuProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [displayedTeam, setDisplayedTeam] = useState('Scan Team');

  useEffect(function closeDropdown() {
    if (dropdownOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.code === 'Escape') {
          setDropdownOpen(false);
          e.preventDefault();
        }
      }

      window.addEventListener('click', clickOutsideMenu);
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        window.removeEventListener('click', clickOutsideMenu),
        window.removeEventListener('keydown', handleKeyDown)
      };
    }
  }, [dropdownOpen])

  const clickOutsideMenu = (e: MouseEvent) => {
    e.stopPropagation();
    setDropdownOpen(false);
  }

  const autoComplete = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLLIElement) {
      const userSelection = e.target.textContent ?? 'Scan Team';
      setDisplayedTeam(userSelection);
      setTeamDisplayCallback(userSelection);
    }
    setDropdownOpen(false);
  };

  const openDropdown = () => {
    console.log(seriesTeamList)
    if (seriesTeamList.length) {
      setDropdownOpen(true)
    }
  }
  // selectMenuContainer -> Dropdown -> default option *** added options
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={`${styles.teamSelect} ${dropdownOpen ? styles.teamSelectOpen : ''}`}
        value={displayedTeam}
        onClick={openDropdown}
        tabIndex={0}
        readOnly
      >
      </input>
      {dropdownOpen && 
        <ul
          className={styles.teamSelectDropdown}
          role="menu"
        >
          {seriesTeamList.map((team, idx) => (
            <li
              className={styles.teamSelectItem}
              key={idx}
              role="menuitem"
              onClick={autoComplete}
            >
              {team}
            </li>))}
        </ul>
      }
    </div>
  );
}

interface TeamSelectMenuProps {
  seriesTeamList: string[];
  setTeamDisplayCallback: (team: string) => void;
}