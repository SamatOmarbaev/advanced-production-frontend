import React, { ReactNode, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import styles from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  // element?: HTMLElement;
}

export const Modal = (props: ModalProps) => {
  const {
    children, className, isOpen, onClose,
  } = props;

  const { theme } = useTheme();

  const closeHanlder = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
  };

  return (
    <Portal>
      <div className={classNames(styles.Modal, mods, [className, styles[theme]])}>
        <div
          className={classNames(styles.overlay)}
          onClick={closeHanlder}
        >
          <div className={classNames(styles.content)} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
