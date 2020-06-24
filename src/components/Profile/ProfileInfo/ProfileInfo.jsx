import React from 'react';
import s from './ProfileInfo.module.css';


let ProfileInfo= () => {
 return <div>
            <div>
               <img src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
               avatar
            </div>
         </div>

}

export default ProfileInfo;