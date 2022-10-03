import { useState, useEffect } from 'react';
import styles from './FeedbackPopup.module.css';

export function FeedbackPopup({ icon, message }: FeedbackPopupProps) {
  const [popupOpen, setPopupOpen] = useState(false);
  const iconRecord: Record<string,string> = {
    'success': '../check_circle_black_24dp.svg', 
    'error': '../error_outline_black_24dp.svg'
  };

  useEffect(function ClosePopup() {
    if (popupOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.code === 'Escape') {
          setPopupOpen(false);
          e.preventDefault();
        }
      }

      window.addEventListener('click', clickOutsidePopup);
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        window.removeEventListener('click', clickOutsidePopup),
        window.removeEventListener('keydown', handleKeyDown)
      };
    }
  }, [popupOpen])

  const clickOutsidePopup = () => {
    setPopupOpen(false);
  }

  const closeButtonHandler = () => {
    setPopupOpen(false);
  }

  return (
    <div className={styles.feedbackModal}>
      {iconRecord[icon]}
      <p className={styles.feedbackContent}>
        {message}
      </p>
      <button type="button" className={styles.closeBtn} onClick={closeButtonHandler} />
    </div>
  );
}

export interface FeedbackPopupProps {
  icon: FeedbackIcon;
  message: string;
}

export type FeedbackIcon = 'failure' | 'success';