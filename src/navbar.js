import './css/header.css';
import xtraclass from './images/xtra-class.png';
import { ImSearch } from "react-icons/im";
import { ImUser } from "react-icons/im";
const NavBar = () => {
    return ( 
        <div className="header">
          <div className="header__logo">
            <img src={xtraclass} alt="" />
          </div>
          <div className="header__input">
             <ImSearch />
             <button>
               <ImUser />
                <span className="input__button"> LogIn </span>
               </button>
          </div>
        </div>
     );
}
 
export default NavBar;