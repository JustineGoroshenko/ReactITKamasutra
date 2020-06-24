import React from 'react';
import  s from './Post.module.css';

let Post = (props) => {
   
 return <div  className={s.item}>
         <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" alt="user-avatar"/>
         {props.message}
         <div>
            <span>Like</span>{props.likesCount}
         </div>
    </div>



}

export default Post;