import { useState, type FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <nav className={classNames(styles.Navbar, {}, [className])}>
      <Button
        className={classNames(styles.links, {}, [])}
        onClick={onToggleModal}
        theme={ButtonTheme.CLEAR_INVERTED}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {t(`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Eum reiciendis repellat nostrum minima quo alias quibusdam 
        repudiandae earum neque odit saepe autem laborum magni, accusantium 
        consequatur. Obcaecati, quaerat distinctio debitis aliquid, eligendi 
        atque odio vero accusantium natus saepe ratione officia aspernatur aut 
        minima id magni suscipit?`)}
      </Modal>
    </nav>
  );
};

export default Navbar;
