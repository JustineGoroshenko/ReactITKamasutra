import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem= (props) => {
return (
  <div className={s.dialog + ' ' + s.active}>
    <NavLink to={'/dialogs/1' + props.id }>{props.name}</NavLink>
  </div>
)
}
const Message = (props) =>{
return <div className={s.message}>{props.message}</div>
}
const Dialogs = (props) => {

  let Dialogs =[
  { id:1, name: 'Justine'},
  { id:2, name: 'Dan'},
  { id:3, name: 'Trudy'},
  { id:4, name: 'Victor'},
  { id:5, name: 'Valery'},
  { id:6, name: 'Marie'}
]

let messages=[
  { id:1, message: 'Hiya'},
  { id:2, message: 'hOW'},
  { id:3, message: 'is'},
  { id:4, message: 'your'},
  { id:5, message: 'IT'},
  { id:6, message: 'Kamasutra?'}
]

let dialogsElements= Dialogs.map(d => <DialogItem name = {d.name} id ={d.id}/>);
let messagesElements = messages.map(m => <Message id= {m.id} message={m.message}/>);


return (
<div className={s.dialogs}>
   <div className={s.dialogItems}>
        {dialogsElements}
   </div>
    <div className={s.messages}>
    {messagesElements}
    </div>
 </div>)


 

}
export default Dialogs;