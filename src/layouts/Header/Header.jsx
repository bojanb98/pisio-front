import HeaderDropdown from '../../features/HeaderDropdown/HeaderDropdown';
import styles from './Header.module.css';


const Header = (props) => {

   return ( <div className={styles.headerContainer}>
      <div>Header</div>
      <HeaderDropdown></HeaderDropdown>
   </div> );
}
 
export default Header;