import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderItem from './HeaderItem';
import styles from './Header.module.scss';
import AUTH_TOKEN_STORAGE_KEY from '../../features/LoginForm/loginConstants';
import { logout } from '../../features/LoginForm/loginSlice';


const Header = (props) => {

   const dispatch = useDispatch();

   const doLogout = (_) => {
      localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
      dispatch(logout());
   }

   const { isLoggedIn } = useSelector(state => state.login);

   return (
      <div className={styles.headerContainer}>
         <HeaderItem text='PISIO project' path='/' isLeft />

         {!isLoggedIn && <HeaderItem text='Login' path='/login' />}
         {!isLoggedIn && <HeaderItem text='Register' path='/register' />}
         {isLoggedIn && 
            <div>
               <label onClick={doLogout} className={styles.logoutStyle}>Logout</label>
            </div>
         }
      </div>
   );
}

export default Header;