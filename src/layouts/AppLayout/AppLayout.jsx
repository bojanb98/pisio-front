import Header from '../Header/Header';
import styles from './AppLayout.module.scss';


const AppLayout = ({ children }) => {
   return (
      <div className={styles.layoutContainer}>
         <div className={styles.rowContainer}>
            <div className={styles.colContainer}>
               <div className={styles.headerContainer}><Header /></div>
               <div className={styles.contentContainer}>{children}</div>
            </div>
         </div>
      </div>
   );
};

export default AppLayout;
