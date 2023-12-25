import { useState, type FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUserData, userActions } from 'entities/User';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getAuthUserData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const logout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <nav className={classNames(styles.Navbar, {}, [className])}>
        <Button
          className={classNames(styles.links, {}, [])}
          onClick={logout}
          theme={ButtonTheme.CLEAR_INVERTED}
        >
          {t('Выйти')}
        </Button>
      </nav>
    );
  }

  return (
    <nav className={classNames(styles.Navbar, {}, [className])}>
      <Button
        className={classNames(styles.links, {}, [])}
        onClick={onShowModal}
        theme={ButtonTheme.CLEAR_INVERTED}
      >
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </nav>
  );
};

export default Navbar;
