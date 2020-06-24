import React from 'react';
import  s from './MyPosts.module.css';
import Post from './Post/Post';

let MyPosts = (props) => {
   let postData = [
   {message:"Hi, how are you doing? ", likesCount: 0},
   {message:"It is my first post ", likesCount: 23}  
   ]

   let postElements = postData.map(p => <Post message={p.message}  likesCount={p.likesCount}/>)
 return <div className={s.postBlock}>
    <h3>My posts</h3>
      <div>
         <textarea></textarea>
      </div> 
      <div> 
      <button className="button">Add Post</button>
      <button className="button">Clear</button>  
   </div>
    
   
    <div className={s.posts}> {postElements}</div>

 </div>

}

export default MyPosts;