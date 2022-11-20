 import { useState } from 'react';
import {ContactType} from './Contacts';

type Props = ContactType & {
    handleDelete: () => void;
}




const Contact = ({id,name,email,phone,handleDelete}:Props) =>{
const [islistshown, setListShown] = useState<boolean>(false);
return(
    <div className="Contact">
 <h4>
 {name} <i className="fas fa-sort-down" onClick={() =>setListShown (!islistshown)}></i>
 <i className="fas fa-times"
  style={{ float: "right", color: "red" }}
  onClick = {() => {
    handleDelete();
  }}
  ></i>
 </h4>
 {islistshown &&<ul>
 <li>Email: {email}</li>
 <li>Phone: {phone}</li>
 </ul>}
</div>

)



};



export default Contact;