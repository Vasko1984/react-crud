import React, { useState } from 'react';
import { updateShorthandPropertyAssignment } from 'typescript';
import { ContactType } from './Contacts';

interface Props{
    NekojaFunkcija: (contact:ContactType)=> void;
   
}

    const AddContacts = ({NekojaFunkcija}:Props) =>{
const [name , setName]= useState <string>('');
const [email,setEmail] = useState<string>('');
const [ phone , setPhone] = useState<string>('');
     
       return (
      <div className="AddContact">
         <h2>Add Contact</h2>
          <form onSubmit={( event: React.FormEvent<HTMLFormElement>)=>{
            event.preventDefault();
            NekojaFunkcija ({
                id: new Date().valueOf(),
                name,
                email,
                 phone: +phone            })
            setName ('');
            setEmail('');
            setPhone('')

                 }}> 
        <label htmlFor="name">Name</label>
        <br />
        <input type="text"
         placeholder="Enter Name..."
         value={name} 
         onChange={(event: React.ChangeEvent<HTMLInputElement>) =>{
            setName(event?.target.value)
      }}/>
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input type="text" 
        placeholder="Enter Email..." 
        value={email}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>{
            setEmail(event.target.value)
        }}
         />
        <br />
        <label htmlFor="phone">Phone</label>
         <br />
        <input type="text"
        placeholder="Enter Phone..."
        value={phone}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPhone (event.target.value)
         }}  />
        <br />
        <button type="submit" onClick={() =>{}}>Add</button>
        </form>
     </div>

)

    }
    export default AddContacts



