import React from 'react';
import { useSelector } from 'react-redux';
import HeaderItem from './HeaderItem';
import styles from './Header.module.scss';


const Header = (props) => {

   const { isLoggedIn } = useSelector(state => state.login);

   return (
      <div className={styles.headerContainer}>
         <HeaderItem text='PISIO project' path='/' isLeft />

         {!isLoggedIn && <HeaderItem text='Login' path='/login' />}
         {!isLoggedIn && <HeaderItem text='Register' path='/register' />}
      </div>
   );
}

export default Header;