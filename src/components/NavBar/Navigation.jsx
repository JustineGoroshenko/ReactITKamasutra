import React from 'react'; 

import c from './Navigation.module.css' 
import { NavLink } from 'react-router-dom';

let Navigation = ()=> {
   return (
   <nav className={c.nav}> 
   <div className={c.item} ><NavLink to ="/profile" activeClassName={c.active}>Profile</NavLink></div>
   <div className={c.item}><NavLink to ="/dialogs" activeClassName={c.active}>Messages</NavLink></div>
   <div className={c.item}><NavLink to ="/news" activeClassName={c.active}>News</NavLink></div>
   <div className={c.item}><NavLink to ="/music" activeClassName={c.active}>Music</NavLink></div>
   <div className={c.item}><NavLink to ="/settings" activeClassName={c.active}>Settings</NavLink></div>
 </nav>)
}
export default Navigation;
//NAV LINK TO === a, but it is not reload the page